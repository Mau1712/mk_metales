import { SUSTAINABILITY_CYCLE_ID, sustainabilityHeroCopy } from "../../data";
import {
  SustainabilityHeroActionsElement,
  SustainabilityHeroCopyElement,
  SustainabilityHeroDescriptionElement,
  SustainabilityHeroElement,
  SustainabilityHeroEyebrowElement,
  SustainabilityHeroInnerElement,
  SustainabilityHeroPrimaryCtaElement,
  SustainabilityHeroSecondaryCtaElement,
  SustainabilityHeroSignalItemElement,
  SustainabilityHeroSignalsElement,
  SustainabilityHeroTitleAccentElement,
  SustainabilityHeroTitleElement,
  SustainabilityHeroTitleLineElement,
} from "./SustainabilityHero.elements";

export const SustainabilityHero = () => {
  return (
    <SustainabilityHeroElement aria-labelledby="sustentabilidad-hero-title">
      <SustainabilityHeroInnerElement>
        <SustainabilityHeroCopyElement>
          <SustainabilityHeroEyebrowElement>
            {sustainabilityHeroCopy.eyebrow}
          </SustainabilityHeroEyebrowElement>
          <SustainabilityHeroTitleElement id="sustentabilidad-hero-title">
            <SustainabilityHeroTitleLineElement>
              {sustainabilityHeroCopy.titleLead}
            </SustainabilityHeroTitleLineElement>
            <SustainabilityHeroTitleAccentElement>
              {sustainabilityHeroCopy.titleAccent}
            </SustainabilityHeroTitleAccentElement>
          </SustainabilityHeroTitleElement>
          <SustainabilityHeroDescriptionElement>
            {sustainabilityHeroCopy.description}
          </SustainabilityHeroDescriptionElement>
          <SustainabilityHeroSignalsElement>
            {sustainabilityHeroCopy.signals.map((signal) => (
              <SustainabilityHeroSignalItemElement key={signal}>
                {signal}
              </SustainabilityHeroSignalItemElement>
            ))}
          </SustainabilityHeroSignalsElement>
        </SustainabilityHeroCopyElement>

        <SustainabilityHeroActionsElement>
          <SustainabilityHeroPrimaryCtaElement
            to={{
              pathname: "/sustentabilidad",
              hash: `#${SUSTAINABILITY_CYCLE_ID}`,
            }}
          >
            {sustainabilityHeroCopy.primaryCta.label}
          </SustainabilityHeroPrimaryCtaElement>
          <SustainabilityHeroSecondaryCtaElement
            to={sustainabilityHeroCopy.secondaryCta.to}
          >
            {sustainabilityHeroCopy.secondaryCta.label}
          </SustainabilityHeroSecondaryCtaElement>
        </SustainabilityHeroActionsElement>
      </SustainabilityHeroInnerElement>
    </SustainabilityHeroElement>
  );
};
