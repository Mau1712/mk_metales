import {
  isQuoteMaterialId,
  parseWeightKg,
  quoteMaterials,
  type QuoteMaterialId,
} from "@features/home/data.ts";

export const cotizadorPageMeta = {
  title: "Cotizador de Scrap Industrial y Metales | MK Metales",
  description:
    "Cotizá scrap industrial metálico según material y peso aproximado. Obtené una referencia inicial y solicitá una evaluación comercial.",
  canonicalPath: "/cotizador",
  breadcrumbs: [
    { name: "Inicio", path: "/" },
    { name: "Cotizador", path: "/cotizador" },
  ],
} as const;

export const QUOTE_SUMMARY_ID = "cotizacion-resumen";

export const quoteHeroCopy = {
  eyebrow: "Cotizador",
  title: "Cotizá tu scrap industrial",
  description:
    "Indicá el material y sus características principales para iniciar una estimación.",
  note: "Los valores obtenidos serán orientativos y estarán sujetos a evaluación comercial.",
} as const;

export const quoteFormCopy = {
  title: "Configurá tu lote",
  materialLabel: "Material",
  materialPlaceholder: "Seleccionar material",
  materialError: "Seleccioná un material.",
  weightLabel: "Peso aproximado",
  weightUnit: "kg",
  weightError: "Ingresá un peso mayor a 0.",
  presentationLabel: "Presentación del material",
  presentationPlaceholder: "Seleccionar presentación",
  presentationOptional: "Opcional",
  locationLabel: "Ubicación",
  locationOptional: "Opcional",
  locationPlaceholder: "Ciudad / zona",
  frequencyLabel: "¿Con qué frecuencia generás este material?",
  frequencyPlaceholder: "Seleccionar frecuencia",
  frequencyOptional: "Opcional",
  submitLabel: "Cotizar",
  submitHint: "Completá material y peso para iniciar la estimación.",
} as const;

export const quoteSummaryCopy = {
  title: "Resumen de cotización",
  materialLabel: "Material",
  weightLabel: "Peso",
  presentationLabel: "Presentación",
  locationLabel: "Ubicación",
  frequencyLabel: "Frecuencia",
  emptyValue: "Sin indicar",
  idleTitle: "Completá los datos del lote",
  idleDescription:
    "Seleccioná el material y el peso aproximado para iniciar una estimación.",
  readyTitle: "Listo para cotizar",
  readyDescription: "Ya tenemos la información básica del lote.",
  readyNote:
    "La conexión con las referencias de mercado será incorporada en la siguiente etapa.",
  readyCta: "Solicitar evaluación comercial",
  loadingTitle: "Calculando referencia",
  loadingDescription: "Estamos preparando la estimación del lote.",
  quotedMarketLabel: "Referencia de mercado",
  quotedEstimateLabel: "Estimación MK Metales",
  quotedTotalLabel: "Valor estimado del lote",
  quotedUpdatedLabel: "Referencia actualizada",
  quotedSourceLabel: "Fuente",
  unavailableTitle: "Este material requiere evaluación personalizada",
  unavailableDescription:
    "Algunas categorías necesitan información adicional antes de determinar una referencia.",
  unavailableCta: "Solicitar evaluación",
  errorTitle: "No pudimos generar la referencia.",
  errorDescription: "Intentá nuevamente en unos instantes.",
  errorRetry: "Reintentar",
  perKg: "/ kg",
} as const;

export const quoteDisclaimerCopy = {
  estimates:
    "Las cotizaciones publicadas por MK Metales son estimaciones orientativas. El valor final puede variar según calidad, composición, presentación, volumen, ubicación, logística y condiciones de mercado.",
  contract:
    "Una estimación web no constituye una oferta contractual de compra.",
} as const;

export const quoteHowCopy = {
  eyebrow: "Cómo funciona",
  title: "Una referencia de mercado es solo el punto de partida",
  description:
    "El valor internacional de un metal no representa automáticamente el precio de compra de un lote industrial.",
} as const;

export const quoteHowSteps = [
  { id: "reference", label: "Referencia internacional" },
  { id: "material", label: "Material" },
  { id: "quality", label: "Calidad / presentación" },
  { id: "volume", label: "Volumen" },
  { id: "commercial", label: "Condiciones comerciales" },
  { id: "estimate", label: "Estimación" },
] as const;

export const quoteFaqCopy = {
  title: "Preguntas sobre la cotización",
} as const;

export const quoteFaqItems = [
  {
    id: "final",
    question: "¿El valor mostrado es definitivo?",
    answer: "No. Es una estimación inicial sujeta a evaluación.",
  },
  {
    id: "change",
    question: "¿Por qué puede cambiar el precio?",
    answer:
      "La calidad, composición, presentación, volumen y otras condiciones pueden modificar la valorización.",
  },
  {
    id: "automatic",
    question: "¿Todos los materiales pueden cotizarse automáticamente?",
    answer:
      "No necesariamente. Algunas categorías requieren evaluación personalizada.",
  },
  {
    id: "source",
    question: "¿Qué referencia utilizan?",
    answer:
      "El sistema estará preparado para utilizar referencias externas de mercado junto con criterios internos de valorización.",
  },
] as const;

export const quoteClosingCopy = {
  title: "¿Necesitás evaluar una operación específica?",
  description: "Enviá los datos de tu lote y continuemos la conversación.",
  cta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export const materialPresentations = [
  { id: "bulk", label: "A granel" },
  { id: "pieces", label: "Piezas / recortes" },
  { id: "chips", label: "Viruta" },
  { id: "other", label: "Otro / No estoy seguro" },
] as const;

export type MaterialPresentation = (typeof materialPresentations)[number]["id"];

export const generationFrequencies = [
  { id: "spot", label: "Operación puntual" },
  { id: "monthly", label: "Mensualmente" },
  { id: "weekly", label: "Semanalmente" },
  { id: "continuous", label: "Generación continua" },
  { id: "unsure", label: "No estoy seguro" },
] as const;

export type GenerationFrequency = (typeof generationFrequencies)[number]["id"];

export const presentationsByMaterial: Partial<
  Record<QuoteMaterialId, ReadonlyArray<MaterialPresentation>>
> = {
  "viruta-aluminio": ["chips", "other"],
  "viruta-bronce": ["chips", "other"],
  "viruta-zinc": ["chips", "other"],
};

export const isMaterialPresentation = (
  value: string,
): value is MaterialPresentation => {
  return materialPresentations.some((item) => item.id === value);
};

export const isGenerationFrequency = (
  value: string,
): value is GenerationFrequency => {
  return generationFrequencies.some((item) => item.id === value);
};

export const presentationsForMaterial = (materialId: string) => {
  const allowed = isQuoteMaterialId(materialId)
    ? presentationsByMaterial[materialId]
    : undefined;

  if (!allowed) {
    return materialPresentations;
  }

  return materialPresentations.filter((item) => allowed.includes(item.id));
};

export type QuoteRequest = {
  materialId: QuoteMaterialId;
  /** Peso normalizado en kg. La entrada actual es kg; toneladas se convertirán a kg. */
  weightKg: number;
  presentation?: MaterialPresentation;
  location?: string;
  frequency?: GenerationFrequency;
};

export type QuoteResult = {
  materialId: QuoteMaterialId;
  weightKg: number;
  referencePricePerKg: number;
  estimatedPricePerKg: number;
  estimatedTotal: number;
  currency: string;
  referenceSource?: string;
  referenceTimestamp: string;
  status: "estimated";
};

export type QuoteStatus =
  | "idle"
  | "ready"
  | "loading"
  | "quoted"
  | "unavailable"
  | "error";

export type QuoteNavState = {
  materialId?: string;
  weightKg?: number;
};

export type QuoteContactState = {
  materialId: QuoteMaterialId;
  weightKg: number;
  presentation?: MaterialPresentation;
  location?: string;
  frequency?: GenerationFrequency;
};

export const toContactNavState = (
  request: QuoteRequest,
): QuoteContactState => {
  return {
    materialId: request.materialId,
    weightKg: request.weightKg,
    ...(request.presentation
      ? { presentation: request.presentation }
      : {}),
    ...(request.location ? { location: request.location } : {}),
    ...(request.frequency ? { frequency: request.frequency } : {}),
  };
};

const isQuoteNavState = (value: unknown): value is QuoteNavState => {
  if (!value || typeof value !== "object") {
    return false;
  }

  return "materialId" in value || "weightKg" in value;
};

export const parseQuotePrefill = (
  search: string,
  state: unknown,
): { materialId: string; weight: string } => {
  const params = new URLSearchParams(search);
  const navState = isQuoteNavState(state) ? state : null;

  const materialCandidate =
    params.get("material") ?? navState?.materialId ?? "";
  const materialId = isQuoteMaterialId(materialCandidate)
    ? materialCandidate
    : "";

  const pesoFromQuery = params.get("peso");
  const pesoCandidate =
    pesoFromQuery ??
    (navState?.weightKg !== undefined ? String(navState.weightKg) : "");
  const weight =
    pesoCandidate !== "" && parseWeightKg(pesoCandidate) !== null
      ? pesoCandidate
      : "";

  return { materialId, weight };
};

export const buildQuoteQuery = (materialId: string, weight: string) => {
  const params = new URLSearchParams();

  if (isQuoteMaterialId(materialId)) {
    params.set("material", materialId);
  }

  const weightKg = parseWeightKg(weight);
  if (weightKg !== null) {
    params.set("peso", String(weightKg));
  }

  return params;
};

export const getMaterialName = (materialId: string) => {
  return (
    quoteMaterials.find((material) => material.id === materialId)?.name ?? null
  );
};

export const getPresentationLabel = (presentation: string) => {
  return (
    materialPresentations.find((item) => item.id === presentation)?.label ??
    null
  );
};

export const getFrequencyLabel = (frequency: string) => {
  return (
    generationFrequencies.find((item) => item.id === frequency)?.label ?? null
  );
};

export const toQuoteRequest = (input: {
  materialId: string;
  weight: string;
  presentation: string;
  location: string;
  frequency: string;
}): QuoteRequest | null => {
  if (!isQuoteMaterialId(input.materialId)) {
    return null;
  }

  const weightKg = parseWeightKg(input.weight);
  if (weightKg === null) {
    return null;
  }

  const allowed = presentationsForMaterial(input.materialId);
  const presentation = isMaterialPresentation(input.presentation)
    ? allowed.some((item) => item.id === input.presentation)
      ? input.presentation
      : undefined
    : undefined;

  return {
    materialId: input.materialId,
    weightKg,
    ...(presentation ? { presentation } : {}),
    ...(input.location.trim() ? { location: input.location.trim() } : {}),
    ...(isGenerationFrequency(input.frequency)
      ? { frequency: input.frequency }
      : {}),
  };
};
