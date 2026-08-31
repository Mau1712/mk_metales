import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { indexablePaths, notFoundPrerenderPath } from "./src/app/seo/indexableRoutes.ts";

const SSR_OUT_DIR = "dist-ssr";

const toOutputFile = (outDir: string, route: string) => {
  if (route === "/") {
    return join(outDir, "index.html");
  }

  return join(outDir, route.replace(/^\//, ""), "index.html");
};

const findServerEntry = (ssrDir: string) => {
  const candidates = [
    join(ssrDir, "entry-server.js"),
    join(ssrDir, "entry-server.mjs"),
    join(ssrDir, "src", "entry-server.js"),
    join(ssrDir, "src", "entry-server.mjs"),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`SSR entry not found in ${ssrDir}.`);
};

type RenderPage = (url: string, template: string) => string;

export const prerenderPublicRoutes = async (outDir: string) => {
  const { build } = await import("vite");
  const ssrDir = resolve(SSR_OUT_DIR);

  await build({
    configFile: resolve("vite.config.ts"),
    build: {
      ssr: resolve("src/entry-server.tsx"),
      outDir: ssrDir,
      emptyOutDir: true,
      copyPublicDir: false,
    },
    ssr: {
      noExternal: ["styled-components"],
    },
  });

  const serverEntry = findServerEntry(ssrDir);
  const module = (await import(pathToFileURL(serverEntry).href)) as {
    render?: RenderPage;
  };

  if (typeof module.render !== "function") {
    throw new Error("SSR entry does not export render().");
  }

  const template = readFileSync(join(outDir, "index.html"), "utf8");

  for (const route of indexablePaths) {
    const html = module.render(route, template);
    const filePath = toOutputFile(outDir, route);

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, html, "utf8");
    console.info(`Prerendered ${route} → ${filePath}`);
  }

  const notFoundHtml = module.render(notFoundPrerenderPath, template);
  const notFoundFile = join(outDir, "404.html");
  writeFileSync(notFoundFile, notFoundHtml, "utf8");
  console.info(`Prerendered ${notFoundPrerenderPath} → ${notFoundFile}`);
};
