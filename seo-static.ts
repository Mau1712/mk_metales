import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { indexablePaths } from "./src/app/seo/indexableRoutes.ts";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const buildSitemapXml = (siteUrl: string) => {
  const base = trimTrailingSlash(siteUrl);
  const urls = indexablePaths
    .map((path) => {
      const loc = path === "/" ? `${base}/` : `${base}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

export const buildRobotsTxt = (options: {
  indexable: boolean;
  siteUrl: string | null;
}) => {
  if (!options.indexable) {
    return "User-agent: *\nDisallow: /\n";
  }

  const lines = ["User-agent: *", "Allow: /"];

  if (options.siteUrl) {
    lines.push("", `Sitemap: ${trimTrailingSlash(options.siteUrl)}/sitemap.xml`);
  }

  return `${lines.join("\n")}\n`;
};

export const writeSeoStaticFiles = (
  distDir: string,
  options: { siteUrl: string | null; indexable: boolean },
) => {
  const robotsPath = resolve(distDir, "robots.txt");
  writeFileSync(
    robotsPath,
    buildRobotsTxt({
      indexable: options.indexable,
      siteUrl: options.siteUrl,
    }),
    "utf8",
  );

  if (options.siteUrl) {
    writeFileSync(
      resolve(distDir, "sitemap.xml"),
      buildSitemapXml(options.siteUrl),
      "utf8",
    );
  }
};
