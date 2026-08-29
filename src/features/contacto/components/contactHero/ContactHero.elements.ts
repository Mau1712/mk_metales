import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const ContactHeroElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.background.primary} 0%,
    color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.secondary} 48%,
        ${({ theme }) => theme.color.background.primary}
      )
      100%
  );
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  &::after {
    content: "";
    position: absolute;
    right: ${({ theme }) => theme.spacing(6)};
    bottom: ${({ theme }) => theme.spacing(-6)};
    width: ${pxToRem(160)};
    height: ${pxToRem(160)};
    pointer-events: none;
    border-radius: ${({ theme }) => theme.radii.circle};
    background: radial-gradient(
      circle,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 12%,
        transparent
      )
        0%,
      transparent 70%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::after {
      display: none;
    }
  }
`;

export const ContactHeroInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const ContactHeroEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const ContactHeroTitleElement = styled.h1`
  max-width: ${pxToRem(640)};
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
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
      6.2vw,
      ${({ theme }) => theme.typography.fontSizes.xxLarge}
    );
  }
`;

export const ContactHeroDescriptionElement = styled.p`
  max-width: ${pxToRem(560)};
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

export const ContactHeroSignalsElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1.5)};
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  padding: 0;
  list-style: none;
`;

export const ContactHeroSignalItemElement = styled.li`
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.4;

  &:not(:last-child)::after {
    content: "·";
    margin-left: ${({ theme }) => theme.spacing(1.5)};
    color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 70%,
      transparent
    );
  }
`;
