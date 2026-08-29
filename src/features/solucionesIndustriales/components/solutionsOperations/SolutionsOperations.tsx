import { solutionsOperations, solutionsOperationsCopy } from "../../data";
import {
  SolutionsOperationCopyElement,
  SolutionsOperationDescriptionElement,
  SolutionsOperationElement,
  SolutionsOperationNumberElement,
  SolutionsOperationsElement,
  SolutionsOperationsGridElement,
  SolutionsOperationsInnerElement,
  SolutionsOperationsTitleElement,
  SolutionsOperationTitleElement,
} from "./SolutionsOperations.elements";

export const SolutionsOperations = () => {
  return (
    <SolutionsOperationsElement aria-labelledby="soluciones-operations-title">
      <SolutionsOperationsInnerElement>
        <SolutionsOperationsTitleElement id="soluciones-operations-title">
          {solutionsOperationsCopy.title}
        </SolutionsOperationsTitleElement>
        <SolutionsOperationsGridElement>
          {solutionsOperations.map((operation) => (
            <SolutionsOperationElement key={operation.id}>
              <SolutionsOperationNumberElement>
                {operation.number}
              </SolutionsOperationNumberElement>
              <SolutionsOperationCopyElement>
                <SolutionsOperationTitleElement>
                  {operation.title}
                </SolutionsOperationTitleElement>
                <SolutionsOperationDescriptionElement>
                  {operation.description}
                </SolutionsOperationDescriptionElement>
              </SolutionsOperationCopyElement>
            </SolutionsOperationElement>
          ))}
        </SolutionsOperationsGridElement>
      </SolutionsOperationsInnerElement>
    </SolutionsOperationsElement>
  );
};
