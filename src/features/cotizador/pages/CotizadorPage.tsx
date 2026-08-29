import { useDocumentMeta } from "@app/seo";
import { QuoteClosingCta } from "../components/quoteClosingCta/QuoteClosingCta";
import { QuoteFaq } from "../components/quoteFaq/QuoteFaq";
import { QuoteHero } from "../components/quoteHero/QuoteHero";
import { QuoteHow } from "../components/quoteHow/QuoteHow";
import { QuoteTool } from "../components/quoteTool/QuoteTool";
import { cotizadorPageMeta } from "../data";
import { CotizadorPageElement } from "./CotizadorPage.elements";

export const CotizadorPage = () => {
  useDocumentMeta(cotizadorPageMeta);

  return (
    <CotizadorPageElement>
      <QuoteHero />
      <QuoteTool />
      <QuoteHow />
      <QuoteFaq />
      <QuoteClosingCta />
    </CotizadorPageElement>
  );
};
