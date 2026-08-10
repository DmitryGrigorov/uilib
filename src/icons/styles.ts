import styled, { css } from "styled-components";

export const IconStyled = styled.span`
  display: flex;
  ${({ theme }) =>
    theme &&
    theme.colorIcon &&
    css`
      color: ${theme.colorIcon};
    `}
`;
