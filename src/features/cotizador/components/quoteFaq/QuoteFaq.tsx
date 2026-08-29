import { quoteFaqCopy, quoteFaqItems } from "../../data";
import {
  QuoteFaqAnswerElement,
  QuoteFaqElement,
  QuoteFaqInnerElement,
  QuoteFaqItemElement,
  QuoteFaqListElement,
  QuoteFaqQuestionElement,
  QuoteFaqTitleElement,
} from "./QuoteFaq.elements";

export const QuoteFaq = () => {
  return (
    <QuoteFaqElement aria-labelledby="cotizador-faq-title">
      <QuoteFaqInnerElement>
        <QuoteFaqTitleElement id="cotizador-faq-title">
          {quoteFaqCopy.title}
        </QuoteFaqTitleElement>
        <QuoteFaqListElement>
          {quoteFaqItems.map((item) => (
            <QuoteFaqItemElement key={item.id}>
              <QuoteFaqQuestionElement>{item.question}</QuoteFaqQuestionElement>
              <QuoteFaqAnswerElement>{item.answer}</QuoteFaqAnswerElement>
            </QuoteFaqItemElement>
          ))}
        </QuoteFaqListElement>
      </QuoteFaqInnerElement>
    </QuoteFaqElement>
  );
};
