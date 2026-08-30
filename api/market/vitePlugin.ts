import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import { handleMetalPrices } from "./handleMetalPrices.ts";

const METAL_PRICES_PATH = "/api/metal-prices";

const sendJson = (
  response: ServerResponse,
  status: number,
  headers: Record<string, string>,
  body: unknown,
) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  for (const [key, value] of Object.entries(headers)) {
    response.setHeader(key, value);
  }

  response.end(JSON.stringify(body));
};

const isMetalPricesRequest = (request: IncomingMessage) => {
  const path = request.url?.split("?")[0];
  return path === METAL_PRICES_PATH;
};

const handleDevRequest = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  if (request.method !== "GET") {
    sendJson(
      response,
      405,
      { "Cache-Control": "no-store" },
      { status: "error", code: "METHOD_NOT_ALLOWED" },
    );
    return;
  }

  const result = await handleMetalPrices();
  sendJson(response, result.status, result.headers, result.body);
};

export const createMetalPricesDevPlugin = (): Plugin => {
  return {
    name: "mk-metales-metal-prices-dev",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (!isMetalPricesRequest(request)) {
          next();
          return;
        }

        void handleDevRequest(request, response);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        if (!isMetalPricesRequest(request)) {
          next();
          return;
        }

        void handleDevRequest(request, response);
      });
    },
  };
};
