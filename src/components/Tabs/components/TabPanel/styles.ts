import styled, { css } from "styled-components";

export const TabPanelStyled = styled.div<{ isHidden: boolean }>`
  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `};
`;
