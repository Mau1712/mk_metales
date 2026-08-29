import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const QuoteClosingElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const QuoteClosingInnerElement = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) =>
      `${theme.spacing(4.5)} ${theme.spacing(3)} ${theme.spacing(4.5)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(4)} ${theme.spacing(2.5)} ${theme.spacing(4)}`};
  }
`;

export const QuoteClosingCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  max-width: ${pxToRem(640)};
`;

export const QuoteClosingTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xLarge},
    2vw,
    ${({ theme }) => theme.typography.fontSizes.xxLarge}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.25;
  text-wrap: balance;
`;

export const QuoteClosingDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
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

export const QuoteClosingCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;
