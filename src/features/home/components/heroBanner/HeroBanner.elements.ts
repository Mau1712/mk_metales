import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import heroImage from "@assets/home/MK_Metales_Hero_1.png";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const HeroBannerElement = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: calc(100svh - ${({ theme }) => `calc(${theme.spacing(2)} * 2 + ${theme.spacing(8)})`});
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 58% center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.primary} 88%,
        transparent
      )
        0%,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.primary} 62%,
        transparent
      )
        34%,
      color-mix(
        in srgb,
        ${({ theme }) => theme.color.background.primary} 22%,
        transparent
      )
        58%,
      transparent 78%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    background-position: 68% center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    min-height: calc(
      100svh - ${({ theme }) => `calc(${theme.spacing(2)} * 2 + ${theme.spacing(6)})`}
    );
    background-position: 74% center;

    &::before {
      background: linear-gradient(
        90deg,
        color-mix(
          in srgb,
          ${({ theme }) => theme.color.background.primary} 90%,
          transparent
        )
          0%,
        color-mix(
          in srgb,
          ${({ theme }) => theme.color.background.primary} 70%,
          transparent
        )
          42%,
        color-mix(
          in srgb,
          ${({ theme }) => theme.color.background.primary} 28%,
          transparent
        )
          72%,
        transparent 92%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: min(100svh, ${pxToRem(760)});
    background-position: 82% center;

    &::before {
      background:
        linear-gradient(
          180deg,
          color-mix(
            in srgb,
            ${({ theme }) => theme.color.background.primary} 42%,
            transparent
          )
            0%,
          color-mix(
            in srgb,
            ${({ theme }) => theme.color.background.primary} 58%,
            transparent
          )
            50%,
          color-mix(
            in srgb,
            ${({ theme }) => theme.color.background.primary} 48%,
            transparent
          )
            100%
        ),
        linear-gradient(
          90deg,
          color-mix(
            in srgb,
            ${({ theme }) => theme.color.background.primary} 78%,
            transparent
          )
            0%,
          color-mix(
            in srgb,
            ${({ theme }) => theme.color.background.primary} 40%,
            transparent
          )
            55%,
          transparent 100%
        );
    }
  }
`;

export const HeroBannerInnerElement = styled(SectionContainer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(7)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(5)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(4)} ${theme.spacing(2.5)} ${theme.spacing(4)}`};
  }
`;

export const HeroBannerContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    max-width: 58%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HeroEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    letter-spacing: 0.08em;
  }
`;

export const HeroTitleElement = styled.h1`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.heading},
    4.4vw,
    ${pxToRem(56)}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.08;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    font-size: clamp(
      ${({ theme }) => theme.typography.fontSizes.xxLarge},
      8.2vw,
      ${({ theme }) => theme.typography.fontSizes.heading}
    );
  }
`;

export const HeroTitleLineElement = styled.span`
  color: ${({ theme }) => theme.color.text.light};
`;

export const HeroTitleAccentElement = styled.span`
  color: ${({ theme }) => theme.color.brand.primary};
`;

export const HeroDescriptionElement = styled.p`
  max-width: 38ch;
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.55;
  opacity: 0.88;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 42ch;
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const HeroActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    margin-top: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

const heroCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border-radius: ${({ theme }) => theme.radii.pill};
  appearance: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  line-height: 1.2;
  cursor: pointer;
  text-align: center;
`;

export const HeroPrimaryCtaElement = styled(Link)`
  ${heroCtaBase}
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const HeroSecondaryCtaElement = styled.a`
  ${heroCtaBase}
  border: 1px solid ${({ theme }) => theme.color.text.light};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.primary} 28%,
    transparent
  );
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.background.primary} 52%,
      transparent
    );
    color: ${({ theme }) => theme.color.text.light};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.light};
    outline-offset: 3px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const HeroBenefitsElement = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(100%, ${pxToRem(560)});
  margin: ${({ theme }) => `${theme.spacing(5)} 0 0`};
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const HeroBenefitItemElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};
  padding-inline: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  color: ${({ theme }) => theme.color.text.light};

  &:first-child {
    align-items: center;
    padding-left: 0;
    text-align: center;
  }

  &:not(:first-child) {
    border-left: 1px solid
      color-mix(in srgb, ${({ theme }) => theme.color.text.light} 45%, transparent);
  }

  svg {
    width: ${({ theme }) => theme.spacing(5)};
    height: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.color.brand.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-inline: ${({ theme }) => theme.spacing(1)};
    gap: ${({ theme }) => theme.spacing(1)};

    &:first-child {
      padding-left: ${({ theme }) => theme.spacing(1)};
    }

    svg {
      width: ${({ theme }) => theme.spacing(4)};
      height: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const HeroBenefitLabelElement = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.08em;
  line-height: 1.25;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.color.text.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
  }
`;
