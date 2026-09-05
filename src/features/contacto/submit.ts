import type { ContactInquiry } from "./data";

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; code: "unavailable" | "error" };

export const submitContactInquiry = async (
  inquiry: ContactInquiry,
): Promise<ContactSubmitResult> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiry),
    });

    if (response.ok) {
      return { ok: true };
    }

    if (response.status === 503) {
      return { ok: false, code: "unavailable" };
    }

    return { ok: false, code: "error" };
  } catch {
    return { ok: false, code: "error" };
  }
};
