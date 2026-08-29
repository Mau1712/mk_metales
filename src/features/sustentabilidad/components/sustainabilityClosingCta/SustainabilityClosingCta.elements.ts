import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SustainabilityClosingCtaElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.background.secondary} 0%,
    ${({ theme }) => theme.color.background.primary} 72%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const SustainabilityClosingInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  column-gap: ${({ theme }) => theme.spacing(8)};
  row-gap: ${({ theme }) => theme.spacing(4)};
  align-items: end;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const SustainabilityClosingCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const SustainabilityClosingEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SustainabilityClosingTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
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

export const SustainabilityClosingDescriptionElement = styled.p`
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

export const SustainabilityClosingActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(1.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

const closingCtaBase = css`
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

export const SustainabilityClosingPrimaryCtaElement = styled(Link)`
  ${closingCtaBase}
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

export const SustainabilityClosingSecondaryCtaElement = styled(Link)`
  ${closingCtaBase}
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
