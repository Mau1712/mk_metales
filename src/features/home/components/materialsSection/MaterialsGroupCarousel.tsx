import { useEffect, useRef, useState, type ComponentType } from "react";
import { theme } from "@shared/theme/Theme";
import type { MetalBenchmarks } from "@app/market";
import { materialsCopy, type materialGroups } from "../../data";
import { MaterialPriceCard } from "./MaterialPriceCard";
import {
  MaterialsCarouselStatusElement,
  MaterialsListElement,
} from "./MaterialsSection.elements";

type MaterialsGroup = (typeof materialGroups)[number];

type MarketStatus = "loading" | "ready" | "error";

type MaterialsGroupCarouselProps = {
  group: MaterialsGroup;
  Icon: ComponentType;
  status: MarketStatus;
  benchmarks: MetalBenchmarks | null;
};

const mobileQuery = `(max-width: ${theme.breakpoints.mobile})`;

const getActiveIndex = (root: HTMLElement) => {
  const cards = Array.from(root.children) as HTMLElement[];

  if (cards.length === 0) {
    return 0;
  }

  let closest = 0;
  let shortest = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const distance = Math.abs(card.offsetLeft - root.scrollLeft);

    if (distance < shortest) {
      shortest = distance;
      closest = index;
    }
  });

  return closest;
};

export const MaterialsGroupCarousel = ({
  group,
  Icon,
  status,
  benchmarks,
}: MaterialsGroupCarouselProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const total = group.materials.length;

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const syncMode = () => {
      setIsCarousel(media.matches);
    };

    syncMode();
    media.addEventListener("change", syncMode);

    return () => {
      media.removeEventListener("change", syncMode);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const onScroll = () => {
    const root = listRef.current;

    if (!root) {
      return;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      setActiveIndex(getActiveIndex(root));
    });
  };

  return (
    <>
      <MaterialsListElement
        ref={listRef}
        tabIndex={isCarousel ? 0 : undefined}
        aria-label={
          isCarousel
            ? `${group.title}. ${materialsCopy.carouselListLabel}`
            : undefined
        }
        onScroll={onScroll}
      >
        {group.materials.map((material) => (
          <MaterialPriceCard
            key={material.id}
            id={material.id}
            name={material.name}
            Icon={Icon}
            status={status}
            benchmarks={benchmarks}
          />
        ))}
      </MaterialsListElement>
      {isCarousel ? (
        <MaterialsCarouselStatusElement aria-live="polite">
          {activeIndex + 1} / {total}
        </MaterialsCarouselStatusElement>
      ) : null}
    </>
  );
};
