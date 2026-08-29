import type { ContactInquiry } from "./data";

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; code: "unavailable" | "error" };

export const submitContactInquiry = async (
  inquiry: ContactInquiry,
): Promise<ContactSubmitResult> => {
  void inquiry;
  return { ok: false, code: "unavailable" };
};
