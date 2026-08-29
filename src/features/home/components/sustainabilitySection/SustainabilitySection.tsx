import {
  ArrowForwardIcon,
  CubeIcon,
  IndustryIcon,
  LayersIcon,
  RecycleBenefitIcon,
  SyncIcon,
} from "@assets/icons";
import sustainabilityImage from "@assets/home/MK_Metales_sustentabilidad.png";
import {
  sustainabilityConcepts,
  sustainabilityCopy,
  sustainabilityCycle,
} from "../../data";
import {
  SustainabilityActionsElement,
  SustainabilityCloseElement,
  SustainabilityConceptElement,
  SustainabilityConceptIconElement,
  SustainabilityConceptsElement,
  SustainabilityConceptTextElement,
  SustainabilityConceptTitleElement,
  SustainabilityCycleArrowElement,
  SustainabilityCycleElement,
  SustainabilityCycleIconElement,
  SustainabilityCycleLabelElement,
  SustainabilityCycleStepElement,
  SustainabilityDetailElement,
  SustainabilityEyebrowElement,
  SustainabilityImageElement,
  SustainabilityIntroElement,
  SustainabilityLeadElement,
  SustainabilityMediaElement,
  SustainabilityPrimaryCtaElement,
  SustainabilitySecondaryCtaElement,
  SustainabilitySectionElement,
  SustainabilitySectionInnerElement,
  SustainabilityStatementElement,
  SustainabilityTitleAccentElement,
  SustainabilityTitleElement,
  SustainabilityTitleLineElement,
} from "./SustainabilitySection.elements";

const conceptIcons = {
  layers: LayersIcon,
  industry: IndustryIcon,
  sync: SyncIcon,
} as const;

const cycleIcons = {
  industry: IndustryIcon,
  layers: LayersIcon,
  recycle: RecycleBenefitIcon,
  cube: CubeIcon,
  sync: SyncIcon,
} as const;

export const SustainabilitySection = () => {
  return (
    <SustainabilitySectionElement aria-labelledby="home-sustainability-title">
      <SustainabilitySectionInnerElement>
        <SustainabilityMediaElement>
          <SustainabilityImageElement
            src={sustainabilityImage}
            alt={sustainabilityCopy.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </SustainabilityMediaElement>

        <SustainabilityIntroElement>
          <SustainabilityEyebrowElement>
            {sustainabilityCopy.eyebrow}
          </SustainabilityEyebrowElement>
          <SustainabilityTitleElement id="home-sustainability-title">
            <SustainabilityTitleLineElement>
              {sustainabilityCopy.titleLead}
            </SustainabilityTitleLineElement>
            <SustainabilityTitleAccentElement>
              {sustainabilityCopy.titleAccent}
            </SustainabilityTitleAccentElement>
          </SustainabilityTitleElement>
          <SustainabilityLeadElement>
            {sustainabilityCopy.intro}
          </SustainabilityLeadElement>
          <SustainabilityDetailElement>
            {sustainabilityCopy.detail}
          </SustainabilityDetailElement>
        </SustainabilityIntroElement>

        <SustainabilityConceptsElement>
          {sustainabilityConcepts.map((concept) => {
            const Icon = conceptIcons[concept.icon];

            return (
              <SustainabilityConceptElement key={concept.id}>
                <SustainabilityConceptIconElement aria-hidden>
                  <Icon />
                </SustainabilityConceptIconElement>
                <SustainabilityConceptTitleElement>
                  {concept.title}
                </SustainabilityConceptTitleElement>
                <SustainabilityConceptTextElement>
                  {concept.description}
                </SustainabilityConceptTextElement>
              </SustainabilityConceptElement>
            );
          })}
        </SustainabilityConceptsElement>

        <SustainabilityCycleElement aria-label="Flujo de economía circular">
          {sustainabilityCycle.map((step, index) => {
            const Icon = cycleIcons[step.icon];

            return (
              <SustainabilityCycleStepElement
                key={step.id}
                $highlight={step.highlight}
              >
                {index > 0 ? (
                  <SustainabilityCycleArrowElement aria-hidden>
                    <ArrowForwardIcon />
                  </SustainabilityCycleArrowElement>
                ) : null}
                <SustainabilityCycleIconElement
                  $highlight={step.highlight}
                  aria-hidden
                >
                  <Icon />
                </SustainabilityCycleIconElement>
                <SustainabilityCycleLabelElement>
                  {step.label}
                </SustainabilityCycleLabelElement>
              </SustainabilityCycleStepElement>
            );
          })}
        </SustainabilityCycleElement>

        <SustainabilityCloseElement>
          <SustainabilityStatementElement>
            {sustainabilityCopy.statement}
          </SustainabilityStatementElement>
          <SustainabilityActionsElement>
            <SustainabilityPrimaryCtaElement
              to={sustainabilityCopy.primaryCta.to}
            >
              {sustainabilityCopy.primaryCta.label}
            </SustainabilityPrimaryCtaElement>
            <SustainabilitySecondaryCtaElement
              to={sustainabilityCopy.secondaryCta.to}
            >
              {sustainabilityCopy.secondaryCta.label}
            </SustainabilitySecondaryCtaElement>
          </SustainabilityActionsElement>
        </SustainabilityCloseElement>
      </SustainabilitySectionInnerElement>
    </SustainabilitySectionElement>
  );
};
