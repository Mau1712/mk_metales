import { solutionsHeroCopy } from "../../data";
import {
  SolutionsHeroActionsElement,
  SolutionsHeroCopyElement,
  SolutionsHeroDescriptionElement,
  SolutionsHeroElement,
  SolutionsHeroEyebrowElement,
  SolutionsHeroInnerElement,
  SolutionsHeroPrimaryCtaElement,
  SolutionsHeroSecondaryCtaElement,
  SolutionsHeroSignalItemElement,
  SolutionsHeroSignalsElement,
  SolutionsHeroTitleElement,
} from "./SolutionsHero.elements";

export const SolutionsHero = () => {
  return (
    <SolutionsHeroElement aria-labelledby="soluciones-hero-title">
      <SolutionsHeroInnerElement>
        <SolutionsHeroCopyElement>
          <SolutionsHeroEyebrowElement>
            {solutionsHeroCopy.eyebrow}
          </SolutionsHeroEyebrowElement>
          <SolutionsHeroTitleElement id="soluciones-hero-title">
            {solutionsHeroCopy.title}
          </SolutionsHeroTitleElement>
          <SolutionsHeroDescriptionElement>
            {solutionsHeroCopy.description}
          </SolutionsHeroDescriptionElement>
          <SolutionsHeroSignalsElement>
            {solutionsHeroCopy.signals.map((signal) => (
              <SolutionsHeroSignalItemElement key={signal}>
                {signal}
              </SolutionsHeroSignalItemElement>
            ))}
          </SolutionsHeroSignalsElement>
        </SolutionsHeroCopyElement>

        <SolutionsHeroActionsElement>
          <SolutionsHeroPrimaryCtaElement to={solutionsHeroCopy.primaryCta.to}>
            {solutionsHeroCopy.primaryCta.label}
          </SolutionsHeroPrimaryCtaElement>
          <SolutionsHeroSecondaryCtaElement
            to={solutionsHeroCopy.secondaryCta.to}
          >
            {solutionsHeroCopy.secondaryCta.label}
          </SolutionsHeroSecondaryCtaElement>
        </SolutionsHeroActionsElement>
      </SolutionsHeroInnerElement>
    </SolutionsHeroElement>
  );
};
