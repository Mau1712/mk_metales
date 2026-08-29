import { sustainabilityBusinessCopy } from "../../data";
import {
  SustainabilityBusinessCopyElement,
  SustainabilityBusinessDetailElement,
  SustainabilityBusinessElement,
  SustainabilityBusinessInnerElement,
  SustainabilityBusinessLeadElement,
  SustainabilityBusinessTitleElement,
} from "./SustainabilityBusiness.elements";

export const SustainabilityBusiness = () => {
  return (
    <SustainabilityBusinessElement aria-labelledby="sustentabilidad-negocio-title">
      <SustainabilityBusinessInnerElement>
        <SustainabilityBusinessTitleElement id="sustentabilidad-negocio-title">
          {sustainabilityBusinessCopy.title}
        </SustainabilityBusinessTitleElement>
        <SustainabilityBusinessCopyElement>
          <SustainabilityBusinessLeadElement>
            {sustainabilityBusinessCopy.lead}
          </SustainabilityBusinessLeadElement>
          <SustainabilityBusinessDetailElement>
            {sustainabilityBusinessCopy.detail}
          </SustainabilityBusinessDetailElement>
        </SustainabilityBusinessCopyElement>
      </SustainabilityBusinessInnerElement>
    </SustainabilityBusinessElement>
  );
};
