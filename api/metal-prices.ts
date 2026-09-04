import { handleMetalPrices } from "./market/handleMetalPrices.js";

const applyResult = async () => {
  const result = await handleMetalPrices();

  return Response.json(result.body, {
    status: result.status,
    headers: result.headers,
  });
};

export const GET = async () => {
  try {
    return await applyResult();
  } catch {
    return Response.json(
      { status: "error", code: "MARKET_DATA_UNAVAILABLE" },
      {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
};
