import {
  sustainabilityIndustryCopy,
  sustainabilityIndustryPoints,
} from "../../data";
import {
  SustainabilityIndustryCopyElement,
  SustainabilityIndustryDetailElement,
  SustainabilityIndustryElement,
  SustainabilityIndustryEyebrowElement,
  SustainabilityIndustryHeadingElement,
  SustainabilityIndustryInnerElement,
  SustainabilityIndustryLeadElement,
  SustainabilityIndustryPointDescriptionElement,
  SustainabilityIndustryPointElement,
  SustainabilityIndustryPointsElement,
  SustainabilityIndustryPointTitleElement,
  SustainabilityIndustryTitleElement,
} from "./SustainabilityIndustry.elements";

export const SustainabilityIndustry = () => {
  return (
    <SustainabilityIndustryElement aria-labelledby="sustentabilidad-industria-title">
      <SustainabilityIndustryInnerElement>
        <SustainabilityIndustryHeadingElement>
          <SustainabilityIndustryEyebrowElement>
            {sustainabilityIndustryCopy.eyebrow}
          </SustainabilityIndustryEyebrowElement>
          <SustainabilityIndustryTitleElement id="sustentabilidad-industria-title">
            {sustainabilityIndustryCopy.title}
          </SustainabilityIndustryTitleElement>
        </SustainabilityIndustryHeadingElement>
        <SustainabilityIndustryCopyElement>
          <SustainabilityIndustryLeadElement>
            {sustainabilityIndustryCopy.lead}
          </SustainabilityIndustryLeadElement>
          <SustainabilityIndustryDetailElement>
            {sustainabilityIndustryCopy.detail}
          </SustainabilityIndustryDetailElement>
        </SustainabilityIndustryCopyElement>
        <SustainabilityIndustryPointsElement>
          {sustainabilityIndustryPoints.map((point) => (
            <SustainabilityIndustryPointElement key={point.id}>
              <SustainabilityIndustryPointTitleElement>
                {point.title}
              </SustainabilityIndustryPointTitleElement>
              <SustainabilityIndustryPointDescriptionElement>
                {point.description}
              </SustainabilityIndustryPointDescriptionElement>
            </SustainabilityIndustryPointElement>
          ))}
        </SustainabilityIndustryPointsElement>
      </SustainabilityIndustryInnerElement>
    </SustainabilityIndustryElement>
  );
};
