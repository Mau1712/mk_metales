import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const SolutionsSectorsElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const SolutionsSectorsInnerElement = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(0, 0.38fr) minmax(0, 0.62fr);
  column-gap: ${({ theme }) => theme.spacing(8)};
  row-gap: ${({ theme }) => theme.spacing(4)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(8)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const SolutionsSectorsHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    position: sticky;
    top: ${({ theme }) => theme.spacing(12)};
  }
`;

export const SolutionsSectorsEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SolutionsSectorsTitleElement = styled.h2`
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

export const SolutionsSectorsListElement = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SolutionsSectorElement = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 0.38fr) minmax(0, 0.62fr);
  column-gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => `${theme.spacing(2.5)} 0`};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 24%, transparent);

  &:last-child {
    border-bottom: 1px solid
      color-mix(in srgb, ${({ theme }) => theme.color.steel} 24%, transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: ${({ theme }) => theme.spacing(0.75)};
  }
`;

export const SolutionsSectorTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.35;
`;

export const SolutionsSectorDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
