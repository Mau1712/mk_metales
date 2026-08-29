import { Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const MaterialsOverviewElement = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.surface};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
`;

export const MaterialsOverviewInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(5)}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding: ${({ theme }) =>
      `${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(4)}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(2.5)} ${theme.spacing(3.5)}`};
  }
`;

export const MaterialsOverviewEyebrowElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    letter-spacing: 0.08em;
  }
`;

export const MaterialsOverviewTitleElement = styled.h2`
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.primary};
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

export const MaterialsOverviewDescriptionElement = styled.p`
  max-width: 68ch;
  margin: ${({ theme }) => `${theme.spacing(2)} 0 0`};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  }
`;

export const MaterialsOverviewNoteElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(2.5)} 0 0`};
  padding: ${({ theme }) =>
    `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  border-left: 2px solid ${({ theme }) => theme.color.brand.primary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.brand.primary} 6%,
    ${({ theme }) => theme.color.white}
  );
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const MaterialsOverviewNavElement = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    width: calc(100% + ${({ theme }) => theme.spacing(2.5)});
    margin-right: ${({ theme }) => `-${theme.spacing(2.5)}`};
    padding-right: ${({ theme }) => theme.spacing(2.5)};
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MaterialsOverviewNavLinkElement = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: ${pxToRem(40)};
  padding: 0 ${pxToRem(16)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 32%, transparent);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  white-space: nowrap;
  scroll-snap-align: start;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    color: ${({ theme }) => theme.color.text.primary};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.brand.primary} 8%,
      ${({ theme }) => theme.color.white}
    );
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
