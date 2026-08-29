import { materialsCategories, materialsIntroCopy } from "../../data";
import {
  MaterialsOverviewDescriptionElement,
  MaterialsOverviewElement,
  MaterialsOverviewEyebrowElement,
  MaterialsOverviewInnerElement,
  MaterialsOverviewNavElement,
  MaterialsOverviewNavLinkElement,
  MaterialsOverviewNoteElement,
  MaterialsOverviewTitleElement,
} from "./MaterialsOverview.elements";

export const MaterialsOverview = () => {
  return (
    <MaterialsOverviewElement aria-labelledby="materiales-intro-title">
      <MaterialsOverviewInnerElement>
        <MaterialsOverviewEyebrowElement>
          {materialsIntroCopy.eyebrow}
        </MaterialsOverviewEyebrowElement>
        <MaterialsOverviewTitleElement id="materiales-intro-title">
          {materialsIntroCopy.title}
        </MaterialsOverviewTitleElement>
        <MaterialsOverviewDescriptionElement>
          {materialsIntroCopy.description}
        </MaterialsOverviewDescriptionElement>
        <MaterialsOverviewNoteElement>
          {materialsIntroCopy.note}
        </MaterialsOverviewNoteElement>

        <MaterialsOverviewNavElement aria-label="Categorías de materiales">
          {materialsCategories.map((category) => (
            <MaterialsOverviewNavLinkElement
              key={category.id}
              to={`#${category.id}`}
            >
              {category.label}
            </MaterialsOverviewNavLinkElement>
          ))}
        </MaterialsOverviewNavElement>
      </MaterialsOverviewInnerElement>
    </MaterialsOverviewElement>
  );
};
