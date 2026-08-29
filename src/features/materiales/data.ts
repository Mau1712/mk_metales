export const materialesPageMeta = {
  title: "Materiales y Scrap Industrial que Compramos | MK Metales",
  description:
    "Conocé los rezagos industriales metálicos que evalúa MK Metales: bronce, aluminio, plomo, zinc, acero inoxidable, virutas, baterías y más.",
  canonicalPath: "/materiales",
} as const;

export const materialsHeroCopy = {
  eyebrow: "Materiales",
  title: "Scrap industrial que transformamos en nuevos recursos",
  description:
    "Trabajamos con rezagos metálicos provenientes de procesos industriales, evaluando cada lote según su tipo, presentación, calidad y volumen.",
  signals: [
    "Metales no ferrosos",
    "Ferrosos",
    "Virutas",
    "Baterías",
  ],
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export const materialsIntroCopy = {
  eyebrow: "Qué compramos",
  title: "Materiales industriales con potencial de valorización",
  description:
    "MK Metales se especializa en la compra y recuperación de scrap proveniente de actividades productivas. Cada material posee características diferentes y debe evaluarse según las condiciones reales del lote.",
  note: "Nuestro foco está en rezagos industriales y operaciones B2B.",
} as const;

export type MaterialsGroupIcon = "layers" | "cube" | "grid" | "battery";

export const materialsCategories = [
  { id: "no-ferrosos", label: "Metales no ferrosos" },
  { id: "ferrosos", label: "Acero y ferrosos" },
  { id: "virutas", label: "Virutas industriales" },
  { id: "baterias", label: "Baterías" },
] as const;

export type MaterialsCategoryId = (typeof materialsCategories)[number]["id"];

export const materialsGroups = [
  {
    id: "no-ferrosos",
    icon: "layers",
    variant: "default",
    eyebrow: "Metales no ferrosos",
    title: "Metales no ferrosos",
    description:
      "Materiales ampliamente utilizados en procesos industriales que conservan valor y pueden reincorporarse a nuevos ciclos productivos.",
    categoryLabel: "No ferroso",
    note: null,
    materials: [
      {
        id: "bronce",
        name: "Bronce",
        description:
          "Rezagos, recortes y piezas de bronce provenientes de procesos industriales.",
      },
      {
        id: "aluminio-duro",
        name: "Aluminio duro",
        description:
          "Rezagos industriales de aluminio cuya clasificación requiere considerar su composición y características físicas.",
      },
      {
        id: "aluminio-blando",
        name: "Aluminio blando",
        description:
          "Materiales de aluminio de menor dureza provenientes de procesos productivos y manufactura.",
      },
      {
        id: "plomo",
        name: "Plomo",
        description:
          "Rezagos industriales con contenido de plomo sujetos a evaluación según presentación y características del lote.",
      },
      {
        id: "zinc",
        name: "Zinc",
        description:
          "Rezagos y piezas industriales de zinc provenientes de diferentes procesos productivos.",
      },
    ],
  },
  {
    id: "ferrosos",
    icon: "cube",
    variant: "default",
    eyebrow: "Acero y ferrosos",
    title: "Acero y ferrosos",
    description:
      "Rezagos ferrosos e inoxidables de origen industrial, evaluados según composición, presentación y volumen.",
    categoryLabel: "Ferroso",
    note: null,
    materials: [
      {
        id: "acero-inoxidable",
        name: "Acero inoxidable",
        description:
          "Rezagos, recortes y piezas de acero inoxidable cuya valorización depende de su composición y calidad.",
      },
      {
        id: "hierro-chico",
        name: "Hierro chico",
        description:
          "Rezagos ferrosos industriales de menor tamaño o presentación.",
      },
    ],
  },
  {
    id: "virutas",
    icon: "grid",
    variant: "machining",
    eyebrow: "Virutas industriales",
    title: "Virutas industriales",
    description:
      "Las operaciones de mecanizado y producción pueden generar virutas metálicas que conservan valor según material, limpieza y presentación.",
    categoryLabel: "Viruta industrial",
    note: "La presencia de aceites, humedad u otros materiales puede influir en la evaluación del lote.",
    materials: [
      {
        id: "viruta-aluminio",
        name: "Viruta de aluminio",
        description:
          "Virutas generadas durante procesos de mecanizado o transformación de aluminio.",
      },
      {
        id: "viruta-bronce",
        name: "Viruta de bronce",
        description:
          "Virutas provenientes del mecanizado de piezas y componentes de bronce.",
      },
      {
        id: "viruta-zinc",
        name: "Viruta de zinc",
        description:
          "Virutas industriales de zinc sujetas a evaluación de calidad y presentación.",
      },
    ],
  },
  {
    id: "baterias",
    icon: "battery",
    variant: "default",
    eyebrow: "Baterías",
    title: "Baterías",
    description:
      "Lotes de baterías de origen industrial o comercial, evaluados según tipo, cantidad y estado de la operación.",
    categoryLabel: "Batería",
    note: null,
    materials: [
      {
        id: "baterias-comunes",
        name: "Baterías comunes",
        description:
          "Lotes de baterías provenientes de operaciones industriales o comerciales sujetos a evaluación.",
      },
      {
        id: "baterias-gel",
        name: "Baterías de gel",
        description:
          "Baterías de tecnología gel evaluadas según cantidad, estado y características de la operación.",
      },
    ],
  },
] as const satisfies ReadonlyArray<{
  id: MaterialsCategoryId;
  icon: MaterialsGroupIcon;
  variant: "default" | "machining";
  eyebrow: string;
  title: string;
  description: string;
  categoryLabel: string;
  note: string | null;
  materials: ReadonlyArray<{
    id: string;
    name: string;
    description: string;
  }>;
}>;

export const materialsCardCopy = {
  meta: "Sujeto a evaluación del lote",
  cta: "Cotizar material",
} as const;

export const materialsEvaluationCopy = {
  eyebrow: "Evaluación",
  title: "No todo el scrap del mismo material tiene el mismo valor",
  intro:
    "La valorización depende de las características reales de cada lote y de las condiciones de la operación.",
} as const;

export type MaterialsEvaluationIcon =
  | "search"
  | "layers"
  | "cube"
  | "industry";

export const materialsEvaluationFactors = [
  {
    id: "composition",
    number: "01",
    title: "Material y composición",
    description: "Identificamos qué tipo de metal forma parte del lote.",
    icon: "search",
  },
  {
    id: "quality",
    number: "02",
    title: "Calidad y presentación",
    description: "Evaluamos las condiciones en las que se encuentra el material.",
    icon: "layers",
  },
  {
    id: "volume",
    number: "03",
    title: "Volumen",
    description: "La cantidad disponible forma parte de la evaluación comercial.",
    icon: "cube",
  },
  {
    id: "operation",
    number: "04",
    title: "Condiciones de operación",
    description:
      "Ubicación, presentación y logística pueden influir en la cotización final.",
    icon: "industry",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  number: string;
  title: string;
  description: string;
  icon: MaterialsEvaluationIcon;
}>;

export const materialsCircularCopy = {
  title: "Del rezago a la materia prima",
  description:
    "Los materiales recuperados por MK Metales son comercializados hacia fundiciones, permitiendo que vuelvan a utilizarse como materia prima en nuevos procesos industriales.",
  cta: {
    label: "Conocer nuestro enfoque",
    to: "/sustentabilidad",
  },
} as const;

export const materialsClosingCopy = {
  eyebrow: "Cotizá tu material",
  title: "¿Generás alguno de estos rezagos industriales?",
  description:
    "Indicá el material y el peso aproximado para iniciar una evaluación.",
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;
