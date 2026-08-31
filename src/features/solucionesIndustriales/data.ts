export const solucionesPageMeta = {
  title: "Soluciones para Empresas con Scrap Industrial | MK Metales",
  description:
    "Soluciones B2B para empresas que generan scrap industrial metálico. Evaluación de materiales, operaciones recurrentes, grandes volúmenes y valorización.",
  canonicalPath: "/soluciones-industriales",
  includeService: true,
  breadcrumbs: [
    { name: "Inicio", path: "/" },
    {
      name: "Soluciones industriales",
      path: "/soluciones-industriales",
    },
  ],
} as const;

export const solutionsHeroCopy = {
  eyebrow: "Soluciones industriales",
  title:
    "Una solución comercial para empresas que generan scrap industrial",
  description:
    "Trabajamos con organizaciones que necesitan valorizar rezagos metálicos provenientes de sus procesos productivos mediante operaciones claras, profesionales y adaptadas a cada caso.",
  signals: ["Industria", "Producción", "Metalúrgica", "Mantenimiento"],
  primaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
  secondaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
} as const;

export const solutionsIntroCopy = {
  eyebrow: "Enfoque B2B",
  title: "Más que una operación puntual",
  lead:
    "Para una empresa que genera scrap de forma recurrente, contar con un canal comercial estable puede simplificar la valorización de materiales y reducir la acumulación de rezagos dentro de la operación.",
  detail:
    "MK Metales evalúa cada caso según el tipo de material, volumen, presentación y condiciones comerciales involucradas.",
  statement:
    "Cada operación industrial es diferente. La solución también debe serlo.",
} as const;

export const solutionsBannerCopy = {
  imageAlt:
    "Rezagos metálicos industriales junto al logo de MK Metales y el lema Recuperamos hoy, construimos mañana",
} as const;

export const solutionsOperationsCopy = {
  title: "Tipos de operación",
} as const;

export const solutionsOperations = [
  {
    id: "recurring",
    number: "01",
    title: "Operaciones recurrentes",
    description:
      "Pensado para empresas que generan rezagos metálicos periódicamente y necesitan establecer un canal comercial continuo para su valorización.",
  },
  {
    id: "volume",
    number: "02",
    title: "Grandes volúmenes",
    description:
      "Evaluamos lotes industriales considerando material, cantidad, presentación y condiciones específicas de cada operación.",
  },
  {
    id: "spot",
    number: "03",
    title: "Operaciones puntuales",
    description:
      "También pueden evaluarse lotes específicos generados por cambios de producción, mantenimiento, recambio de materiales o procesos industriales extraordinarios.",
  },
  {
    id: "coordination",
    number: "04",
    title: "Coordinación comercial",
    description:
      "Definimos las condiciones de la operación de acuerdo con las características reales del material y las necesidades de ambas partes.",
  },
] as const;

export const solutionsSectorsCopy = {
  eyebrow: "Sectores",
  title: "Organizaciones que generan rezagos metálicos",
} as const;

export const solutionsSectors = [
  {
    id: "industries",
    title: "Industrias",
    description:
      "Procesos productivos que generan recortes, piezas fuera de especificación o materiales metálicos descartados.",
  },
  {
    id: "metallurgy",
    title: "Metalúrgicas",
    description:
      "Operaciones de transformación y mecanizado con generación periódica de metales y virutas.",
  },
  {
    id: "workshops",
    title: "Talleres industriales",
    description:
      "Actividades de reparación, fabricación o mantenimiento que generan materiales recuperables.",
  },
  {
    id: "plants",
    title: "Plantas productivas",
    description:
      "Instalaciones con flujos constantes de materiales provenientes de producción, mantenimiento o renovación.",
  },
  {
    id: "enterprises",
    title: "Grandes empresas",
    description:
      "Organizaciones que buscan ordenar la valorización de scrap dentro de sus procesos internos.",
  },
] as const;

export const solutionsMaterialsCopy = {
  title: "Distintos procesos generan distintos tipos de scrap",
  description:
    "Bronce, aluminio, plomo, zinc, acero inoxidable, virutas industriales, baterías y materiales ferrosos pueden requerir criterios de evaluación diferentes.",
  cta: {
    label: "Ver materiales que compramos",
    to: "/materiales",
  },
  extrasLabel: "+ otros materiales",
} as const;

export const solutionsMaterialRefs = [
  "Bronce",
  "Aluminio",
  "Zinc",
  "Acero inoxidable",
  "Virutas",
] as const;

export const solutionsFlowCopy = {
  eyebrow: "Cómo trabajamos",
  title: "De la consulta inicial a una operación comercial",
} as const;

export const solutionsFlowSteps = [
  {
    id: "identify",
    number: "01",
    title: "Identificación",
    description:
      "La empresa nos informa qué material genera y sus características generales.",
  },
  {
    id: "lot",
    number: "02",
    title: "Información del lote",
    description:
      "Se consideran peso o volumen aproximado, presentación, ubicación y otros datos relevantes.",
  },
  {
    id: "evaluation",
    number: "03",
    title: "Evaluación",
    description:
      "Analizamos las características del material y las condiciones comerciales de la operación.",
  },
  {
    id: "coordination",
    number: "04",
    title: "Coordinación",
    description: "Se definen los próximos pasos de acuerdo con el caso.",
  },
  {
    id: "valorization",
    number: "05",
    title: "Valorización",
    description:
      "El material recuperado continúa su recorrido hacia fundiciones y nuevos procesos productivos.",
  },
] as const;

export const solutionsPrepCopy = {
  eyebrow: "Preparar una consulta",
  title: "¿Qué información nos ayuda a evaluar una operación?",
  note: "No necesitás tener toda la información para iniciar una consulta.",
  cta: {
    label: "Iniciar una cotización",
    to: "/cotizador",
  },
} as const;

export const solutionsPrepItems = [
  "Tipo de material",
  "Peso o volumen aproximado",
  "Presentación del material",
  "Ubicación",
  "Frecuencia de generación",
  "Fotografías del lote cuando sean necesarias",
] as const;

export const solutionsRecurringCopy = {
  title:
    "Cuando el scrap se genera periódicamente, la relación comercial también puede ser recurrente",
  description:
    "Las empresas con generación continua de rezagos pueden requerir evaluaciones periódicas y condiciones adaptadas a su operación.",
} as const;

export const solutionsRecurringConcepts = [
  {
    id: "continuity",
    title: "Continuidad",
    description: "Un canal comercial estable para futuras operaciones.",
  },
  {
    id: "review",
    title: "Evaluación periódica",
    description:
      "Las condiciones pueden revisarse según materiales y mercado.",
  },
  {
    id: "contact",
    title: "Comunicación directa",
    description: "Un contacto comercial para analizar cada operación.",
  },
] as const;

export const solutionsCircularCopy = {
  eyebrow: "Valorización",
  title: "El valor de una operación continúa después de la compra",
  description:
    "Los materiales recuperados son comercializados hacia fundiciones para reincorporarse como materia prima en nuevos procesos industriales.",
  detail:
    "De esta manera, un rezago industrial puede volver a formar parte de la cadena productiva.",
  cta: {
    label: "Conocer nuestro enfoque de sustentabilidad",
    to: "/sustentabilidad",
  },
} as const;

export const solutionsInstitutionalCopy = {
  eyebrow: "Operaciones institucionales",
  title: "Una propuesta preparada para conversaciones de mayor escala",
  description:
    "MK Metales busca desarrollar relaciones comerciales con empresas y organizaciones que necesiten evaluar la valorización de rezagos metálicos dentro de sus operaciones.",
  detail:
    "Cada caso debe analizarse según sus condiciones comerciales, operativas y, cuando corresponda, los requisitos administrativos aplicables.",
} as const;

export const solutionsClosingCopy = {
  eyebrow: "Hablemos de tu operación",
  title: "¿Tu empresa genera scrap metálico?",
  description:
    "Contanos qué material generás y las características generales de tu operación para comenzar una evaluación.",
  primaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
  secondaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
} as const;

export const solutionsCommercialFacts: ReadonlyArray<{
  label: string;
  value: string;
}> = [];
