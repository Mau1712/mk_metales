import {
  solutionsRecurringConcepts,
  solutionsRecurringCopy,
} from "../../data";
import {
  SolutionsRecurringConceptDescriptionElement,
  SolutionsRecurringConceptElement,
  SolutionsRecurringConceptsElement,
  SolutionsRecurringConceptTitleElement,
  SolutionsRecurringDescriptionElement,
  SolutionsRecurringElement,
  SolutionsRecurringInnerElement,
  SolutionsRecurringTitleElement,
} from "./SolutionsRecurring.elements";

export const SolutionsRecurring = () => {
  return (
    <SolutionsRecurringElement aria-labelledby="soluciones-recurring-title">
      <SolutionsRecurringInnerElement>
        <SolutionsRecurringTitleElement id="soluciones-recurring-title">
          {solutionsRecurringCopy.title}
        </SolutionsRecurringTitleElement>
        <SolutionsRecurringDescriptionElement>
          {solutionsRecurringCopy.description}
        </SolutionsRecurringDescriptionElement>
        <SolutionsRecurringConceptsElement>
          {solutionsRecurringConcepts.map((concept) => (
            <SolutionsRecurringConceptElement key={concept.id}>
              <SolutionsRecurringConceptTitleElement>
                {concept.title}
              </SolutionsRecurringConceptTitleElement>
              <SolutionsRecurringConceptDescriptionElement>
                {concept.description}
              </SolutionsRecurringConceptDescriptionElement>
            </SolutionsRecurringConceptElement>
          ))}
        </SolutionsRecurringConceptsElement>
      </SolutionsRecurringInnerElement>
    </SolutionsRecurringElement>
  );
};
