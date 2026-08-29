import { useDocumentMeta } from "@app/seo";
import { MaterialsCatalog } from "../components/materialsCatalog/MaterialsCatalog";
import { MaterialsCircularNote } from "../components/materialsCircularNote/MaterialsCircularNote";
import { MaterialsClosingCta } from "../components/materialsClosingCta/MaterialsClosingCta";
import { MaterialsEvaluation } from "../components/materialsEvaluation/MaterialsEvaluation";
import { MaterialsHero } from "../components/materialsHero/MaterialsHero";
import { MaterialsOverview } from "../components/materialsOverview/MaterialsOverview";
import { materialesPageMeta } from "../data";
import { MaterialesPageElement } from "./MaterialesPage.elements";

export const MaterialesPage = () => {
  useDocumentMeta(materialesPageMeta);

  return (
    <MaterialesPageElement>
      <MaterialsHero />
      <MaterialsOverview />
      <MaterialsCatalog />
      <MaterialsEvaluation />
      <MaterialsCircularNote />
      <MaterialsClosingCta />
    </MaterialesPageElement>
  );
};
