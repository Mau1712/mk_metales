import {
  BatteryIcon,
  CubeIcon,
  GridIcon,
  LayersIcon,
  ArrowForwardIcon,
} from "@assets/icons";
import { buildCotizadorHref } from "@features/home";
import {
  materialsCardCopy,
  materialsGroups,
  type MaterialsGroupIcon,
} from "../../data";
import {
  MaterialCardCategoryElement,
  MaterialCardCtaElement,
  MaterialCardDescriptionElement,
  MaterialCardElement,
  MaterialCardHeaderElement,
  MaterialCardIconElement,
  MaterialCardMetaElement,
  MaterialCardNameElement,
  MaterialsCatalogElement,
  MaterialsCatalogGridElement,
  MaterialsCatalogGroupDescriptionElement,
  MaterialsCatalogGroupElement,
  MaterialsCatalogGroupEyebrowElement,
  MaterialsCatalogGroupHeaderElement,
  MaterialsCatalogGroupInnerElement,
  MaterialsCatalogGroupNoteElement,
  MaterialsCatalogGroupTitleElement,
} from "./MaterialsCatalog.elements";

const groupIcons: Record<
  MaterialsGroupIcon,
  typeof LayersIcon
> = {
  layers: LayersIcon,
  cube: CubeIcon,
  grid: GridIcon,
  battery: BatteryIcon,
};

export const MaterialsCatalog = () => {
  return (
    <MaterialsCatalogElement>
      {materialsGroups.map((group) => {
        const Icon = groupIcons[group.icon];

        return (
          <MaterialsCatalogGroupElement
            key={group.id}
            id={group.id}
            $variant={group.variant}
            aria-labelledby={`materiales-${group.id}-title`}
          >
            <MaterialsCatalogGroupInnerElement>
              <MaterialsCatalogGroupHeaderElement>
                <MaterialsCatalogGroupEyebrowElement>
                  {group.eyebrow}
                </MaterialsCatalogGroupEyebrowElement>
                <MaterialsCatalogGroupTitleElement
                  id={`materiales-${group.id}-title`}
                >
                  {group.title}
                </MaterialsCatalogGroupTitleElement>
                <MaterialsCatalogGroupDescriptionElement>
                  {group.description}
                </MaterialsCatalogGroupDescriptionElement>
              </MaterialsCatalogGroupHeaderElement>

              <MaterialsCatalogGridElement>
                {group.materials.map((material) => (
                  <MaterialCardElement key={material.id}>
                    <MaterialCardHeaderElement>
                      <MaterialCardIconElement aria-hidden>
                        <Icon />
                      </MaterialCardIconElement>
                      <MaterialCardCategoryElement>
                        {group.categoryLabel}
                      </MaterialCardCategoryElement>
                    </MaterialCardHeaderElement>
                    <MaterialCardNameElement>
                      {material.name}
                    </MaterialCardNameElement>
                    <MaterialCardDescriptionElement>
                      {material.description}
                    </MaterialCardDescriptionElement>
                    <MaterialCardMetaElement>
                      {materialsCardCopy.meta}
                    </MaterialCardMetaElement>
                    <MaterialCardCtaElement
                      to={buildCotizadorHref(material.id)}
                    >
                      {materialsCardCopy.cta}
                      <ArrowForwardIcon aria-hidden />
                    </MaterialCardCtaElement>
                  </MaterialCardElement>
                ))}
              </MaterialsCatalogGridElement>

              {group.note ? (
                <MaterialsCatalogGroupNoteElement>
                  {group.note}
                </MaterialsCatalogGroupNoteElement>
              ) : null}
            </MaterialsCatalogGroupInnerElement>
          </MaterialsCatalogGroupElement>
        );
      })}
    </MaterialsCatalogElement>
  );
};
