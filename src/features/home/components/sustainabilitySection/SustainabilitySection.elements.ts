import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SustainabilitySectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SustainabilitySectionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.88fr);
  grid-template-areas:
    "media intro"
    "media concepts"
    "cycle cycle"
    "close close";
  column-gap: ${({ theme }) => theme.spacing(6)};
  row-gap: ${({ theme }) => theme.spacing(2.5)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "intro"
      "media"
      "concepts"
      "cycle"
      "close";
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

export const SustainabilityMediaElement = styled.div`
  grid-area: media;
  align-self: stretch;
  position: relative;
  min-height: ${pxToRem(460)};
  overflow: hidden;
  background: ${({ theme }) => theme.color.background.surface};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    min-height: 0;
    aspect-ratio: 16 / 10;
    max-height: ${pxToRem(360)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: ${pxToRem(260)};
  }
`;

export const SustainabilityImageElement = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 56% 46%;
`;

export const SustainabilityIntroElement = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-top: 0;
  }
`;

export const SustainabilityEyebrowElement = styled.p`
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

export const SustainabilityTitleElement = styled.h2`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(
      ${({ theme }) => theme.typography.fontSizes.xLarge},
      6.4vw,
      ${({ theme }) => theme.typography.fontSizes.xxLarge}
    );
  }
`;

export const SustainabilityTitleLineElement = styled.span`
  display: block;
`;

export const SustainabilityTitleAccentElement = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.brand.primary};
`;

export const SustainabilityLeadElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SustainabilityDetailElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const SustainabilityConceptsElement = styled.ul`
  grid-area: concepts;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    margin-top: 0;
  }
`;

export const SustainabilityConceptElement = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing(1.5)};
  row-gap: ${({ theme }) => theme.spacing(0.5)};
  align-items: start;
  min-width: 0;
  padding: ${({ theme }) => `${theme.spacing(0.25)} 0`};
  transition: transform ${({ theme }) => theme.transitions.normal};

  @media (hover: hover) {
    &:hover {
      transform: translateX(2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const SustainabilityConceptIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / span 2;
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.brand.primary};
  background: ${({ theme }) => theme.color.background.surface};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 18%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};

  svg {
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
  }
`;

export const SustainabilityConceptTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.02em;
  line-height: 1.3;
`;

export const SustainabilityConceptTextElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.5;
`;

export const SustainabilityCycleElement = styled.ol`
  grid-area: cycle;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(4)} 0 0`};
  padding: ${({ theme }) => `${theme.spacing(2.5)} ${theme.spacing(2)}`};
  list-style: none;
  background: ${({ theme }) => theme.color.background.surface};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 18%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing(1.25)};
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(2)}`};
  }
`;

export const SustainabilityCycleStepElement = styled.li<{
  $highlight: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
  min-width: 0;
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.color.brand.primary : theme.color.steel};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const SustainabilityCycleIconElement = styled.span<{
  $highlight: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing(3.5)};
  height: ${({ theme }) => theme.spacing(3.5)};
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.color.brand.primary : theme.color.steel};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    ${({ $highlight, theme }) =>
      $highlight
        ? `color-mix(in srgb, ${theme.color.brand.primary} 35%, transparent)`
        : `color-mix(in srgb, ${theme.color.steel} 22%, transparent)`};
  border-radius: ${({ theme }) => theme.radii.small};

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
  }
`;

export const SustainabilityCycleLabelElement = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SustainabilityCycleArrowElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  opacity: 0.75;

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: rotate(90deg);
    margin-left: ${({ theme }) => theme.spacing(0.75)};
  }
`;

export const SustainabilityCloseElement = styled.div`
  grid-area: close;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${pxToRem(720)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(3.5)};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export const SustainabilityStatementElement = styled.p`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing(1.75)};
  border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const SustainabilityActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

const sustainabilityCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border-radius: ${({ theme }) => theme.radii.pill};
  appearance: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  cursor: pointer;
  text-align: center;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const SustainabilityPrimaryCtaElement = styled(Link)`
  ${sustainabilityCtaBase}
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};

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

export const SustainabilitySecondaryCtaElement = styled(Link)`
  ${sustainabilityCtaBase}
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.primary} 28%, transparent);
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    color: ${({ theme }) => theme.color.text.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 8%,
      transparent
    );
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
