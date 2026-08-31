export const homePageMeta = {
  title: "Compra de Scrap Industrial | MK Metales",
  description:
    "Recuperamos y valorizamos scrap metálico proveniente de procesos industriales para reincorporarlo a la cadena productiva.",
  canonicalPath: "/",
} as const;

export const heroCopy = {
  eyebrow: "Compra y reciclaje de scrap industrial metálico",
  titleLead: "TRANSFORMAMOS",
  titleAccent: "REZAGOS INDUSTRIALES",
  titleTrail: "EN NUEVOS RECURSOS",
  description:
    "Recuperamos y valorizamos scrap metálico proveniente de procesos industriales para reincorporarlo a la cadena productiva.",
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Hablar por WhatsApp",
  },
  imageAlt:
    "Operario de MK Metales en un predio industrial junto a una grúa que manipula scrap metálico",
} as const;

export const heroBenefits = [
  { id: "value", line1: "Valorización", line2: "económica" },
  { id: "service", line1: "Servicio", line2: "profesional" },
  { id: "circular", line1: "Economía", line2: "circular" },
] as const;

const heroWhatsAppMessage =
  "Hola, quiero consultar por una operación de scrap industrial.";

export const heroWhatsAppUrl = `https://wa.me/5491150031955?text=${encodeURIComponent(heroWhatsAppMessage)}`;

export const materialsCopy = {
  eyebrow: "Materiales",
  title: "Compramos y valorizamos scrap industrial metálico",
  intro:
    "Consultá referencias internacionales actualizadas por kilogramo y accedé al cotizador para estimar tu lote.",
  cardCaption: "Rezago industrial",
  updatedLabel: "Referencias actualizadas",
  approximateNote:
    "Algunos materiales utilizan el metal principal asociado como referencia aproximada de mercado.",
  disclaimer:
    "Los valores mostrados son referencias internacionales orientativas y no representan una oferta de compra de MK Metales.",
  unavailablePrice: "Referencia no disponible",
  customTitle: "Evaluación personalizada",
  customDescription: "Sin referencia automática disponible",
  cardCta: "Cotizar material",
  customCta: "Consultar",
  perKg: " / kg",
  perKgApprox: " / kg aprox.",
  carouselListLabel: "Desplazá horizontalmente para ver más materiales",
  ctaTitle: "¿Generás scrap industrial de forma recurrente?",
  ctaDescription:
    "Podemos evaluar el material, volumen y condiciones de tu operación.",
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Ver todos los materiales",
    to: "/materiales",
  },
} as const;

export type MaterialGroupIcon = "layers" | "cube" | "grid" | "battery";

export const materialGroups = [
  {
    id: "nonferrous",
    title: "Metales no ferrosos",
    icon: "layers",
    materials: [
      { id: "bronce", name: "Bronce" },
      { id: "aluminio-duro", name: "Aluminio duro" },
      { id: "aluminio-blando", name: "Aluminio blando" },
      { id: "plomo", name: "Plomo" },
      { id: "zinc", name: "Zinc" },
    ],
  },
  {
    id: "ferrous",
    title: "Acero y ferrosos",
    icon: "cube",
    materials: [
      { id: "acero-inoxidable", name: "Acero inoxidable" },
      { id: "hierro-chico", name: "Hierro chico" },
    ],
  },
  {
    id: "chips",
    title: "Virutas industriales",
    icon: "grid",
    materials: [
      { id: "viruta-aluminio", name: "Viruta de aluminio" },
      { id: "viruta-bronce", name: "Viruta de bronce" },
      { id: "viruta-zinc", name: "Viruta de zinc" },
    ],
  },
  {
    id: "batteries",
    title: "Baterías",
    icon: "battery",
    materials: [
      { id: "baterias-comunes", name: "Baterías comunes" },
      { id: "baterias-gel", name: "Baterías de gel" },
    ],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  icon: MaterialGroupIcon;
  materials: ReadonlyArray<{ id: string; name: string }>;
}>;

export const processCopy = {
  eyebrow: "Nuestro proceso",
  title: "Del rezago industrial a un nuevo recurso",
  intro:
    "Evaluamos cada operación de forma individual para valorizar correctamente el material y facilitar su reincorporación al circuito productivo.",
  closing:
    "El scrap industrial no termina su ciclo: vuelve a convertirse en materia prima.",
  cta: {
    label: "Solicitar cotización",
    to: "/cotizador",
  },
} as const;

export type ProcessStepIcon =
  | "search"
  | "calculator"
  | "calendar"
  | "recycle";

export const processSteps = [
  {
    id: "identify",
    number: "01",
    title: "Identificamos el material",
    description:
      "Nos indicás qué tipo de scrap generás, su presentación y volumen aproximado.",
    icon: "search",
    highlight: false,
  },
  {
    id: "quote",
    number: "02",
    title: "Evaluamos y cotizamos",
    description:
      "Analizamos el material y sus condiciones para generar una cotización orientativa o comercial.",
    icon: "calculator",
    highlight: false,
  },
  {
    id: "coordinate",
    number: "03",
    title: "Coordinamos la operación",
    description:
      "Definimos las condiciones de entrega o retiro según las características y volumen del material.",
    icon: "calendar",
    highlight: false,
  },
  {
    id: "reinsert",
    number: "04",
    title: "Recuperamos y reinsertamos",
    description:
      "El scrap es valorizado y comercializado hacia fundiciones para volver a formar parte de nuevos procesos productivos.",
    icon: "recycle",
    highlight: true,
  },
] as const satisfies ReadonlyArray<{
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ProcessStepIcon;
  highlight: boolean;
}>;

export const solutionsCopy = {
  eyebrow: "Soluciones industriales",
  title:
    "Una solución para empresas que generan scrap de forma recurrente",
  intro:
    "Acompañamos operaciones industriales que necesitan valorizar sus rezagos metálicos de forma ágil, ordenada y profesional.",
  detail:
    "Cada operación se evalúa según el tipo de material, volumen, presentación y condiciones comerciales.",
  b2bLabel: "Atención B2B",
  b2bAudience: "Industria · Metalúrgica · Producción · Mantenimiento",
  primaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
  secondaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  closingTitle: "¿Tu empresa genera scrap metálico de forma periódica?",
  closingDescription:
    "Podemos analizar las características de tu operación y establecer un canal comercial adaptado a tus necesidades.",
  closingCta: {
    label: "Contactar a MK Metales",
    to: "/contacto",
  },
  pageCta: {
    label: "Conocer soluciones para empresas",
    to: "/soluciones-industriales",
  },
} as const;

export type SolutionIcon = "sync" | "layers" | "handshake" | "recycle";

export const solutions = [
  {
    id: "recurring",
    number: "01",
    title: "Operaciones recurrentes",
    description:
      "Evaluamos empresas que generan rezagos metálicos de manera periódica y necesitan un canal comercial estable para su valorización.",
    icon: "sync",
    highlight: false,
  },
  {
    id: "volume",
    number: "02",
    title: "Grandes volúmenes",
    description:
      "Analizamos lotes industriales considerando material, volumen y características específicas de cada operación.",
    icon: "layers",
    highlight: false,
  },
  {
    id: "coordination",
    number: "03",
    title: "Coordinación operativa",
    description:
      "Definimos las condiciones de cada operación de acuerdo con el tipo de scrap, su presentación y las necesidades comerciales involucradas.",
    icon: "handshake",
    highlight: false,
  },
  {
    id: "valorization",
    number: "04",
    title: "Valorización responsable",
    description:
      "Los materiales recuperados son comercializados hacia fundiciones para reincorporarse como materia prima a nuevos procesos productivos.",
    icon: "recycle",
    highlight: true,
  },
] as const satisfies ReadonlyArray<{
  id: string;
  number: string;
  title: string;
  description: string;
  icon: SolutionIcon;
  highlight: boolean;
}>;

export const sustainabilityCopy = {
  eyebrow: "Economía circular",
  titleLead: "El metal no termina su ciclo.",
  titleAccent: "Vuelve a empezar.",
  intro:
    "Recuperamos rezagos metálicos provenientes de procesos industriales para valorizarlos y facilitar su reincorporación a nuevos ciclos productivos.",
  detail:
    "Al comercializar estos materiales directamente hacia fundiciones, el scrap vuelve a transformarse en materia prima en lugar de permanecer como descarte industrial.",
  statement: "Recuperar metales también es recuperar recursos.",
  imageAlt:
    "Rezagos metálicos industriales y viruta en una planta de recuperación, con maquinaria al fondo",
  primaryCta: {
    label: "Conocer nuestro enfoque",
    to: "/sustentabilidad",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export type SustainabilityConceptIcon = "layers" | "industry" | "sync";

export const sustainabilityConcepts = [
  {
    id: "recovery",
    title: "Recuperación de scrap",
    description:
      "Identificamos materiales metálicos con potencial de valorización.",
    icon: "layers",
  },
  {
    id: "reincorporation",
    title: "Reincorporación productiva",
    description:
      "El material recuperado vuelve al circuito industrial a través de fundiciones.",
    icon: "industry",
  },
  {
    id: "circular",
    title: "Economía circular",
    description:
      "Extendemos el ciclo útil de los metales mediante su recuperación y reutilización productiva.",
    icon: "sync",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  icon: SustainabilityConceptIcon;
}>;

export type SustainabilityCycleIcon =
  | "industry"
  | "layers"
  | "recycle"
  | "cube"
  | "sync";

export const sustainabilityCycle = [
  { id: "industry", label: "Industria", icon: "industry", highlight: false },
  { id: "scrap", label: "Scrap", icon: "layers", highlight: false },
  { id: "recovery", label: "Recuperación", icon: "recycle", highlight: false },
  { id: "foundry", label: "Fundición", icon: "cube", highlight: false },
  { id: "cycle", label: "Nuevo ciclo", icon: "sync", highlight: true },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  icon: SustainabilityCycleIcon;
  highlight: boolean;
}>;

export const quoteCopy = {
  eyebrow: "Cotización de metales",
  title: "¿Querés conocer el valor estimado de tu scrap?",
  intro:
    "Seleccioná el material y el peso aproximado para iniciar una estimación. El valor final dependerá de las características reales del lote y las condiciones comerciales de la operación.",
  materialLabel: "Material",
  materialPlaceholder: "Seleccionar material",
  weightLabel: "Peso aproximado",
  weightPlaceholder: "500",
  weightUnit: "kg",
  submitLabel: "Consultar cotización",
  submitHint: "Completá material y peso para consultar.",
  materialError: "Seleccioná un material.",
  weightError: "Ingresá un peso válido.",
  readyTitle: "Cotización disponible en el cotizador completo",
  readyDescription:
    "Con el material y el peso indicados podemos continuar la estimación en el cotizador de MK Metales.",
  continueLabel: "Continuar al cotizador",
  fullQuoteLabel: "Ir al cotizador completo",
  disclaimer:
    "Los valores publicados serán únicamente referenciales. La cotización final podrá variar según calidad, pureza, presentación, volumen, ubicación, logística y condiciones de mercado.",
} as const;

export type QuoteHintIcon = "market" | "industrial" | "indicative";

export const quoteHints = [
  {
    id: "market",
    title: "Referencia de mercado",
    description: "Valores actualizados según referencias externas.",
    icon: "market",
  },
  {
    id: "industrial",
    title: "Evaluación industrial",
    description: "Consideramos tipo, presentación y volumen.",
    icon: "industrial",
  },
  {
    id: "indicative",
    title: "Cotización orientativa",
    description: "El resultado web no constituye una oferta final.",
    icon: "indicative",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  icon: QuoteHintIcon;
}>;

export const quoteMaterials = [
  { id: "bronce", name: "Bronce" },
  { id: "aluminio-duro", name: "Aluminio duro" },
  { id: "aluminio-blando", name: "Aluminio blando" },
  { id: "plomo", name: "Plomo" },
  { id: "baterias-comunes", name: "Baterías comunes" },
  { id: "baterias-gel", name: "Baterías de gel" },
  { id: "zinc", name: "Zinc" },
  { id: "acero-inoxidable", name: "Acero inoxidable" },
  { id: "viruta-aluminio", name: "Viruta de aluminio" },
  { id: "viruta-bronce", name: "Viruta de bronce" },
  { id: "viruta-zinc", name: "Viruta de zinc" },
  { id: "hierro-chico", name: "Hierro chico" },
] as const satisfies ReadonlyArray<{ id: string; name: string }>;

export type QuoteMaterialId = (typeof quoteMaterials)[number]["id"];

export const isQuoteMaterialId = (value: string): value is QuoteMaterialId => {
  return quoteMaterials.some((material) => material.id === value);
};

export const parseWeightKg = (raw: string): number | null => {
  const normalized = raw.trim().replace(",", ".");

  if (!normalized || !/^\d+(\.\d+)?$/.test(normalized)) {
    return null;
  }

  const value = Number(normalized);

  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }

  return value;
};

export const isWeightDraft = (raw: string) => {
  return raw === "" || /^\d*[.,]?\d*$/.test(raw);
};

export const buildCotizadorHref = (
  materialId?: string,
  weightKg?: number,
) => {
  if (!materialId) {
    return "/cotizador";
  }

  const params = new URLSearchParams({
    material: materialId,
  });

  if (weightKg !== undefined) {
    params.set("peso", String(weightKg));
  }

  return `/cotizador?${params.toString()}`;
};

/** Payload listo para el cotizador y, más adelante, para cotización real. */
export type QuickQuoteDraft = {
  materialId: QuoteMaterialId;
  weightKg: number;
};

export type QuickQuoteView =
  | { status: "idle" }
  | { status: "ready"; draft: QuickQuoteDraft };

export const faqCopy = {
  eyebrow: "Preguntas frecuentes",
  title: "Todo lo que necesitás saber antes de cotizar",
  intro:
    "Respondemos las consultas más habituales sobre materiales, cotización y operaciones industriales.",
  detail:
    "Si necesitás evaluar una operación específica, podés hablar directamente con nuestro equipo.",
  cta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export const faqItems = [
  {
    id: "materials",
    question: "¿Qué tipo de materiales compra MK Metales?",
    paragraphs: [
      "Trabajamos con scrap industrial metálico, incluyendo bronce, aluminio duro y blando, plomo, zinc, acero inoxidable, virutas industriales, baterías y hierro chico.",
      "La evaluación depende del tipo de material, su presentación y las condiciones específicas del lote.",
    ],
  },
  {
    id: "audience",
    question: "¿Trabajan con particulares?",
    paragraphs: [
      "El servicio está orientado principalmente a empresas, industrias, metalúrgicas, talleres y organizaciones que generan rezagos metálicos provenientes de procesos productivos.",
    ],
  },
  {
    id: "valuation",
    question: "¿Cómo se determina el valor del material?",
    paragraphs: [
      "La valorización puede considerar referencias de mercado, tipo de material, calidad, presentación, volumen y condiciones comerciales de la operación.",
      "Los valores publicados en la web son únicamente orientativos y no constituyen una oferta final.",
    ],
  },
  {
    id: "quote-prices",
    question: "¿Los precios del cotizador son definitivos?",
    paragraphs: [
      "No. El cotizador web ofrece una referencia inicial.",
      "El valor final puede variar según calidad, pureza, presentación, volumen, ubicación, logística y condiciones actuales del mercado.",
    ],
  },
  {
    id: "minimum",
    question: "¿Existe una cantidad mínima?",
    paragraphs: [
      "Las condiciones dependen del tipo de material y de las características de cada operación.",
      "Para conocer si un lote puede ser evaluado, recomendamos solicitar una cotización indicando material y peso aproximado.",
    ],
  },
  {
    id: "coordination",
    question: "¿Cómo se coordina una operación?",
    paragraphs: [
      "Una vez evaluado el material, se definen las condiciones comerciales y operativas de acuerdo con el tipo de scrap, volumen, presentación y ubicación.",
    ],
  },
  {
    id: "requirements",
    question: "¿Qué información necesitan para cotizar?",
    paragraphs: [
      "Para una primera evaluación es útil contar con el tipo de material, peso o volumen aproximado, ubicación y una breve descripción de su presentación.",
      "Cuando sea necesario, también pueden solicitarse fotografías del lote.",
    ],
  },
  {
    id: "recovered",
    question: "¿Qué sucede con los materiales recuperados?",
    paragraphs: [
      "MK Metales comercializa los materiales recuperados hacia fundiciones para facilitar su reincorporación como materia prima en nuevos procesos productivos.",
    ],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  question: string;
  paragraphs: ReadonlyArray<string>;
}>;

export const closingCtaCopy = {
  eyebrow: "Hablemos de tu operación",
  title: "¿Tu empresa genera scrap industrial para valorizar?",
  description:
    "Contanos qué material generás, su volumen aproximado y las características de tu operación. Nuestro equipo puede ayudarte a evaluar la mejor forma de avanzar.",
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
  signals: [
    "Scrap industrial",
    "Operaciones B2B",
    "Economía circular",
  ],
} as const;
