import styled, { css } from "styled-components";
import { CellStyled } from "../../styles";

export const ArrowCellStyled = styled(CellStyled)<{ isCollapsed?: boolean }>`
  padding: 8px 16px;
  button {
    padding: 4px;
  }
  .lead-icon {
    transition: all 0.3s;
  }
  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      .lead-icon {
        transform: rotate(90deg);
      }
    `}
`;
