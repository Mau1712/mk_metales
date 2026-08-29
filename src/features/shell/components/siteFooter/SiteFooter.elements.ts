import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SiteFooterElement = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.background.primary};
  border-top: 1px solid ${({ theme }) => theme.color.border.soft};
`;

export const SiteFooterInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  padding-block: ${({ theme }) => theme.spacing(7)};
  padding-inline: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-block: ${({ theme }) => theme.spacing(6)};
    padding-inline: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    padding-block: ${({ theme }) => theme.spacing(5)};
    padding-inline: ${({ theme }) => theme.spacing(2.5)};
    text-align: center;
  }
`;

export const SiteFooterGridElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) repeat(3, minmax(0, 1fr));
  column-gap: ${({ theme }) => theme.spacing(5)};
  row-gap: ${({ theme }) => theme.spacing(4)};
  align-items: start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    row-gap: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const SiteFooterBrandElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterLogoElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  line-height: 0;

  img {
    display: block;
    height: ${({ theme }) => theme.spacing(8)};
    width: auto;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    img {
      height: ${({ theme }) => theme.spacing(7)};
    }
  }
`;

export const SiteFooterBrandLeadElement = styled.p`
  margin: 0;
  max-width: 36ch;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.5;
`;

export const SiteFooterBrandCopyElement = styled.p`
  margin: 0;
  max-width: 36ch;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const SiteFooterColumnElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterHeadingElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SiteFooterNavElement = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(0.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const SiteFooterNavLinkElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: ${pxToRem(36)};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
    transform: translateX(${pxToRem(3)});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(5.5)};
  }
`;

export const SiteFooterContactPromptElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const SiteFooterContactCtaElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-height: ${pxToRem(36)};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.4;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(5.5)};
  }
`;

export const SiteFooterContactLinkElement = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: ${pxToRem(36)};
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.45;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.brand.primary};
    transform: translateX(${pxToRem(3)});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;

export const SiteFooterBottomElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(3)};
  border-top: 1px solid ${({ theme }) => theme.color.border.soft};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    text-align: center;
  }
`;

export const SiteFooterRightsElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const SiteFooterMetaElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.steel};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.4;
`;
