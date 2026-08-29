import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SustainabilityIndustryElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const SustainabilityIndustryInnerElement = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(0, 0.46fr) minmax(0, 0.54fr);
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

export const SustainabilityIndustryHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 0;
`;

export const SustainabilityIndustryCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 0;
`;

export const SustainabilityIndustryEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SustainabilityIndustryTitleElement = styled.h2`
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
`;

export const SustainabilityIndustryLeadElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SustainabilityIndustryDetailElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SustainabilityIndustryPointsElement = styled.ul`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const SustainabilityIndustryPointElement = styled.li`
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 36%, transparent);
`;

export const SustainabilityIndustryPointTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const SustainabilityIndustryPointDescriptionElement = styled.p`
  max-width: ${pxToRem(360)};
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
