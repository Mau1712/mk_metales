import { ArrowForwardIcon } from "@assets/icons";
import { materialsCircularCopy } from "../../data";
import {
  MaterialsCircularCtaElement,
  MaterialsCircularDescriptionElement,
  MaterialsCircularNoteElement,
  MaterialsCircularNoteInnerElement,
  MaterialsCircularTitleElement,
} from "./MaterialsCircularNote.elements";

export const MaterialsCircularNote = () => {
  return (
    <MaterialsCircularNoteElement aria-labelledby="materiales-circular-title">
      <MaterialsCircularNoteInnerElement>
        <MaterialsCircularTitleElement id="materiales-circular-title">
          {materialsCircularCopy.title}
        </MaterialsCircularTitleElement>
        <MaterialsCircularDescriptionElement>
          {materialsCircularCopy.description}
        </MaterialsCircularDescriptionElement>
        <MaterialsCircularCtaElement to={materialsCircularCopy.cta.to}>
          {materialsCircularCopy.cta.label}
          <ArrowForwardIcon aria-hidden />
        </MaterialsCircularCtaElement>
      </MaterialsCircularNoteInnerElement>
    </MaterialsCircularNoteElement>
  );
};
