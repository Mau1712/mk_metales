import { contactHeroCopy } from "../../data";
import {
  ContactHeroDescriptionElement,
  ContactHeroElement,
  ContactHeroEyebrowElement,
  ContactHeroInnerElement,
  ContactHeroSignalItemElement,
  ContactHeroSignalsElement,
  ContactHeroTitleElement,
} from "./ContactHero.elements";

export const ContactHero = () => {
  return (
    <ContactHeroElement aria-labelledby="contacto-hero-title">
      <ContactHeroInnerElement>
        <ContactHeroEyebrowElement>
          {contactHeroCopy.eyebrow}
        </ContactHeroEyebrowElement>
        <ContactHeroTitleElement id="contacto-hero-title">
          {contactHeroCopy.title}
        </ContactHeroTitleElement>
        <ContactHeroDescriptionElement>
          {contactHeroCopy.description}
        </ContactHeroDescriptionElement>
        <ContactHeroSignalsElement>
          {contactHeroCopy.signals.map((signal) => (
            <ContactHeroSignalItemElement key={signal}>
              {signal}
            </ContactHeroSignalItemElement>
          ))}
        </ContactHeroSignalsElement>
      </ContactHeroInnerElement>
    </ContactHeroElement>
  );
};
