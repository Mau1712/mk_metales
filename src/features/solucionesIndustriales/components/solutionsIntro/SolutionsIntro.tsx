import { solutionsIntroCopy } from "../../data";
import {
  SolutionsIntroCopyElement,
  SolutionsIntroDetailElement,
  SolutionsIntroElement,
  SolutionsIntroEyebrowElement,
  SolutionsIntroHeadingElement,
  SolutionsIntroInnerElement,
  SolutionsIntroLeadElement,
  SolutionsIntroStatementElement,
  SolutionsIntroTitleElement,
} from "./SolutionsIntro.elements";

export const SolutionsIntro = () => {
  return (
    <SolutionsIntroElement aria-labelledby="soluciones-intro-title">
      <SolutionsIntroInnerElement>
        <SolutionsIntroHeadingElement>
          <SolutionsIntroEyebrowElement>
            {solutionsIntroCopy.eyebrow}
          </SolutionsIntroEyebrowElement>
          <SolutionsIntroTitleElement id="soluciones-intro-title">
            {solutionsIntroCopy.title}
          </SolutionsIntroTitleElement>
        </SolutionsIntroHeadingElement>
        <SolutionsIntroCopyElement>
          <SolutionsIntroLeadElement>
            {solutionsIntroCopy.lead}
          </SolutionsIntroLeadElement>
          <SolutionsIntroDetailElement>
            {solutionsIntroCopy.detail}
          </SolutionsIntroDetailElement>
        </SolutionsIntroCopyElement>
        <SolutionsIntroStatementElement>
          {solutionsIntroCopy.statement}
        </SolutionsIntroStatementElement>
      </SolutionsIntroInnerElement>
    </SolutionsIntroElement>
  );
};
