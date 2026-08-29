import { useDocumentMeta } from "@app/seo";
import { SustainabilityBusiness } from "../components/sustainabilityBusiness/SustainabilityBusiness";
import { SustainabilityClosingCta } from "../components/sustainabilityClosingCta/SustainabilityClosingCta";
import { SustainabilityCycle } from "../components/sustainabilityCycle/SustainabilityCycle";
import { SustainabilityFeedstock } from "../components/sustainabilityFeedstock/SustainabilityFeedstock";
import { SustainabilityHero } from "../components/sustainabilityHero/SustainabilityHero";
import { SustainabilityHorizon } from "../components/sustainabilityHorizon/SustainabilityHorizon";
import { SustainabilityIndustry } from "../components/sustainabilityIndustry/SustainabilityIndustry";
import { SustainabilityIntro } from "../components/sustainabilityIntro/SustainabilityIntro";
import { SustainabilitySolutionsLink } from "../components/sustainabilitySolutionsLink/SustainabilitySolutionsLink";
import { SustainabilityStages } from "../components/sustainabilityStages/SustainabilityStages";
import { SustainabilityValue } from "../components/sustainabilityValue/SustainabilityValue";
import { sustentabilidadPageMeta } from "../data";
import { SustentabilidadPageElement } from "./SustentabilidadPage.elements";

export const SustentabilidadPage = () => {
  useDocumentMeta(sustentabilidadPageMeta);

  return (
    <SustentabilidadPageElement>
      <SustainabilityHero />
      <SustainabilityIntro />
      <SustainabilityCycle />
      <SustainabilityStages />
      <SustainabilityValue />
      <SustainabilityFeedstock />
      <SustainabilityIndustry />
      <SustainabilityBusiness />
      <SustainabilityHorizon />
      <SustainabilitySolutionsLink />
      <SustainabilityClosingCta />
    </SustentabilidadPageElement>
  );
};
