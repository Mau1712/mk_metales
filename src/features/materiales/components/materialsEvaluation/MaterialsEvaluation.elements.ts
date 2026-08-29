import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const MaterialsEvaluationElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    color-mix(
      in srgb,
      ${({ theme }) => theme.color.background.secondary} 42%,
      ${({ theme }) => theme.color.background.primary}
    )
      0%,
    ${({ theme }) => theme.color.background.primary} 36%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const MaterialsEvaluationInnerElement = styled(SectionContainer)`
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

export const MaterialsEvaluationHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${pxToRem(640)};
`;

export const MaterialsEvaluationEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const MaterialsEvaluationTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(
      ${({ theme }) => theme.typography.fontSizes.xLarge},
      6.4vw,
      ${({ theme }) => theme.typography.fontSizes.xxLarge}
    );
  }
`;

export const MaterialsEvaluationIntroElement = styled.p`
  max-width: 58ch;
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
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

export const MaterialsEvaluationGridElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(5)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const MaterialsEvaluationFactorElement = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing(2)};
  row-gap: ${({ theme }) => theme.spacing(1)};
  align-items: start;
  padding: ${({ theme }) => theme.spacing(2.5)};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.secondary} 72%,
    ${({ theme }) => theme.color.background.primary}
  );
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
`;

export const MaterialsEvaluationFactorNumberElement = styled.span`
  grid-column: 1;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1.2;
`;

export const MaterialsEvaluationFactorIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-column: 1;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.brand.primary};

  svg {
    width: ${({ theme }) => theme.spacing(2.5)};
    height: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const MaterialsEvaluationFactorCopyElement = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  min-width: 0;
`;

export const MaterialsEvaluationFactorTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
`;

export const MaterialsEvaluationFactorDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: color-mix(
    in srgb,
    ${({ theme }) => theme.color.text.light} 72%,
    transparent
  );
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;
