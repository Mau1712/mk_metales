import { robotsDirectives } from "@app/seo/site";

export const notFoundPageMeta = {
  title: "Página no encontrada | MK Metales",
  description:
    "La dirección solicitada no existe. Volvé al inicio o usá el cotizador para evaluar scrap industrial.",
  canonicalPath: "/",
  robots: robotsDirectives.notFound,
} as const;

export const notFoundCopy = {
  eyebrow: "Error 404",
  title: "Esta página no existe",
  description:
    "La dirección no corresponde a una sección del sitio. Podés volver al inicio o ir al cotizador para evaluar un lote de scrap industrial.",
  homeCta: {
    label: "Volver al inicio",
    to: "/",
  },
  quoteCta: {
    label: "Ir al cotizador",
    to: "/cotizador",
  },
} as const;
