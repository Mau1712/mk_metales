import type { ComponentType } from "react";
import { ArrowForwardIcon } from "@assets/icons";
import {
  benchmarkReferenceLabel,
  getMaterialBenchmarkId,
  type MetalBenchmarks,
} from "@app/market";
import {
  buildCotizadorHref,
  isQuoteMaterialId,
  materialsCopy,
} from "../../data";
import {
  MaterialCardCaptionElement,
  MaterialCardCopyElement,
  MaterialCardCtaElement,
  MaterialCardElement,
  MaterialCardHeaderElement,
  MaterialCardIconElement,
  MaterialCardMetaElement,
  MaterialCardNameElement,
  MaterialCardPriceArsElement,
  MaterialCardPriceUsdElement,
  MaterialCardPricesElement,
  MaterialCardSkeletonElement,
} from "./MaterialsSection.elements";

type MaterialPriceCardProps = {
  id: string;
  name: string;
  Icon: ComponentType;
  status: "loading" | "ready" | "error";
  benchmarks: MetalBenchmarks | null;
};

const formatUsdPerKg = (value: number) => {
  return `${new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}${materialsCopy.perKg}`;
};

const formatArsPerKg = (value: number) => {
  return `${new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value)}${materialsCopy.perKgApprox}`;
};

export const MaterialPriceCard = ({
  id,
  name,
  Icon,
  status,
  benchmarks,
}: MaterialPriceCardProps) => {
  const materialId = isQuoteMaterialId(id) ? id : null;
  const benchmarkId = materialId ? getMaterialBenchmarkId(materialId) : null;
  const href = buildCotizadorHref(id);
  const isCustom = benchmarkId === null;

  const priceUsd =
    status === "ready" && benchmarks && benchmarkId
      ? benchmarks.lme[benchmarkId]
      : null;
  const priceArs =
    priceUsd !== null && benchmarks
      ? priceUsd * benchmarks.exchangeRates.usdToArs
      : null;
  const hasPrice =
    priceUsd !== null &&
    priceArs !== null &&
    Number.isFinite(priceUsd) &&
    Number.isFinite(priceArs);

  return (
    <MaterialCardElement>
      <MaterialCardHeaderElement>
        <MaterialCardIconElement aria-hidden>
          <Icon />
        </MaterialCardIconElement>
      </MaterialCardHeaderElement>

      <MaterialCardCopyElement>
        <MaterialCardNameElement>{name}</MaterialCardNameElement>

        {isCustom ? (
          <>
            <MaterialCardPricesElement>
              <MaterialCardPriceUsdElement>
                {materialsCopy.customTitle}
              </MaterialCardPriceUsdElement>
              <MaterialCardPriceArsElement>
                {materialsCopy.customDescription}
              </MaterialCardPriceArsElement>
            </MaterialCardPricesElement>
          </>
        ) : status === "loading" ? (
          <MaterialCardSkeletonElement aria-hidden>
            <span />
            <span />
            <span />
          </MaterialCardSkeletonElement>
        ) : hasPrice && benchmarkId ? (
          <>
            <MaterialCardPricesElement>
              <MaterialCardPriceUsdElement>
                {formatUsdPerKg(priceUsd)}
              </MaterialCardPriceUsdElement>
              <MaterialCardPriceArsElement>
                {formatArsPerKg(priceArs)}
              </MaterialCardPriceArsElement>
            </MaterialCardPricesElement>
            <MaterialCardMetaElement>
              {benchmarkReferenceLabel[benchmarkId]}
            </MaterialCardMetaElement>
          </>
        ) : (
          <>
            <MaterialCardPricesElement>
              <MaterialCardPriceUsdElement>
                {materialsCopy.unavailablePrice}
              </MaterialCardPriceUsdElement>
            </MaterialCardPricesElement>
            <MaterialCardCaptionElement>
              {materialsCopy.cardCaption}
            </MaterialCardCaptionElement>
          </>
        )}
      </MaterialCardCopyElement>

      <MaterialCardCtaElement to={href}>
        {isCustom ? materialsCopy.customCta : materialsCopy.cardCta}
        <ArrowForwardIcon aria-hidden />
      </MaterialCardCtaElement>
    </MaterialCardElement>
  );
};
