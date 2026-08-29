import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const QuoteHowElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const QuoteHowInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
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

export const QuoteHowHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
`;

export const QuoteHowEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const QuoteHowTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xLarge},
    2.2vw,
    ${({ theme }) => theme.typography.fontSizes.xxLarge}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-wrap: balance;
`;

export const QuoteHowDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const QuoteHowStepsElement = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(4.5)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const QuoteHowStepElement = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(1.5)};
  border-top: 2px solid ${({ theme }) => theme.color.brand.primary};

  svg {
    flex-shrink: 0;
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(0.25)};
    color: ${({ theme }) => theme.color.brand.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    svg {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
    padding-left: ${({ theme }) => theme.spacing(2)};
    border-top: 0;
    border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  }
`;

export const QuoteHowStepLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.35;
`;
