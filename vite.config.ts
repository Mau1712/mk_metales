import { existsSync } from "node:fs";
import { extname, resolve as resolvePath } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv, type Connect, type Plugin, type PreviewServer } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { writeSeoStaticFiles } from "./seo-static.ts";
import { prerenderPublicRoutes } from "./prerender.ts";
import { createMetalPricesDevPlugin } from "./api/market/vitePlugin.ts";

const resolveSrc = (segment = "") =>
  fileURLToPath(new URL(`./src${segment}`, import.meta.url));

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const rewriteToPrerenderedIndex = (rootDir: string) => {
  return (
    request: Connect.IncomingMessage,
    _response: unknown,
    next: Connect.NextFunction,
  ) => {
    const raw = request.url ?? "/";
    const [pathname, search = ""] = raw.split("?");

    if (!pathname || pathname === "/" || extname(pathname)) {
      next();
      return;
    }

    const normalized = pathname.replace(/\/+$/, "");
    const filePath = resolvePath(rootDir, normalized.slice(1), "index.html");

    if (existsSync(filePath)) {
      request.url = `${normalized}/index.html${search ? `?${search}` : ""}`;
    }

    next();
  };
};

const createSeoPlugin = (options: {
  siteUrl: string | null;
  indexable: boolean;
}): Plugin => {
  let outDir = "dist";
  let isSsrBuild = false;

  return {
    name: "mk-metales-seo-static",
    configResolved(config) {
      outDir = config.build.outDir;
      isSsrBuild = Boolean(config.build.ssr);
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use(rewriteToPrerenderedIndex(resolvePath(outDir)));
    },
    transformIndexHtml(html) {
      const robots = options.indexable ? "index, follow" : "noindex, nofollow";
      let next = html.replace(
        /<meta name="robots" content="[^"]*" \/>/,
        `<meta name="robots" content="${robots}" />`,
      );

      if (options.siteUrl) {
        const origin = trimTrailingSlash(options.siteUrl);
        const image = `${origin}/og/mk-metales-default.png`;

        next = next
          .replace(
            /<meta name="robots" content="[^"]*" \/>/,
            `<meta name="robots" content="${robots}" />\n    <link rel="canonical" href="${origin}/" />\n    <meta property="og:url" content="${origin}/" />`,
          )
          .replace(
            /property="og:image" content="[^"]*"/,
            `property="og:image" content="${image}"`,
          )
          .replace(
            /name="twitter:image" content="[^"]*"/,
            `name="twitter:image" content="${image}"`,
          );
      }

      return next;
    },
    async closeBundle() {
      if (isSsrBuild) {
        return;
      }

      writeSeoStaticFiles(outDir, options);
      await prerenderPublicRoutes(outDir);
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (env.METALS_DEV_API_KEY && !process.env.METALS_DEV_API_KEY) {
    process.env.METALS_DEV_API_KEY = env.METALS_DEV_API_KEY;
  }

  const rawSiteUrl = env.VITE_SITE_URL?.trim();
  const siteUrl = rawSiteUrl ? trimTrailingSlash(rawSiteUrl) : null;
  const indexable =
    env.VITE_INDEXABLE === "true" ||
    (env.VITE_INDEXABLE !== "false" && mode === "production" && siteUrl !== null);

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      createSeoPlugin({ siteUrl, indexable }),
      createMetalPricesDevPlugin(),
    ],
    resolve: {
      dedupe: ["react", "react-dom", "styled-components"],
      alias: {
        "@": resolveSrc(),
        "@shared": resolveSrc("/shared"),
        "@app": resolveSrc("/app"),
        "@features": resolveSrc("/features"),
        "@assets": resolveSrc("/assets"),
      },
    },
  };
});
