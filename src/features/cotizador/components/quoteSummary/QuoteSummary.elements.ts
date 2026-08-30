import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";
import type { QuoteStatus } from "../../data";

const statusAccent = (status: QuoteStatus) => {
  if (status === "ready" || status === "quoted") {
    return css`
      border-color: color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 42%,
        transparent
      );
    `;
  }

  if (status === "error") {
    return css`
      border-color: ${({ theme }) => theme.color.danger.default};
    `;
  }

  return css`
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 28%,
      transparent
    );
  `;
};

export const QuoteSummaryElement = styled.aside<{ $status: QuoteStatus }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(3.5)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-left: 3px solid
    ${({ $status, theme }) =>
      $status === "ready" || $status === "quoted"
        ? theme.color.brand.primary
        : $status === "error"
          ? theme.color.danger.default
          : $status === "unavailable"
            ? theme.color.steel
            : `color-mix(in srgb, ${theme.color.steel} 50%, transparent)`};
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.background.primary};
  scroll-margin-top: ${({ theme }) => theme.spacing(12)};
  position: sticky;
  top: ${({ theme }) => theme.spacing(12)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    position: static;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const QuoteSummaryTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.25;
`;

export const QuoteSummaryFactsElement = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const QuoteSummaryFactElement = styled.div`
  min-width: 0;

  dt {
    margin: 0;
    color: ${({ theme }) => theme.color.steel};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    letter-spacing: 0.08em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  dd {
    margin: ${({ theme }) => `${theme.spacing(0.5)} 0 0`};
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.color.text.light};
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.35;
  }
`;

export const QuoteSummaryPanelElement = styled.div<{ $status: QuoteStatus }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(2.5)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.background.secondary};
  ${({ $status }) => statusAccent($status)}
`;

export const QuoteSummaryStatusElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.color.text.light};
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.3;
  }
`;

export const QuoteSummaryDescriptionElement = styled.p`
  margin: 0;
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 78%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const QuoteSummaryNoteElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.5;
`;

const pulse = keyframes`
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.7;
  }
`;

export const QuoteSummarySkeletonElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(0.5)};

  span {
    display: block;
    height: ${pxToRem(12)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 28%,
      transparent
    );
    animation: ${pulse} 1.2s ease-in-out infinite;
  }

  span:nth-child(1) {
    width: 72%;
  }

  span:nth-child(2) {
    width: 54%;
  }

  span:nth-child(3) {
    width: 63%;
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`;

export const QuoteSummaryPricesElement = styled.dl`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: 0;
`;

export const QuoteSummaryPriceElement = styled.div<{ $featured?: boolean }>`
  dt {
    margin: 0;
    color: ${({ theme }) => theme.color.steel};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  dd {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(0.5)};
    margin: ${({ theme }) => `${theme.spacing(0.5)} 0 0`};
    color: ${({ $featured, theme }) =>
      $featured ? theme.color.brand.primary : theme.color.text.light};
    font-size: ${({ $featured, theme }) =>
      $featured
        ? theme.typography.fontSizes.xxLarge
        : theme.typography.fontSizes.xLarge};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    letter-spacing: -0.02em;
    line-height: 1.2;
  }
`;

export const QuoteSummaryArsTotalElement = styled.span`
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: -0.01em;
  line-height: 1.3;
  opacity: 0.82;
`;

export const QuoteSummaryArsNoteElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(0.75)} 0 0`};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  letter-spacing: 0;
  line-height: 1.45;
  text-transform: none;
`;

export const QuoteSummaryMetaElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.steel};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    line-height: 1.45;
  }
`;

export const QuoteSummaryActionsElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;

const summaryCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-align: center;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const QuoteSummaryCtaElement = styled(Link)`
  ${summaryCtaBase}
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.light};
    outline-offset: 3px;
  }
`;

export const QuoteSummaryRetryElement = styled.button`
  ${summaryCtaBase}
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.light} 48%, transparent);
  background: transparent;
  color: ${({ theme }) => theme.color.text.light};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 12%,
      transparent
    );
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.light};
    outline-offset: 3px;
  }
`;

export const QuoteSummaryDisclaimerElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.steel};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    line-height: 1.5;
  }
`;
