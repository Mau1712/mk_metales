import { solutionsSectors, solutionsSectorsCopy } from "../../data";
import {
  SolutionsSectorDescriptionElement,
  SolutionsSectorElement,
  SolutionsSectorTitleElement,
  SolutionsSectorsElement,
  SolutionsSectorsHeaderElement,
  SolutionsSectorsInnerElement,
  SolutionsSectorsListElement,
  SolutionsSectorsTitleElement,
  SolutionsSectorsEyebrowElement,
} from "./SolutionsSectors.elements";

export const SolutionsSectors = () => {
  return (
    <SolutionsSectorsElement aria-labelledby="soluciones-sectors-title">
      <SolutionsSectorsInnerElement>
        <SolutionsSectorsHeaderElement>
          <SolutionsSectorsEyebrowElement>
            {solutionsSectorsCopy.eyebrow}
          </SolutionsSectorsEyebrowElement>
          <SolutionsSectorsTitleElement id="soluciones-sectors-title">
            {solutionsSectorsCopy.title}
          </SolutionsSectorsTitleElement>
        </SolutionsSectorsHeaderElement>

        <SolutionsSectorsListElement>
          {solutionsSectors.map((sector) => (
            <SolutionsSectorElement key={sector.id}>
              <SolutionsSectorTitleElement>
                {sector.title}
              </SolutionsSectorTitleElement>
              <SolutionsSectorDescriptionElement>
                {sector.description}
              </SolutionsSectorDescriptionElement>
            </SolutionsSectorElement>
          ))}
        </SolutionsSectorsListElement>
      </SolutionsSectorsInnerElement>
    </SolutionsSectorsElement>
  );
};
