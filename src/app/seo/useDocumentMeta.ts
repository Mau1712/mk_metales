import { useEffect } from "react";
import {
  isIndexableEnv,
  joinCanonicalPath,
  siteIdentity,
  socialProfiles,
  toAbsoluteUrl,
} from "./site";
import { buildPageJsonLd, serializeJsonLd } from "./structuredData";
import type { DocumentMeta } from "./types";

export type { DocumentMeta } from "./types";

const JSON_LD_ID = "mk-metales-jsonld";
const PRELOAD_ID = "mk-metales-lcp-preload";

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

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLd = (payload: string | null) => {
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

const upsertPreload = (href: string | undefined) => {
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

export const useDocumentMeta = (meta: DocumentMeta) => {
  useEffect(() => {
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
    const robots =
      meta.robots ??
      (isIndexableEnv() ? "index, follow" : "noindex, nofollow");
    const twitterCard = ogImageUrl ? "summary_large_image" : "summary";

    document.documentElement.lang = siteIdentity.language;
    document.title = title;
    upsertCanonical(canonicalUrl);
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "theme-color", siteIdentity.themeColor);
    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDescription);
    upsertMeta("property", "og:url", toAbsoluteUrl(canonicalPath) ?? canonicalPath);
    upsertMeta("property", "og:type", meta.ogType ?? "website");
    upsertMeta("property", "og:site_name", siteIdentity.siteName);
    upsertMeta("property", "og:locale", siteIdentity.ogLocale);
    upsertMeta("property", "og:image", ogImageUrl);
    upsertMeta("property", "og:image:alt", ogImageUrl ? ogImageAlt : null);
    upsertMeta("property", "og:image:width", ogImageUrl ? ogImageWidth : null);
    upsertMeta(
      "property",
      "og:image:height",
      ogImageUrl ? ogImageHeight : null,
    );
    upsertMeta("name", "twitter:card", twitterCard);
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDescription);
    upsertMeta("name", "twitter:image", ogImageUrl);
    upsertMeta("name", "twitter:image:alt", ogImageUrl ? ogImageAlt : null);
    upsertMeta("name", "twitter:site", socialProfiles.twitterSite);
    upsertMeta("name", "twitter:creator", socialProfiles.twitterCreator);
    upsertMeta("property", "fb:app_id", socialProfiles.facebookAppId);
    upsertJsonLd(serializeJsonLd(buildPageJsonLd(meta)));
    upsertPreload(meta.preloadImage);
  }, [meta]);
};
