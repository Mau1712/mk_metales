import { materialsClosingCopy } from "../../data";
import {
  MaterialsClosingActionsElement,
  MaterialsClosingCopyElement,
  MaterialsClosingCtaElement,
  MaterialsClosingDescriptionElement,
  MaterialsClosingEyebrowElement,
  MaterialsClosingInnerElement,
  MaterialsClosingPrimaryCtaElement,
  MaterialsClosingSecondaryCtaElement,
  MaterialsClosingTitleElement,
} from "./MaterialsClosingCta.elements";

export const MaterialsClosingCta = () => {
  return (
    <MaterialsClosingCtaElement aria-labelledby="materiales-closing-title">
      <MaterialsClosingInnerElement>
        <MaterialsClosingCopyElement>
          <MaterialsClosingEyebrowElement>
            {materialsClosingCopy.eyebrow}
          </MaterialsClosingEyebrowElement>
          <MaterialsClosingTitleElement id="materiales-closing-title">
            {materialsClosingCopy.title}
          </MaterialsClosingTitleElement>
          <MaterialsClosingDescriptionElement>
            {materialsClosingCopy.description}
          </MaterialsClosingDescriptionElement>
        </MaterialsClosingCopyElement>

        <MaterialsClosingActionsElement>
          <MaterialsClosingPrimaryCtaElement
            to={materialsClosingCopy.primaryCta.to}
          >
            {materialsClosingCopy.primaryCta.label}
          </MaterialsClosingPrimaryCtaElement>
          <MaterialsClosingSecondaryCtaElement
            to={materialsClosingCopy.secondaryCta.to}
          >
            {materialsClosingCopy.secondaryCta.label}
          </MaterialsClosingSecondaryCtaElement>
        </MaterialsClosingActionsElement>
      </MaterialsClosingInnerElement>
    </MaterialsClosingCtaElement>
  );
};
