/** Rutas canónicas públicas. Al agregar una página indexable, sumarla aquí y en el router. */
export const indexablePaths = [
  "/",
  "/materiales",
  "/soluciones-industriales",
  "/sustentabilidad",
  "/contacto",
  "/cotizador",
] as const;

export type IndexablePath = (typeof indexablePaths)[number];

/** Path used only to SSR the catch-all page into dist/404.html. Not in the sitemap. */
export const notFoundPrerenderPath = "/404";
