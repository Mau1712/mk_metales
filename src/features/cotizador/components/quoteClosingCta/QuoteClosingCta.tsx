import { useLocation } from "react-router-dom";
import { buildContactoHref } from "@features/contacto/data.ts";
import { parseWeightKg } from "@features/home/data.ts";
import { parseQuotePrefill, quoteClosingCopy } from "../../data";
import {
  QuoteClosingCopyElement,
  QuoteClosingCtaElement,
  QuoteClosingDescriptionElement,
  QuoteClosingElement,
  QuoteClosingInnerElement,
  QuoteClosingTitleElement,
} from "./QuoteClosingCta.elements";

export const QuoteClosingCta = () => {
  const { search, state } = useLocation();
  const prefill = parseQuotePrefill(search, state);
  const weightKg = parseWeightKg(prefill.weight);
  const href = buildContactoHref(
    prefill.materialId || undefined,
    weightKg ?? undefined,
  );

  return (
    <QuoteClosingElement aria-labelledby="cotizador-closing-title">
      <QuoteClosingInnerElement>
        <QuoteClosingCopyElement>
          <QuoteClosingTitleElement id="cotizador-closing-title">
            {quoteClosingCopy.title}
          </QuoteClosingTitleElement>
          <QuoteClosingDescriptionElement>
            {quoteClosingCopy.description}
          </QuoteClosingDescriptionElement>
        </QuoteClosingCopyElement>
        <QuoteClosingCtaElement to={href}>
          {quoteClosingCopy.cta.label}
        </QuoteClosingCtaElement>
      </QuoteClosingInnerElement>
    </QuoteClosingElement>
  );
};
