import { handleContact } from "./contact/handleContact.js";

const MAX_BODY_BYTES = 32_000;

const clientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return "unknown";
};

export const POST = async (request: Request) => {
  try {
    const raw = await request.text();

    if (raw.length > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, code: "error" },
        { status: 413, headers: { "Cache-Control": "no-store" } },
      );
    }

    let body: unknown = null;

    if (raw) {
      try {
        body = JSON.parse(raw) as unknown;
      } catch {
        return Response.json(
          { ok: false, code: "invalid" },
          { status: 400, headers: { "Cache-Control": "no-store" } },
        );
      }
    }

    const result = await handleContact(body, clientIp(request));

    return Response.json(result.body, {
      status: result.status,
      headers: result.headers,
    });
  } catch {
    return Response.json(
      { ok: false, code: "error" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
};
