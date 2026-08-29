import { solutionsFlowCopy, solutionsFlowSteps } from "../../data";
import {
  SolutionsFlowDescriptionElement,
  SolutionsFlowElement,
  SolutionsFlowEyebrowElement,
  SolutionsFlowHeaderElement,
  SolutionsFlowInnerElement,
  SolutionsFlowNumberElement,
  SolutionsFlowStepElement,
  SolutionsFlowStepsElement,
  SolutionsFlowTitleElement,
  SolutionsFlowStepTitleElement,
} from "./SolutionsFlow.elements";

export const SolutionsFlow = () => {
  return (
    <SolutionsFlowElement aria-labelledby="soluciones-flow-title">
      <SolutionsFlowInnerElement>
        <SolutionsFlowHeaderElement>
          <SolutionsFlowEyebrowElement>
            {solutionsFlowCopy.eyebrow}
          </SolutionsFlowEyebrowElement>
          <SolutionsFlowTitleElement id="soluciones-flow-title">
            {solutionsFlowCopy.title}
          </SolutionsFlowTitleElement>
        </SolutionsFlowHeaderElement>

        <SolutionsFlowStepsElement>
          {solutionsFlowSteps.map((step) => (
            <SolutionsFlowStepElement key={step.id}>
              <SolutionsFlowNumberElement>
                {step.number}
              </SolutionsFlowNumberElement>
              <SolutionsFlowStepTitleElement>
                {step.title}
              </SolutionsFlowStepTitleElement>
              <SolutionsFlowDescriptionElement>
                {step.description}
              </SolutionsFlowDescriptionElement>
            </SolutionsFlowStepElement>
          ))}
        </SolutionsFlowStepsElement>
      </SolutionsFlowInnerElement>
    </SolutionsFlowElement>
  );
};
