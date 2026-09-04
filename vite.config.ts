import { existsSync, readFileSync } from "node:fs";
import { extname, resolve as resolvePath } from "node:path";
import type { ServerResponse } from "node:http";
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

const sendRedirect = (response: ServerResponse, location: string) => {
  response.statusCode = 301;
  response.setHeader("Location", location);
  response.end();
};

const sendNotFound = (rootDir: string, response: ServerResponse) => {
  const filePath = resolvePath(rootDir, "404.html");
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("X-Robots-Tag", "noindex, follow");

  if (existsSync(filePath)) {
    response.end(readFileSync(filePath));
    return;
  }

  response.end("Not Found");
};

const configurePreviewSeo = (rootDir: string) => {
  return (
    request: Connect.IncomingMessage,
    response: ServerResponse,
    next: Connect.NextFunction,
  ) => {
    const raw = request.url ?? "/";
    const [pathname, search = ""] = raw.split("?");
    const query = search ? `?${search}` : "";

    if (!pathname || pathname.startsWith("/api/")) {
      next();
      return;
    }

    if (pathname === "/index.html") {
      sendRedirect(response, `/${query}`);
      return;
    }

    if (pathname.endsWith("/index.html")) {
      const canonical = pathname.slice(0, -"/index.html".length);
      sendRedirect(response, `${canonical || "/"}${query}`);
      return;
    }

    if (extname(pathname)) {
      next();
      return;
    }

    if (pathname !== "/" && pathname.endsWith("/")) {
      sendRedirect(response, `${pathname.replace(/\/+$/, "")}${query}`);
      return;
    }

    if (pathname === "/") {
      next();
      return;
    }

    const prerendered = resolvePath(rootDir, pathname.slice(1), "index.html");

    if (existsSync(prerendered)) {
      request.url = `${pathname}/index.html${query}`;
      next();
      return;
    }

    sendNotFound(rootDir, response);
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
      server.middlewares.use(configurePreviewSeo(resolvePath(outDir)));
    },
    transformIndexHtml(html) {
      const robots = options.indexable
        ? "index, follow, max-image-preview:large"
        : "noindex, nofollow";
      let next = html.replace(
        /<meta name="robots" content="[^"]*" \/>/,
        `<meta name="robots" content="${robots}" />`,
      );

      if (options.siteUrl) {
        const origin = trimTrailingSlash(options.siteUrl);
        const image = `${origin}/og/mk-metales-default.jpg`;

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
