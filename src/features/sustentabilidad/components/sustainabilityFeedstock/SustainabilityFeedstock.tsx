import { ArrowForwardIcon } from "@assets/icons";
import { sustainabilityFeedstockCopy } from "../../data";
import {
  SustainabilityFeedstockCtaElement,
  SustainabilityFeedstockDetailElement,
  SustainabilityFeedstockElement,
  SustainabilityFeedstockEyebrowElement,
  SustainabilityFeedstockInnerElement,
  SustainabilityFeedstockLeadElement,
  SustainabilityFeedstockTitleElement,
} from "./SustainabilityFeedstock.elements";

export const SustainabilityFeedstock = () => {
  return (
    <SustainabilityFeedstockElement aria-labelledby="sustentabilidad-materias-title">
      <SustainabilityFeedstockInnerElement>
        <SustainabilityFeedstockEyebrowElement>
          {sustainabilityFeedstockCopy.eyebrow}
        </SustainabilityFeedstockEyebrowElement>
        <SustainabilityFeedstockTitleElement id="sustentabilidad-materias-title">
          {sustainabilityFeedstockCopy.title}
        </SustainabilityFeedstockTitleElement>
        <SustainabilityFeedstockLeadElement>
          {sustainabilityFeedstockCopy.lead}
        </SustainabilityFeedstockLeadElement>
        <SustainabilityFeedstockDetailElement>
          {sustainabilityFeedstockCopy.detail}
        </SustainabilityFeedstockDetailElement>
        <SustainabilityFeedstockCtaElement to={sustainabilityFeedstockCopy.cta.to}>
          {sustainabilityFeedstockCopy.cta.label}
          <ArrowForwardIcon aria-hidden />
        </SustainabilityFeedstockCtaElement>
      </SustainabilityFeedstockInnerElement>
    </SustainabilityFeedstockElement>
  );
};
