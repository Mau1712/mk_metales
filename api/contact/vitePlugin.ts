import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import { handleContact } from "./handleContact.js";

const CONTACT_PATH = "/api/contact";
const MAX_BODY_BYTES = 32_000;

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

const isContactRequest = (request: IncomingMessage) => {
  const path = request.url?.split("?")[0];
  return path === CONTACT_PATH;
};

const readJsonBody = (request: IncomingMessage) => {
  return new Promise<unknown>((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;

    request.on("data", (chunk: Buffer) => {
      size += chunk.length;

      if (size > MAX_BODY_BYTES) {
        reject(new Error("PAYLOAD_TOO_LARGE"));
        request.destroy();
        return;
      }

      chunks.push(chunk);
    });

    request.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");

      if (!raw) {
        resolve(null);
        return;
      }

      try {
        resolve(JSON.parse(raw) as unknown);
      } catch {
        reject(new Error("INVALID_JSON"));
      }
    });

    request.on("error", reject);
  });
};

const clientIp = (request: IncomingMessage) => {
  const forwarded = request.headers["x-forwarded-for"];

  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return "unknown";
};

const handleDevRequest = async (
  request: IncomingMessage,
  response: ServerResponse,
) => {
  if (request.method !== "POST") {
    sendJson(
      response,
      405,
      { "Cache-Control": "no-store" },
      { ok: false, code: "error" },
    );
    return;
  }

  try {
    const body = await readJsonBody(request);
    const result = await handleContact(body, clientIp(request));
    sendJson(response, result.status, result.headers, result.body);
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      sendJson(
        response,
        413,
        { "Cache-Control": "no-store" },
        { ok: false, code: "error" },
      );
      return;
    }

    if (error instanceof Error && error.message === "INVALID_JSON") {
      sendJson(
        response,
        400,
        { "Cache-Control": "no-store" },
        { ok: false, code: "invalid" },
      );
      return;
    }

    sendJson(
      response,
      503,
      { "Cache-Control": "no-store" },
      { ok: false, code: "error" },
    );
  }
};

export const createContactDevPlugin = (): Plugin => {
  return {
    name: "mk-metales-contact-dev",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (!isContactRequest(request)) {
          next();
          return;
        }

        void handleDevRequest(request, response);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        if (!isContactRequest(request)) {
          next();
          return;
        }

        void handleDevRequest(request, response);
      });
    },
  };
};
