export type JsonLdNode = {
  "@type": string;
  [key: string]: unknown;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type DocumentMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website";
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  robots?: string;
  breadcrumbs?: ReadonlyArray<BreadcrumbItem>;
  includeService?: boolean;
  jsonLd?: ReadonlyArray<JsonLdNode>;
  preloadImage?: string;
};
