import { useLocation } from "react-router-dom";
import { ArrowForwardIcon } from "@assets/icons";
import { companyContact } from "@features/shell";
import { ContactForm } from "../contactForm/ContactForm";
import {
  buildWhatsAppHref,
  contactHours,
  contactIntroCopy,
  contactQuoteCopy,
  contactWhatsAppCopy,
  parseContactPrefill,
} from "../../data";
import {
  ContactChannelsElement,
  ContactChannelDescriptionElement,
  ContactChannelTitleElement,
  ContactContextItemElement,
  ContactContextListElement,
  ContactDetailsElement,
  ContactDetailItemElement,
  ContactInquiryCopyElement,
  ContactInquiryElement,
  ContactInquiryEyebrowElement,
  ContactInquiryFormPanelElement,
  ContactInquiryInnerElement,
  ContactInquiryLeadElement,
  ContactInquiryNoteElement,
  ContactInquiryTitleElement,
  ContactQuoteCtaElement,
  ContactWhatsAppCtaElement,
} from "./ContactInquiry.elements";

export const ContactInquiry = () => {
  const { search, state } = useLocation();
  const prefill = parseContactPrefill(search, state);
  const whatsappHref = companyContact.whatsappUrl
    ? buildWhatsAppHref(
        companyContact.whatsappUrl,
        contactWhatsAppCopy.message,
      )
    : null;

  const details = [
    companyContact.phone
      ? {
          id: "phone",
          label: "Teléfono",
          value: companyContact.phone,
          href: `tel:${companyContact.phone}`,
        }
      : null,
    companyContact.email
      ? {
          id: "email",
          label: "Email",
          value: companyContact.email,
          href: `mailto:${companyContact.email}`,
        }
      : null,
    companyContact.location
      ? {
          id: "location",
          label: "Ubicación",
          value: companyContact.location,
          href: null,
        }
      : null,
    contactHours
      ? {
          id: "hours",
          label: "Horarios",
          value: contactHours,
          href: null,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <ContactInquiryElement aria-labelledby="contacto-inquiry-title">
      <ContactInquiryInnerElement>
        <ContactInquiryCopyElement>
          <ContactInquiryEyebrowElement>
            {contactIntroCopy.eyebrow}
          </ContactInquiryEyebrowElement>
          <ContactInquiryTitleElement id="contacto-inquiry-title">
            {contactIntroCopy.title}
          </ContactInquiryTitleElement>
          <ContactInquiryLeadElement>
            {contactIntroCopy.lead}
          </ContactInquiryLeadElement>
          <ContactContextListElement>
            {contactIntroCopy.contextItems.map((item) => (
              <ContactContextItemElement key={item}>
                {item}
              </ContactContextItemElement>
            ))}
          </ContactContextListElement>
          <ContactInquiryNoteElement>
            {contactIntroCopy.note}
          </ContactInquiryNoteElement>

          {details.length > 0 ? (
            <ContactDetailsElement>
              {details.map((detail) => (
                <ContactDetailItemElement key={detail.id}>
                  <dt>{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </ContactDetailItemElement>
              ))}
            </ContactDetailsElement>
          ) : null}

          {whatsappHref ? (
            <ContactChannelsElement>
              <ContactChannelTitleElement>
                {contactWhatsAppCopy.title}
              </ContactChannelTitleElement>
              <ContactChannelDescriptionElement>
                {contactWhatsAppCopy.description}
              </ContactChannelDescriptionElement>
              <ContactWhatsAppCtaElement
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactWhatsAppCopy.ctaLabel}
              </ContactWhatsAppCtaElement>
            </ContactChannelsElement>
          ) : null}

          <ContactChannelsElement>
            <ContactChannelTitleElement>
              {contactQuoteCopy.title}
            </ContactChannelTitleElement>
            <ContactChannelDescriptionElement>
              {contactQuoteCopy.description}
            </ContactChannelDescriptionElement>
            <ContactQuoteCtaElement to={contactQuoteCopy.cta.to}>
              {contactQuoteCopy.cta.label}
              <ArrowForwardIcon aria-hidden />
            </ContactQuoteCtaElement>
          </ContactChannelsElement>
        </ContactInquiryCopyElement>

        <ContactInquiryFormPanelElement>
          <ContactForm
            key={[
              prefill.materialId,
              prefill.weight,
              prefill.presentation,
              prefill.location,
              prefill.frequency,
            ].join("|")}
            initialMaterialId={prefill.materialId}
            initialWeight={prefill.weight}
            initialPresentation={prefill.presentation}
            initialLocation={prefill.location}
            initialFrequency={prefill.frequency}
          />
        </ContactInquiryFormPanelElement>
      </ContactInquiryInnerElement>
    </ContactInquiryElement>
  );
};
