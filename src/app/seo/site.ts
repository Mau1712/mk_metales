import { companyContact } from "@features/shell";

export const siteIdentity = {
  brandName: "MK Metales",
  siteName: "MK Metales",
  defaultTitle: "Compra de Scrap Industrial | MK Metales",
  defaultDescription:
    "Recuperamos y valorizamos scrap metálico proveniente de procesos industriales para reincorporarlo a la cadena productiva.",
  language: "es",
  locale: "es",
  ogLocale: "es",
  themeColor: "#1E232B",
  backgroundColor: "#1E232B",
  defaultOgImagePath: "/og/mk-metales-default.png",
  defaultOgImageAlt:
    "Operario de MK Metales en un predio industrial junto a una grúa que manipula scrap metálico",
  defaultOgImageWidth: 1717,
  defaultOgImageHeight: 916,
  logoPath: "/favicon.png",
} as const;

export const socialProfiles = {
  twitterSite: null as string | null,
  twitterCreator: null as string | null,
  facebookAppId: null as string | null,
  sameAs: [] as readonly string[],
};

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const isLocalHost = (hostname: string) => {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]"
  );
};

export const getConfiguredSiteUrl = (): string | null => {
  const raw = import.meta.env.VITE_SITE_URL;

  if (!raw || raw.trim() === "") {
    return null;
  }

  return trimTrailingSlash(raw.trim());
};

export const resolveSiteUrl = (): string | null => {
  const configured = getConfiguredSiteUrl();

  if (configured) {
    return configured;
  }

  if (typeof window === "undefined") {
    return null;
  }

  if (isLocalHost(window.location.hostname)) {
    return import.meta.env.PROD ? null : window.location.origin;
  }

  return window.location.origin;
};

export const isIndexableEnv = (): boolean => {
  if (import.meta.env.VITE_INDEXABLE === "true") {
    return true;
  }

  if (import.meta.env.VITE_INDEXABLE === "false") {
    return false;
  }

  return import.meta.env.PROD && getConfiguredSiteUrl() !== null;
};

export const toAbsoluteUrl = (path: string): string | null => {
  const base = resolveSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!base) {
    return null;
  }

  return new URL(normalized === "//" ? "/" : normalized, `${base}/`).toString();
};

export const joinCanonicalPath = (path: string) => {
  if (path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const organizationContacts = {
  telephone: companyContact.phone,
  email: companyContact.email,
  location: companyContact.location,
} as const;
