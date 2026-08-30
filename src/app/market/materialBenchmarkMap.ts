import type { BenchmarkMetalId } from "./types.ts";

/**
 * Referencia LME usada como aproximación de mercado.
 * No implica que el scrap tenga la composición del instrumento.
 */
export const materialBenchmarkMap = {
  bronce: "copper",
  "aluminio-duro": "aluminum",
  "aluminio-blando": "aluminum",
  plomo: "lead",
  "baterias-comunes": "lead",
  "baterias-gel": "lead",
  zinc: "zinc",
  "acero-inoxidable": "nickel",
  "viruta-aluminio": "aluminum",
  "viruta-bronce": "copper",
  "viruta-zinc": "zinc",
  "hierro-chico": null,
} as const satisfies Record<string, BenchmarkMetalId | null>;

export type MappedMaterialId = keyof typeof materialBenchmarkMap;

export const getMaterialBenchmarkId = (materialId: MappedMaterialId) => {
  return materialBenchmarkMap[materialId];
};

export const benchmarkReferenceLabel = {
  aluminum: "Referencia: Aluminio LME",
  copper: "Referencia: Cobre LME",
  lead: "Referencia: Plomo LME",
  nickel: "Referencia: Níquel LME",
  zinc: "Referencia: Zinc LME",
} as const satisfies Record<BenchmarkMetalId, string>;
