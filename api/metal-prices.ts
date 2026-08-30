import { handleMetalPrices } from "./market/handleMetalPrices.ts";

const applyResult = async () => {
  const result = await handleMetalPrices();

  return Response.json(result.body, {
    status: result.status,
    headers: result.headers,
  });
};

export const GET = async () => {
  return applyResult();
};
