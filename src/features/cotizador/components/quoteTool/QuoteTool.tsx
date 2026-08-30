import { useId, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  isQuoteMaterialId,
  isWeightDraft,
  parseWeightKg,
} from "@features/home/data.ts";
import { QuoteForm, type QuoteFormErrors, type QuoteFormValues } from "../quoteForm/QuoteForm";
import { QuoteSummary } from "../quoteSummary/QuoteSummary";
import {
  QUOTE_SUMMARY_ID,
  buildQuoteQuery,
  parseQuotePrefill,
  presentationsForMaterial,
  quoteFormCopy,
  toQuoteRequest,
  type QuoteRequest,
  type QuoteResult,
  type QuoteStatus,
} from "../../data";
import { getQuote } from "../../pricing.ts";
import {
  QuoteToolElement,
  QuoteToolFormPanelElement,
  QuoteToolInnerElement,
} from "./QuoteTool.elements";

const createInitialValues = (
  search: string,
  state: unknown,
): QuoteFormValues => {
  const prefill = parseQuotePrefill(search, state);

  return {
    materialId: prefill.materialId,
    weight: prefill.weight,
    presentation: "",
    location: "",
    frequency: "",
  };
};

const validateValues = (values: QuoteFormValues): QuoteFormErrors => {
  const errors: QuoteFormErrors = {};

  if (!isQuoteMaterialId(values.materialId)) {
    errors.material = quoteFormCopy.materialError;
  }

  if (parseWeightKg(values.weight) === null) {
    errors.weight = quoteFormCopy.weightError;
  }

  return errors;
};

const queriesMatch = (
  current: URLSearchParams,
  next: URLSearchParams,
) => {
  return (
    (current.get("material") ?? "") === (next.get("material") ?? "") &&
    (current.get("peso") ?? "") === (next.get("peso") ?? "")
  );
};

const scrollToSummaryOnCompact = () => {
  if (!window.matchMedia("(max-width: 1023px)").matches) {
    return;
  }

  document.getElementById(QUOTE_SUMMARY_ID)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

type QuoteEngine = {
  status: Extract<QuoteStatus, "loading" | "quoted" | "unavailable" | "error">;
  result: QuoteResult | null;
} | null;

const resolveStatus = (
  request: QuoteRequest | null,
  engine: QuoteEngine,
): QuoteStatus => {
  if (engine) {
    return engine.status;
  }

  return request ? "ready" : "idle";
};

export const QuoteTool = () => {
  const { search, state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState(() => createInitialValues(search, state));
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [engine, setEngine] = useState<QuoteEngine>(null);
  const quoteSeq = useRef(0);

  const materialFieldId = useId();
  const weightFieldId = useId();
  const presentationId = useId();
  const locationId = useId();
  const frequencyId = useId();
  const materialErrorId = useId();
  const weightErrorId = useId();
  const submitHintId = useId();

  const request = toQuoteRequest(values);
  const status = resolveStatus(request, engine);
  const presentations = presentationsForMaterial(values.materialId);
  const loading = status === "loading";

  const runQuote = async (quoteRequest: QuoteRequest) => {
    const seq = ++quoteSeq.current;
    setEngine({ status: "loading", result: null });

    const outcome = await getQuote(quoteRequest);

    if (seq !== quoteSeq.current) {
      return;
    }

    if (outcome.ok) {
      setEngine({ status: "quoted", result: outcome.result });
      return;
    }

    setEngine({ status: outcome.status, result: null });
  };

  const writeQuery = (materialId: string, weight: string) => {
    const next = buildQuoteQuery(materialId, weight);

    if (queriesMatch(searchParams, next)) {
      return;
    }

    setSearchParams(next, { replace: true });
  };

  const clearFieldError = (key: keyof QuoteFormErrors) => {
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const onField = (key: keyof QuoteFormValues, value: string) => {
    setValues((current) => {
      const next = { ...current, [key]: value };

      if (key === "materialId") {
        const allowed = presentationsForMaterial(value);

        if (!allowed.some((item) => item.id === next.presentation)) {
          next.presentation = "";
        }
      }

      return next;
    });

    if (key === "materialId") {
      clearFieldError("material");
      writeQuery(value, values.weight);
      setEngine(null);
    }
  };

  const onWeightDraft = (value: string) => {
    if (!isWeightDraft(value)) {
      return;
    }

    setValues((current) => ({ ...current, weight: value }));
    clearFieldError("weight");
    writeQuery(values.materialId, value);
    setEngine(null);
  };

  const onSubmit = () => {
    const nextErrors = validateValues(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.material) {
        document.getElementById(materialFieldId)?.focus();
      } else if (nextErrors.weight) {
        document.getElementById(weightFieldId)?.focus();
      }

      return;
    }

    writeQuery(values.materialId, values.weight);
    scrollToSummaryOnCompact();

    const quoteRequest = toQuoteRequest(values);

    if (!quoteRequest) {
      return;
    }

    void runQuote(quoteRequest);
  };

  const onRetry = () => {
    if (!request) {
      return;
    }

    void runQuote(request);
  };

  const onReset = () => {
    quoteSeq.current += 1;
    setEngine(null);
  };

  return (
    <QuoteToolElement aria-labelledby="cotizador-form-title">
      <QuoteToolInnerElement>
        <QuoteToolFormPanelElement>
          <QuoteForm
            values={values}
            errors={errors}
            presentations={presentations}
            materialId={materialFieldId}
            weightId={weightFieldId}
            presentationId={presentationId}
            locationId={locationId}
            frequencyId={frequencyId}
            materialErrorId={materialErrorId}
            weightErrorId={weightErrorId}
            submitHintId={submitHintId}
            loading={loading}
            onField={onField}
            onWeightDraft={onWeightDraft}
            onSubmit={onSubmit}
            onMaterialBlur={() => {
              if (!isQuoteMaterialId(values.materialId)) {
                setErrors((current) => ({
                  ...current,
                  material: quoteFormCopy.materialError,
                }));
              }
            }}
            onWeightBlur={() => {
              if (parseWeightKg(values.weight) === null) {
                setErrors((current) => ({
                  ...current,
                  weight: quoteFormCopy.weightError,
                }));
              }

              writeQuery(values.materialId, values.weight);
            }}
          />
        </QuoteToolFormPanelElement>

        <QuoteSummary
          status={status}
          request={request}
          result={engine?.result ?? null}
          onRetry={onRetry}
          onReset={onReset}
        />
      </QuoteToolInnerElement>
    </QuoteToolElement>
  );
};
