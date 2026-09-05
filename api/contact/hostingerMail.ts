import { ContactMailError } from "./errors.js";

const MAIL_API_BASE = "https://api.mail.hostinger.com";
const MAIL_TIMEOUT_MS = 12_000;
const DEFAULT_CONTACT_EMAIL = "info@mkmetales.com";

const isAbortError = (error: unknown) => {
  return (
    (error instanceof DOMException && error.name === "AbortError") ||
    (error instanceof Error && error.name === "AbortError")
  );
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const getToken = () => process.env.HOSTINGER_MAIL_API_TOKEN?.trim() ?? "";

export const getContactToEmail = () => {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
};

const getFromEmail = () => {
  return process.env.HOSTINGER_MAIL_FROM?.trim() || getContactToEmail();
};

export const isContactMailConfigured = () => {
  return getToken() !== "";
};

const mailFetch = async (path: string, init?: RequestInit) => {
  const token = getToken();

  if (!token) {
    throw new ContactMailError("MISSING_TOKEN");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, MAIL_TIMEOUT_MS);

  try {
    return await fetch(`${MAIL_API_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        ...init?.headers,
      },
      signal: controller.signal,
    });
  } catch (error) {
    if (isAbortError(error)) {
      throw new ContactMailError("PROVIDER_TIMEOUT");
    }

    throw new ContactMailError("PROVIDER_HTTP");
  } finally {
    clearTimeout(timeoutId);
  }
};

const readMailboxes = async () => {
  const response = await mailFetch("/api/v1/me");

  if (!response.ok) {
    throw new ContactMailError("PROVIDER_HTTP");
  }

  const payload: unknown = await response.json();

  if (!isRecord(payload) || !isRecord(payload.data)) {
    throw new ContactMailError("INVALID_RESPONSE");
  }

  const mailboxes = payload.data.mailboxes;

  if (!Array.isArray(mailboxes)) {
    throw new ContactMailError("INVALID_RESPONSE");
  }

  return mailboxes.flatMap((entry) => {
    if (!isRecord(entry)) {
      return [];
    }

    const resourceId =
      typeof entry.resourceId === "string" ? entry.resourceId.trim() : "";
    const address = typeof entry.address === "string" ? entry.address.trim() : "";

    if (!resourceId || !address) {
      return [];
    }

    return [{ resourceId, address }];
  });
};

const resolveMailboxId = async () => {
  const configured = process.env.HOSTINGER_MAILBOX_ID?.trim();

  if (configured) {
    return configured;
  }

  const from = getFromEmail().toLowerCase();
  const match = (await readMailboxes()).find(
    (mailbox) => mailbox.address.toLowerCase() === from,
  );

  if (!match) {
    throw new ContactMailError("MAILBOX_NOT_FOUND");
  }

  return match.resourceId;
};

export type OutgoingContactEmail = {
  subject: string;
  text: string;
  html: string;
};

export const sendContactEmail = async (email: OutgoingContactEmail) => {
  const mailboxId = await resolveMailboxId();
  const response = await mailFetch(
    `/api/v1/mailboxes/${encodeURIComponent(mailboxId)}/send`,
    {
      method: "POST",
      body: JSON.stringify({
        to: [getContactToEmail()],
        displayName: "MK Metales",
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    },
  );

  if (!response.ok) {
    throw new ContactMailError("PROVIDER_HTTP");
  }
};
