import { solutionsClosingCopy } from "../../data";
import {
  SolutionsClosingActionsElement,
  SolutionsClosingCopyElement,
  SolutionsClosingCtaElement,
  SolutionsClosingDescriptionElement,
  SolutionsClosingEyebrowElement,
  SolutionsClosingInnerElement,
  SolutionsClosingPrimaryCtaElement,
  SolutionsClosingSecondaryCtaElement,
  SolutionsClosingTitleElement,
} from "./SolutionsClosingCta.elements";

export const SolutionsClosingCta = () => {
  return (
    <SolutionsClosingCtaElement aria-labelledby="soluciones-closing-title">
      <SolutionsClosingInnerElement>
        <SolutionsClosingCopyElement>
          <SolutionsClosingEyebrowElement>
            {solutionsClosingCopy.eyebrow}
          </SolutionsClosingEyebrowElement>
          <SolutionsClosingTitleElement id="soluciones-closing-title">
            {solutionsClosingCopy.title}
          </SolutionsClosingTitleElement>
          <SolutionsClosingDescriptionElement>
            {solutionsClosingCopy.description}
          </SolutionsClosingDescriptionElement>
        </SolutionsClosingCopyElement>

        <SolutionsClosingActionsElement>
          <SolutionsClosingPrimaryCtaElement
            to={solutionsClosingCopy.primaryCta.to}
          >
            {solutionsClosingCopy.primaryCta.label}
          </SolutionsClosingPrimaryCtaElement>
          <SolutionsClosingSecondaryCtaElement
            to={solutionsClosingCopy.secondaryCta.to}
          >
            {solutionsClosingCopy.secondaryCta.label}
          </SolutionsClosingSecondaryCtaElement>
        </SolutionsClosingActionsElement>
      </SolutionsClosingInnerElement>
    </SolutionsClosingCtaElement>
  );
};
