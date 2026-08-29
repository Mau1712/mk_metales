import { materialsHeroCopy } from "../../data";
import {
  MaterialsHeroActionsElement,
  MaterialsHeroCopyElement,
  MaterialsHeroDescriptionElement,
  MaterialsHeroElement,
  MaterialsHeroEyebrowElement,
  MaterialsHeroInnerElement,
  MaterialsHeroPrimaryCtaElement,
  MaterialsHeroSecondaryCtaElement,
  MaterialsHeroSignalItemElement,
  MaterialsHeroSignalsElement,
  MaterialsHeroTitleElement,
} from "./MaterialsHero.elements";

export const MaterialsHero = () => {
  return (
    <MaterialsHeroElement aria-labelledby="materiales-hero-title">
      <MaterialsHeroInnerElement>
        <MaterialsHeroCopyElement>
          <MaterialsHeroEyebrowElement>
            {materialsHeroCopy.eyebrow}
          </MaterialsHeroEyebrowElement>
          <MaterialsHeroTitleElement id="materiales-hero-title">
            {materialsHeroCopy.title}
          </MaterialsHeroTitleElement>
          <MaterialsHeroDescriptionElement>
            {materialsHeroCopy.description}
          </MaterialsHeroDescriptionElement>
          <MaterialsHeroSignalsElement>
            {materialsHeroCopy.signals.map((signal) => (
              <MaterialsHeroSignalItemElement key={signal}>
                {signal}
              </MaterialsHeroSignalItemElement>
            ))}
          </MaterialsHeroSignalsElement>
        </MaterialsHeroCopyElement>

        <MaterialsHeroActionsElement>
          <MaterialsHeroPrimaryCtaElement to={materialsHeroCopy.primaryCta.to}>
            {materialsHeroCopy.primaryCta.label}
          </MaterialsHeroPrimaryCtaElement>
          <MaterialsHeroSecondaryCtaElement to={materialsHeroCopy.secondaryCta.to}>
            {materialsHeroCopy.secondaryCta.label}
          </MaterialsHeroSecondaryCtaElement>
        </MaterialsHeroActionsElement>
      </MaterialsHeroInnerElement>
    </MaterialsHeroElement>
  );
};
