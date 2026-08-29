import { solutionsPrepCopy, solutionsPrepItems } from "../../data";
import {
  SolutionsPrepCtaElement,
  SolutionsPrepElement,
  SolutionsPrepEyebrowElement,
  SolutionsPrepHeaderElement,
  SolutionsPrepInnerElement,
  SolutionsPrepItemElement,
  SolutionsPrepListElement,
  SolutionsPrepNoteElement,
  SolutionsPrepTitleElement,
} from "./SolutionsPrep.elements";

export const SolutionsPrep = () => {
  return (
    <SolutionsPrepElement aria-labelledby="soluciones-prep-title">
      <SolutionsPrepInnerElement>
        <SolutionsPrepHeaderElement>
          <SolutionsPrepEyebrowElement>
            {solutionsPrepCopy.eyebrow}
          </SolutionsPrepEyebrowElement>
          <SolutionsPrepTitleElement id="soluciones-prep-title">
            {solutionsPrepCopy.title}
          </SolutionsPrepTitleElement>
          <SolutionsPrepNoteElement>
            {solutionsPrepCopy.note}
          </SolutionsPrepNoteElement>
          <SolutionsPrepCtaElement to={solutionsPrepCopy.cta.to}>
            {solutionsPrepCopy.cta.label}
          </SolutionsPrepCtaElement>
        </SolutionsPrepHeaderElement>

        <SolutionsPrepListElement>
          {solutionsPrepItems.map((item) => (
            <SolutionsPrepItemElement key={item}>{item}</SolutionsPrepItemElement>
          ))}
        </SolutionsPrepListElement>
      </SolutionsPrepInnerElement>
    </SolutionsPrepElement>
  );
};
