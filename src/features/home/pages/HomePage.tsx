import { useMemo } from "react";
import { useDocumentMeta } from "@app/seo";
import heroImage from "@assets/home/MK_Metales_Hero_1.webp";
import { HeroBanner } from "../components/heroBanner/HeroBanner";
import { ClosingCtaSection } from "../components/closingCtaSection/ClosingCtaSection";
import { FaqSection } from "../components/faqSection/FaqSection";
import { MaterialsSection } from "../components/materialsSection/MaterialsSection";
import { ProcessSection } from "../components/processSection/ProcessSection";
import { QuickQuoteSection } from "../components/quickQuoteSection/QuickQuoteSection";
import { SolutionsSection } from "../components/solutionsSection/SolutionsSection";
import { SustainabilitySection } from "../components/sustainabilitySection/SustainabilitySection";
import { homePageMeta } from "../data";
import { HomePageElement } from "./HomePage.elements";

export const HomePage = () => {
  const meta = useMemo(
    () => ({
      ...homePageMeta,
      preloadImage: heroImage,
    }),
    [],
  );

  useDocumentMeta(meta);

  return (
    <HomePageElement>
      <HeroBanner />
      <MaterialsSection />
      <ProcessSection />
      <SolutionsSection />
      <SustainabilitySection />
      <QuickQuoteSection />
      <FaqSection />
      <ClosingCtaSection />
    </HomePageElement>
  );
};
