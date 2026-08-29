import {
  CubeIcon,
  IndustryIcon,
  LayersIcon,
  SearchIcon,
} from "@assets/icons";
import {
  materialsEvaluationCopy,
  materialsEvaluationFactors,
  type MaterialsEvaluationIcon,
} from "../../data";
import {
  MaterialsEvaluationElement,
  MaterialsEvaluationEyebrowElement,
  MaterialsEvaluationFactorCopyElement,
  MaterialsEvaluationFactorDescriptionElement,
  MaterialsEvaluationFactorElement,
  MaterialsEvaluationFactorIconElement,
  MaterialsEvaluationFactorNumberElement,
  MaterialsEvaluationFactorTitleElement,
  MaterialsEvaluationGridElement,
  MaterialsEvaluationHeaderElement,
  MaterialsEvaluationInnerElement,
  MaterialsEvaluationIntroElement,
  MaterialsEvaluationTitleElement,
} from "./MaterialsEvaluation.elements";

const factorIcons: Record<MaterialsEvaluationIcon, typeof SearchIcon> = {
  search: SearchIcon,
  layers: LayersIcon,
  cube: CubeIcon,
  industry: IndustryIcon,
};

export const MaterialsEvaluation = () => {
  return (
    <MaterialsEvaluationElement aria-labelledby="materiales-evaluation-title">
      <MaterialsEvaluationInnerElement>
        <MaterialsEvaluationHeaderElement>
          <MaterialsEvaluationEyebrowElement>
            {materialsEvaluationCopy.eyebrow}
          </MaterialsEvaluationEyebrowElement>
          <MaterialsEvaluationTitleElement id="materiales-evaluation-title">
            {materialsEvaluationCopy.title}
          </MaterialsEvaluationTitleElement>
          <MaterialsEvaluationIntroElement>
            {materialsEvaluationCopy.intro}
          </MaterialsEvaluationIntroElement>
        </MaterialsEvaluationHeaderElement>

        <MaterialsEvaluationGridElement>
          {materialsEvaluationFactors.map((factor) => {
            const Icon = factorIcons[factor.icon];

            return (
              <MaterialsEvaluationFactorElement key={factor.id}>
                <MaterialsEvaluationFactorNumberElement>
                  {factor.number}
                </MaterialsEvaluationFactorNumberElement>
                <MaterialsEvaluationFactorIconElement aria-hidden>
                  <Icon />
                </MaterialsEvaluationFactorIconElement>
                <MaterialsEvaluationFactorCopyElement>
                  <MaterialsEvaluationFactorTitleElement>
                    {factor.title}
                  </MaterialsEvaluationFactorTitleElement>
                  <MaterialsEvaluationFactorDescriptionElement>
                    {factor.description}
                  </MaterialsEvaluationFactorDescriptionElement>
                </MaterialsEvaluationFactorCopyElement>
              </MaterialsEvaluationFactorElement>
            );
          })}
        </MaterialsEvaluationGridElement>
      </MaterialsEvaluationInnerElement>
    </MaterialsEvaluationElement>
  );
};
