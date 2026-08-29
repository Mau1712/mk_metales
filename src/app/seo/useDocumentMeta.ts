import { useEffect } from "react";

export interface DocumentMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website";
}

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

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

export const useDocumentMeta = ({
  title,
  description,
  canonicalPath,
  ogType = "website",
}: DocumentMeta) => {
  useEffect(() => {
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();

    document.title = title;
    upsertCanonical(canonicalUrl);
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [canonicalPath, description, ogType, title]);
};
