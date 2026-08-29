import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsRecurringElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SolutionsRecurringInnerElement = styled(SectionContainer)`
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

export const SolutionsRecurringTitleElement = styled.h2`
  max-width: ${pxToRem(760)};
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.4vw,
    ${({ theme }) => theme.typography.fontSizes.heading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-wrap: balance;
`;

export const SolutionsRecurringDescriptionElement = styled.p`
  max-width: ${pxToRem(640)};
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsRecurringConceptsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
  margin: ${({ theme }) => `${theme.spacing(5)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing(3)};
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SolutionsRecurringConceptElement = styled.li`
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 2px solid ${({ theme }) => theme.color.brand.primary};
`;

export const SolutionsRecurringConceptTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const SolutionsRecurringConceptDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
