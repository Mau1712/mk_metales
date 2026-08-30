import {
  isMarketDataErrorBody,
  isMetalBenchmarks,
  type MetalBenchmarks,
} from "./types";

export class MarketDataRequestError extends Error {
  readonly code: string;

  constructor(code: string) {
    super("No se pudieron obtener las referencias de mercado.");
    this.name = "MarketDataRequestError";
    this.code = code;
  }
}

let cachedBenchmarks: MetalBenchmarks | null = null;
let inflightBenchmarks: Promise<MetalBenchmarks> | null = null;

const fetchBenchmarks = async (): Promise<MetalBenchmarks> => {
  const response = await fetch("/api/metal-prices", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const payload: unknown = await response.json().catch(() => null);

  if (response.ok && isMetalBenchmarks(payload)) {
    return payload;
  }

  if (isMarketDataErrorBody(payload)) {
    throw new MarketDataRequestError(payload.code);
  }

  throw new MarketDataRequestError("MARKET_DATA_UNAVAILABLE");
};

const requestBenchmarks = async (): Promise<MetalBenchmarks> => {
  if (cachedBenchmarks) {
    return cachedBenchmarks;
  }

  if (inflightBenchmarks) {
    return inflightBenchmarks;
  }

  inflightBenchmarks = fetchBenchmarks()
    .then((benchmarks) => {
      cachedBenchmarks = benchmarks;
      return benchmarks;
    })
    .finally(() => {
      inflightBenchmarks = null;
    });

  return inflightBenchmarks;
};

export const marketDataService = {
  getBenchmarks: requestBenchmarks,
};
