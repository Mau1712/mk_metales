export type ContactPublicCode = "unavailable" | "error" | "invalid";

export type ContactInternalCode =
  | "MISSING_TOKEN"
  | "MAILBOX_NOT_FOUND"
  | "PROVIDER_TIMEOUT"
  | "PROVIDER_HTTP"
  | "INVALID_RESPONSE"
  | "RATE_LIMITED"
  | "UNEXPECTED";

export class ContactMailError extends Error {
  readonly internalCode: ContactInternalCode;

  constructor(internalCode: ContactInternalCode) {
    super(internalCode);
    this.name = "ContactMailError";
    this.internalCode = internalCode;
  }
}

export const ERROR_CACHE_HEADERS = {
  "Cache-Control": "no-store",
} as const;
