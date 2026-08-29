import styled from "styled-components";

export const ShellLayoutElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
`;

export const ShellContentElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  padding-top: ${({ theme }) =>
    `calc(${theme.spacing(2)} * 2 + ${theme.spacing(8)})`};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    padding-top: ${({ theme }) =>
      `calc(${theme.spacing(2)} * 2 + ${theme.spacing(6)})`};
  }
`;
