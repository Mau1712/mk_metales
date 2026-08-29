import { CONTACT_FORM_ID, contactClosingCopy } from "../../data";
import {
  ContactClosingCtaElement,
  ContactClosingElement,
  ContactClosingInnerElement,
  ContactClosingTitleElement,
} from "./ContactClosingCta.elements";

export const ContactClosingCta = () => {
  return (
    <ContactClosingElement aria-labelledby="contacto-closing-title">
      <ContactClosingInnerElement>
        <ContactClosingTitleElement id="contacto-closing-title">
          {contactClosingCopy.title}
        </ContactClosingTitleElement>
        <ContactClosingCtaElement
          to={{ pathname: "/contacto", hash: `#${CONTACT_FORM_ID}` }}
        >
          {contactClosingCopy.ctaLabel}
        </ContactClosingCtaElement>
      </ContactClosingInnerElement>
    </ContactClosingElement>
  );
};
