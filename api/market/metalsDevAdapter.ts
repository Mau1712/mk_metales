import {
  benchmarkMetalIds,
  type BenchmarkQuotes,
  type MetalBenchmarks,
} from "../../src/app/market/types.ts";
import { MarketDataInternalError } from "./errors.ts";
import type { MetalsDevLatestPayload } from "./metalsDevClient.ts";

const SPOT_KEYS = {
  aluminum: "aluminum",
  copper: "copper",
  lead: "lead",
  nickel: "nickel",
  zinc: "zinc",
} as const;

const LME_KEYS = {
  aluminum: "lme_aluminum",
  copper: "lme_copper",
  lead: "lme_lead",
  nickel: "lme_nickel",
  zinc: "lme_zinc",
} as const;

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isFiniteNumber = (value: unknown): value is number => {
  return typeof value === "number" && Number.isFinite(value);
};

const readUpdatedAt = (payload: MetalsDevLatestPayload) => {
  if (typeof payload.timestamp === "string" && payload.timestamp.length > 0) {
    return payload.timestamp;
  }

  if (isRecord(payload.timestamps) && typeof payload.timestamps.metal === "string") {
    if (payload.timestamps.metal.length > 0) {
      return payload.timestamps.metal;
    }
  }

  return null;
};

const readQuotes = (
  metals: Record<string, unknown>,
  keys: Record<keyof BenchmarkQuotes, string>,
): BenchmarkQuotes => {
  const quotes = {} as BenchmarkQuotes;

  for (const id of benchmarkMetalIds) {
    const value = metals[keys[id]];

    if (!isFiniteNumber(value)) {
      throw new MarketDataInternalError("MISSING_BENCHMARK");
    }

    quotes[id] = value;
  }

  return quotes;
};

const readUsdToArs = (payload: MetalsDevLatestPayload) => {
  if (!isRecord(payload.currencies)) {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  const arsInUsd = payload.currencies.ARS;

  if (!isFiniteNumber(arsInUsd) || arsInUsd <= 0) {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  const usdToArs = 1 / arsInUsd;

  if (!Number.isFinite(usdToArs) || usdToArs <= 0) {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  return usdToArs;
};

export const toMetalBenchmarks = (
  payload: MetalsDevLatestPayload,
): MetalBenchmarks => {
  if (payload.status !== "success") {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  if (payload.currency !== "USD") {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  if (payload.unit !== "kg") {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  const updatedAt = readUpdatedAt(payload);

  if (!updatedAt) {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  if (!isRecord(payload.metals)) {
    throw new MarketDataInternalError("INVALID_RESPONSE");
  }

  return {
    currency: "USD",
    unit: "kg",
    updatedAt,
    spot: readQuotes(payload.metals, SPOT_KEYS),
    lme: readQuotes(payload.metals, LME_KEYS),
    exchangeRates: {
      usdToArs: readUsdToArs(payload),
    },
  };
};
