import {
  solutionsCommercialFacts,
  solutionsInstitutionalCopy,
} from "../../data";
import {
  SolutionsInstitutionalDescriptionElement,
  SolutionsInstitutionalDetailElement,
  SolutionsInstitutionalElement,
  SolutionsInstitutionalEyebrowElement,
  SolutionsInstitutionalFactElement,
  SolutionsInstitutionalFactsElement,
  SolutionsInstitutionalInnerElement,
  SolutionsInstitutionalTitleElement,
} from "./SolutionsInstitutional.elements";

export const SolutionsInstitutional = () => {
  return (
    <SolutionsInstitutionalElement aria-labelledby="soluciones-institutional-title">
      <SolutionsInstitutionalInnerElement>
        <SolutionsInstitutionalEyebrowElement>
          {solutionsInstitutionalCopy.eyebrow}
        </SolutionsInstitutionalEyebrowElement>
        <SolutionsInstitutionalTitleElement id="soluciones-institutional-title">
          {solutionsInstitutionalCopy.title}
        </SolutionsInstitutionalTitleElement>
        <SolutionsInstitutionalDescriptionElement>
          {solutionsInstitutionalCopy.description}
        </SolutionsInstitutionalDescriptionElement>
        <SolutionsInstitutionalDetailElement>
          {solutionsInstitutionalCopy.detail}
        </SolutionsInstitutionalDetailElement>
        {solutionsCommercialFacts.length > 0 ? (
          <SolutionsInstitutionalFactsElement>
            {solutionsCommercialFacts.map((fact) => (
              <SolutionsInstitutionalFactElement key={fact.label}>
                <strong>{fact.label}</strong>
                <span>{fact.value}</span>
              </SolutionsInstitutionalFactElement>
            ))}
          </SolutionsInstitutionalFactsElement>
        ) : null}
      </SolutionsInstitutionalInnerElement>
    </SolutionsInstitutionalElement>
  );
};
