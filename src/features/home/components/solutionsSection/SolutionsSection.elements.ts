import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: ${({ theme }) => theme.spacing(10)};
    pointer-events: none;
    background: linear-gradient(
      180deg,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.primary} 10%,
        transparent
      ),
      transparent
    );
  }
`;

export const SolutionsSectionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(7)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(6)}`};
  }
`;

export const SolutionsLayoutElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SolutionsIntroElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const SolutionsEyebrowElement = styled.p`
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

export const SolutionsTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
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

export const SolutionsLeadElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsDetailElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const SolutionsB2bElement = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  margin: ${({ theme }) => `${theme.spacing(3)} 0 0`};
  padding: ${({ theme }) =>
    `${theme.spacing(1.5)} 0 ${theme.spacing(0.25)} ${theme.spacing(1.75)}`};
  border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.45;
`;

export const SolutionsB2bLabelElement = styled.span`
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SolutionsActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(3.5)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

const solutionsCtaBase = css`
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

export const SolutionsPrimaryCtaElement = styled(Link)`
  ${solutionsCtaBase}
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

export const SolutionsSecondaryCtaElement = styled(Link)`
  ${solutionsCtaBase}
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

export const SolutionsListElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: calc(100% + ${({ theme }) => theme.spacing(2.5)});
    margin-right: ${({ theme }) => `-${theme.spacing(2.5)}`};
    padding: ${({ theme }) => `0 ${theme.spacing(2.5)} ${theme.spacing(0.5)} 0`};
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 0;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SolutionCardElement = styled.li<{ $highlight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding: ${({ theme }) => `${theme.spacing(2.25)} ${theme.spacing(2.25)}`};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-top: 2px solid
    ${({ $highlight, theme }) =>
      $highlight ? theme.color.brand.primary : theme.color.steel};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: inset 2px 0 0
    ${({ $highlight, theme }) =>
      $highlight ? theme.color.brand.primary : "transparent"};
  transition:
    transform ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      border-color: color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 45%,
        ${({ theme }) => theme.color.steel}
      );
      border-top-color: ${({ theme }) => theme.color.brand.primary};
      box-shadow: inset 2px 0 0 ${({ theme }) => theme.color.brand.primary};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition:
      border-color ${({ theme }) => theme.transitions.fast},
      box-shadow ${({ theme }) => theme.transitions.fast};

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 calc(100% - ${({ theme }) => theme.spacing(6.5)});
    width: calc(100% - ${({ theme }) => theme.spacing(6.5)});
    min-width: calc(100% - ${({ theme }) => theme.spacing(6.5)});
    scroll-snap-align: start;
    scroll-snap-stop: always;

    &:hover {
      transform: none;
    }
  }
`;

export const SolutionCardHeadElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const SolutionCardNumberElement = styled.span<{ $highlight: boolean }>`
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.color.brand.primary : theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.08em;
  line-height: 1;
  transition: color ${({ theme }) => theme.transitions.normal};

  ${SolutionCardElement}:hover & {
    color: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const SolutionCardIconElement = styled.span<{ $highlight: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.color.brand.primary : theme.color.steel};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.surface} 70%,
    ${({ theme }) => theme.color.white}
  );
  border: 1px solid
    ${({ $highlight, theme }) =>
      $highlight
        ? `color-mix(in srgb, ${theme.color.brand.primary} 35%, transparent)`
        : `color-mix(in srgb, ${theme.color.steel} 18%, transparent)`};
  border-radius: ${({ theme }) => theme.radii.small};
  transition:
    color ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};

  svg {
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
  }

  ${SolutionCardElement}:hover & {
    color: ${({ theme }) => theme.color.brand.primary};
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 35%,
      transparent
    );
  }
`;

export const SolutionCardTitleElement = styled.h3`
  margin: ${({ theme }) => `${theme.spacing(1.75)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SolutionCardTextElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.5;
`;

export const SolutionsClosingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${pxToRem(720)};
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding-top: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const SolutionsClosingTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const SolutionsClosingTextElement = styled.p`
  max-width: 52ch;
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const SolutionsClosingCtaElement = styled(Link)`
  ${solutionsCtaBase}
  margin-top: ${({ theme }) => theme.spacing(2.5)};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const SolutionsPageCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: ${pxToRem(44)};
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
