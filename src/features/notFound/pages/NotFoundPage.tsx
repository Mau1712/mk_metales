import { useDocumentMeta } from "@app/seo";
import { notFoundCopy, notFoundPageMeta } from "../data";
import {
  NotFoundActionsElement,
  NotFoundDescriptionElement,
  NotFoundEyebrowElement,
  NotFoundInnerElement,
  NotFoundPageElement,
  NotFoundPrimaryCtaElement,
  NotFoundSecondaryCtaElement,
  NotFoundSectionElement,
  NotFoundTitleElement,
} from "./NotFoundPage.elements";

export const NotFoundPage = () => {
  useDocumentMeta(notFoundPageMeta);

  return (
    <NotFoundPageElement>
      <NotFoundSectionElement aria-labelledby="not-found-title">
        <NotFoundInnerElement>
          <NotFoundEyebrowElement>{notFoundCopy.eyebrow}</NotFoundEyebrowElement>
          <NotFoundTitleElement id="not-found-title">
            {notFoundCopy.title}
          </NotFoundTitleElement>
          <NotFoundDescriptionElement>
            {notFoundCopy.description}
          </NotFoundDescriptionElement>
          <NotFoundActionsElement>
            <NotFoundPrimaryCtaElement to={notFoundCopy.homeCta.to}>
              {notFoundCopy.homeCta.label}
            </NotFoundPrimaryCtaElement>
            <NotFoundSecondaryCtaElement to={notFoundCopy.quoteCta.to}>
              {notFoundCopy.quoteCta.label}
            </NotFoundSecondaryCtaElement>
          </NotFoundActionsElement>
        </NotFoundInnerElement>
      </NotFoundSectionElement>
    </NotFoundPageElement>
  );
};
