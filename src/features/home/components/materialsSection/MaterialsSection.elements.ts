import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const MaterialsSectionElement = styled.section`
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

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(
      180deg,
      transparent 0%,
      color-mix(in srgb, ${({ theme }) => theme.color.steel} 7%, transparent) 48%,
      transparent 100%
    );
    opacity: 0.55;
  }
`;

export const MaterialsSectionInnerElement = styled(SectionContainer)`
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

export const MaterialsHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${pxToRem(640)};
`;

export const MaterialsEyebrowElement = styled.p`
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

export const MaterialsTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
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

export const MaterialsIntroElement = styled.p`
  max-width: 58ch;
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const MaterialsGroupsElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing(4)};
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const MaterialsGroupElement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
`;

export const MaterialsGroupTitleElement = styled.h3`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-transform: uppercase;

  &::before {
    content: "";
    width: ${pxToRem(18)};
    height: 2px;
    background: ${({ theme }) => theme.color.brand.primary};
    flex-shrink: 0;
  }
`;

export const MaterialsListElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const MaterialCardElement = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
  min-height: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-top: 2px solid ${({ theme }) => theme.color.steel};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: none;
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
      box-shadow: ${({ theme }) => theme.shadows.small};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(7.5)};
    padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(1.5)}`};
    gap: ${({ theme }) => theme.spacing(1.25)};
  }
`;

export const MaterialCardIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing(4.5)};
  height: ${({ theme }) => theme.spacing(4.5)};
  color: ${({ theme }) => theme.color.brand.primary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.surface} 70%,
    ${({ theme }) => theme.color.white}
  );
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 18%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};

  svg {
    width: ${({ theme }) => theme.spacing(2.5)};
    height: ${({ theme }) => theme.spacing(2.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.spacing(4)};
    height: ${({ theme }) => theme.spacing(4)};

    svg {
      width: ${({ theme }) => theme.spacing(2.25)};
      height: ${({ theme }) => theme.spacing(2.25)};
    }
  }
`;

export const MaterialCardCopyElement = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  gap: ${pxToRem(2)};
`;

export const MaterialCardNameElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.04em;
  line-height: 1.25;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
  }
`;

export const MaterialCardCaptionElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.3;
`;

export const MaterialsCtaElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${pxToRem(640)};
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const MaterialsCtaTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.01em;
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const MaterialsCtaDescriptionElement = styled.p`
  max-width: 48ch;
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const MaterialsCtaActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme }) => theme.spacing(2.5)};
  }
`;

const materialsCtaBase = css`
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

export const MaterialsPrimaryCtaElement = styled(Link)`
  ${materialsCtaBase}
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

export const MaterialsSecondaryCtaElement = styled(Link)`
  ${materialsCtaBase}
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
