import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { AppRouter } from "@app/router";
import {
  applyDocumentMetaToHtml,
  consumeCollectedMeta,
} from "@app/seo/documentMeta";
import { AppProviders } from "./App.tsx";

const splitHoistedMarkup = (markup: string) => {
  const hints: string[] = [];
  let rest = markup.trimStart();

  while (
    rest.startsWith("<link") ||
    rest.startsWith("<meta") ||
    rest.startsWith("<title")
  ) {
    const end = rest.indexOf(">") + 1;

    if (end <= 0) {
      break;
    }

    hints.push(rest.slice(0, end));
    rest = rest.slice(end).trimStart();
  }

  return {
    hints: hints.join(""),
    appHtml: rest,
  };
};

export const render = (url: string, template: string) => {
  const sheet = new ServerStyleSheet();

  try {
    const app = (
      <StrictMode>
        <AppProviders>
          <StaticRouter location={url}>
            <AppRouter />
          </StaticRouter>
        </AppProviders>
      </StrictMode>
    );

    const rendered = renderToString(sheet.collectStyles(app));
    const { hints, appHtml } = splitHoistedMarkup(rendered);
    const styles = `${hints}${sheet.getStyleTags()}`;
    const meta = consumeCollectedMeta();
    const html = applyDocumentMetaToHtml(template, meta, { appHtml, styles });

    if (!appHtml.includes("<h1") && !appHtml.includes("<h2")) {
      throw new Error(`Prerender produced no headings for ${url}.`);
    }

    if (!html.includes(meta.title)) {
      throw new Error(`Prerender did not apply title for ${url}.`);
    }

    return html;
  } finally {
    sheet.seal();
  }
};
