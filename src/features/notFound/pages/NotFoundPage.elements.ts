import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const NotFoundPageElement = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

export const NotFoundSectionElement = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primary};
`;

export const NotFoundInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: ${pxToRem(720)};
  padding: ${({ theme }) =>
    `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(10)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(8)} ${theme.spacing(3)} ${theme.spacing(8)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(2.5)} ${theme.spacing(7)}`};
  }
`;

export const NotFoundEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const NotFoundTitleElement = styled.h1`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    4vw,
    ${({ theme }) => theme.typography.fontSizes.heading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
`;

export const NotFoundDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  max-width: ${pxToRem(560)};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;
`;

export const NotFoundActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const NotFoundPrimaryCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
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

export const NotFoundSecondaryCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 48%, transparent);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  color: ${({ theme }) => theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
