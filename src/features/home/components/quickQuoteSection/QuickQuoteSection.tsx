import { useId, useState, type FormEvent, type KeyboardEvent } from "react";
import {
  ArrowForwardIcon,
  CalculatorIcon,
  ChevronForwardIcon,
  LayersIcon,
  ValueBenefitIcon,
} from "@assets/icons";
import {
  buildCotizadorHref,
  isQuoteMaterialId,
  isWeightDraft,
  parseWeightKg,
  quoteCopy,
  quoteHints,
  quoteMaterials,
  type QuickQuoteView,
} from "../../data";
import {
  QuickQuoteContinueElement,
  QuickQuoteCopyElement,
  QuickQuoteDisclaimerElement,
  QuickQuoteErrorElement,
  QuickQuoteEyebrowElement,
  QuickQuoteFieldElement,
  QuickQuoteFullLinkElement,
  QuickQuoteHintElement,
  QuickQuoteHintIconElement,
  QuickQuoteHintsElement,
  QuickQuoteHintTextElement,
  QuickQuoteHintTitleElement,
  QuickQuoteIntroElement,
  QuickQuoteLabelElement,
  QuickQuoteModuleElement,
  QuickQuoteResultElement,
  QuickQuoteResultTextElement,
  QuickQuoteResultTitleElement,
  QuickQuoteSectionElement,
  QuickQuoteSectionInnerElement,
  QuickQuoteSelectElement,
  QuickQuoteSelectWrapElement,
  QuickQuoteSubmitElement,
  QuickQuoteSubmitHintElement,
  QuickQuoteTitleElement,
  QuickQuoteWeightInputElement,
  QuickQuoteWeightUnitElement,
  QuickQuoteWeightWrapElement,
} from "./QuickQuoteSection.elements";

const hintIcons = {
  market: ValueBenefitIcon,
  industrial: LayersIcon,
  indicative: CalculatorIcon,
} as const;

export const QuickQuoteSection = () => {
  const materialId = useId();
  const weightId = useId();
  const materialErrorId = useId();
  const weightErrorId = useId();
  const submitHintId = useId();

  const [material, setMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [materialError, setMaterialError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [view, setView] = useState<QuickQuoteView>({ status: "idle" });

  const weightKg = parseWeightKg(weight);
  const selectedMaterial = isQuoteMaterialId(material) ? material : null;
  const canSubmit = selectedMaterial !== null && weightKg !== null;
  const cotizadorHref = buildCotizadorHref(
    selectedMaterial ?? undefined,
    weightKg ?? undefined,
  );
  const cotizadorState =
    selectedMaterial && weightKg
      ? {
          source: "home-quick-quote",
          materialId: selectedMaterial,
          weightKg,
        }
      : { source: "home-quick-quote" };

  const onMaterialSelected = (value: string) => {
    setMaterial(value);
    setMaterialError(null);

    if (view.status !== "ready") {
      return;
    }

    if (isQuoteMaterialId(value) && weightKg !== null) {
      setView({
        status: "ready",
        draft: { materialId: value, weightKg },
      });
      return;
    }

    setView({ status: "idle" });
  };

  const onWeightChanged = (value: string) => {
    if (!isWeightDraft(value)) {
      return;
    }

    setWeight(value);
    setWeightError(null);

    if (view.status !== "ready") {
      return;
    }

    const nextWeight = parseWeightKg(value);

    if (selectedMaterial && nextWeight !== null) {
      setView({
        status: "ready",
        draft: { materialId: selectedMaterial, weightKg: nextWeight },
      });
      return;
    }

    setView({ status: "idle" });
  };

  const onWeightKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-"].includes(event.key)) {
      event.preventDefault();
    }
  };

  const onConsultQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextMaterialError = selectedMaterial
      ? null
      : quoteCopy.materialError;
    const nextWeightError = weightKg !== null ? null : quoteCopy.weightError;

    setMaterialError(nextMaterialError);
    setWeightError(nextWeightError);

    if (!selectedMaterial || weightKg === null) {
      return;
    }

    setView({
      status: "ready",
      draft: { materialId: selectedMaterial, weightKg },
    });
  };

  return (
    <QuickQuoteSectionElement aria-labelledby="home-quote-title">
      <QuickQuoteSectionInnerElement>
        <QuickQuoteCopyElement>
          <QuickQuoteEyebrowElement>
            {quoteCopy.eyebrow}
          </QuickQuoteEyebrowElement>
          <QuickQuoteTitleElement id="home-quote-title">
            {quoteCopy.title}
          </QuickQuoteTitleElement>
          <QuickQuoteIntroElement>{quoteCopy.intro}</QuickQuoteIntroElement>
        </QuickQuoteCopyElement>

        <QuickQuoteHintsElement>
          {quoteHints.map((hint) => {
            const Icon = hintIcons[hint.icon];

            return (
              <QuickQuoteHintElement key={hint.id}>
                <QuickQuoteHintIconElement aria-hidden>
                  <Icon />
                </QuickQuoteHintIconElement>
                <QuickQuoteHintTitleElement>
                  {hint.title}
                </QuickQuoteHintTitleElement>
                <QuickQuoteHintTextElement>
                  {hint.description}
                </QuickQuoteHintTextElement>
              </QuickQuoteHintElement>
            );
          })}
        </QuickQuoteHintsElement>

        <QuickQuoteModuleElement noValidate onSubmit={onConsultQuote}>
          <QuickQuoteFieldElement>
            <QuickQuoteLabelElement htmlFor={materialId}>
              {quoteCopy.materialLabel}
            </QuickQuoteLabelElement>
            <QuickQuoteSelectWrapElement>
              <QuickQuoteSelectElement
                id={materialId}
                name="material"
                value={material}
                aria-invalid={materialError ? true : undefined}
                aria-describedby={materialError ? materialErrorId : undefined}
                onChange={(event) => onMaterialSelected(event.target.value)}
                onBlur={(event) => {
                  if (!isQuoteMaterialId(event.target.value)) {
                    setMaterialError(quoteCopy.materialError);
                  }
                }}
              >
                <option value="" disabled>
                  {quoteCopy.materialPlaceholder}
                </option>
                {quoteMaterials.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </QuickQuoteSelectElement>
              <ChevronForwardIcon aria-hidden />
            </QuickQuoteSelectWrapElement>
            {materialError ? (
              <QuickQuoteErrorElement id={materialErrorId} role="alert">
                {materialError}
              </QuickQuoteErrorElement>
            ) : null}
          </QuickQuoteFieldElement>

          <QuickQuoteFieldElement>
            <QuickQuoteLabelElement htmlFor={weightId}>
              {quoteCopy.weightLabel}
            </QuickQuoteLabelElement>
            <QuickQuoteWeightWrapElement>
              <QuickQuoteWeightInputElement
                id={weightId}
                name="peso"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                placeholder={quoteCopy.weightPlaceholder}
                value={weight}
                aria-invalid={weightError ? true : undefined}
                aria-describedby={weightError ? weightErrorId : undefined}
                onChange={(event) => onWeightChanged(event.target.value)}
                onKeyDown={onWeightKeyDown}
                onBlur={(event) => {
                  if (parseWeightKg(event.target.value) === null) {
                    setWeightError(quoteCopy.weightError);
                  }
                }}
              />
              <QuickQuoteWeightUnitElement aria-hidden>
                {quoteCopy.weightUnit}
              </QuickQuoteWeightUnitElement>
            </QuickQuoteWeightWrapElement>
            {weightError ? (
              <QuickQuoteErrorElement id={weightErrorId} role="alert">
                {weightError}
              </QuickQuoteErrorElement>
            ) : null}
          </QuickQuoteFieldElement>

          <QuickQuoteSubmitElement
            type="submit"
            $inactive={!canSubmit}
            disabled={!canSubmit}
            aria-describedby={!canSubmit ? submitHintId : undefined}
          >
            {quoteCopy.submitLabel}
          </QuickQuoteSubmitElement>
          {!canSubmit ? (
            <QuickQuoteSubmitHintElement id={submitHintId}>
              {quoteCopy.submitHint}
            </QuickQuoteSubmitHintElement>
          ) : null}

          <QuoteResultSlot view={view} />

          <QuickQuoteFullLinkElement to={cotizadorHref} state={cotizadorState}>
            {quoteCopy.fullQuoteLabel}
            <ArrowForwardIcon aria-hidden />
          </QuickQuoteFullLinkElement>
        </QuickQuoteModuleElement>

        <QuickQuoteDisclaimerElement>
          {quoteCopy.disclaimer}
        </QuickQuoteDisclaimerElement>
      </QuickQuoteSectionInnerElement>
    </QuickQuoteSectionElement>
  );
};

const QuoteResultSlot = ({ view }: { view: QuickQuoteView }) => {
  if (view.status !== "ready") {
    return null;
  }

  const href = buildCotizadorHref(view.draft.materialId, view.draft.weightKg);

  return (
    <QuickQuoteResultElement>
      <QuickQuoteResultTitleElement>
        {quoteCopy.readyTitle}
      </QuickQuoteResultTitleElement>
      <QuickQuoteResultTextElement>
        {quoteCopy.readyDescription}
      </QuickQuoteResultTextElement>
      <QuickQuoteContinueElement
        to={href}
        state={{
          source: "home-quick-quote",
          materialId: view.draft.materialId,
          weightKg: view.draft.weightKg,
        }}
      >
        {quoteCopy.continueLabel}
      </QuickQuoteContinueElement>
    </QuickQuoteResultElement>
  );
};
