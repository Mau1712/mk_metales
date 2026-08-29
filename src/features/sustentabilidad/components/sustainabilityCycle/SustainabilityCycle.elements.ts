import styled from "styled-components";
import { SectionContainer } from "@shared/ui/containers/sectionContainer/SectionContainer";
import { pxToRem } from "@shared/utils/styles-utils";

export const SustainabilityCycleElement = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  scroll-margin-top: ${({ theme }) => theme.spacing(12)};
  background-color: ${({ theme }) => theme.color.background.primary};
  background-image: radial-gradient(
    ellipse at 70% 40%,
    color-mix(
        in srgb,
        ${({ theme }) => theme.color.brand.primary} 14%,
        transparent
      )
      0%,
    transparent 58%
  );
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
`;

export const SustainabilityCycleInnerElement = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const SustainabilityCycleTitleElement = styled.h2`
  max-width: ${pxToRem(560)};
  margin: 0;
  color: ${({ theme }) => theme.color.text.light};
  font-size: clamp(
    ${({ theme }) => theme.typography.fontSizes.xxLarge},
    2.6vw,
    ${({ theme }) => theme.typography.fontSizes.heading}
  );
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
`;

export const SustainabilityCycleDiagramElement = styled.div`
  --ring: ${pxToRem(620)};
  --radius: ${pxToRem(210)};
  position: relative;
  width: var(--ring);
  height: var(--ring);
  max-width: 100%;
  margin: ${({ theme }) => `${theme.spacing(5)} auto 0`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    --ring: ${pxToRem(520)};
    --radius: ${pxToRem(176)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SustainabilityCycleTrackElement = styled.div`
  position: absolute;
  inset: 18%;
  pointer-events: none;
  color: ${({ theme }) => theme.color.steel};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  circle {
    fill: none;
    stroke: color-mix(in srgb, ${({ theme }) => theme.color.steel} 28%, transparent);
    stroke-width: 0.6;
  }

  circle.accent {
    stroke: ${({ theme }) => theme.color.brand.primary};
    stroke-width: 1.1;
    stroke-dasharray: 22 78;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const SustainabilityCycleHubElement = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: ${pxToRem(168)};
  height: ${pxToRem(168)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 38%, transparent);
  border-radius: ${({ theme }) => theme.radii.circle};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.color.background.secondary} 88%,
    ${({ theme }) => theme.color.brand.primary}
  );
  color: ${({ theme }) => theme.color.brand.primary};
  transform: translate(-50%, -50%);
  text-align: center;

  svg {
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    order: 2;
    width: 100%;
    height: auto;
    min-height: 0;
    margin-top: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
    border-radius: ${({ theme }) => theme.radii.small};
    flex-direction: row;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing(1.25)};
    text-align: left;
    transform: none;
  }
`;

export const SustainabilityCycleHubLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SustainabilityCycleRingElement = styled.ol`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    order: 1;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const SustainabilityCycleNodeElement = styled.li<{
  $index: number;
  $count: number;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxToRem(148)};
  text-align: center;
  transform: ${({ $index, $count }) => {
    const angle = ($index * 360) / $count;
    return `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--radius))) rotate(${-angle}deg)`;
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: left;
    transform: none;
    padding: ${({ theme }) =>
      `${theme.spacing(1.5)} 0 ${theme.spacing(1.5)} ${theme.spacing(2)}`};
    border-left: 2px solid
      color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 70%, transparent);
  }
`;

export const SustainabilityCycleNodeIndexElement = styled.span`
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.1em;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: ${({ theme }) => theme.spacing(1.5)};
  }
`;

export const SustainabilityCycleNodeLabelElement = styled.span`
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.color.text.light};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.02em;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;
