const CONTACT_MATERIAL_IDS = [
  "bronce",
  "aluminio-duro",
  "aluminio-blando",
  "plomo",
  "baterias-comunes",
  "baterias-gel",
  "zinc",
  "acero-inoxidable",
  "viruta-aluminio",
  "viruta-bronce",
  "viruta-zinc",
  "hierro-chico",
  "otro",
] as const;

const PRESENTATION_IDS = ["bulk", "pieces", "chips", "other"] as const;
const FREQUENCY_IDS = [
  "spot",
  "monthly",
  "weekly",
  "continuous",
  "unsure",
] as const;

const MATERIAL_LABELS: Record<(typeof CONTACT_MATERIAL_IDS)[number], string> = {
  bronce: "Bronce",
  "aluminio-duro": "Aluminio duro",
  "aluminio-blando": "Aluminio blando",
  plomo: "Plomo",
  "baterias-comunes": "Baterías comunes",
  "baterias-gel": "Baterías de gel",
  zinc: "Zinc",
  "acero-inoxidable": "Acero inoxidable",
  "viruta-aluminio": "Viruta de aluminio",
  "viruta-bronce": "Viruta de bronce",
  "viruta-zinc": "Viruta de zinc",
  "hierro-chico": "Hierro chico",
  otro: "Otro / No estoy seguro",
};

const PRESENTATION_LABELS: Record<(typeof PRESENTATION_IDS)[number], string> = {
  bulk: "A granel",
  pieces: "Piezas / recortes",
  chips: "Viruta",
  other: "Otro / No estoy seguro",
};

const FREQUENCY_LABELS: Record<(typeof FREQUENCY_IDS)[number], string> = {
  spot: "Operación puntual",
  monthly: "Mensualmente",
  weekly: "Semanalmente",
  continuous: "Generación continua",
  unsure: "No estoy seguro",
};

const MAX_NAME = 120;
const MAX_COMPANY = 160;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_LOCATION = 120;
const MAX_MESSAGE = 5000;

export type ParsedContactInquiry = {
  name: string;
  company: string | null;
  phone: string;
  email: string;
  materialId: (typeof CONTACT_MATERIAL_IDS)[number];
  materialLabel: string;
  weightKg: number | null;
  presentationLabel: string | null;
  location: string | null;
  frequencyLabel: string | null;
  message: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const asTrimmedString = (value: unknown) => {
  return typeof value === "string" ? value.trim() : "";
};

const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= MAX_EMAIL;
};

const isPhone = (value: string) => {
  if (!/^[+]?[\d\s()./-]{6,}$/.test(value) || value.length > MAX_PHONE) {
    return false;
  }

  const digits = value.replace(/\D/g, "");
  return digits.length >= 6 && digits.length <= 15;
};

const isMaterialId = (
  value: string,
): value is (typeof CONTACT_MATERIAL_IDS)[number] => {
  return CONTACT_MATERIAL_IDS.some((id) => id === value);
};

const isPresentationId = (
  value: string,
): value is (typeof PRESENTATION_IDS)[number] => {
  return PRESENTATION_IDS.some((id) => id === value);
};

const isFrequencyId = (
  value: string,
): value is (typeof FREQUENCY_IDS)[number] => {
  return FREQUENCY_IDS.some((id) => id === value);
};

export const parseContactInquiry = (
  value: unknown,
): ParsedContactInquiry | null => {
  if (!isRecord(value)) {
    return null;
  }

  const name = asTrimmedString(value.name);
  const email = asTrimmedString(value.email);
  const phone = asTrimmedString(value.phone);
  const materialId = asTrimmedString(value.materialId);
  const message = asTrimmedString(value.message);
  const companyRaw = asTrimmedString(value.company);
  const locationRaw = asTrimmedString(value.location);
  const presentationRaw = asTrimmedString(value.presentation);
  const frequencyRaw = asTrimmedString(value.frequency);

  if (
    !name ||
    name.length > MAX_NAME ||
    !isEmail(email) ||
    !isPhone(phone) ||
    !isMaterialId(materialId) ||
    !message ||
    message.length > MAX_MESSAGE
  ) {
    return null;
  }

  if (companyRaw.length > MAX_COMPANY || locationRaw.length > MAX_LOCATION) {
    return null;
  }

  let weightKg: number | null = null;

  if (value.weightKg !== null && value.weightKg !== undefined) {
    if (typeof value.weightKg !== "number" || !Number.isFinite(value.weightKg)) {
      return null;
    }

    if (value.weightKg <= 0 || value.weightKg > 1_000_000) {
      return null;
    }

    weightKg = value.weightKg;
  }

  const presentation = presentationRaw
    ? isPresentationId(presentationRaw)
      ? presentationRaw
      : null
    : null;
  const frequency = frequencyRaw
    ? isFrequencyId(frequencyRaw)
      ? frequencyRaw
      : null
    : null;

  if (presentationRaw && !presentation) {
    return null;
  }

  if (frequencyRaw && !frequency) {
    return null;
  }

  return {
    name,
    company: companyRaw || null,
    phone,
    email,
    materialId,
    materialLabel: MATERIAL_LABELS[materialId],
    weightKg,
    presentationLabel: presentation ? PRESENTATION_LABELS[presentation] : null,
    location: locationRaw || null,
    frequencyLabel: frequency ? FREQUENCY_LABELS[frequency] : null,
    message,
  };
};
