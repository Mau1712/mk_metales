import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

const markerCenter = css`
  ${({ theme }) =>
    `calc(${theme.typography.fontSizes.xxxLarge} + ${theme.spacing(1.5)} + ${theme.spacing(3)})`}
`;

export const ProcessSectionElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.background.secondary} 42%,
      ${({ theme }) => theme.color.background.primary}
    )
      0%,
    ${({ theme }) => theme.color.background.primary} 32%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const ProcessSectionInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(9)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(7)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(6)}`};
  }
`;

export const ProcessHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${pxToRem(640)};
`;

export const ProcessEyebrowElement = styled.p`
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

export const ProcessTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    3.2vw,
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

export const ProcessIntroElement = styled.p`
  max-width: 58ch;
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 78%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ProcessListElement = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(7)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(3)};
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing(4)};
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;

export const ProcessStepElement = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.base};
    top: ${markerCenter};
    left: ${({ theme }) => theme.spacing(3)};
    width: calc(100% + ${({ theme }) => theme.spacing(3)});
    height: 1px;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      color-mix(in srgb, ${({ theme }) => theme.color.steel} 55%, transparent),
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 42%,
        ${({ theme }) => theme.color.steel}
      )
    );
  }

  &:nth-child(3)::after {
    background: linear-gradient(
      90deg,
      color-mix(in srgb, ${({ theme }) => theme.color.steel} 45%, transparent),
      ${({ theme }) => theme.color.brand.primary}
    );
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    &:not(:last-child)::after {
      content: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: ${({ theme }) => theme.spacing(5.5)} minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      "number copy"
      "marker copy";
    column-gap: ${({ theme }) => theme.spacing(2.5)};
    row-gap: ${({ theme }) => theme.spacing(1)};
    align-items: start;

    &:not(:last-child)::after {
      content: "";
      top: calc(
        ${({ theme }) => theme.typography.fontSizes.xxLarge} +
          ${({ theme }) => theme.spacing(1)} + ${({ theme }) => theme.spacing(2.75)}
      );
      left: ${({ theme }) => theme.spacing(2.75)};
      width: 1px;
      height: calc(100% + ${({ theme }) => theme.spacing(4)});
      background: linear-gradient(
        180deg,
        color-mix(in srgb, ${({ theme }) => theme.color.steel} 50%, transparent),
        color-mix(
          in srgb,
          ${({ theme }) => theme.color.brand.primary} 70%,
          ${({ theme }) => theme.color.steel}
        )
      );
    }
  }
`;

export const ProcessStepNumberElement = styled.span<{ $highlight: boolean }>`
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.color.brand.primary : theme.color.steel};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.4vw,
    ${({ theme }) => theme.typography.fontSizes.xxxLarge}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.08em;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: number;
    justify-self: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
    letter-spacing: 0.04em;
  }
`;

export const ProcessStepMarkerElement = styled.span<{ $highlight: boolean }>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.brand.primary};
  background: ${({ $highlight, theme }) =>
    $highlight
      ? `color-mix(in srgb, ${theme.color.brand.primary} 16%, ${theme.color.background.primary})`
      : theme.color.background.primary};
  border: 1px solid
    ${({ $highlight, theme }) =>
      $highlight
        ? theme.color.brand.primary
        : `color-mix(in srgb, ${theme.color.steel} 42%, transparent)`};
  border-radius: ${({ theme }) => theme.radii.circle};

  svg {
    width: ${({ theme }) => theme.spacing(2.75)};
    height: ${({ theme }) => theme.spacing(2.75)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: marker;
    justify-self: center;
    width: ${({ theme }) => theme.spacing(5.5)};
    height: ${({ theme }) => theme.spacing(5.5)};
    margin-top: 0;
  }
`;

export const ProcessStepCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: copy;
    padding-top: ${pxToRem(2)};
  }
`;

export const ProcessStepTitleElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
  }
`;

export const ProcessStepDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 72%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    line-height: 1.45;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(0.75)};
  }
`;

export const ProcessClosingElement = styled.p`
  max-width: ${pxToRem(520)};
  margin: ${({ theme }) => `${theme.spacing(7)} auto 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: -0.01em;
  line-height: 1.45;
  text-align: center;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(5)};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ProcessCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  min-height: ${pxToRem(48)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.light} 55%, transparent);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  color: ${({ theme }) => theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 12%,
      transparent
    );
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
    align-self: stretch;
  }
`;
