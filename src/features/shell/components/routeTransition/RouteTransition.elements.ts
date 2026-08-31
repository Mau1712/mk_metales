import styled, { keyframes } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

const enterPage = keyframes`
  from {
    opacity: 0;
    transform: translateY(${pxToRem(8)});
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface RouteTransitionElementProps {
  $animate: boolean;
}

export const RouteTransitionElement = styled.div<RouteTransitionElementProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  animation: ${({ $animate }) =>
    $animate ? enterPage : "none"}
    ${({ theme }) => theme.transitions.slow} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
