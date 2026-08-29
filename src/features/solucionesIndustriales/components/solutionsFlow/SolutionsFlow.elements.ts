import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const SolutionsFlowElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.background.secondary} 40%,
      ${({ theme }) => theme.color.background.primary}
    )
      0%,
    ${({ theme }) => theme.color.background.primary} 40%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SolutionsFlowInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(7)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(6)}`};
  }
`;

export const SolutionsFlowHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 36rem;
`;

export const SolutionsFlowEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SolutionsFlowTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.6vw,
    ${({ theme }) => theme.typography.fontSizes.heading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-wrap: balance;
`;

export const SolutionsFlowStepsElement = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(6)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SolutionsFlowStepElement = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 2px solid
    color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 55%, transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    border-top: 0;
    border-left: 2px solid
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 55%,
        transparent
      );
  }
`;

export const SolutionsFlowNumberElement = styled.span`
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1.2;
`;

export const SolutionsFlowStepTitleElement = styled.h3`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const SolutionsFlowDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 72%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;
