import {
  BatteryIcon,
  CubeIcon,
  GridIcon,
  LayersIcon,
} from "@assets/icons";
import { materialGroups, materialsCopy } from "../../data";
import {
  MaterialCardCaptionElement,
  MaterialCardCopyElement,
  MaterialCardElement,
  MaterialCardIconElement,
  MaterialCardNameElement,
  MaterialsCtaActionsElement,
  MaterialsCtaDescriptionElement,
  MaterialsCtaElement,
  MaterialsCtaTitleElement,
  MaterialsEyebrowElement,
  MaterialsGroupElement,
  MaterialsGroupsElement,
  MaterialsGroupTitleElement,
  MaterialsHeaderElement,
  MaterialsIntroElement,
  MaterialsListElement,
  MaterialsPrimaryCtaElement,
  MaterialsSecondaryCtaElement,
  MaterialsSectionElement,
  MaterialsSectionInnerElement,
  MaterialsTitleElement,
} from "./MaterialsSection.elements";

const groupIcons = {
  layers: LayersIcon,
  cube: CubeIcon,
  grid: GridIcon,
  battery: BatteryIcon,
} as const;

export const MaterialsSection = () => {
  return (
    <MaterialsSectionElement aria-labelledby="home-materials-title">
      <MaterialsSectionInnerElement>
        <MaterialsHeaderElement>
          <MaterialsEyebrowElement>{materialsCopy.eyebrow}</MaterialsEyebrowElement>
          <MaterialsTitleElement id="home-materials-title">
            {materialsCopy.title}
          </MaterialsTitleElement>
          <MaterialsIntroElement>{materialsCopy.intro}</MaterialsIntroElement>
        </MaterialsHeaderElement>

        <MaterialsGroupsElement>
          {materialGroups.map((group) => {
            const Icon = groupIcons[group.icon];

            return (
              <MaterialsGroupElement
                key={group.id}
                aria-labelledby={`home-materials-${group.id}`}
              >
                <MaterialsGroupTitleElement id={`home-materials-${group.id}`}>
                  {group.title}
                </MaterialsGroupTitleElement>
                <MaterialsListElement>
                  {group.materials.map((material) => (
                    <MaterialCardElement key={material.id}>
                      <MaterialCardIconElement aria-hidden>
                        <Icon />
                      </MaterialCardIconElement>
                      <MaterialCardCopyElement>
                        <MaterialCardNameElement>
                          {material.name}
                        </MaterialCardNameElement>
                        <MaterialCardCaptionElement>
                          {materialsCopy.cardCaption}
                        </MaterialCardCaptionElement>
                      </MaterialCardCopyElement>
                    </MaterialCardElement>
                  ))}
                </MaterialsListElement>
              </MaterialsGroupElement>
            );
          })}
        </MaterialsGroupsElement>

        <MaterialsCtaElement>
          <MaterialsCtaTitleElement>
            {materialsCopy.ctaTitle}
          </MaterialsCtaTitleElement>
          <MaterialsCtaDescriptionElement>
            {materialsCopy.ctaDescription}
          </MaterialsCtaDescriptionElement>
          <MaterialsCtaActionsElement>
            <MaterialsPrimaryCtaElement to={materialsCopy.primaryCta.to}>
              {materialsCopy.primaryCta.label}
            </MaterialsPrimaryCtaElement>
            <MaterialsSecondaryCtaElement to={materialsCopy.secondaryCta.to}>
              {materialsCopy.secondaryCta.label}
            </MaterialsSecondaryCtaElement>
          </MaterialsCtaActionsElement>
        </MaterialsCtaElement>
      </MaterialsSectionInnerElement>
    </MaterialsSectionElement>
  );
};
