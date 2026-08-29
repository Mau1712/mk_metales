import { defineConfig, loadEnv, type Plugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { fileURLToPath, URL } from "node:url";
import { writeSeoStaticFiles } from "./seo-static.ts";

const resolveSrc = (segment = "") =>
  fileURLToPath(new URL(`./src${segment}`, import.meta.url));

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const createSeoPlugin = (options: {
  siteUrl: string | null;
  indexable: boolean;
}): Plugin => {
  let outDir = "dist";

  return {
    name: "mk-metales-seo-static",
    configResolved(config) {
      outDir = config.build.outDir;
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
    closeBundle() {
      writeSeoStaticFiles(outDir, options);
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
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
