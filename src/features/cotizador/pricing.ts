import type { BenchmarkMetalId, MetalBenchmarks } from "@app/market";
import {
  getMaterialBenchmarkId,
  marketDataService,
} from "@app/market";
import type { QuoteRequest, QuoteResult } from "./data";

export type QuoteOutcome =
  | { ok: true; status: "quoted"; result: QuoteResult }
  | { ok: false; status: "unavailable" }
  | { ok: false; status: "error"; code: "unavailable" | "network" };

export { getMaterialBenchmarkId, materialBenchmarkMap } from "@app/market";

const toQuoteResult = (
  request: QuoteRequest,
  benchmarks: MetalBenchmarks,
  benchmarkId: BenchmarkMetalId,
): QuoteResult => {
  const referencePricePerKg = benchmarks.lme[benchmarkId];
  const estimatedTotalUsd = referencePricePerKg * request.weightKg;
  const estimatedTotalArs =
    estimatedTotalUsd * benchmarks.exchangeRates.usdToArs;

  return {
    materialId: request.materialId,
    weightKg: request.weightKg,
    referencePricePerKg,
    estimatedPricePerKg: referencePricePerKg,
    estimatedTotal: estimatedTotalUsd,
    estimatedTotalArs,
    currency: benchmarks.currency,
    referenceTimestamp: benchmarks.updatedAt,
    status: "estimated",
  };
};

export const getQuote = async (
  request: QuoteRequest,
): Promise<QuoteOutcome> => {
  const benchmarkId = getMaterialBenchmarkId(request.materialId);

  if (benchmarkId === null) {
    return { ok: false, status: "unavailable" };
  }

  try {
    const benchmarks = await marketDataService.getBenchmarks();
    const referencePricePerKg = benchmarks.lme[benchmarkId];
    const usdToArs = benchmarks.exchangeRates.usdToArs;

    if (
      !Number.isFinite(referencePricePerKg) ||
      !Number.isFinite(usdToArs) ||
      usdToArs <= 0
    ) {
      return { ok: false, status: "error", code: "network" };
    }

    return {
      ok: true,
      status: "quoted",
      result: toQuoteResult(request, benchmarks, benchmarkId),
    };
  } catch {
    return { ok: false, status: "error", code: "network" };
  }
};
