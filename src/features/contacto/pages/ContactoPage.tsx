import { useDocumentMeta } from "@app/seo";
import { ContactClosingCta } from "../components/contactClosingCta/ContactClosingCta";
import { ContactFaq } from "../components/contactFaq/ContactFaq";
import { ContactHero } from "../components/contactHero/ContactHero";
import { ContactInquiry } from "../components/contactInquiry/ContactInquiry";
import { contactoPageMeta } from "../data";
import { ContactoPageElement } from "./ContactoPage.elements";

export const ContactoPage = () => {
  useDocumentMeta(contactoPageMeta);

  return (
    <ContactoPageElement>
      <ContactHero />
      <ContactInquiry />
      <ContactFaq />
      <ContactClosingCta />
    </ContactoPageElement>
  );
};
