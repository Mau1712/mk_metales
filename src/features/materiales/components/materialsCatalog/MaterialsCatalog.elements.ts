import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const MaterialsCatalogElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MaterialsCatalogGroupElement = styled.section<{
  $variant: "default" | "machining";
}>`
  width: 100%;
  scroll-margin-top: ${({ theme }) =>
    `calc(${theme.spacing(2)} * 2 + ${theme.spacing(8)} + ${theme.spacing(2)})`};
  background-color: ${({ $variant, theme }) =>
    $variant === "machining"
      ? theme.color.background.surface
      : theme.color.white};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);

  ${({ $variant, theme }) =>
    $variant === "machining" &&
    css`
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 11px,
        color-mix(in srgb, ${theme.color.steel} 8%, transparent) 11px,
        color-mix(in srgb, ${theme.color.steel} 8%, transparent) 12px
      );
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    scroll-margin-top: ${({ theme }) =>
      `calc(${theme.spacing(2)} * 2 + ${theme.spacing(6)} + ${theme.spacing(2)})`};
  }
`;

export const MaterialsCatalogGroupInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
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

export const MaterialsCatalogGroupHeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${pxToRem(720)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const MaterialsCatalogGroupEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const MaterialsCatalogGroupTitleElement = styled.h2`
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
`;

export const MaterialsCatalogGroupDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.5)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const MaterialsCatalogGridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const MaterialCardElement = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2.5)};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
`;

export const MaterialCardHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
`;

export const MaterialCardIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.brand.primary};

  svg {
    width: ${({ theme }) => theme.spacing(2.5)};
    height: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const MaterialCardCategoryElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const MaterialCardNameElement = styled.h3`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.25;
`;

export const MaterialCardDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1.25)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.55;
`;

export const MaterialCardMetaElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.02em;
  line-height: 1.4;
`;

export const MaterialCardCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.3;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
  }

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
    transform: translateX(${pxToRem(3)});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;

export const MaterialsCatalogGroupNoteElement = styled.p`
  max-width: 68ch;
  margin: ${({ theme }) => `${theme.spacing(3)} 0 0`};
  padding: ${({ theme }) => `${theme.spacing(1.25)} 0 0`};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;
