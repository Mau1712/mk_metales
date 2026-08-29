export const sustentabilidadPageMeta = {
  title: "Reciclaje de Metales y Economía Circular | MK Metales",
  description:
    "Conocé cómo MK Metales recupera y valoriza scrap industrial metálico para reincorporarlo como materia prima en nuevos procesos productivos.",
  canonicalPath: "/sustentabilidad",
  breadcrumbs: [
    { name: "Inicio", path: "/" },
    { name: "Sustentabilidad", path: "/sustentabilidad" },
  ],
} as const;

export const SUSTAINABILITY_CYCLE_ID = "ciclo-del-metal";

export const sustainabilityHeroCopy = {
  eyebrow: "Sustentabilidad",
  titleLead: "El metal no termina su ciclo.",
  titleAccent: "Vuelve a empezar.",
  description:
    "La recuperación de scrap industrial permite que materiales provenientes de procesos productivos vuelvan a incorporarse como materia prima en nuevos ciclos industriales.",
  signals: ["Recuperación", "Valorización", "Fundición", "Nuevo ciclo"],
  primaryCta: {
    label: "Conocer el proceso",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export const sustainabilityIntroCopy = {
  eyebrow: "Economía circular",
  title: "Del rezago industrial a un nuevo recurso",
  lead:
    "Dentro de una operación industrial, muchos materiales metálicos que dejan de ser útiles para un proceso todavía conservan valor.",
  detail:
    "La recuperación y valorización de estos rezagos permite que el metal continúe su recorrido hacia fundiciones y nuevos procesos productivos.",
  statement:
    "Un rezago puede dejar de ser descarte y volver a convertirse en recurso.",
} as const;

export const sustainabilityCycleCopy = {
  title: "El ciclo del metal",
  hubLabel: "Vuelve a la industria",
  ariaLabel:
    "Ciclo de recuperación de metales: parte de la industria, genera scrap, se recupera, se valoriza, va a fundición, se convierte en nueva materia prima y vuelve a la industria.",
} as const;

export const sustainabilityCycleSteps = [
  { id: "industry", label: "Industria" },
  { id: "scrap", label: "Generación de scrap" },
  { id: "recovery", label: "Recuperación" },
  { id: "valorization", label: "Valorización" },
  { id: "foundry", label: "Fundición" },
  { id: "feedstock", label: "Nueva materia prima" },
] as const;

export const sustainabilityStagesCopy = {
  title: "Etapas del ciclo",
} as const;

export const sustainabilityStages = [
  {
    id: "generation",
    number: "01",
    title: "El proceso industrial genera rezagos",
    description:
      "Recortes, piezas, virutas y otros materiales metálicos pueden dejar de ser útiles dentro de un proceso productivo.",
  },
  {
    id: "recovery",
    number: "02",
    title: "El material conserva valor",
    description:
      "MK Metales identifica materiales con potencial de recuperación y valorización comercial.",
  },
  {
    id: "evaluation",
    number: "03",
    title: "Cada lote tiene características diferentes",
    description:
      "Tipo de metal, calidad, presentación y volumen forman parte de la evaluación.",
  },
  {
    id: "foundry",
    number: "04",
    title: "El metal vuelve a transformarse",
    description:
      "Los materiales recuperados son comercializados hacia fundiciones para continuar su procesamiento.",
  },
  {
    id: "cycle",
    number: "05",
    title: "Una nueva materia prima",
    description:
      "El metal puede reincorporarse a nuevos procesos industriales y comenzar nuevamente su ciclo productivo.",
  },
] as const;

export const sustainabilityValueCopy = {
  eyebrow: "Valorización",
  title: "Recuperar también significa aprovechar mejor los recursos",
} as const;

export const sustainabilityValueConcepts = [
  {
    id: "use",
    title: "Aprovechamiento",
    description:
      "Materiales que ya no cumplen una función dentro de una operación pueden conservar valor productivo.",
  },
  {
    id: "reincorporation",
    title: "Reincorporación",
    description:
      "El metal recuperado puede volver a utilizarse como materia prima.",
  },
  {
    id: "circularity",
    title: "Circularidad",
    description:
      "La cadena productiva puede extenderse mediante procesos de recuperación y transformación.",
  },
] as const;

export const sustainabilityFeedstockCopy = {
  eyebrow: "Materias primas secundarias",
  title: "El scrap también forma parte de la cadena productiva",
  lead:
    "Los metales poseen una característica especialmente relevante para la economía circular: pueden recuperarse y volver a utilizarse en nuevos procesos industriales.",
  detail:
    "Cuando un rezago metálico encuentra un nuevo destino productivo, deja de verse únicamente como descarte y pasa a formar parte de una nueva cadena de valor.",
  cta: {
    label: "Ver materiales que recuperamos",
    to: "/materiales",
  },
} as const;

export const sustainabilityIndustryCopy = {
  eyebrow: "Industria",
  title: "La economía circular empieza dentro de las operaciones productivas",
  lead:
    "Las industrias, metalúrgicas, plantas y talleres generan diferentes tipos de scrap como consecuencia natural de sus procesos.",
  detail:
    "Contar con un canal para evaluar y valorizar esos materiales permite integrarlos nuevamente a una cadena productiva.",
} as const;

export const sustainabilityIndustryPoints = [
  {
    id: "identify",
    title: "Identificación",
    description: "Reconocer qué materiales pueden recuperarse.",
  },
  {
    id: "separate",
    title: "Separación",
    description:
      "Mantener los distintos tipos de scrap correctamente identificados facilita su evaluación.",
  },
  {
    id: "valorize",
    title: "Valorización",
    description:
      "Cada material puede analizarse según sus características y condiciones comerciales.",
  },
] as const;

export const sustainabilityBusinessCopy = {
  title:
    "Valor económico y valor productivo pueden formar parte del mismo proceso",
  lead:
    "La economía circular no implica únicamente una cuestión ambiental. También puede representar una forma más eficiente de aprovechar materiales que todavía poseen valor dentro de la industria.",
  detail:
    "Para MK Metales, recuperar scrap significa conectar materiales disponibles con nuevas oportunidades de utilización productiva.",
} as const;

export const sustainabilityHorizonCopy = {
  eyebrow: "Una mirada a largo plazo",
  title: "Una propuesta alineada con una industria más circular",
  lead:
    "La recuperación de materiales puede formar parte de estrategias más amplias de aprovechamiento de recursos dentro de empresas y organizaciones.",
  detail:
    "MK Metales busca desarrollar relaciones comerciales con organizaciones que necesiten evaluar la valorización de sus rezagos metálicos.",
} as const;

export const sustainabilityMetrics: ReadonlyArray<{
  label: string;
  value: string;
}> = [];

export const sustainabilitySolutionsCopy = {
  title: "¿Tu empresa genera scrap de forma recurrente?",
  description:
    "Podemos evaluar las características de tu operación y los materiales que genera.",
  primaryCta: {
    label: "Conocer soluciones industriales",
    to: "/soluciones-industriales",
  },
  secondaryCta: {
    label: "Hablar con un asesor",
    to: "/contacto",
  },
} as const;

export const sustainabilityClosingCopy = {
  eyebrow: "Recuperemos valor",
  title: "Transformemos rezagos industriales en nuevos recursos",
  description:
    "Contanos qué materiales genera tu operación y comencemos una evaluación.",
  primaryCta: {
    label: "Cotizar material",
    to: "/cotizador",
  },
  secondaryCta: {
    label: "Contactar a MK Metales",
    to: "/contacto",
  },
} as const;
