export const MARKET_DATA_UNAVAILABLE = "MARKET_DATA_UNAVAILABLE" as const;

export type MarketDataInternalCode =
  | "MISSING_API_KEY"
  | "PROVIDER_TIMEOUT"
  | "PROVIDER_QUOTA"
  | "PROVIDER_HTTP"
  | "INVALID_RESPONSE"
  | "MISSING_BENCHMARK"
  | "UNEXPECTED";

export class MarketDataInternalError extends Error {
  readonly internalCode: MarketDataInternalCode;

  constructor(internalCode: MarketDataInternalCode) {
    super(internalCode);
    this.name = "MarketDataInternalError";
    this.internalCode = internalCode;
  }
}

export const publicErrorBody = {
  status: "error" as const,
  code: MARKET_DATA_UNAVAILABLE,
};
