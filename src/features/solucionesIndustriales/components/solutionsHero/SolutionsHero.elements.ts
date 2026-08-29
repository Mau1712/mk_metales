import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsHeroElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.background.primary} 0%,
    color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.secondary} 48%,
        ${({ theme }) => theme.color.background.primary}
      )
      100%
  );
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 12%;
    width: 1px;
    height: 100%;
    pointer-events: none;
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 22%,
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    right: ${({ theme }) => theme.spacing(6)};
    bottom: ${({ theme }) => theme.spacing(-8)};
    width: ${pxToRem(200)};
    height: ${pxToRem(200)};
    pointer-events: none;
    border-radius: ${({ theme }) => theme.radii.circle};
    background: radial-gradient(
      circle,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 12%,
        transparent
      )
        0%,
      transparent 70%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const SolutionsHeroInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(7)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const SolutionsHeroCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SolutionsHeroEyebrowElement = styled.p`
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

export const SolutionsHeroTitleElement = styled.h1`
  max-width: ${pxToRem(800)};
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.8vw,
    ${({ theme }) => theme.typography.fontSizes.mHeading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: clamp(
      ${({ theme }) => theme.typography.fontSizes.xLarge},
      6.2vw,
      ${({ theme }) => theme.typography.fontSizes.xxLarge}
    );
  }
`;

export const SolutionsHeroDescriptionElement = styled.p`
  max-width: 58ch;
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

export const SolutionsHeroSignalsElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  padding: 0;
  list-style: none;
`;

export const SolutionsHeroSignalItemElement = styled.li`
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.4;

  &:not(:last-child)::after {
    content: "·";
    margin-left: ${({ theme }) => theme.spacing(1.5)};
    color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 70%,
      transparent
    );
  }
`;

export const SolutionsHeroActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

const heroCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const SolutionsHeroPrimaryCtaElement = styled(Link)`
  ${heroCtaBase}
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

export const SolutionsHeroSecondaryCtaElement = styled(Link)`
  ${heroCtaBase}
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.light} 48%, transparent);
  background: transparent;
  color: ${({ theme }) => theme.color.text.light};

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
    outline: 2px solid ${({ theme }) => theme.color.text.light};
    outline-offset: 3px;
  }
`;
