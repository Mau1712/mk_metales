import type { MetalBenchmarks } from "../../src/app/market/types.ts";
import {
  MarketDataInternalError,
  publicErrorBody,
} from "./errors.ts";
import { fetchMetalsDevLatest } from "./metalsDevClient.ts";
import { toMetalBenchmarks } from "./metalsDevAdapter.ts";

export const SUCCESS_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=0, must-revalidate",
  "CDN-Cache-Control":
    "public, s-maxage=43200, stale-while-revalidate=86400",
  "Vercel-CDN-Cache-Control":
    "public, s-maxage=43200, stale-while-revalidate=86400",
} as const;

export const ERROR_CACHE_HEADERS = {
  "Cache-Control": "no-store",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
} as const;

export type MetalPricesHttpResult = {
  status: number;
  headers: Record<string, string>;
  body: MetalBenchmarks | typeof publicErrorBody;
};

const logInternalError = (error: unknown) => {
  if (error instanceof MarketDataInternalError) {
    console.error(`[metal-prices] ${error.internalCode}`);
    return;
  }

  console.error("[metal-prices] UNEXPECTED");
};

export const handleMetalPrices = async (): Promise<MetalPricesHttpResult> => {
  try {
    const payload = await fetchMetalsDevLatest();
    const benchmarks = toMetalBenchmarks(payload);

    return {
      status: 200,
      headers: { ...SUCCESS_CACHE_HEADERS },
      body: benchmarks,
    };
  } catch (error) {
    logInternalError(error);

    return {
      status: 503,
      headers: { ...ERROR_CACHE_HEADERS },
      body: publicErrorBody,
    };
  }
};
