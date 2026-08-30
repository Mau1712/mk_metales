import { MarketDataInternalError } from "./errors.ts";

const METALS_DEV_LATEST_URL = "https://api.metals.dev/v1/latest";
export const METALS_DEV_TIMEOUT_MS = 8000;

const QUOTA_ERROR_CODE = 1203;

const isAbortError = (error: unknown) => {
  return (
    (error instanceof DOMException && error.name === "AbortError") ||
    (error instanceof Error && error.name === "AbortError")
  );
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

export type MetalsDevLatestPayload = Record<string, unknown>;

export const getMetalsDevApiKey = () => {
  const apiKey = process.env.METALS_DEV_API_KEY?.trim();

  if (!apiKey) {
    throw new MarketDataInternalError("MISSING_API_KEY");
  }

  return apiKey;
};

export const fetchMetalsDevLatest = async (): Promise<MetalsDevLatestPayload> => {
  const apiKey = getMetalsDevApiKey();
  const requestUrl = new URL(METALS_DEV_LATEST_URL);
  requestUrl.searchParams.set("api_key", apiKey);
  requestUrl.searchParams.set("currency", "USD");
  requestUrl.searchParams.set("unit", "kg");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, METALS_DEV_TIMEOUT_MS);

  try {
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    const payload: unknown = await response.json().catch(() => null);

    if (response.status === 429) {
      throw new MarketDataInternalError("PROVIDER_QUOTA");
    }

    if (
      isRecord(payload) &&
      payload.status === "failure" &&
      payload.error_code === QUOTA_ERROR_CODE
    ) {
      throw new MarketDataInternalError("PROVIDER_QUOTA");
    }

    if (!response.ok) {
      throw new MarketDataInternalError("PROVIDER_HTTP");
    }

    if (!isRecord(payload)) {
      throw new MarketDataInternalError("INVALID_RESPONSE");
    }

    return payload;
  } catch (error) {
    if (error instanceof MarketDataInternalError) {
      throw error;
    }

    if (isAbortError(error)) {
      throw new MarketDataInternalError("PROVIDER_TIMEOUT");
    }

    throw new MarketDataInternalError("UNEXPECTED");
  } finally {
    clearTimeout(timeoutId);
  }
};
