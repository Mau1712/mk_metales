import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const FaqSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const FaqSectionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: grid;
  grid-template-columns: minmax(0, 0.38fr) minmax(0, 0.62fr);
  grid-template-areas:
    "intro list"
    "cta list";
  column-gap: ${({ theme }) => theme.spacing(6)};
  row-gap: ${({ theme }) => theme.spacing(3)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "intro"
      "list"
      "cta";
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

export const FaqIntroElement = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const FaqEyebrowElement = styled.p`
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

export const FaqTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.6vw,
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

export const FaqLeadElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const FaqDetailElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const FaqCtaElement = styled(Link)`
  grid-area: cta;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: start;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.primary} 28%, transparent);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-align: center;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 8%,
      transparent
    );
    color: ${({ theme }) => theme.color.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    justify-self: stretch;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const FaqListElement = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
`;

export const FaqItemElement = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  box-shadow: inset 2px 0 0
    ${({ $open, theme }) =>
      $open ? theme.color.brand.primary : "transparent"};
  transition: box-shadow ${({ theme }) => theme.transitions.normal};

  &:last-child {
    border-bottom: 0;
  }
`;

export const FaqQuestionHeadingElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: inherit;
  font-weight: inherit;
`;

export const FaqQuestionButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  min-height: ${pxToRem(56)};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(2.5)}`};
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.35;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: -2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(7)};
    padding: ${({ theme }) => `${theme.spacing(1.75)} ${theme.spacing(2)}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const FaqQuestionIconElement = styled.span<{ $open: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
  color: ${({ $open, theme }) =>
    $open ? theme.color.brand.primary : theme.color.steel};
  transition:
    color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};
  transform: rotate(${({ $open }) => ($open ? "-90deg" : "90deg")});

  svg {
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color ${({ theme }) => theme.transitions.fast};
  }
`;

export const FaqPanelElement = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
`;

export const FaqPanelInnerElement = styled.div`
  min-height: 0;
  overflow: hidden;
`;

export const FaqAnswerElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `0 ${theme.spacing(2.5)} ${theme.spacing(2.5)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `0 ${theme.spacing(2)} ${theme.spacing(2)}`};
  }
`;

export const FaqAnswerParagraphElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
