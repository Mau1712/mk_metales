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
