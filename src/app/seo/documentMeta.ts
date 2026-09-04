import {
  isIndexableEnv,
  joinCanonicalPath,
  robotsDirectives,
  siteIdentity,
  socialProfiles,
  toAbsoluteUrl,
} from "./site";
import { buildPageJsonLd, serializeJsonLd } from "./structuredData";
import type { DocumentMeta } from "./types";

export type { DocumentMeta } from "./types";

const JSON_LD_ID = "mk-metales-jsonld";
const PRELOAD_ID = "mk-metales-lcp-preload";

export type ResolvedDocumentMeta = {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  themeColor: string;
  author: string;
  applicationName: string;
  formatDetection: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType: "website";
  ogSiteName: string;
  ogLocale: string;
  ogImageUrl: string | null;
  ogImageAlt: string | null;
  ogImageWidth: string | null;
  ogImageHeight: string | null;
  ogImageType: string | null;
  twitterCard: "summary_large_image" | "summary";
  twitterSite: string | null;
  twitterCreator: string | null;
  facebookAppId: string | null;
  jsonLd: string;
  preloadImage: string | undefined;
  language: string;
};

let collectedMeta: DocumentMeta | null = null;

export const collectDocumentMeta = (meta: DocumentMeta) => {
  collectedMeta = meta;
};

export const consumeCollectedMeta = (): DocumentMeta => {
  const meta = collectedMeta;
  collectedMeta = null;

  if (!meta) {
    throw new Error("No document meta was collected during render.");
  }

  return meta;
};

const escapeAttr = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const resolveDocumentMeta = (meta: DocumentMeta): ResolvedDocumentMeta => {
  const title = meta.title || siteIdentity.defaultTitle;
  const description = meta.description || siteIdentity.defaultDescription;
  const canonicalPath = joinCanonicalPath(meta.canonicalPath);
  const canonicalUrl = toAbsoluteUrl(canonicalPath) ?? canonicalPath;
  const ogTitle = meta.ogTitle ?? title;
  const ogDescription = meta.ogDescription ?? description;
  const ogImagePath = meta.ogImage ?? siteIdentity.defaultOgImagePath;
  const ogImageUrl = toAbsoluteUrl(ogImagePath) ?? ogImagePath;
  const ogImageAlt = meta.ogImageAlt ?? siteIdentity.defaultOgImageAlt;
  const ogImageWidth = String(
    meta.ogImageWidth ?? siteIdentity.defaultOgImageWidth,
  );
  const ogImageHeight = String(
    meta.ogImageHeight ?? siteIdentity.defaultOgImageHeight,
  );

  return {
    title,
    description,
    canonicalUrl,
    robots:
      meta.robots ??
      (isIndexableEnv()
        ? robotsDirectives.indexable
        : robotsDirectives.blocked),
    themeColor: siteIdentity.themeColor,
    author: siteIdentity.brandName,
    applicationName: siteIdentity.siteName,
    formatDetection: "telephone=no",
    ogTitle,
    ogDescription,
    ogUrl: toAbsoluteUrl(canonicalPath) ?? canonicalPath,
    ogType: meta.ogType ?? "website",
    ogSiteName: siteIdentity.siteName,
    ogLocale: siteIdentity.ogLocale,
    ogImageUrl,
    ogImageAlt: ogImageUrl ? ogImageAlt : null,
    ogImageWidth: ogImageUrl ? ogImageWidth : null,
    ogImageHeight: ogImageUrl ? ogImageHeight : null,
    ogImageType: ogImageUrl ? siteIdentity.defaultOgImageType : null,
    twitterCard: ogImageUrl ? "summary_large_image" : "summary",
    twitterSite: socialProfiles.twitterSite,
    twitterCreator: socialProfiles.twitterCreator,
    facebookAppId: socialProfiles.facebookAppId,
    jsonLd: serializeJsonLd(buildPageJsonLd(meta)),
    preloadImage: meta.preloadImage,
    language: siteIdentity.language,
  };
};

const upsertMetaTag = (
  html: string,
  attr: "name" | "property",
  key: string,
  content: string | null,
) => {
  const attrPattern = new RegExp(`\\s${attr}="${escapeRegExp(key)}"`, "i");
  let found = false;
  const next = html.replace(/<meta\b[\s\S]*?\/>/g, (tag) => {
    if (!attrPattern.test(tag)) {
      return tag;
    }

    found = true;

    if (content === null) {
      return "";
    }

    return `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  });

  if (!found && content) {
    return next.replace(
      "</head>",
      `    <meta ${attr}="${key}" content="${escapeAttr(content)}" />\n  </head>`,
    );
  }

  return next;
};

const upsertCanonical = (html: string, href: string) => {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;

  if (/<link\b[\s\S]*?rel="canonical"[\s\S]*?\/>/i.test(html)) {
    return html.replace(/<link\b[\s\S]*?rel="canonical"[\s\S]*?\/>/i, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertJsonLd = (html: string, payload: string) => {
  const tag = `<script type="application/ld+json" id="${JSON_LD_ID}">${payload}</script>`;

  if (html.includes(`id="${JSON_LD_ID}"`)) {
    return html.replace(
      /<script type="application\/ld\+json" id="mk-metales-jsonld">[\s\S]*?<\/script>/,
      tag,
    );
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertPreload = (html: string, href: string | undefined) => {
  const existing = new RegExp(
    `<link\\b[^>]*id="${PRELOAD_ID}"[^>]*/>|<link\\b[^>]*id="${PRELOAD_ID}"[^>]*>`,
    "i",
  );

  if (!href) {
    return html.replace(existing, "");
  }

  const tag = `<link rel="preload" as="image" href="${escapeAttr(href)}" fetchpriority="high" id="${PRELOAD_ID}" />`;

  if (existing.test(html)) {
    return html.replace(existing, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

export const applyDocumentMetaToHtml = (
  html: string,
  meta: DocumentMeta,
  options: { appHtml: string; styles: string },
) => {
  const resolved = resolveDocumentMeta(meta);
  let next = html.replace(
    /<html\b[^>]*>/i,
    `<html lang="${escapeAttr(resolved.language)}">`,
  );

  next = next.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(resolved.title)}</title>`,
  );
  next = upsertCanonical(next, resolved.canonicalUrl);
  next = upsertMetaTag(next, "name", "description", resolved.description);
  next = upsertMetaTag(next, "name", "robots", resolved.robots);
  next = upsertMetaTag(next, "name", "theme-color", resolved.themeColor);
  next = upsertMetaTag(next, "name", "author", resolved.author);
  next = upsertMetaTag(next, "name", "application-name", resolved.applicationName);
  next = upsertMetaTag(
    next,
    "name",
    "apple-mobile-web-app-title",
    resolved.applicationName,
  );
  next = upsertMetaTag(next, "name", "format-detection", resolved.formatDetection);
  next = upsertMetaTag(next, "property", "og:title", resolved.ogTitle);
  next = upsertMetaTag(next, "property", "og:description", resolved.ogDescription);
  next = upsertMetaTag(next, "property", "og:url", resolved.ogUrl);
  next = upsertMetaTag(next, "property", "og:type", resolved.ogType);
  next = upsertMetaTag(next, "property", "og:site_name", resolved.ogSiteName);
  next = upsertMetaTag(next, "property", "og:locale", resolved.ogLocale);
  next = upsertMetaTag(next, "property", "og:image", resolved.ogImageUrl);
  next = upsertMetaTag(next, "property", "og:image:alt", resolved.ogImageAlt);
  next = upsertMetaTag(next, "property", "og:image:width", resolved.ogImageWidth);
  next = upsertMetaTag(next, "property", "og:image:height", resolved.ogImageHeight);
  next = upsertMetaTag(next, "property", "og:image:type", resolved.ogImageType);
  next = upsertMetaTag(next, "name", "twitter:card", resolved.twitterCard);
  next = upsertMetaTag(next, "name", "twitter:title", resolved.ogTitle);
  next = upsertMetaTag(next, "name", "twitter:description", resolved.ogDescription);
  next = upsertMetaTag(next, "name", "twitter:image", resolved.ogImageUrl);
  next = upsertMetaTag(next, "name", "twitter:image:alt", resolved.ogImageAlt);
  next = upsertMetaTag(next, "name", "twitter:site", resolved.twitterSite);
  next = upsertMetaTag(next, "name", "twitter:creator", resolved.twitterCreator);
  next = upsertMetaTag(next, "property", "fb:app_id", resolved.facebookAppId);
  next = upsertJsonLd(next, resolved.jsonLd);
  next = upsertPreload(next, resolved.preloadImage);

  if (options.styles) {
    next = next.replace("</head>", `    ${options.styles}\n  </head>`);
  }

  if (!next.includes('<div id="root">')) {
    throw new Error("Prerender template is missing #root.");
  }

  next = next.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${options.appHtml}</div>`,
  );

  return next;
};

const upsertMeta = (
  attribute: "name" | "property",
  key: string,
  content: string | null,
) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonicalLink = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLdScript = (payload: string | null) => {
  const existing = document.getElementById(JSON_LD_ID);

  if (!payload) {
    existing?.remove();
    return;
  }

  let element = existing;

  if (!element) {
    element = document.createElement("script");
    element.id = JSON_LD_ID;
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }

  element.textContent = payload;
};

const upsertPreloadLink = (href: string | undefined) => {
  const existing = document.getElementById(PRELOAD_ID);

  if (!href) {
    existing?.remove();
    return;
  }

  let element = existing;

  if (!element) {
    element = document.createElement("link");
    element.id = PRELOAD_ID;
    document.head.appendChild(element);
  }

  element.setAttribute("rel", "preload");
  element.setAttribute("as", "image");
  element.setAttribute("href", href);
  element.setAttribute("fetchpriority", "high");
};

export const applyDocumentMetaToDocument = (meta: DocumentMeta) => {
  const resolved = resolveDocumentMeta(meta);

  document.documentElement.lang = resolved.language;
  document.title = resolved.title;
  upsertCanonicalLink(resolved.canonicalUrl);
  upsertMeta("name", "description", resolved.description);
  upsertMeta("name", "robots", resolved.robots);
  upsertMeta("name", "theme-color", resolved.themeColor);
  upsertMeta("name", "author", resolved.author);
  upsertMeta("name", "application-name", resolved.applicationName);
  upsertMeta("name", "apple-mobile-web-app-title", resolved.applicationName);
  upsertMeta("name", "format-detection", resolved.formatDetection);
  upsertMeta("property", "og:title", resolved.ogTitle);
  upsertMeta("property", "og:description", resolved.ogDescription);
  upsertMeta("property", "og:url", resolved.ogUrl);
  upsertMeta("property", "og:type", resolved.ogType);
  upsertMeta("property", "og:site_name", resolved.ogSiteName);
  upsertMeta("property", "og:locale", resolved.ogLocale);
  upsertMeta("property", "og:image", resolved.ogImageUrl);
  upsertMeta("property", "og:image:alt", resolved.ogImageAlt);
  upsertMeta("property", "og:image:width", resolved.ogImageWidth);
  upsertMeta("property", "og:image:height", resolved.ogImageHeight);
  upsertMeta("property", "og:image:type", resolved.ogImageType);
  upsertMeta("name", "twitter:card", resolved.twitterCard);
  upsertMeta("name", "twitter:title", resolved.ogTitle);
  upsertMeta("name", "twitter:description", resolved.ogDescription);
  upsertMeta("name", "twitter:image", resolved.ogImageUrl);
  upsertMeta("name", "twitter:image:alt", resolved.ogImageAlt);
  upsertMeta("name", "twitter:site", resolved.twitterSite);
  upsertMeta("name", "twitter:creator", resolved.twitterCreator);
  upsertMeta("property", "fb:app_id", resolved.facebookAppId);
  upsertJsonLdScript(resolved.jsonLd);
  upsertPreloadLink(resolved.preloadImage);
};
