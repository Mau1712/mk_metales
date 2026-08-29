import {
  sustainabilityValueConcepts,
  sustainabilityValueCopy,
} from "../../data";
import {
  SustainabilityValueConceptDescriptionElement,
  SustainabilityValueConceptElement,
  SustainabilityValueConceptsElement,
  SustainabilityValueConceptTitleElement,
  SustainabilityValueElement,
  SustainabilityValueEyebrowElement,
  SustainabilityValueInnerElement,
  SustainabilityValueTitleElement,
} from "./SustainabilityValue.elements";

export const SustainabilityValue = () => {
  return (
    <SustainabilityValueElement aria-labelledby="sustentabilidad-valor-title">
      <SustainabilityValueInnerElement>
        <SustainabilityValueEyebrowElement>
          {sustainabilityValueCopy.eyebrow}
        </SustainabilityValueEyebrowElement>
        <SustainabilityValueTitleElement id="sustentabilidad-valor-title">
          {sustainabilityValueCopy.title}
        </SustainabilityValueTitleElement>
        <SustainabilityValueConceptsElement>
          {sustainabilityValueConcepts.map((concept) => (
            <SustainabilityValueConceptElement key={concept.id}>
              <SustainabilityValueConceptTitleElement>
                {concept.title}
              </SustainabilityValueConceptTitleElement>
              <SustainabilityValueConceptDescriptionElement>
                {concept.description}
              </SustainabilityValueConceptDescriptionElement>
            </SustainabilityValueConceptElement>
          ))}
        </SustainabilityValueConceptsElement>
      </SustainabilityValueInnerElement>
    </SustainabilityValueElement>
  );
};
