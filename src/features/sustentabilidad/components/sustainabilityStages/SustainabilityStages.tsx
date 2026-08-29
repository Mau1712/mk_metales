import { sustainabilityStages, sustainabilityStagesCopy } from "../../data";
import {
  SustainabilityStageCopyElement,
  SustainabilityStageDescriptionElement,
  SustainabilityStageElement,
  SustainabilityStageNumberElement,
  SustainabilityStagesElement,
  SustainabilityStagesInnerElement,
  SustainabilityStagesListElement,
  SustainabilityStagesTitleElement,
  SustainabilityStageTitleElement,
} from "./SustainabilityStages.elements";

export const SustainabilityStages = () => {
  return (
    <SustainabilityStagesElement aria-labelledby="sustentabilidad-etapas-title">
      <SustainabilityStagesInnerElement>
        <SustainabilityStagesTitleElement id="sustentabilidad-etapas-title">
          {sustainabilityStagesCopy.title}
        </SustainabilityStagesTitleElement>
        <SustainabilityStagesListElement>
          {sustainabilityStages.map((stage) => (
            <SustainabilityStageElement key={stage.id}>
              <SustainabilityStageNumberElement>
                {stage.number}
              </SustainabilityStageNumberElement>
              <SustainabilityStageCopyElement>
                <SustainabilityStageTitleElement>
                  {stage.title}
                </SustainabilityStageTitleElement>
                <SustainabilityStageDescriptionElement>
                  {stage.description}
                </SustainabilityStageDescriptionElement>
              </SustainabilityStageCopyElement>
            </SustainabilityStageElement>
          ))}
        </SustainabilityStagesListElement>
      </SustainabilityStagesInnerElement>
    </SustainabilityStagesElement>
  );
};
