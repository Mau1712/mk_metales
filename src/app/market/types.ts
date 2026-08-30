export const benchmarkMetalIds = [
  "aluminum",
  "copper",
  "lead",
  "nickel",
  "zinc",
] as const;

export type BenchmarkMetalId = (typeof benchmarkMetalIds)[number];

export type BenchmarkQuotes = Record<BenchmarkMetalId, number>;

export type MetalBenchmarks = {
  currency: "USD";
  unit: "kg";
  updatedAt: string;
  spot: BenchmarkQuotes;
  lme: BenchmarkQuotes;
  exchangeRates: {
    usdToArs: number;
  };
};

export const MARKET_DATA_ERROR_CODE = "MARKET_DATA_UNAVAILABLE" as const;

export type MarketDataErrorBody = {
  status: "error";
  code: typeof MARKET_DATA_ERROR_CODE;
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isFiniteNumber = (value: unknown): value is number => {
  return typeof value === "number" && Number.isFinite(value);
};

const isBenchmarkQuotes = (value: unknown): value is BenchmarkQuotes => {
  if (!isRecord(value)) {
    return false;
  }

  return benchmarkMetalIds.every((id) => isFiniteNumber(value[id]));
};

const isUsdToArsRate = (value: unknown): value is number => {
  return isFiniteNumber(value) && value > 0;
};

export const isMetalBenchmarks = (value: unknown): value is MetalBenchmarks => {
  if (!isRecord(value)) {
    return false;
  }

  if (!isRecord(value.exchangeRates)) {
    return false;
  }

  return (
    value.currency === "USD" &&
    value.unit === "kg" &&
    typeof value.updatedAt === "string" &&
    value.updatedAt.length > 0 &&
    isBenchmarkQuotes(value.spot) &&
    isBenchmarkQuotes(value.lme) &&
    isUsdToArsRate(value.exchangeRates.usdToArs)
  );
};

export const isMarketDataErrorBody = (
  value: unknown,
): value is MarketDataErrorBody => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    value.status === "error" && value.code === MARKET_DATA_ERROR_CODE
  );
};
