import { ChevronForwardIcon } from "@assets/icons";
import { quoteHowCopy, quoteHowSteps } from "../../data";
import {
  QuoteHowDescriptionElement,
  QuoteHowElement,
  QuoteHowEyebrowElement,
  QuoteHowHeaderElement,
  QuoteHowInnerElement,
  QuoteHowStepElement,
  QuoteHowStepLabelElement,
  QuoteHowStepsElement,
  QuoteHowTitleElement,
} from "./QuoteHow.elements";

export const QuoteHow = () => {
  return (
    <QuoteHowElement aria-labelledby="cotizador-how-title">
      <QuoteHowInnerElement>
        <QuoteHowHeaderElement>
          <QuoteHowEyebrowElement>{quoteHowCopy.eyebrow}</QuoteHowEyebrowElement>
          <QuoteHowTitleElement id="cotizador-how-title">
            {quoteHowCopy.title}
          </QuoteHowTitleElement>
          <QuoteHowDescriptionElement>
            {quoteHowCopy.description}
          </QuoteHowDescriptionElement>
        </QuoteHowHeaderElement>

        <QuoteHowStepsElement>
          {quoteHowSteps.map((step, index) => (
            <QuoteHowStepElement key={step.id}>
              <QuoteHowStepLabelElement>{step.label}</QuoteHowStepLabelElement>
              {index < quoteHowSteps.length - 1 ? (
                <ChevronForwardIcon aria-hidden />
              ) : null}
            </QuoteHowStepElement>
          ))}
        </QuoteHowStepsElement>
      </QuoteHowInnerElement>
    </QuoteHowElement>
  );
};
