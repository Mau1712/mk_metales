import { ArrowForwardIcon } from "@assets/icons";
import {
  solutionsMaterialRefs,
  solutionsMaterialsCopy,
} from "../../data";
import {
  SolutionsMaterialsChipElement,
  SolutionsMaterialsChipsElement,
  SolutionsMaterialsCtaElement,
  SolutionsMaterialsDescriptionElement,
  SolutionsMaterialsNoteElement,
  SolutionsMaterialsNoteInnerElement,
  SolutionsMaterialsTitleElement,
} from "./SolutionsMaterialsNote.elements";

export const SolutionsMaterialsNote = () => {
  return (
    <SolutionsMaterialsNoteElement aria-labelledby="soluciones-materials-title">
      <SolutionsMaterialsNoteInnerElement>
        <SolutionsMaterialsTitleElement id="soluciones-materials-title">
          {solutionsMaterialsCopy.title}
        </SolutionsMaterialsTitleElement>
        <SolutionsMaterialsDescriptionElement>
          {solutionsMaterialsCopy.description}
        </SolutionsMaterialsDescriptionElement>
        <SolutionsMaterialsChipsElement>
          {solutionsMaterialRefs.map((material) => (
            <SolutionsMaterialsChipElement key={material}>
              {material}
            </SolutionsMaterialsChipElement>
          ))}
          <SolutionsMaterialsChipElement $muted>
            {solutionsMaterialsCopy.extrasLabel}
          </SolutionsMaterialsChipElement>
        </SolutionsMaterialsChipsElement>
        <SolutionsMaterialsCtaElement to={solutionsMaterialsCopy.cta.to}>
          {solutionsMaterialsCopy.cta.label}
          <ArrowForwardIcon aria-hidden />
        </SolutionsMaterialsCtaElement>
      </SolutionsMaterialsNoteInnerElement>
    </SolutionsMaterialsNoteElement>
  );
};
