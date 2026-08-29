import { sustainabilitySolutionsCopy } from "../../data";
import {
  SustainabilitySolutionsActionsElement,
  SustainabilitySolutionsCopyElement,
  SustainabilitySolutionsDescriptionElement,
  SustainabilitySolutionsElement,
  SustainabilitySolutionsInnerElement,
  SustainabilitySolutionsPrimaryCtaElement,
  SustainabilitySolutionsSecondaryCtaElement,
  SustainabilitySolutionsTitleElement,
} from "./SustainabilitySolutionsLink.elements";

export const SustainabilitySolutionsLink = () => {
  return (
    <SustainabilitySolutionsElement aria-labelledby="sustentabilidad-soluciones-title">
      <SustainabilitySolutionsInnerElement>
        <SustainabilitySolutionsCopyElement>
          <SustainabilitySolutionsTitleElement id="sustentabilidad-soluciones-title">
            {sustainabilitySolutionsCopy.title}
          </SustainabilitySolutionsTitleElement>
          <SustainabilitySolutionsDescriptionElement>
            {sustainabilitySolutionsCopy.description}
          </SustainabilitySolutionsDescriptionElement>
        </SustainabilitySolutionsCopyElement>
        <SustainabilitySolutionsActionsElement>
          <SustainabilitySolutionsPrimaryCtaElement
            to={sustainabilitySolutionsCopy.primaryCta.to}
          >
            {sustainabilitySolutionsCopy.primaryCta.label}
          </SustainabilitySolutionsPrimaryCtaElement>
          <SustainabilitySolutionsSecondaryCtaElement
            to={sustainabilitySolutionsCopy.secondaryCta.to}
          >
            {sustainabilitySolutionsCopy.secondaryCta.label}
          </SustainabilitySolutionsSecondaryCtaElement>
        </SustainabilitySolutionsActionsElement>
      </SustainabilitySolutionsInnerElement>
    </SustainabilitySolutionsElement>
  );
};
