import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const QuickQuoteSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.background.secondary} 38%,
      ${({ theme }) => theme.color.background.primary}
    )
      0%,
    ${({ theme }) => theme.color.background.primary} 42%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const QuickQuoteSectionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: grid;
  grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
  grid-template-areas:
    "copy module"
    "hints module"
    ". disclaimer";
  column-gap: ${({ theme }) => theme.spacing(6)};
  row-gap: ${({ theme }) => theme.spacing(3)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "copy"
      "module"
      "hints"
      "disclaimer";
    row-gap: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(7)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: ${({ theme }) => theme.spacing(3.5)};
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(6)}`};
  }
`;

export const QuickQuoteCopyElement = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const QuickQuoteEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    letter-spacing: 0.08em;
  }
`;

export const QuickQuoteTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.8vw,
    ${({ theme }) => theme.typography.fontSizes.heading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(
      ${({ theme }) => theme.typography.fontSizes.xLarge},
      6.4vw,
      ${({ theme }) => theme.typography.fontSizes.xxLarge}
    );
  }
`;

export const QuickQuoteIntroElement = styled.p`
  max-width: 46ch;
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 78%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const QuickQuoteHintsElement = styled.ul`
  grid-area: hints;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const QuickQuoteHintElement = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing(1.5)};
  row-gap: ${({ theme }) => theme.spacing(0.25)};
  align-items: start;
`;

export const QuickQuoteHintIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / span 2;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.brand.primary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.secondary} 80%,
    ${({ theme }) => theme.color.background.primary}
  );
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 32%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};

  svg {
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
  }
`;

export const QuickQuoteHintTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const QuickQuoteHintTextElement = styled.p`
  margin: 0;
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 68%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.45;
`;

export const QuickQuoteModuleElement = styled.form`
  grid-area: module;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(3.5)}`};
  background: ${({ theme }) => theme.color.background.secondary};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2.5)}`};
  }
`;

export const QuickQuoteFieldElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  & + & {
    margin-top: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const QuickQuoteLabelElement = styled.label`
  margin: 0 0 ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1.4;
  text-transform: uppercase;
`;

const fieldControl = css`
  width: 100%;
  min-height: ${pxToRem(52)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 42%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.3;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.color.steel};
  }

  &:hover {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 70%,
      transparent
    );
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.brand.primary};
    box-shadow: 0 0 0 3px
      color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 28%, transparent);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }

  &[aria-invalid="true"] {
    border-color: ${({ theme }) => theme.color.danger.default};
  }
`;

export const QuickQuoteSelectWrapElement = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.spacing(1.75)};
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
    color: ${({ theme }) => theme.color.steel};
    pointer-events: none;
    transform: translateY(-50%) rotate(90deg);
  }
`;

export const QuickQuoteSelectElement = styled.select`
  ${fieldControl}
  appearance: none;
  padding-right: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;

  option {
    color: ${({ theme }) => theme.color.text.primary};
    background: ${({ theme }) => theme.color.white};
  }
`;

export const QuickQuoteWeightWrapElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;
  width: 100%;
`;

export const QuickQuoteWeightInputElement = styled.input`
  ${fieldControl}
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;

  &:focus,
  &:focus-visible {
    z-index: 1;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  appearance: textfield;
`;

export const QuickQuoteWeightUnitElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.spacing(7)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 42%, transparent);
  border-left: 0;
  border-radius: ${({ theme }) =>
    `0 ${theme.radii.small} ${theme.radii.small} 0`};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.primary} 70%,
    ${({ theme }) => theme.color.background.secondary}
  );
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.02em;

  ${QuickQuoteWeightInputElement}:focus + & {
    border-color: ${({ theme }) => theme.color.brand.primary};
  }

  ${QuickQuoteWeightInputElement}[aria-invalid="true"] + & {
    border-color: ${({ theme }) => theme.color.danger.default};
  }
`;

export const QuickQuoteErrorElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(0.75)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.danger.default} 85%,
    ${({ theme }) => theme.color.white}
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const QuickQuoteSubmitElement = styled.button<{ $inactive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${pxToRem(52)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid
    ${({ $inactive, theme }) =>
      $inactive
        ? theme.color.button.primary.disabled
        : theme.color.button.primary.default};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $inactive, theme }) =>
    $inactive
      ? theme.color.button.primary.disabled
      : theme.color.button.primary.default};
  color: ${({ $inactive, theme }) =>
    $inactive
      ? `color-mix(in srgb, ${theme.color.text.light} 72%, transparent)`
      : theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-align: center;
  cursor: ${({ $inactive }) => ($inactive ? "not-allowed" : "pointer")};
  opacity: ${({ $inactive }) => ($inactive ? 0.72 : 1)};
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const QuickQuoteSubmitHintElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const QuickQuoteResultElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => `${theme.spacing(2.25)} ${theme.spacing(2.25)}`};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.primary} 70%,
    transparent
  );
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 35%, transparent);
  border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  border-radius: ${({ theme }) => theme.radii.small};
`;

export const QuickQuoteResultTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.35;
`;

export const QuickQuoteResultTextElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(0.75)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 72%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.5;
`;

export const QuickQuoteContinueElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(44)};
  margin-top: ${({ theme }) => theme.spacing(1.75)};
  padding: 0 ${pxToRem(18)};
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;

export const QuickQuoteFullLinkElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  margin-top: ${({ theme }) => theme.spacing(2.25)};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 78%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.4;

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
  }

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;

export const QuickQuoteDisclaimerElement = styled.p`
  grid-area: disclaimer;
  max-width: 62ch;
  margin: 0;
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 58%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.5;
`;
