import { useEffect, useState } from "react";
import {
  BatteryIcon,
  CubeIcon,
  GridIcon,
  LayersIcon,
} from "@assets/icons";
import {
  marketDataService,
  type MetalBenchmarks,
} from "@app/market";
import { materialGroups, materialsCopy } from "../../data";
import { MaterialsGroupCarousel } from "./MaterialsGroupCarousel";
import {
  MaterialsCtaActionsElement,
  MaterialsCtaDescriptionElement,
  MaterialsCtaElement,
  MaterialsCtaTitleElement,
  MaterialsDisclaimerElement,
  MaterialsEyebrowElement,
  MaterialsGroupElement,
  MaterialsGroupsElement,
  MaterialsGroupTitleElement,
  MaterialsHeaderElement,
  MaterialsIntroElement,
  MaterialsMetaElement,
  MaterialsNoteElement,
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

type MarketStatus = "loading" | "ready" | "error";

const formatUpdatedAt = (iso: string) => {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

export const MaterialsSection = () => {
  const [status, setStatus] = useState<MarketStatus>("loading");
  const [benchmarks, setBenchmarks] = useState<MetalBenchmarks | null>(null);

  useEffect(() => {
    let cancelled = false;

    marketDataService
      .getBenchmarks()
      .then((data) => {
        if (cancelled) {
          return;
        }

        setBenchmarks(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <MaterialsSectionElement aria-labelledby="home-materials-title">
      <MaterialsSectionInnerElement>
        <MaterialsHeaderElement>
          <MaterialsEyebrowElement>{materialsCopy.eyebrow}</MaterialsEyebrowElement>
          <MaterialsTitleElement id="home-materials-title">
            {materialsCopy.title}
          </MaterialsTitleElement>
          <MaterialsIntroElement>{materialsCopy.intro}</MaterialsIntroElement>
          {status === "ready" && benchmarks ? (
            <MaterialsMetaElement>
              {materialsCopy.updatedLabel}:{" "}
              {formatUpdatedAt(benchmarks.updatedAt)}
            </MaterialsMetaElement>
          ) : null}
          <MaterialsNoteElement>
            {materialsCopy.approximateNote}
          </MaterialsNoteElement>
          <MaterialsDisclaimerElement>
            {materialsCopy.disclaimer}
          </MaterialsDisclaimerElement>
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
                <MaterialsGroupCarousel
                  group={group}
                  Icon={Icon}
                  status={status}
                  benchmarks={benchmarks}
                />
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
