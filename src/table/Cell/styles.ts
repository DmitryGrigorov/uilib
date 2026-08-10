import styled, { css } from "styled-components";
import { ellipsis } from "polished";
import { Padding, LIGHT_THEME } from "@dmitrygrigorov/components";
import { ICellStyledProps } from "./types";

export const CellStyled = styled.td<ICellStyledProps>`
  ${({ size }) => {
    if (size === "m") {
      return Padding.allSide(3, 4);
    } else if (size === "s") {
      return Padding.allSide(2, 4);
    }
    return Padding.allSide(4);
  }};
  color: ${({ theme }) => theme.colors.textBasicPressed};
  ${({ isEdit, theme }) =>
    isEdit &&
    css`
      border-bottom: 1px solid ${theme.colors.textColoredOrange};
    `}
`;

CellStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const CellTitleStyled = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  span {
    ${({ width }) =>
      width &&
      css`
        ${ellipsis(width)};
        vertical-align: middle;
      `};
  }
`;
