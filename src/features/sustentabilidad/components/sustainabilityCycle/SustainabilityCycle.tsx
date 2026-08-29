import { RecycleBenefitIcon } from "@assets/icons";
import {
  SUSTAINABILITY_CYCLE_ID,
  sustainabilityCycleCopy,
  sustainabilityCycleSteps,
} from "../../data";
import {
  SustainabilityCycleDiagramElement,
  SustainabilityCycleElement,
  SustainabilityCycleHubElement,
  SustainabilityCycleHubLabelElement,
  SustainabilityCycleInnerElement,
  SustainabilityCycleNodeElement,
  SustainabilityCycleNodeIndexElement,
  SustainabilityCycleNodeLabelElement,
  SustainabilityCycleRingElement,
  SustainabilityCycleTitleElement,
  SustainabilityCycleTrackElement,
} from "./SustainabilityCycle.elements";

const CYCLE_COUNT = sustainabilityCycleSteps.length;

export const SustainabilityCycle = () => {
  return (
    <SustainabilityCycleElement
      id={SUSTAINABILITY_CYCLE_ID}
      aria-labelledby="sustentabilidad-ciclo-title"
    >
      <SustainabilityCycleInnerElement>
        <SustainabilityCycleTitleElement id="sustentabilidad-ciclo-title">
          {sustainabilityCycleCopy.title}
        </SustainabilityCycleTitleElement>

        <SustainabilityCycleDiagramElement>
          <SustainabilityCycleTrackElement aria-hidden>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" pathLength="100" />
              <circle
                className="accent"
                cx="50"
                cy="50"
                r="38"
                pathLength="100"
              />
            </svg>
          </SustainabilityCycleTrackElement>

          <SustainabilityCycleHubElement>
            <RecycleBenefitIcon />
            <SustainabilityCycleHubLabelElement>
              {sustainabilityCycleCopy.hubLabel}
            </SustainabilityCycleHubLabelElement>
          </SustainabilityCycleHubElement>

          <SustainabilityCycleRingElement
            aria-label={sustainabilityCycleCopy.ariaLabel}
          >
            {sustainabilityCycleSteps.map((step, index) => (
              <SustainabilityCycleNodeElement
                key={step.id}
                $index={index}
                $count={CYCLE_COUNT}
              >
                <SustainabilityCycleNodeIndexElement>
                  {String(index + 1).padStart(2, "0")}
                </SustainabilityCycleNodeIndexElement>
                <SustainabilityCycleNodeLabelElement>
                  {step.label}
                </SustainabilityCycleNodeLabelElement>
              </SustainabilityCycleNodeElement>
            ))}
          </SustainabilityCycleRingElement>
        </SustainabilityCycleDiagramElement>
      </SustainabilityCycleInnerElement>
    </SustainabilityCycleElement>
  );
};
