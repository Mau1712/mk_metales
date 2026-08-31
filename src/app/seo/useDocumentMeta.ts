import { useEffect } from "react";
import {
  applyDocumentMetaToDocument,
  collectDocumentMeta,
} from "./documentMeta";
import type { DocumentMeta } from "./types";

export type { DocumentMeta } from "./types";

export const useDocumentMeta = (meta: DocumentMeta) => {
  collectDocumentMeta(meta);

  useEffect(() => {
    applyDocumentMetaToDocument(meta);
  }, [meta]);
};
