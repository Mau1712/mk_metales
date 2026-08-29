import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsOperationsElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SolutionsOperationsInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const SolutionsOperationsTitleElement = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xLarge},
    2vw,
    ${({ theme }) => theme.typography.fontSizes.xxLarge}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const SolutionsOperationsGridElement = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.spacing(8)};
  row-gap: ${({ theme }) => theme.spacing(6)};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SolutionsOperationElement = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing(2.5)};
  align-items: start;
  min-width: 0;
`;

export const SolutionsOperationNumberElement = styled.span`
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    3vw,
    ${({ theme }) => theme.typography.fontSizes.xHeading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.04em;
  line-height: 1;
`;

export const SolutionsOperationCopyElement = styled.div`
  min-width: 0;
  padding-left: ${({ theme }) => theme.spacing(2.5)};
  border-left: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 32%, transparent);
`;

export const SolutionsOperationTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;

export const SolutionsOperationDescriptionElement = styled.p`
  max-width: ${pxToRem(420)};
  margin: ${({ theme }) => `${theme.spacing(1.25)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
