import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";

export const QuoteToolElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
`;

export const QuoteToolInnerElement = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  column-gap: ${({ theme }) => theme.spacing(5)};
  row-gap: ${({ theme }) => theme.spacing(3.5)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(7)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: minmax(0, 1fr);
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(6)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(4.5)} ${theme.spacing(2.5)} ${theme.spacing(5)}`};
  }
`;

export const QuoteToolFormPanelElement = styled.div`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`;
