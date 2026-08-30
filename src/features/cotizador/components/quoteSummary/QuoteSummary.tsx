import { buildContactoHref } from "@features/contacto/data.ts";
import {
  QUOTE_SUMMARY_ID,
  getFrequencyLabel,
  getMaterialName,
  getPresentationLabel,
  quoteDisclaimerCopy,
  quoteSummaryCopy,
  toContactNavState,
  type QuoteRequest,
  type QuoteResult,
  type QuoteStatus,
} from "../../data";
import {
  QuoteSummaryActionsElement,
  QuoteSummaryArsNoteElement,
  QuoteSummaryArsTotalElement,
  QuoteSummaryCtaElement,
  QuoteSummaryDescriptionElement,
  QuoteSummaryDisclaimerElement,
  QuoteSummaryElement,
  QuoteSummaryFactsElement,
  QuoteSummaryFactElement,
  QuoteSummaryMetaElement,
  QuoteSummaryNoteElement,
  QuoteSummaryPanelElement,
  QuoteSummaryPriceElement,
  QuoteSummaryPricesElement,
  QuoteSummaryRetryElement,
  QuoteSummarySkeletonElement,
  QuoteSummaryStatusElement,
  QuoteSummaryTitleElement,
} from "./QuoteSummary.elements";

type QuoteSummaryProps = {
  status: QuoteStatus;
  request: QuoteRequest | null;
  result: QuoteResult | null;
  onRetry: () => void;
  onReset: () => void;
};

const formatWeight = (weightKg: number) => `${weightKg} kg`;

const formatMoney = (value: number, currency: string) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    currencyDisplay: "code",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatArs = (value: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
};

const formatTimestamp = (iso: string) => {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

export const QuoteSummary = ({
  status,
  request,
  result,
  onRetry,
  onReset,
}: QuoteSummaryProps) => {
  const materialName = request
    ? getMaterialName(request.materialId)
    : null;
  const presentationLabel = request?.presentation
    ? getPresentationLabel(request.presentation)
    : null;
  const frequencyLabel = request?.frequency
    ? getFrequencyLabel(request.frequency)
    : null;

  const contactHref = request
    ? buildContactoHref(request.materialId, request.weightKg)
    : "/contacto";
  const contactState = request ? toContactNavState(request) : undefined;

  return (
    <QuoteSummaryElement
      id={QUOTE_SUMMARY_ID}
      $status={status}
      aria-live="polite"
      aria-busy={status === "loading" ? true : undefined}
    >
      <QuoteSummaryTitleElement>
        {quoteSummaryCopy.title}
      </QuoteSummaryTitleElement>

      {request ? (
        <QuoteSummaryFactsElement>
          <QuoteSummaryFactElement>
            <dt>{quoteSummaryCopy.materialLabel}</dt>
            <dd>{materialName ?? request.materialId}</dd>
          </QuoteSummaryFactElement>
          <QuoteSummaryFactElement>
            <dt>{quoteSummaryCopy.weightLabel}</dt>
            <dd>{formatWeight(request.weightKg)}</dd>
          </QuoteSummaryFactElement>
          <QuoteSummaryFactElement>
            <dt>{quoteSummaryCopy.presentationLabel}</dt>
            <dd>{presentationLabel ?? quoteSummaryCopy.emptyValue}</dd>
          </QuoteSummaryFactElement>
          <QuoteSummaryFactElement>
            <dt>{quoteSummaryCopy.locationLabel}</dt>
            <dd>{request.location ?? quoteSummaryCopy.emptyValue}</dd>
          </QuoteSummaryFactElement>
          <QuoteSummaryFactElement>
            <dt>{quoteSummaryCopy.frequencyLabel}</dt>
            <dd>{frequencyLabel ?? quoteSummaryCopy.emptyValue}</dd>
          </QuoteSummaryFactElement>
        </QuoteSummaryFactsElement>
      ) : null}

      <QuoteSummaryPanelElement $status={status}>
        {status === "idle" ? (
          <QuoteSummaryStatusElement>
            <h3>{quoteSummaryCopy.idleTitle}</h3>
            <QuoteSummaryDescriptionElement>
              {quoteSummaryCopy.idleDescription}
            </QuoteSummaryDescriptionElement>
          </QuoteSummaryStatusElement>
        ) : null}

        {status === "loading" ? (
          <QuoteSummaryStatusElement>
            <h3>{quoteSummaryCopy.loadingTitle}</h3>
            <QuoteSummaryDescriptionElement>
              {quoteSummaryCopy.loadingDescription}
            </QuoteSummaryDescriptionElement>
            <QuoteSummarySkeletonElement aria-hidden>
              <span />
              <span />
              <span />
            </QuoteSummarySkeletonElement>
          </QuoteSummaryStatusElement>
        ) : null}

        {status === "ready" ? (
          <QuoteSummaryStatusElement>
            <h3>{quoteSummaryCopy.readyTitle}</h3>
            <QuoteSummaryDescriptionElement>
              {quoteSummaryCopy.readyDescription}
            </QuoteSummaryDescriptionElement>
            <QuoteSummaryNoteElement>
              {quoteSummaryCopy.readyNote}
            </QuoteSummaryNoteElement>
            <QuoteSummaryActionsElement>
              <QuoteSummaryCtaElement to={contactHref} state={contactState}>
                {quoteSummaryCopy.readyCta}
              </QuoteSummaryCtaElement>
            </QuoteSummaryActionsElement>
          </QuoteSummaryStatusElement>
        ) : null}

        {status === "quoted" && result ? (
          <QuoteSummaryStatusElement>
            <QuoteSummaryPricesElement>
              <QuoteSummaryPriceElement>
                <dt>{quoteSummaryCopy.quotedMarketLabel}</dt>
                <dd>
                  {formatMoney(result.referencePricePerKg, result.currency)}
                  {quoteSummaryCopy.perKg}
                </dd>
              </QuoteSummaryPriceElement>
              <QuoteSummaryPriceElement $featured>
                <dt>{quoteSummaryCopy.quotedTotalLabel}</dt>
                <dd>
                  <span>
                    {formatMoney(result.estimatedTotal, result.currency)}
                  </span>
                  <QuoteSummaryArsTotalElement>
                    {formatArs(result.estimatedTotalArs)}
                  </QuoteSummaryArsTotalElement>
                </dd>
                <QuoteSummaryArsNoteElement>
                  {quoteSummaryCopy.quotedArsNote}
                </QuoteSummaryArsNoteElement>
              </QuoteSummaryPriceElement>
            </QuoteSummaryPricesElement>
            <QuoteSummaryMetaElement>
              <p>
                {quoteSummaryCopy.quotedUpdatedLabel}:{" "}
                {formatTimestamp(result.referenceTimestamp)}
              </p>
              <p>{quoteSummaryCopy.quotedSource}</p>
            </QuoteSummaryMetaElement>
            <QuoteSummaryActionsElement>
              <QuoteSummaryCtaElement to={contactHref} state={contactState}>
                {quoteSummaryCopy.readyCta}
              </QuoteSummaryCtaElement>
              <QuoteSummaryRetryElement type="button" onClick={onReset}>
                {quoteSummaryCopy.quotedReset}
              </QuoteSummaryRetryElement>
            </QuoteSummaryActionsElement>
          </QuoteSummaryStatusElement>
        ) : null}

        {status === "unavailable" ? (
          <QuoteSummaryStatusElement>
            <h3>{quoteSummaryCopy.unavailableTitle}</h3>
            <QuoteSummaryDescriptionElement>
              {quoteSummaryCopy.unavailableDescription}
            </QuoteSummaryDescriptionElement>
            <QuoteSummaryActionsElement>
              <QuoteSummaryCtaElement to={contactHref} state={contactState}>
                {quoteSummaryCopy.unavailableCta}
              </QuoteSummaryCtaElement>
            </QuoteSummaryActionsElement>
          </QuoteSummaryStatusElement>
        ) : null}

        {status === "error" ? (
          <QuoteSummaryStatusElement>
            <h3>{quoteSummaryCopy.errorTitle}</h3>
            <QuoteSummaryDescriptionElement>
              {quoteSummaryCopy.errorDescription}
            </QuoteSummaryDescriptionElement>
            <QuoteSummaryActionsElement>
              <QuoteSummaryRetryElement type="button" onClick={onRetry}>
                {quoteSummaryCopy.errorRetry}
              </QuoteSummaryRetryElement>
            </QuoteSummaryActionsElement>
          </QuoteSummaryStatusElement>
        ) : null}
      </QuoteSummaryPanelElement>

      <QuoteSummaryDisclaimerElement>
        <p>{quoteDisclaimerCopy.estimates}</p>
        <p>{quoteDisclaimerCopy.contract}</p>
      </QuoteSummaryDisclaimerElement>
    </QuoteSummaryElement>
  );
};
