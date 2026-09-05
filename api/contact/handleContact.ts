import { ContactMailError, ERROR_CACHE_HEADERS } from "./errors.js";
import {
  getContactToEmail,
  isContactMailConfigured,
  sendContactEmail,
} from "./hostingerMail.js";
import { parseContactInquiry, type ParsedContactInquiry } from "./parseInquiry.js";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitHits = new Map<string, number[]>();

export type ContactHttpResult = {
  status: number;
  headers: Record<string, string>;
  body: { ok: true } | { ok: false; code: "unavailable" | "error" | "invalid" };
};

const escapeHtml = (value: string) => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (rateLimitHits.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitHits.set(ip, recent);
  return false;
};

const line = (label: string, value: string | null) => {
  return `${label}: ${value && value !== "" ? value : "—"}`;
};

const htmlRow = (label: string, value: string | null) => {
  const display = value && value !== "" ? escapeHtml(value) : "—";
  return `<tr><th align="left" style="padding:4px 16px 4px 0;color:#5c6370;font-weight:600;vertical-align:top;">${escapeHtml(label)}</th><td style="padding:4px 0;color:#1e232b;">${display}</td></tr>`;
};

const buildEmail = (inquiry: ParsedContactInquiry) => {
  const who = inquiry.company ?? inquiry.name;
  const subject = `Consulta: ${inquiry.materialLabel} — ${who}`;
  const weight =
    inquiry.weightKg === null ? null : `${inquiry.weightKg} kg`;

  const text = [
    "Nueva consulta desde mkmetales.com",
    "",
    line("Nombre", inquiry.name),
    line("Empresa", inquiry.company),
    line("Teléfono", inquiry.phone),
    line("Email (responder a)", inquiry.email),
    line("Material", inquiry.materialLabel),
    line("Peso aproximado", weight),
    line("Presentación", inquiry.presentationLabel),
    line("Ubicación", inquiry.location),
    line("Frecuencia", inquiry.frequencyLabel),
    "",
    "Mensaje:",
    inquiry.message,
  ].join("\n");

  const html = `
    <p>Nueva consulta desde <strong>mkmetales.com</strong></p>
    <table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;line-height:1.45;">
      ${htmlRow("Nombre", inquiry.name)}
      ${htmlRow("Empresa", inquiry.company)}
      ${htmlRow("Teléfono", inquiry.phone)}
      ${htmlRow("Email (responder a)", inquiry.email)}
      ${htmlRow("Material", inquiry.materialLabel)}
      ${htmlRow("Peso aproximado", weight)}
      ${htmlRow("Presentación", inquiry.presentationLabel)}
      ${htmlRow("Ubicación", inquiry.location)}
      ${htmlRow("Frecuencia", inquiry.frequencyLabel)}
    </table>
    <p style="margin:20px 0 8px;font-weight:600;">Mensaje</p>
    <p style="white-space:pre-wrap;margin:0;">${escapeHtml(inquiry.message)}</p>
    <p style="margin-top:24px;color:#5c6370;font-size:12px;">Destino: ${escapeHtml(getContactToEmail())}</p>
  `;

  return { subject, text, html };
};

const logInternalError = (error: unknown) => {
  if (error instanceof ContactMailError) {
    console.error(`[contact] ${error.internalCode}`);
    return;
  }

  console.error("[contact] UNEXPECTED");
};

export const handleContact = async (
  body: unknown,
  ip: string,
): Promise<ContactHttpResult> => {
  if (!isContactMailConfigured()) {
    return {
      status: 503,
      headers: { ...ERROR_CACHE_HEADERS },
      body: { ok: false, code: "unavailable" },
    };
  }

  if (isRateLimited(ip)) {
    return {
      status: 429,
      headers: { ...ERROR_CACHE_HEADERS },
      body: { ok: false, code: "error" },
    };
  }

  const inquiry = parseContactInquiry(body);

  if (!inquiry) {
    return {
      status: 400,
      headers: { ...ERROR_CACHE_HEADERS },
      body: { ok: false, code: "invalid" },
    };
  }

  try {
    await sendContactEmail(buildEmail(inquiry));

    return {
      status: 200,
      headers: { ...ERROR_CACHE_HEADERS },
      body: { ok: true },
    };
  } catch (error) {
    logInternalError(error);

    return {
      status: 503,
      headers: { ...ERROR_CACHE_HEADERS },
      body: { ok: false, code: "unavailable" },
    };
  }
};
