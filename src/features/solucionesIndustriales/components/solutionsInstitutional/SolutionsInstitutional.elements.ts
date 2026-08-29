import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsInstitutionalElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SolutionsInstitutionalInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(7)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const SolutionsInstitutionalEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const SolutionsInstitutionalTitleElement = styled.h2`
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

export const SolutionsInstitutionalDescriptionElement = styled.p`
  max-width: ${pxToRem(680)};
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsInstitutionalDetailElement = styled.p`
  max-width: ${pxToRem(680)};
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const SolutionsInstitutionalFactsElement = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(3)} 0 0`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SolutionsInstitutionalFactElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};

  strong {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  }

  span {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
    line-height: 1.45;
  }
`;
