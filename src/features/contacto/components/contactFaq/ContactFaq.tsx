import { contactFaqCopy, contactFaqItems } from "../../data";
import {
  ContactFaqAnswerElement,
  ContactFaqElement,
  ContactFaqInnerElement,
  ContactFaqItemElement,
  ContactFaqListElement,
  ContactFaqQuestionElement,
  ContactFaqTitleElement,
} from "./ContactFaq.elements";

export const ContactFaq = () => {
  return (
    <ContactFaqElement aria-labelledby="contacto-faq-title">
      <ContactFaqInnerElement>
        <ContactFaqTitleElement id="contacto-faq-title">
          {contactFaqCopy.title}
        </ContactFaqTitleElement>
        <ContactFaqListElement>
          {contactFaqItems.map((item) => (
            <ContactFaqItemElement key={item.id}>
              <ContactFaqQuestionElement>{item.question}</ContactFaqQuestionElement>
              <ContactFaqAnswerElement>{item.answer}</ContactFaqAnswerElement>
            </ContactFaqItemElement>
          ))}
        </ContactFaqListElement>
      </ContactFaqInnerElement>
    </ContactFaqElement>
  );
};
