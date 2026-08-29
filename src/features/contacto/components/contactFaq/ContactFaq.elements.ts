import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const ContactFaqElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const ContactFaqInnerElement = styled(SectionContainer)`
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

export const ContactFaqTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.25;
`;

export const ContactFaqListElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
  margin: ${({ theme }) => `${theme.spacing(4)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const ContactFaqItemElement = styled.li`
  min-width: 0;
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 2px solid ${({ theme }) => theme.color.brand.primary};
`;

export const ContactFaqQuestionElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.35;
`;

export const ContactFaqAnswerElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;
