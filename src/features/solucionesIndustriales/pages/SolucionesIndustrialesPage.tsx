import { useDocumentMeta } from "@app/seo";
import { SolutionsCircular } from "../components/solutionsCircular/SolutionsCircular";
import { SolutionsClosingCta } from "../components/solutionsClosingCta/SolutionsClosingCta";
import { SolutionsFlow } from "../components/solutionsFlow/SolutionsFlow";
import { SolutionsHero } from "../components/solutionsHero/SolutionsHero";
import { SolutionsInstitutional } from "../components/solutionsInstitutional/SolutionsInstitutional";
import { SolutionsIntro } from "../components/solutionsIntro/SolutionsIntro";
import { SolutionsMaterialsNote } from "../components/solutionsMaterialsNote/SolutionsMaterialsNote";
import { SolutionsOperations } from "../components/solutionsOperations/SolutionsOperations";
import { SolutionsPrep } from "../components/solutionsPrep/SolutionsPrep";
import { SolutionsRecurring } from "../components/solutionsRecurring/SolutionsRecurring";
import { SolutionsSectors } from "../components/solutionsSectors/SolutionsSectors";
import { solucionesPageMeta } from "../data";
import { SolucionesIndustrialesPageElement } from "./SolucionesIndustrialesPage.elements";

export const SolucionesIndustrialesPage = () => {
  useDocumentMeta(solucionesPageMeta);

  return (
    <SolucionesIndustrialesPageElement>
      <SolutionsHero />
      <SolutionsIntro />
      <SolutionsOperations />
      <SolutionsSectors />
      <SolutionsMaterialsNote />
      <SolutionsFlow />
      <SolutionsPrep />
      <SolutionsRecurring />
      <SolutionsCircular />
      <SolutionsInstitutional />
      <SolutionsClosingCta />
    </SolucionesIndustrialesPageElement>
  );
};
