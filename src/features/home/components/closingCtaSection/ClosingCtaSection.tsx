import { closingCtaCopy } from "../../data";
import {
  ClosingCtaActionsElement,
  ClosingCtaButtonsElement,
  ClosingCtaCopyElement,
  ClosingCtaDescriptionElement,
  ClosingCtaEyebrowElement,
  ClosingCtaInnerElement,
  ClosingCtaPrimaryElement,
  ClosingCtaSecondaryElement,
  ClosingCtaSectionElement,
  ClosingCtaSignalItemElement,
  ClosingCtaSignalsElement,
  ClosingCtaTitleElement,
} from "./ClosingCtaSection.elements";

export const ClosingCtaSection = () => {
  return (
    <ClosingCtaSectionElement aria-labelledby="home-closing-cta-title">
      <ClosingCtaInnerElement>
        <ClosingCtaCopyElement>
          <ClosingCtaEyebrowElement>
            {closingCtaCopy.eyebrow}
          </ClosingCtaEyebrowElement>
          <ClosingCtaTitleElement id="home-closing-cta-title">
            {closingCtaCopy.title}
          </ClosingCtaTitleElement>
          <ClosingCtaDescriptionElement>
            {closingCtaCopy.description}
          </ClosingCtaDescriptionElement>
        </ClosingCtaCopyElement>

        <ClosingCtaActionsElement>
          <ClosingCtaButtonsElement>
            <ClosingCtaPrimaryElement to={closingCtaCopy.primaryCta.to}>
              {closingCtaCopy.primaryCta.label}
            </ClosingCtaPrimaryElement>
            <ClosingCtaSecondaryElement to={closingCtaCopy.secondaryCta.to}>
              {closingCtaCopy.secondaryCta.label}
            </ClosingCtaSecondaryElement>
          </ClosingCtaButtonsElement>
          <ClosingCtaSignalsElement>
            {closingCtaCopy.signals.map((signal) => (
              <ClosingCtaSignalItemElement key={signal}>
                {signal}
              </ClosingCtaSignalItemElement>
            ))}
          </ClosingCtaSignalsElement>
        </ClosingCtaActionsElement>
      </ClosingCtaInnerElement>
    </ClosingCtaSectionElement>
  );
};
