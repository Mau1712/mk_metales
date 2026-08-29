import { ChevronForwardIcon } from "@assets/icons";
import { quoteMaterials } from "@features/home/data.ts";
import {
  generationFrequencies,
  quoteFormCopy,
  type MaterialPresentation,
} from "../../data";
import {
  QuoteFormActionsElement,
  QuoteFormElement,
  QuoteFormErrorElement,
  QuoteFormFieldElement,
  QuoteFormHintElement,
  QuoteFormInputElement,
  QuoteFormLabelElement,
  QuoteFormOptionalElement,
  QuoteFormSelectElement,
  QuoteFormSelectWrapElement,
  QuoteFormSubmitElement,
  QuoteFormTitleElement,
  QuoteFormWeightInputElement,
  QuoteFormWeightUnitElement,
  QuoteFormWeightWrapElement,
} from "./QuoteForm.elements";

export type QuoteFormValues = {
  materialId: string;
  weight: string;
  presentation: string;
  location: string;
  frequency: string;
};

export type QuoteFormErrors = {
  material?: string;
  weight?: string;
};

type PresentationOption = {
  id: MaterialPresentation;
  label: string;
};

type QuoteFormProps = {
  values: QuoteFormValues;
  errors: QuoteFormErrors;
  presentations: ReadonlyArray<PresentationOption>;
  materialId: string;
  weightId: string;
  presentationId: string;
  locationId: string;
  frequencyId: string;
  materialErrorId: string;
  weightErrorId: string;
  submitHintId: string;
  loading: boolean;
  onField: (key: keyof QuoteFormValues, value: string) => void;
  onWeightDraft: (value: string) => void;
  onSubmit: () => void;
  onMaterialBlur: () => void;
  onWeightBlur: () => void;
};

const optionalLabel = (label: string, hint: string) => (
  <>
    {label}
    <QuoteFormOptionalElement>{hint}</QuoteFormOptionalElement>
  </>
);

export const QuoteForm = ({
  values,
  errors,
  presentations,
  materialId,
  weightId,
  presentationId,
  locationId,
  frequencyId,
  materialErrorId,
  weightErrorId,
  submitHintId,
  loading,
  onField,
  onWeightDraft,
  onSubmit,
  onMaterialBlur,
  onWeightBlur,
}: QuoteFormProps) => {
  return (
    <QuoteFormElement
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <QuoteFormTitleElement id="cotizador-form-title">
        {quoteFormCopy.title}
      </QuoteFormTitleElement>

      <QuoteFormFieldElement>
        <QuoteFormLabelElement htmlFor={materialId}>
          {quoteFormCopy.materialLabel}
        </QuoteFormLabelElement>
        <QuoteFormSelectWrapElement>
          <QuoteFormSelectElement
            id={materialId}
            name="material"
            required
            aria-required="true"
            aria-invalid={errors.material ? true : undefined}
            aria-describedby={errors.material ? materialErrorId : undefined}
            value={values.materialId}
            disabled={loading}
            onChange={(event) => onField("materialId", event.target.value)}
            onBlur={onMaterialBlur}
          >
            <option value="" disabled>
              {quoteFormCopy.materialPlaceholder}
            </option>
            {quoteMaterials.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </QuoteFormSelectElement>
          <ChevronForwardIcon aria-hidden />
        </QuoteFormSelectWrapElement>
        {errors.material ? (
          <QuoteFormErrorElement id={materialErrorId} role="alert">
            {errors.material}
          </QuoteFormErrorElement>
        ) : null}
      </QuoteFormFieldElement>

      <QuoteFormFieldElement>
        <QuoteFormLabelElement htmlFor={weightId}>
          {quoteFormCopy.weightLabel}
        </QuoteFormLabelElement>
        <QuoteFormWeightWrapElement>
          <QuoteFormWeightInputElement
            id={weightId}
            name="peso"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            required
            aria-required="true"
            aria-invalid={errors.weight ? true : undefined}
            aria-describedby={errors.weight ? weightErrorId : undefined}
            value={values.weight}
            disabled={loading}
            onChange={(event) => onWeightDraft(event.target.value)}
            onKeyDown={(event) => {
              if (["e", "E", "+", "-"].includes(event.key)) {
                event.preventDefault();
              }
            }}
            onBlur={onWeightBlur}
          />
          <QuoteFormWeightUnitElement aria-hidden>
            {quoteFormCopy.weightUnit}
          </QuoteFormWeightUnitElement>
        </QuoteFormWeightWrapElement>
        {errors.weight ? (
          <QuoteFormErrorElement id={weightErrorId} role="alert">
            {errors.weight}
          </QuoteFormErrorElement>
        ) : null}
      </QuoteFormFieldElement>

      <QuoteFormFieldElement>
        <QuoteFormLabelElement htmlFor={presentationId}>
          {optionalLabel(
            quoteFormCopy.presentationLabel,
            quoteFormCopy.presentationOptional,
          )}
        </QuoteFormLabelElement>
        <QuoteFormSelectWrapElement>
          <QuoteFormSelectElement
            id={presentationId}
            name="presentation"
            value={values.presentation}
            disabled={loading}
            onChange={(event) => onField("presentation", event.target.value)}
          >
            <option value="">{quoteFormCopy.presentationPlaceholder}</option>
            {presentations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </QuoteFormSelectElement>
          <ChevronForwardIcon aria-hidden />
        </QuoteFormSelectWrapElement>
      </QuoteFormFieldElement>

      <QuoteFormFieldElement>
        <QuoteFormLabelElement htmlFor={locationId}>
          {optionalLabel(
            quoteFormCopy.locationLabel,
            quoteFormCopy.locationOptional,
          )}
        </QuoteFormLabelElement>
        <QuoteFormInputElement
          id={locationId}
          name="location"
          type="text"
          autoComplete="address-level2"
          placeholder={quoteFormCopy.locationPlaceholder}
          value={values.location}
          disabled={loading}
          onChange={(event) => onField("location", event.target.value)}
        />
      </QuoteFormFieldElement>

      <QuoteFormFieldElement>
        <QuoteFormLabelElement htmlFor={frequencyId}>
          {optionalLabel(
            quoteFormCopy.frequencyLabel,
            quoteFormCopy.frequencyOptional,
          )}
        </QuoteFormLabelElement>
        <QuoteFormSelectWrapElement>
          <QuoteFormSelectElement
            id={frequencyId}
            name="frequency"
            value={values.frequency}
            disabled={loading}
            onChange={(event) => onField("frequency", event.target.value)}
          >
            <option value="">{quoteFormCopy.frequencyPlaceholder}</option>
            {generationFrequencies.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </QuoteFormSelectElement>
          <ChevronForwardIcon aria-hidden />
        </QuoteFormSelectWrapElement>
      </QuoteFormFieldElement>

      <QuoteFormActionsElement>
        <QuoteFormSubmitElement type="submit" disabled={loading}>
          {quoteFormCopy.submitLabel}
        </QuoteFormSubmitElement>
        <QuoteFormHintElement id={submitHintId}>
          {quoteFormCopy.submitHint}
        </QuoteFormHintElement>
      </QuoteFormActionsElement>
    </QuoteFormElement>
  );
};
