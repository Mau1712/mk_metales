import { ArrowForwardIcon } from "@assets/icons";
import { solutionsCircularCopy } from "../../data";
import {
  SolutionsCircularCtaElement,
  SolutionsCircularDescriptionElement,
  SolutionsCircularDetailElement,
  SolutionsCircularElement,
  SolutionsCircularEyebrowElement,
  SolutionsCircularInnerElement,
  SolutionsCircularTitleElement,
} from "./SolutionsCircular.elements";

export const SolutionsCircular = () => {
  return (
    <SolutionsCircularElement aria-labelledby="soluciones-circular-title">
      <SolutionsCircularInnerElement>
        <SolutionsCircularEyebrowElement>
          {solutionsCircularCopy.eyebrow}
        </SolutionsCircularEyebrowElement>
        <SolutionsCircularTitleElement id="soluciones-circular-title">
          {solutionsCircularCopy.title}
        </SolutionsCircularTitleElement>
        <SolutionsCircularDescriptionElement>
          {solutionsCircularCopy.description}
        </SolutionsCircularDescriptionElement>
        <SolutionsCircularDetailElement>
          {solutionsCircularCopy.detail}
        </SolutionsCircularDetailElement>
        <SolutionsCircularCtaElement to={solutionsCircularCopy.cta.to}>
          {solutionsCircularCopy.cta.label}
          <ArrowForwardIcon aria-hidden />
        </SolutionsCircularCtaElement>
      </SolutionsCircularInnerElement>
    </SolutionsCircularElement>
  );
};
