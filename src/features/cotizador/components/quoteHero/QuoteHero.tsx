import { quoteHeroCopy } from "../../data";
import {
  QuoteHeroDescriptionElement,
  QuoteHeroElement,
  QuoteHeroEyebrowElement,
  QuoteHeroInnerElement,
  QuoteHeroNoteElement,
  QuoteHeroTitleElement,
} from "./QuoteHero.elements";

export const QuoteHero = () => {
  return (
    <QuoteHeroElement aria-labelledby="cotizador-hero-title">
      <QuoteHeroInnerElement>
        <QuoteHeroEyebrowElement>{quoteHeroCopy.eyebrow}</QuoteHeroEyebrowElement>
        <QuoteHeroTitleElement id="cotizador-hero-title">
          {quoteHeroCopy.title}
        </QuoteHeroTitleElement>
        <QuoteHeroDescriptionElement>
          {quoteHeroCopy.description}
        </QuoteHeroDescriptionElement>
        <QuoteHeroNoteElement>{quoteHeroCopy.note}</QuoteHeroNoteElement>
      </QuoteHeroInnerElement>
    </QuoteHeroElement>
  );
};
