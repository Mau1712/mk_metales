import {
  HandshakeBenefitIcon,
  LayersIcon,
  RecycleBenefitIcon,
  SyncIcon,
} from "@assets/icons";
import { solutions, solutionsCopy } from "../../data";
import {
  SolutionCardElement,
  SolutionCardHeadElement,
  SolutionCardIconElement,
  SolutionCardNumberElement,
  SolutionCardTextElement,
  SolutionCardTitleElement,
  SolutionsActionsElement,
  SolutionsB2bElement,
  SolutionsB2bLabelElement,
  SolutionsClosingCtaElement,
  SolutionsClosingElement,
  SolutionsClosingTextElement,
  SolutionsClosingTitleElement,
  SolutionsDetailElement,
  SolutionsEyebrowElement,
  SolutionsIntroElement,
  SolutionsLayoutElement,
  SolutionsLeadElement,
  SolutionsListElement,
  SolutionsPageCtaElement,
  SolutionsPrimaryCtaElement,
  SolutionsSecondaryCtaElement,
  SolutionsSectionElement,
  SolutionsSectionInnerElement,
  SolutionsTitleElement,
} from "./SolutionsSection.elements";

const solutionIcons = {
  sync: SyncIcon,
  layers: LayersIcon,
  handshake: HandshakeBenefitIcon,
  recycle: RecycleBenefitIcon,
} as const;

export const SolutionsSection = () => {
  return (
    <SolutionsSectionElement aria-labelledby="home-solutions-title">
      <SolutionsSectionInnerElement>
        <SolutionsLayoutElement>
          <SolutionsIntroElement>
            <SolutionsEyebrowElement>
              {solutionsCopy.eyebrow}
            </SolutionsEyebrowElement>
            <SolutionsTitleElement id="home-solutions-title">
              {solutionsCopy.title}
            </SolutionsTitleElement>
            <SolutionsLeadElement>{solutionsCopy.intro}</SolutionsLeadElement>
            <SolutionsDetailElement>
              {solutionsCopy.detail}
            </SolutionsDetailElement>
            <SolutionsB2bElement>
              <SolutionsB2bLabelElement>
                {solutionsCopy.b2bLabel}
              </SolutionsB2bLabelElement>
              <span>{solutionsCopy.b2bAudience}</span>
            </SolutionsB2bElement>
            <SolutionsActionsElement>
              <SolutionsPrimaryCtaElement to={solutionsCopy.primaryCta.to}>
                {solutionsCopy.primaryCta.label}
              </SolutionsPrimaryCtaElement>
              <SolutionsSecondaryCtaElement to={solutionsCopy.secondaryCta.to}>
                {solutionsCopy.secondaryCta.label}
              </SolutionsSecondaryCtaElement>
            </SolutionsActionsElement>
          </SolutionsIntroElement>

          <SolutionsListElement aria-label="Soluciones para empresas">
            {solutions.map((solution) => {
              const Icon = solutionIcons[solution.icon];

              return (
                <SolutionCardElement
                  key={solution.id}
                  $highlight={solution.highlight}
                >
                  <SolutionCardHeadElement>
                    <SolutionCardNumberElement $highlight={solution.highlight}>
                      {solution.number}
                    </SolutionCardNumberElement>
                    <SolutionCardIconElement
                      $highlight={solution.highlight}
                      aria-hidden
                    >
                      <Icon />
                    </SolutionCardIconElement>
                  </SolutionCardHeadElement>
                  <SolutionCardTitleElement>
                    {solution.title}
                  </SolutionCardTitleElement>
                  <SolutionCardTextElement>
                    {solution.description}
                  </SolutionCardTextElement>
                </SolutionCardElement>
              );
            })}
          </SolutionsListElement>
        </SolutionsLayoutElement>

        <SolutionsClosingElement>
          <SolutionsClosingTitleElement>
            {solutionsCopy.closingTitle}
          </SolutionsClosingTitleElement>
          <SolutionsClosingTextElement>
            {solutionsCopy.closingDescription}
          </SolutionsClosingTextElement>
          <SolutionsClosingCtaElement to={solutionsCopy.closingCta.to}>
            {solutionsCopy.closingCta.label}
          </SolutionsClosingCtaElement>
          <SolutionsPageCtaElement to={solutionsCopy.pageCta.to}>
            {solutionsCopy.pageCta.label}
          </SolutionsPageCtaElement>
        </SolutionsClosingElement>
      </SolutionsSectionInnerElement>
    </SolutionsSectionElement>
  );
};
