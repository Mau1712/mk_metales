import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SustainabilitySolutionsElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const SustainabilitySolutionsInnerElement = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  column-gap: ${({ theme }) => theme.spacing(8)};
  row-gap: ${({ theme }) => theme.spacing(3)};
  align-items: end;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(6)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(5)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(4.5)} ${theme.spacing(2.5)} ${theme.spacing(4.5)}`};
  }
`;

export const SustainabilitySolutionsCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const SustainabilitySolutionsTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xLarge},
    2.2vw,
    ${({ theme }) => theme.typography.fontSizes.xxLarge}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

export const SustainabilitySolutionsDescriptionElement = styled.p`
  max-width: ${pxToRem(520)};
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SustainabilitySolutionsActionsElement = styled.div`
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

const solutionsCtaBase = css`
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

export const SustainabilitySolutionsPrimaryCtaElement = styled(Link)`
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

export const SustainabilitySolutionsSecondaryCtaElement = styled(Link)`
  ${solutionsCtaBase}
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.primary} 28%, transparent);
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};

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
`;
