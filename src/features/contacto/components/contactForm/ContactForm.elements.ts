import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

const fieldControl = css`
  width: 100%;
  min-height: ${pxToRem(52)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.field};
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.3;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }

  &:hover:not(:disabled) {
    border-color: color-mix(
      in srgb,
      ${({ theme }) => theme.color.steel} 70%,
      transparent
    );
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.brand.primary};
    box-shadow: 0 0 0 3px
      color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 22%, transparent);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }

  &[aria-invalid="true"] {
    border-color: ${({ theme }) => theme.color.danger.default};
  }

  &:disabled {
    opacity: 0.64;
    cursor: not-allowed;
  }
`;

export const ContactFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  min-width: 0;
`;

export const ContactFormGridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(2.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ContactFormFieldElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 0;
`;

export const ContactFormLabelElement = styled.label`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: 0 0 ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.4;
`;

export const ContactFormOptionalElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const ContactFormInputElement = styled.input`
  ${fieldControl}
`;

export const ContactFormSelectWrapElement = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.spacing(1.75)};
    width: ${({ theme }) => theme.spacing(2.25)};
    height: ${({ theme }) => theme.spacing(2.25)};
    color: ${({ theme }) => theme.color.steel};
    pointer-events: none;
    transform: translateY(-50%) rotate(90deg);
  }
`;

export const ContactFormSelectElement = styled.select`
  ${fieldControl}
  appearance: none;
  padding-right: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;

  option {
    color: ${({ theme }) => theme.color.text.primary};
    background: ${({ theme }) => theme.color.white};
  }
`;

export const ContactFormWeightWrapElement = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;
  width: 100%;
`;

export const ContactFormWeightInputElement = styled.input`
  ${fieldControl}
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;

  &:focus,
  &:focus-visible {
    z-index: 1;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  appearance: textfield;
`;

export const ContactFormWeightUnitElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.spacing(7)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.field};
  border-left: 0;
  border-radius: ${({ theme }) =>
    `0 ${theme.radii.small} ${theme.radii.small} 0`};
  background: ${({ theme }) => theme.color.background.surface};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  ${ContactFormWeightInputElement}:focus + & {
    border-color: ${({ theme }) => theme.color.brand.primary};
  }

  ${ContactFormWeightInputElement}[aria-invalid="true"] + & {
    border-color: ${({ theme }) => theme.color.danger.default};
  }
`;

export const ContactFormTextareaElement = styled.textarea`
  ${fieldControl}
  min-height: ${pxToRem(168)};
  padding: ${({ theme }) => theme.spacing(2)};
  resize: vertical;
  line-height: 1.5;
`;

export const ContactFormMessageElement = styled.p`
  margin: ${({ theme }) => `${theme.spacing(0.75)} 0 0`};
  color: ${({ theme }) => theme.color.danger.default};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const ContactFormPhotosElement = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px dashed
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 42%, transparent);
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.background.surface};
`;

export const ContactFormPhotosTitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.4;
`;

export const ContactFormPhotosNoteElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const ContactFormErrorBannerElement = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.danger.soft.border};
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ theme }) => theme.color.danger.soft.background};
  color: ${({ theme }) => theme.color.danger.soft.text};

  strong,
  span {
    color: inherit;
    font-size: ${({ theme }) => theme.typography.fontSizes.normal};
    line-height: 1.45;
  }
`;

export const ContactFormActionsElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(1.25)};
`;

export const ContactFormSubmitElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${pxToRem(52)};
  padding: 0 ${pxToRem(22)};
  border: 1px solid ${({ theme }) => theme.color.button.primary.default};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.light};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.button.primary.hover};
    border-color: ${({ theme }) => theme.color.button.primary.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: wait;
    border-color: ${({ theme }) => theme.color.button.primary.disabled};
    background: ${({ theme }) => theme.color.button.primary.disabled};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const ContactFormHintElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  line-height: 1.5;
`;

export const ContactFormStatusElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.color.steel} 22%, transparent);
  border-left: 3px solid ${({ theme }) => theme.color.brand.primary};
`;

export const ContactFormStatusTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.25;
`;

export const ContactFormStatusDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  line-height: 1.55;
`;

export const ContactFormSuccessActionsElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-top: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`;

const successCtaBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(48)};
  padding: 0 ${pxToRem(22)};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const ContactFormSuccessLinkElement = styled(Link)<{
  $primary?: boolean;
}>`
  ${successCtaBase}
  border: 1px solid
    ${({ $primary, theme }) =>
      $primary
        ? theme.color.button.primary.default
        : `color-mix(in srgb, ${theme.color.text.primary} 28%, transparent)`};
  background: ${({ $primary, theme }) =>
    $primary ? theme.color.button.primary.default : "transparent"};
  color: ${({ $primary, theme }) =>
    $primary ? theme.color.text.light : theme.color.text.primary};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
    background: ${({ $primary, theme }) =>
      $primary
        ? theme.color.button.primary.hover
        : `color-mix(in srgb, ${theme.color.brand.primary} 8%, transparent)`};
    color: ${({ $primary, theme }) =>
      $primary ? theme.color.text.light : theme.color.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 3px;
  }
`;
