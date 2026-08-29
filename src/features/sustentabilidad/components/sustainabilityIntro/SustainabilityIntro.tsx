import { sustainabilityIntroCopy } from "../../data";
import {
  SustainabilityIntroCopyElement,
  SustainabilityIntroDetailElement,
  SustainabilityIntroElement,
  SustainabilityIntroEyebrowElement,
  SustainabilityIntroHeadingElement,
  SustainabilityIntroInnerElement,
  SustainabilityIntroLeadElement,
  SustainabilityIntroStatementElement,
  SustainabilityIntroTitleElement,
} from "./SustainabilityIntro.elements";

export const SustainabilityIntro = () => {
  return (
    <SustainabilityIntroElement aria-labelledby="sustentabilidad-intro-title">
      <SustainabilityIntroInnerElement>
        <SustainabilityIntroHeadingElement>
          <SustainabilityIntroEyebrowElement>
            {sustainabilityIntroCopy.eyebrow}
          </SustainabilityIntroEyebrowElement>
          <SustainabilityIntroTitleElement id="sustentabilidad-intro-title">
            {sustainabilityIntroCopy.title}
          </SustainabilityIntroTitleElement>
        </SustainabilityIntroHeadingElement>
        <SustainabilityIntroCopyElement>
          <SustainabilityIntroLeadElement>
            {sustainabilityIntroCopy.lead}
          </SustainabilityIntroLeadElement>
          <SustainabilityIntroDetailElement>
            {sustainabilityIntroCopy.detail}
          </SustainabilityIntroDetailElement>
        </SustainabilityIntroCopyElement>
        <SustainabilityIntroStatementElement>
          {sustainabilityIntroCopy.statement}
        </SustainabilityIntroStatementElement>
      </SustainabilityIntroInnerElement>
    </SustainabilityIntroElement>
  );
};
