import {
  organizationContacts,
  resolveSiteUrl,
  siteIdentity,
  socialProfiles,
  toAbsoluteUrl,
} from "./site";
import type { BreadcrumbItem, DocumentMeta, JsonLdNode } from "./types";

const compact = <T extends Record<string, unknown>>(value: T): T => {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === null || entry === undefined || entry === "") {
        return false;
      }

      if (Array.isArray(entry) && entry.length === 0) {
        return false;
      }

      return true;
    }),
  ) as T;
};

export const buildOrganizationNode = (): JsonLdNode => {
  const url = resolveSiteUrl();
  const logo = toAbsoluteUrl(siteIdentity.logoPath);

  return compact({
    "@type": "Organization",
    "@id": url ? `${url}/#organization` : undefined,
    name: siteIdentity.brandName,
    url: url ?? undefined,
    image: logo ?? undefined,
    logo: logo
      ? compact({
          "@type": "ImageObject",
          url: logo,
          contentUrl: logo,
          width: siteIdentity.logoWidth,
          height: siteIdentity.logoHeight,
        })
      : undefined,
    description: siteIdentity.defaultDescription,
    telephone: organizationContacts.telephone,
    email: organizationContacts.email,
    address: organizationContacts.location
      ? compact({
          "@type": "PostalAddress",
          addressLocality: organizationContacts.location,
          addressCountry: "AR",
        })
      : undefined,
    sameAs: socialProfiles.sameAs.length > 0 ? [...socialProfiles.sameAs] : undefined,
  });
};

export const buildWebSiteNode = (): JsonLdNode => {
  const url = resolveSiteUrl();

  return compact({
    "@type": "WebSite",
    "@id": url ? `${url}/#website` : undefined,
    name: siteIdentity.siteName,
    url: url ?? undefined,
    inLanguage: siteIdentity.language,
    publisher: url
      ? { "@type": "Organization", "@id": `${url}/#organization` }
      : { "@type": "Organization", name: siteIdentity.brandName },
  });
};

export const buildBreadcrumbNode = (
  items: ReadonlyArray<BreadcrumbItem>,
): JsonLdNode | null => {
  if (items.length === 0) {
    return null;
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const absolute = toAbsoluteUrl(item.path);

      return compact({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absolute ?? undefined,
      });
    }),
  };
};

export const buildServiceNode = (meta: DocumentMeta): JsonLdNode => {
  const url = toAbsoluteUrl(meta.canonicalPath);

  return compact({
    "@type": "Service",
    name: "Compra y valorización de scrap industrial metálico",
    description: meta.description,
    url: url ?? undefined,
    provider: {
      "@type": "Organization",
      name: siteIdentity.brandName,
    },
  });
};

export const buildPageJsonLd = (meta: DocumentMeta): JsonLdNode[] => {
  const graph: JsonLdNode[] = [buildOrganizationNode(), buildWebSiteNode()];

  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    const breadcrumbs = buildBreadcrumbNode(meta.breadcrumbs);

    if (breadcrumbs) {
      graph.push(breadcrumbs);
    }
  }

  if (meta.includeService) {
    graph.push(buildServiceNode(meta));
  }

  if (meta.jsonLd) {
    graph.push(...meta.jsonLd);
  }

  return graph;
};

export const serializeJsonLd = (graph: ReadonlyArray<JsonLdNode>) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
};
