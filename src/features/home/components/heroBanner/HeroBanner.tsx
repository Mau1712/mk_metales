import {
  HandshakeBenefitIcon,
  RecycleBenefitIcon,
  ValueBenefitIcon,
} from "@assets/icons";
import { heroBenefits, heroCopy, heroWhatsAppUrl } from "../../data";
import {
  HeroActionsElement,
  HeroBannerContentElement,
  HeroBannerElement,
  HeroBannerInnerElement,
  HeroBenefitItemElement,
  HeroBenefitLabelElement,
  HeroBenefitsElement,
  HeroDescriptionElement,
  HeroEyebrowElement,
  HeroPrimaryCtaElement,
  HeroSecondaryCtaElement,
  HeroTitleAccentElement,
  HeroTitleElement,
  HeroTitleLineElement,
} from "./HeroBanner.elements";

const benefitIcons = {
  value: ValueBenefitIcon,
  service: HandshakeBenefitIcon,
  circular: RecycleBenefitIcon,
} as const;

export const HeroBanner = () => {
  return (
    <HeroBannerElement aria-labelledby="home-hero-title">
      <HeroBannerInnerElement>
        <HeroBannerContentElement>
          <HeroEyebrowElement>{heroCopy.eyebrow}</HeroEyebrowElement>

          <HeroTitleElement id="home-hero-title">
            <HeroTitleLineElement>{heroCopy.titleLead}</HeroTitleLineElement>
            <HeroTitleAccentElement>
              {heroCopy.titleAccent}
            </HeroTitleAccentElement>
            <HeroTitleLineElement>{heroCopy.titleTrail}</HeroTitleLineElement>
          </HeroTitleElement>

          <HeroDescriptionElement>
            {heroCopy.description}
          </HeroDescriptionElement>

          <HeroActionsElement>
            <HeroPrimaryCtaElement to={heroCopy.primaryCta.to}>
              {heroCopy.primaryCta.label}
            </HeroPrimaryCtaElement>

            {heroWhatsAppUrl ? (
              <HeroSecondaryCtaElement
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroCopy.secondaryCta.label}
              </HeroSecondaryCtaElement>
            ) : (
              <HeroSecondaryCtaElement as="button" type="button">
                {heroCopy.secondaryCta.label}
              </HeroSecondaryCtaElement>
            )}
          </HeroActionsElement>
        </HeroBannerContentElement>

        <HeroBenefitsElement>
          {heroBenefits.map((benefit) => {
            const Icon = benefitIcons[benefit.id];
            const label = `${benefit.line1} ${benefit.line2}`;

            return (
              <HeroBenefitItemElement key={benefit.id} aria-label={label}>
                <Icon />
                <HeroBenefitLabelElement>
                  <span>{benefit.line1}</span>
                  <span>{benefit.line2}</span>
                </HeroBenefitLabelElement>
              </HeroBenefitItemElement>
            );
          })}
        </HeroBenefitsElement>
      </HeroBannerInnerElement>
    </HeroBannerElement>
  );
};
