import { useId, useState } from "react";
import { ChevronForwardIcon } from "@assets/icons";
import { faqCopy, faqItems } from "../../data";
import {
  FaqAnswerElement,
  FaqAnswerParagraphElement,
  FaqCtaElement,
  FaqDetailElement,
  FaqEyebrowElement,
  FaqIntroElement,
  FaqItemElement,
  FaqLeadElement,
  FaqListElement,
  FaqPanelElement,
  FaqPanelInnerElement,
  FaqQuestionButtonElement,
  FaqQuestionHeadingElement,
  FaqQuestionIconElement,
  FaqSectionElement,
  FaqSectionInnerElement,
  FaqTitleElement,
} from "./FaqSection.elements";

export const FaqSection = () => {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const onToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <FaqSectionElement aria-labelledby="home-faq-title">
      <FaqSectionInnerElement>
        <FaqIntroElement>
          <FaqEyebrowElement>{faqCopy.eyebrow}</FaqEyebrowElement>
          <FaqTitleElement id="home-faq-title">{faqCopy.title}</FaqTitleElement>
          <FaqLeadElement>{faqCopy.intro}</FaqLeadElement>
          <FaqDetailElement>{faqCopy.detail}</FaqDetailElement>
        </FaqIntroElement>

        <FaqListElement>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `${baseId}-${item.id}-button`;
            const panelId = `${baseId}-${item.id}-panel`;

            return (
              <FaqItemElement key={item.id} $open={isOpen}>
                <FaqQuestionHeadingElement>
                  <FaqQuestionButtonElement
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => onToggle(item.id)}
                  >
                    {item.question}
                    <FaqQuestionIconElement $open={isOpen} aria-hidden>
                      <ChevronForwardIcon />
                    </FaqQuestionIconElement>
                  </FaqQuestionButtonElement>
                </FaqQuestionHeadingElement>
                <FaqPanelElement
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <FaqPanelInnerElement>
                    <FaqAnswerElement>
                      {item.paragraphs.map((paragraph) => (
                        <FaqAnswerParagraphElement key={paragraph}>
                          {paragraph}
                        </FaqAnswerParagraphElement>
                      ))}
                    </FaqAnswerElement>
                  </FaqPanelInnerElement>
                </FaqPanelElement>
              </FaqItemElement>
            );
          })}
        </FaqListElement>

        <FaqCtaElement to={faqCopy.cta.to}>{faqCopy.cta.label}</FaqCtaElement>
      </FaqSectionInnerElement>
    </FaqSectionElement>
  );
};
