import { sustainabilityClosingCopy } from "../../data";
import {
  SustainabilityClosingActionsElement,
  SustainabilityClosingCopyElement,
  SustainabilityClosingCtaElement,
  SustainabilityClosingDescriptionElement,
  SustainabilityClosingEyebrowElement,
  SustainabilityClosingInnerElement,
  SustainabilityClosingPrimaryCtaElement,
  SustainabilityClosingSecondaryCtaElement,
  SustainabilityClosingTitleElement,
} from "./SustainabilityClosingCta.elements";

export const SustainabilityClosingCta = () => {
  return (
    <SustainabilityClosingCtaElement aria-labelledby="sustentabilidad-closing-title">
      <SustainabilityClosingInnerElement>
        <SustainabilityClosingCopyElement>
          <SustainabilityClosingEyebrowElement>
            {sustainabilityClosingCopy.eyebrow}
          </SustainabilityClosingEyebrowElement>
          <SustainabilityClosingTitleElement id="sustentabilidad-closing-title">
            {sustainabilityClosingCopy.title}
          </SustainabilityClosingTitleElement>
          <SustainabilityClosingDescriptionElement>
            {sustainabilityClosingCopy.description}
          </SustainabilityClosingDescriptionElement>
        </SustainabilityClosingCopyElement>
        <SustainabilityClosingActionsElement>
          <SustainabilityClosingPrimaryCtaElement
            to={sustainabilityClosingCopy.primaryCta.to}
          >
            {sustainabilityClosingCopy.primaryCta.label}
          </SustainabilityClosingPrimaryCtaElement>
          <SustainabilityClosingSecondaryCtaElement
            to={sustainabilityClosingCopy.secondaryCta.to}
          >
            {sustainabilityClosingCopy.secondaryCta.label}
          </SustainabilityClosingSecondaryCtaElement>
        </SustainabilityClosingActionsElement>
      </SustainabilityClosingInnerElement>
    </SustainabilityClosingCtaElement>
  );
};
