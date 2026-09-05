export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Materiales", path: "/materiales" },
  { label: "Soluciones industriales", path: "/soluciones-industriales" },
  { label: "Sustentabilidad", path: "/sustentabilidad" },
  { label: "Cotizador", path: "/cotizador" },
  { label: "Contacto", path: "/contacto" },
];

export const footerNavItems: NavItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Materiales", path: "/materiales" },
  { label: "Soluciones industriales", path: "/soluciones-industriales" },
  { label: "Sustentabilidad", path: "/sustentabilidad" },
  { label: "Cotizador", path: "/cotizador" },
  { label: "Contacto", path: "/contacto" },
];

export const footerCopy = {
  tagline: "Compra y reciclaje de scrap industrial metálico.",
  description:
    "Recuperamos materiales para reincorporarlos al circuito productivo.",
  contactPrompt: "¿Querés evaluar una operación?",
  contactCta: {
    label: "Contactar a MK Metales",
    to: "/contacto",
  },
  meta: "Industria · Recuperación · Economía circular",
} as const;

export const footerMaterials: ReadonlyArray<NavItem> = [
  { label: "Bronce", path: "/materiales" },
  { label: "Aluminio", path: "/materiales" },
  { label: "Plomo", path: "/materiales" },
  { label: "Zinc", path: "/materiales" },
  { label: "Acero inoxidable", path: "/materiales" },
  { label: "Virutas industriales", path: "/materiales" },
];

export interface CompanyContact {
  whatsappUrl: string | null;
  phone: string | null;
  email: string | null;
  location: string | null;
}

export const companyContact: CompanyContact = {
  whatsappUrl: "https://wa.me/5491124783732",
  phone: "+54 11 5003-1955",
  email: "info@mkmetales.com",
  location: "Buenos Aires",
};

export const whatsAppFloatCopy = {
  label: "Hablar por WhatsApp",
  message:
    "Hola, quiero consultar por una operación de scrap industrial.",
} as const;

export const footerSocialLinks: ReadonlyArray<{
  label: string;
  href: string;
}> = [];
