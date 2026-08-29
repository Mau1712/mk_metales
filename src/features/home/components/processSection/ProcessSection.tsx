import {
  CalculatorIcon,
  CalendarIcon,
  RecycleBenefitIcon,
  SearchIcon,
} from "@assets/icons";
import { processCopy, processSteps } from "../../data";
import {
  ProcessClosingElement,
  ProcessCtaElement,
  ProcessEyebrowElement,
  ProcessHeaderElement,
  ProcessIntroElement,
  ProcessListElement,
  ProcessSectionElement,
  ProcessSectionInnerElement,
  ProcessStepDescriptionElement,
  ProcessStepElement,
  ProcessStepMarkerElement,
  ProcessStepNumberElement,
  ProcessStepCopyElement,
  ProcessStepTitleElement,
  ProcessTitleElement,
} from "./ProcessSection.elements";

const stepIcons = {
  search: SearchIcon,
  calculator: CalculatorIcon,
  calendar: CalendarIcon,
  recycle: RecycleBenefitIcon,
} as const;

export const ProcessSection = () => {
  return (
    <ProcessSectionElement aria-labelledby="home-process-title">
      <ProcessSectionInnerElement>
        <ProcessHeaderElement>
          <ProcessEyebrowElement>{processCopy.eyebrow}</ProcessEyebrowElement>
          <ProcessTitleElement id="home-process-title">
            {processCopy.title}
          </ProcessTitleElement>
          <ProcessIntroElement>{processCopy.intro}</ProcessIntroElement>
        </ProcessHeaderElement>

        <ProcessListElement>
          {processSteps.map((step) => {
            const Icon = stepIcons[step.icon];

            return (
              <ProcessStepElement key={step.id}>
                <ProcessStepNumberElement $highlight={step.highlight}>
                  {step.number}
                </ProcessStepNumberElement>
                <ProcessStepMarkerElement
                  $highlight={step.highlight}
                  aria-hidden
                >
                  <Icon />
                </ProcessStepMarkerElement>
                <ProcessStepCopyElement>
                  <ProcessStepTitleElement>{step.title}</ProcessStepTitleElement>
                  <ProcessStepDescriptionElement>
                    {step.description}
                  </ProcessStepDescriptionElement>
                </ProcessStepCopyElement>
              </ProcessStepElement>
            );
          })}
        </ProcessListElement>

        <ProcessClosingElement>{processCopy.closing}</ProcessClosingElement>
        <ProcessCtaElement to={processCopy.cta.to}>
          {processCopy.cta.label}
        </ProcessCtaElement>
      </ProcessSectionInnerElement>
    </ProcessSectionElement>
  );
};
