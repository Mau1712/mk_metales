import {
  generationFrequencies,
  isGenerationFrequency,
  isMaterialPresentation,
  presentationsForMaterial,
  type GenerationFrequency,
  type MaterialPresentation,
} from "@features/cotizador/data.ts";
import {
  isQuoteMaterialId,
  isWeightDraft,
  parseWeightKg,
  quoteMaterials,
  type QuoteMaterialId,
} from "@features/home/data.ts";

export {
  generationFrequencies,
  isGenerationFrequency,
  isMaterialPresentation,
  isWeightDraft,
  parseWeightKg,
  presentationsForMaterial,
};

export const contactoPageMeta = {
  title: "Contacto y Cotización de Scrap Industrial | MK Metales",
  description:
    "Contactá a MK Metales para evaluar scrap industrial, materiales, volúmenes y operaciones comerciales.",
  canonicalPath: "/contacto",
} as const;

export const CONTACT_FORM_ID = "contacto-form";

export const CONTACT_OTHER_MATERIAL_ID = "otro" as const;

export type ContactMaterialId =
  | QuoteMaterialId
  | typeof CONTACT_OTHER_MATERIAL_ID;

export const contactMaterials = [
  ...quoteMaterials,
  {
    id: CONTACT_OTHER_MATERIAL_ID,
    name: "Otro / No estoy seguro",
  },
] as const satisfies ReadonlyArray<{ id: ContactMaterialId; name: string }>;

export const isContactMaterialId = (
  value: string,
): value is ContactMaterialId => {
  return (
    isQuoteMaterialId(value) || value === CONTACT_OTHER_MATERIAL_ID
  );
};

export const contactHeroCopy = {
  eyebrow: "Contacto",
  title: "Hablemos de tu operación",
  description:
    "Contanos qué material generás y las características generales de tu lote. Podemos ayudarte a iniciar una evaluación comercial.",
  signals: ["Scrap industrial", "Operaciones B2B", "Cotización"],
} as const;

export const contactIntroCopy = {
  eyebrow: "Iniciá una consulta",
  title:
    "Cuanto más contexto tengamos, mejor podemos evaluar tu operación",
  lead:
    "Podés enviarnos una consulta incluso si todavía no conocés todos los detalles del lote.",
  note: "No necesitás tener toda la información para iniciar una conversación.",
  contextItems: [
    "Material",
    "Peso o volumen aproximado",
    "Presentación",
    "Ubicación",
    "Frecuencia de generación",
    "Fotografías cuando sea necesario",
  ],
} as const;

export const contactFormCopy = {
  nameLabel: "Nombre",
  nameError: "Ingresá tu nombre.",
  companyLabel: "Empresa",
  companyOptional: "Opcional",
  phoneLabel: "Teléfono",
  phoneError: "Ingresá un teléfono de contacto.",
  emailLabel: "Email",
  emailError: "Ingresá un email válido.",
  materialLabel: "Material",
  materialPlaceholder: "Seleccionar material",
  materialError: "Seleccioná un material.",
  weightLabel: "Peso aproximado",
  weightOptional: "Opcional",
  weightUnit: "kg",
  weightError: "Si indicás un peso, debe ser mayor a 0.",
  presentationLabel: "Presentación del material",
  presentationPlaceholder: "Seleccionar presentación",
  presentationOptional: "Opcional",
  locationLabel: "Ubicación",
  locationOptional: "Opcional",
  locationPlaceholder: "Ciudad / zona",
  frequencyLabel: "¿Con qué frecuencia generás este material?",
  frequencyPlaceholder: "Seleccionar frecuencia",
  frequencyOptional: "Opcional",
  messageLabel: "Contanos sobre el material",
  messagePlaceholder:
    "Ej.: Generamos viruta de aluminio de forma periódica y queremos evaluar un lote aproximado...",
  messageError: "Contanos brevemente sobre el material o la operación.",
  photosTitle: "Fotografías del lote",
  photosNote:
    "Las fotografías pueden ayudar a evaluar el material. Esta opción estará disponible durante el proceso de cotización.",
  submitIdle: "Enviar consulta",
  submitPending: "Enviando...",
  submitHint:
    "Nuestro equipo revisará la información para continuar la evaluación comercial.",
  successTitle: "Consulta recibida",
  successDescription:
    "Gracias por contactarnos. Revisaremos la información para continuar con la evaluación de tu operación.",
  successHomeCta: {
    label: "Volver al inicio",
    to: "/",
  },
  successQuoteCta: {
    label: "Cotizar otro material",
    to: "/cotizador",
  },
  errorTitle: "No pudimos enviar la consulta.",
  errorDescription:
    "Intentá nuevamente o utilizá otro canal de contacto.",
} as const;

export const contactWhatsAppCopy = {
  title: "¿Preferís hablar directamente?",
  description: "También podés iniciar una conversación por WhatsApp.",
  ctaLabel: "Hablar por WhatsApp",
  message: "Hola, quiero consultar por una operación de scrap industrial.",
} as const;

export const contactHours: string | null = null;

export const contactQuoteCopy = {
  title: "¿Ya sabés qué material tenés y cuánto pesa?",
  description: "Podés iniciar directamente una cotización.",
  cta: {
    label: "Ir al cotizador",
    to: "/cotizador",
  },
} as const;

export const contactFaqCopy = {
  title: "Antes de escribirnos",
} as const;

export const contactFaqItems = [
  {
    id: "weight",
    question: "¿Necesito conocer el peso exacto?",
    answer:
      "No. Un valor aproximado puede servir para iniciar la consulta.",
  },
  {
    id: "unknown-metal",
    question: "¿Puedo consultar aunque no sepa qué metal es?",
    answer:
      "Sí. Podés describir el material y aportar fotografías cuando sea necesario.",
  },
  {
    id: "purchase",
    question: "¿La consulta confirma automáticamente la compra?",
    answer:
      "No. Cada operación debe evaluarse antes de definir condiciones comerciales.",
  },
] as const;

export const contactClosingCopy = {
  title: "Una consulta puede ser el primer paso para valorizar tu scrap",
  ctaLabel: "Enviar consulta",
} as const;

export type ContactInquiry = {
  name: string;
  company: string | null;
  phone: string;
  email: string;
  materialId: ContactMaterialId;
  weightKg: number | null;
  presentation: MaterialPresentation | null;
  location: string | null;
  frequency: GenerationFrequency | null;
  message: string;
};

export type ContactNavState = {
  materialId?: string;
  weightKg?: number;
  presentation?: string;
  location?: string;
  frequency?: string;
};

export const buildContactoHref = (
  materialId?: string,
  weightKg?: number,
) => {
  if (!materialId) {
    return "/contacto";
  }

  const params = new URLSearchParams({
    material: materialId,
  });

  if (weightKg !== undefined) {
    params.set("peso", String(weightKg));
  }

  return `/contacto?${params.toString()}`;
};

export const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export const isValidPhone = (value: string) => {
  const trimmed = value.trim();

  if (!/^[+]?[\d\s()./-]{6,}$/.test(trimmed)) {
    return false;
  }

  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 6 && digits.length <= 15;
};

const isContactNavState = (value: unknown): value is ContactNavState => {
  if (!value || typeof value !== "object") {
    return false;
  }

  return (
    "materialId" in value ||
    "weightKg" in value ||
    "presentation" in value ||
    "location" in value ||
    "frequency" in value
  );
};

const parseOptionalText = (value: unknown) => {
  return typeof value === "string" ? value.trim() : "";
};

export const parseContactPrefill = (
  search: string,
  state: unknown,
): {
  materialId: string;
  weight: string;
  presentation: string;
  location: string;
  frequency: string;
} => {
  const params = new URLSearchParams(search);
  const navState = isContactNavState(state) ? state : null;

  const materialCandidate =
    params.get("material") ?? navState?.materialId ?? "";
  const materialId = isContactMaterialId(materialCandidate)
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

  const presentationCandidate = parseOptionalText(navState?.presentation);
  const allowedPresentations = presentationsForMaterial(materialId);
  const presentation =
    isMaterialPresentation(presentationCandidate) &&
    allowedPresentations.some((item) => item.id === presentationCandidate)
      ? presentationCandidate
      : "";

  const location = parseOptionalText(navState?.location);
  const frequencyCandidate = parseOptionalText(navState?.frequency);
  const frequency = isGenerationFrequency(frequencyCandidate)
    ? frequencyCandidate
    : "";

  return { materialId, weight, presentation, location, frequency };
};

export const buildWhatsAppHref = (
  baseUrl: string,
  message: string,
): string | null => {
  try {
    const url = new URL(baseUrl);

    if (!url.searchParams.has("text")) {
      url.searchParams.set("text", message);
    }

    return url.toString();
  } catch {
    return null;
  }
};
