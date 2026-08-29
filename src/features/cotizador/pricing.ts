import type { QuoteMaterialId } from "@features/home/data.ts";
import type { QuoteRequest, QuoteResult } from "./data";

export type QuoteOutcome =
  | { ok: true; status: "quoted"; result: QuoteResult }
  | { ok: false; status: "unavailable" }
  | { ok: false; status: "error"; code: "unavailable" | "network" };

/**
 * Futuro: material → instrumento de mercado → coeficiente interno.
 * Un material del sitio no equivale a un símbolo de proveedor.
 * No se asignan símbolos ni coeficientes hasta definir la integración real.
 */
export type MaterialBenchmarkRule = {
  materialId: QuoteMaterialId;
  benchmarkId?: string;
};

export const materialBenchmarkRules: Partial<
  Record<QuoteMaterialId, MaterialBenchmarkRule>
> = {};

/**
 * Cadena prevista, aún no implementada:
 * referencia internacional → unidad → moneda → coeficiente de material →
 * coeficiente de presentación/calidad → ajustes comerciales → estimación MK.
 */
export const getQuote = async (
  request: QuoteRequest,
): Promise<QuoteOutcome> => {
  void request;
  return { ok: false, status: "unavailable" };
};
