import { WhatsAppIcon } from "@assets/icons";
import { companyContact, whatsAppFloatCopy } from "../../data";
import { WhatsAppFloatElement } from "./WhatsAppFloat.elements";

const buildWhatsAppHref = (baseUrl: string, message: string) => {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    return null;
  }
};

export const WhatsAppFloat = () => {
  if (!companyContact.whatsappUrl) {
    return null;
  }

  const href = buildWhatsAppHref(
    companyContact.whatsappUrl,
    whatsAppFloatCopy.message,
  );

  if (!href) {
    return null;
  }

  return (
    <WhatsAppFloatElement
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsAppFloatCopy.label}
    >
      <WhatsAppIcon aria-hidden />
    </WhatsAppFloatElement>
  );
};
