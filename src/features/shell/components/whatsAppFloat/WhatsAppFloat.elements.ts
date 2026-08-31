import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export const WhatsAppFloatElement = styled.a`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    right: max(
      ${({ theme }) => theme.spacing(2)},
      env(safe-area-inset-right, 0px)
    );
    bottom: calc(
      ${({ theme }) => theme.spacing(2.5)} + env(safe-area-inset-bottom, 0px)
    );
    z-index: ${({ theme }) => theme.zIndex.floating};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing(7)};
    height: ${({ theme }) => theme.spacing(7)};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme }) => theme.color.brand.primary};
    color: ${({ theme }) => theme.color.text.light};
    box-shadow: ${({ theme }) => theme.shadows.large};

    svg {
      width: ${pxToRem(28)};
      height: ${pxToRem(28)};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.brand.primary};
      outline-offset: 3px;
    }

    @media (hover: hover) {
      &:hover {
        background: ${({ theme }) => theme.color.button.primary.hover};
      }
    }
  }
`;
