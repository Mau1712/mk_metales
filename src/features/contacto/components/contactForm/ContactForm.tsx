import { useId, useRef, useState, type FormEvent } from "react";
import { ChevronForwardIcon } from "@assets/icons";
import {
  CONTACT_FORM_ID,
  contactFormCopy,
  contactMaterials,
  generationFrequencies,
  isContactMaterialId,
  isGenerationFrequency,
  isMaterialPresentation,
  isValidEmail,
  isValidPhone,
  isWeightDraft,
  parseWeightKg,
  presentationsForMaterial,
  type ContactInquiry,
} from "../../data";
import { submitContactInquiry } from "../../submit";
import {
  ContactFormActionsElement,
  ContactFormElement,
  ContactFormErrorBannerElement,
  ContactFormFieldElement,
  ContactFormGridElement,
  ContactFormHintElement,
  ContactFormInputElement,
  ContactFormLabelElement,
  ContactFormMessageElement,
  ContactFormOptionalElement,
  ContactFormPhotosElement,
  ContactFormPhotosNoteElement,
  ContactFormPhotosTitleElement,
  ContactFormSelectElement,
  ContactFormSelectWrapElement,
  ContactFormStatusDescriptionElement,
  ContactFormStatusElement,
  ContactFormStatusTitleElement,
  ContactFormSubmitElement,
  ContactFormSuccessActionsElement,
  ContactFormSuccessLinkElement,
  ContactFormTextareaElement,
  ContactFormWeightInputElement,
  ContactFormWeightUnitElement,
  ContactFormWeightWrapElement,
} from "./ContactForm.elements";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  material?: string;
  weight?: string;
  message?: string;
};

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  material: string;
  weight: string;
  presentation: string;
  location: string;
  frequency: string;
  message: string;
};

const optionalLabel = (label: string, hint: string) => (
  <>
    {label}
    <ContactFormOptionalElement>{hint}</ContactFormOptionalElement>
  </>
);

const validateValues = (values: FormValues): FieldErrors => {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = contactFormCopy.nameError;
  }

  if (!isValidPhone(values.phone)) {
    errors.phone = contactFormCopy.phoneError;
  }

  if (!isValidEmail(values.email)) {
    errors.email = contactFormCopy.emailError;
  }

  if (!isContactMaterialId(values.material)) {
    errors.material = contactFormCopy.materialError;
  }

  if (values.weight.trim() !== "" && parseWeightKg(values.weight) === null) {
    errors.weight = contactFormCopy.weightError;
  }

  if (!values.message.trim()) {
    errors.message = contactFormCopy.messageError;
  }

  return errors;
};

const toInquiry = (values: FormValues): ContactInquiry | null => {
  if (!isContactMaterialId(values.material)) {
    return null;
  }

  const weightKg =
    values.weight.trim() === "" ? null : parseWeightKg(values.weight);

  if (values.weight.trim() !== "" && weightKg === null) {
    return null;
  }

  return {
    name: values.name.trim(),
    company: values.company.trim() || null,
    phone: values.phone.trim(),
    email: values.email.trim(),
    materialId: values.material,
    weightKg,
    presentation: isMaterialPresentation(values.presentation)
      ? values.presentation
      : null,
    location: values.location.trim() || null,
    frequency: isGenerationFrequency(values.frequency)
      ? values.frequency
      : null,
    message: values.message.trim(),
  };
};

export const ContactForm = ({
  initialMaterialId,
  initialWeight,
  initialPresentation,
  initialLocation,
  initialFrequency,
}: {
  initialMaterialId: string;
  initialWeight: string;
  initialPresentation: string;
  initialLocation: string;
  initialFrequency: string;
}) => {
  const nameId = useId();
  const companyId = useId();
  const phoneId = useId();
  const emailId = useId();
  const materialId = useId();
  const weightId = useId();
  const presentationId = useId();
  const locationId = useId();
  const frequencyId = useId();
  const messageId = useId();
  const nameErrorId = useId();
  const phoneErrorId = useId();
  const emailErrorId = useId();
  const materialErrorId = useId();
  const weightErrorId = useId();
  const messageErrorId = useId();
  const formErrorId = useId();
  const photosId = useId();

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const materialRef = useRef<HTMLSelectElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [values, setValues] = useState<FormValues>({
    name: "",
    company: "",
    phone: "",
    email: "",
    material: initialMaterialId,
    weight: initialWeight,
    presentation: initialPresentation,
    location: initialLocation,
    frequency: initialFrequency,
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const setField = <Key extends keyof FormValues>(
    key: Key,
    value: FormValues[Key],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key as keyof FieldErrors]) {
        return current;
      }

      const next = { ...current };
      delete next[key as keyof FieldErrors];
      return next;
    });

    if (status === "error") {
      setStatus("idle");
    }
  };

  const focusFirstError = (nextErrors: FieldErrors) => {
    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }

    if (nextErrors.phone) {
      phoneRef.current?.focus();
      return;
    }

    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }

    if (nextErrors.material) {
      materialRef.current?.focus();
      return;
    }

    if (nextErrors.weight) {
      weightRef.current?.focus();
      return;
    }

    if (nextErrors.message) {
      messageRef.current?.focus();
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateValues(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    const inquiry = toInquiry(values);

    if (!inquiry) {
      return;
    }

    setStatus("submitting");

    const result = await submitContactInquiry(inquiry);

    if (result.ok) {
      setStatus("success");
      return;
    }

    setStatus("error");
  };

  if (status === "success") {
    return (
      <ContactFormStatusElement id={CONTACT_FORM_ID} role="status">
        <ContactFormStatusTitleElement>
          {contactFormCopy.successTitle}
        </ContactFormStatusTitleElement>
        <ContactFormStatusDescriptionElement>
          {contactFormCopy.successDescription}
        </ContactFormStatusDescriptionElement>
        <ContactFormSuccessActionsElement>
          <ContactFormSuccessLinkElement
            to={contactFormCopy.successHomeCta.to}
            $primary
          >
            {contactFormCopy.successHomeCta.label}
          </ContactFormSuccessLinkElement>
          <ContactFormSuccessLinkElement
            to={contactFormCopy.successQuoteCta.to}
          >
            {contactFormCopy.successQuoteCta.label}
          </ContactFormSuccessLinkElement>
        </ContactFormSuccessActionsElement>
      </ContactFormStatusElement>
    );
  }

  const submitting = status === "submitting";
  const canSubmit = Object.keys(validateValues(values)).length === 0;
  const submitHintId = `${CONTACT_FORM_ID}-submit-hint`;

  return (
    <ContactFormElement
      id={CONTACT_FORM_ID}
      noValidate
      onSubmit={onSubmit}
      aria-describedby={status === "error" ? formErrorId : undefined}
    >
      <ContactFormGridElement>
        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={nameId}>
            {contactFormCopy.nameLabel}
          </ContactFormLabelElement>
          <ContactFormInputElement
            ref={nameRef}
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? nameErrorId : undefined}
            value={values.name}
            disabled={submitting}
            onChange={(event) => setField("name", event.target.value)}
            onBlur={(event) => {
              if (!event.target.value.trim()) {
                setErrors((current) => ({
                  ...current,
                  name: contactFormCopy.nameError,
                }));
              }
            }}
          />
          {errors.name ? (
            <ContactFormMessageElement id={nameErrorId} role="alert">
              {errors.name}
            </ContactFormMessageElement>
          ) : null}
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={companyId}>
            {optionalLabel(
              contactFormCopy.companyLabel,
              contactFormCopy.companyOptional,
            )}
          </ContactFormLabelElement>
          <ContactFormInputElement
            id={companyId}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            disabled={submitting}
            onChange={(event) => setField("company", event.target.value)}
          />
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={phoneId}>
            {contactFormCopy.phoneLabel}
          </ContactFormLabelElement>
          <ContactFormInputElement
            ref={phoneRef}
            id={phoneId}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? phoneErrorId : undefined}
            value={values.phone}
            disabled={submitting}
            onChange={(event) => setField("phone", event.target.value)}
            onBlur={(event) => {
              if (!isValidPhone(event.target.value)) {
                setErrors((current) => ({
                  ...current,
                  phone: contactFormCopy.phoneError,
                }));
              }
            }}
          />
          {errors.phone ? (
            <ContactFormMessageElement id={phoneErrorId} role="alert">
              {errors.phone}
            </ContactFormMessageElement>
          ) : null}
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={emailId}>
            {contactFormCopy.emailLabel}
          </ContactFormLabelElement>
          <ContactFormInputElement
            ref={emailRef}
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? emailErrorId : undefined}
            value={values.email}
            disabled={submitting}
            onChange={(event) => setField("email", event.target.value)}
            onBlur={(event) => {
              if (!isValidEmail(event.target.value)) {
                setErrors((current) => ({
                  ...current,
                  email: contactFormCopy.emailError,
                }));
              }
            }}
          />
          {errors.email ? (
            <ContactFormMessageElement id={emailErrorId} role="alert">
              {errors.email}
            </ContactFormMessageElement>
          ) : null}
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={materialId}>
            {contactFormCopy.materialLabel}
          </ContactFormLabelElement>
          <ContactFormSelectWrapElement>
            <ContactFormSelectElement
              ref={materialRef}
              id={materialId}
              name="material"
              required
              aria-required="true"
              aria-invalid={errors.material ? true : undefined}
              aria-describedby={errors.material ? materialErrorId : undefined}
              value={values.material}
              disabled={submitting}
              onChange={(event) => {
                const nextMaterial = event.target.value;
                setField("material", nextMaterial);

                const allowed = presentationsForMaterial(nextMaterial);
                if (
                  !allowed.some((item) => item.id === values.presentation)
                ) {
                  setField("presentation", "");
                }
              }}
              onBlur={(event) => {
                if (!isContactMaterialId(event.target.value)) {
                  setErrors((current) => ({
                    ...current,
                    material: contactFormCopy.materialError,
                  }));
                }
              }}
            >
              <option value="" disabled>
                {contactFormCopy.materialPlaceholder}
              </option>
              {contactMaterials.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </ContactFormSelectElement>
            <ChevronForwardIcon aria-hidden />
          </ContactFormSelectWrapElement>
          {errors.material ? (
            <ContactFormMessageElement id={materialErrorId} role="alert">
              {errors.material}
            </ContactFormMessageElement>
          ) : null}
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={weightId}>
            {optionalLabel(
              contactFormCopy.weightLabel,
              contactFormCopy.weightOptional,
            )}
          </ContactFormLabelElement>
          <ContactFormWeightWrapElement>
            <ContactFormWeightInputElement
              ref={weightRef}
              id={weightId}
              name="peso"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              aria-invalid={errors.weight ? true : undefined}
              aria-describedby={errors.weight ? weightErrorId : undefined}
              value={values.weight}
              disabled={submitting}
              onChange={(event) => {
                if (!isWeightDraft(event.target.value)) {
                  return;
                }

                setField("weight", event.target.value);
              }}
              onKeyDown={(event) => {
                if (["e", "E", "+", "-"].includes(event.key)) {
                  event.preventDefault();
                }
              }}
              onBlur={(event) => {
                if (
                  event.target.value.trim() !== "" &&
                  parseWeightKg(event.target.value) === null
                ) {
                  setErrors((current) => ({
                    ...current,
                    weight: contactFormCopy.weightError,
                  }));
                }
              }}
            />
            <ContactFormWeightUnitElement aria-hidden>
              {contactFormCopy.weightUnit}
            </ContactFormWeightUnitElement>
          </ContactFormWeightWrapElement>
          {errors.weight ? (
            <ContactFormMessageElement id={weightErrorId} role="alert">
              {errors.weight}
            </ContactFormMessageElement>
          ) : null}
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={presentationId}>
            {optionalLabel(
              contactFormCopy.presentationLabel,
              contactFormCopy.presentationOptional,
            )}
          </ContactFormLabelElement>
          <ContactFormSelectWrapElement>
            <ContactFormSelectElement
              id={presentationId}
              name="presentation"
              value={values.presentation}
              disabled={submitting}
              onChange={(event) => setField("presentation", event.target.value)}
            >
              <option value="">
                {contactFormCopy.presentationPlaceholder}
              </option>
              {presentationsForMaterial(values.material).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </ContactFormSelectElement>
            <ChevronForwardIcon aria-hidden />
          </ContactFormSelectWrapElement>
        </ContactFormFieldElement>

        <ContactFormFieldElement>
          <ContactFormLabelElement htmlFor={frequencyId}>
            {optionalLabel(
              contactFormCopy.frequencyLabel,
              contactFormCopy.frequencyOptional,
            )}
          </ContactFormLabelElement>
          <ContactFormSelectWrapElement>
            <ContactFormSelectElement
              id={frequencyId}
              name="frequency"
              value={values.frequency}
              disabled={submitting}
              onChange={(event) => setField("frequency", event.target.value)}
            >
              <option value="">
                {contactFormCopy.frequencyPlaceholder}
              </option>
              {generationFrequencies.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </ContactFormSelectElement>
            <ChevronForwardIcon aria-hidden />
          </ContactFormSelectWrapElement>
        </ContactFormFieldElement>
      </ContactFormGridElement>

      <ContactFormFieldElement>
        <ContactFormLabelElement htmlFor={locationId}>
          {optionalLabel(
            contactFormCopy.locationLabel,
            contactFormCopy.locationOptional,
          )}
        </ContactFormLabelElement>
        <ContactFormInputElement
          id={locationId}
          name="location"
          type="text"
          autoComplete="address-level2"
          placeholder={contactFormCopy.locationPlaceholder}
          value={values.location}
          disabled={submitting}
          onChange={(event) => setField("location", event.target.value)}
        />
      </ContactFormFieldElement>

      <ContactFormFieldElement>
        <ContactFormLabelElement htmlFor={messageId}>
          {contactFormCopy.messageLabel}
        </ContactFormLabelElement>
        <ContactFormTextareaElement
          ref={messageRef}
          id={messageId}
          name="message"
          required
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? messageErrorId : undefined}
          placeholder={contactFormCopy.messagePlaceholder}
          value={values.message}
          disabled={submitting}
          onChange={(event) => setField("message", event.target.value)}
          onBlur={(event) => {
            if (!event.target.value.trim()) {
              setErrors((current) => ({
                ...current,
                message: contactFormCopy.messageError,
              }));
            }
          }}
        />
        {errors.message ? (
          <ContactFormMessageElement id={messageErrorId} role="alert">
            {errors.message}
          </ContactFormMessageElement>
        ) : null}
      </ContactFormFieldElement>

      <ContactFormPhotosElement aria-labelledby={photosId}>
        <ContactFormPhotosTitleElement id={photosId}>
          {contactFormCopy.photosTitle}
        </ContactFormPhotosTitleElement>
        <ContactFormPhotosNoteElement>
          {contactFormCopy.photosNote}
        </ContactFormPhotosNoteElement>
      </ContactFormPhotosElement>

      {status === "error" ? (
        <ContactFormErrorBannerElement id={formErrorId} role="alert">
          <strong>{contactFormCopy.errorTitle}</strong>
          <span>{contactFormCopy.errorDescription}</span>
        </ContactFormErrorBannerElement>
      ) : null}

      <ContactFormActionsElement>
        <ContactFormSubmitElement
          type="submit"
          $inactive={!canSubmit}
          disabled={submitting || !canSubmit}
          aria-describedby={submitHintId}
        >
          {submitting
            ? contactFormCopy.submitPending
            : contactFormCopy.submitIdle}
        </ContactFormSubmitElement>
        <ContactFormHintElement id={submitHintId}>
          {canSubmit
            ? contactFormCopy.submitHint
            : contactFormCopy.submitIncompleteHint}
        </ContactFormHintElement>
      </ContactFormActionsElement>
    </ContactFormElement>
  );
};
