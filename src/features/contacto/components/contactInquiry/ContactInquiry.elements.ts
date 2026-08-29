import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const ContactInquiryElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
`;

export const ContactInquiryInnerElement = styled(SectionContainer)`
  display: grid;
  grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
  column-gap: ${({ theme }) => theme.spacing(8)};
  row-gap: ${({ theme }) => theme.spacing(5)};
  align-items: start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(8)}`};

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

export const ContactInquiryCopyElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const ContactInquiryFormPanelElement = styled.div`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  background: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`;

export const ContactInquiryEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const ContactInquiryTitleElement = styled.h2`
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
  text-wrap: balance;
`;

export const ContactInquiryLeadElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ContactContextListElement = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(3)} 0 0`};
  padding: 0;
  list-style: none;
`;

export const ContactContextItemElement = styled.li`
  padding: ${({ theme }) => `${theme.spacing(1.5)} 0`};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 24%, transparent);
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.4;

  &:last-child {
    border-bottom: 1px solid
      color-mix(in srgb, ${({ theme }) => theme.color.steel} 24%, transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const ContactInquiryNoteElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  padding-left: ${({ theme }) => theme.spacing(2)};
  border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.45;
`;

export const ContactDetailsElement = styled.dl`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  margin: ${({ theme }) => `${theme.spacing(4)} 0 0`};
`;

export const ContactDetailItemElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};

  dt {
    color: ${({ theme }) => theme.color.steel};
    font-size: ${({ theme }) => theme.typography.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd,
  a {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    line-height: 1.4;
  }

  a:hover {
    color: ${({ theme }) => theme.color.brand.primary};
  }

  a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;

export const ContactChannelsElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const ContactChannelTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.35;
`;

export const ContactChannelDescriptionElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(1)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

const channelCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-height: ${pxToRem(48)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 0 ${pxToRem(20)};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  svg {
    width: ${({ theme }) => theme.spacing(2)};
    height: ${({ theme }) => theme.spacing(2)};
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

export const ContactWhatsAppCtaElement = styled.a`
  ${channelCtaBase}
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
    color: ${({ theme }) => theme.color.text.light};
  }
`;

export const ContactQuoteCtaElement = styled(Link)`
  ${channelCtaBase}
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.text.primary} 28%, transparent);
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 8%,
      transparent
    );
    color: ${({ theme }) => theme.color.text.primary};
  }
`;
