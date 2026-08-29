import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsCircularElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const SolutionsCircularInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(6)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(5)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(4.5)} ${theme.spacing(2.5)} ${theme.spacing(4.5)}`};
  }
`;

export const SolutionsCircularEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SolutionsCircularTitleElement = styled.h2`
  max-width: ${pxToRem(640)};
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
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

export const SolutionsCircularDescriptionElement = styled.p`
  max-width: ${pxToRem(680)};
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsCircularDetailElement = styled.p`
  max-width: ${pxToRem(680)};
  margin: ${({ theme }) => `${theme.spacing(1.25)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsCircularCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-height: ${pxToRem(44)};
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
  }

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
    transform: translateX(${pxToRem(3)});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
