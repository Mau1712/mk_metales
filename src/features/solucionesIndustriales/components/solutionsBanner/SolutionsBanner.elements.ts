import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export const SolutionsBannerElement = styled.figure`
  width: 100%;
  margin: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background.primary};
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  line-height: 0;
`;

export const SolutionsBannerImageElement = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: ${pxToRem(480)};
  object-fit: cover;
  object-position: center;
`;
