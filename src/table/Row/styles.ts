import styled, { css } from "styled-components";
import { LIGHT_THEME } from "@dmitrygrigorov/components";
import { CellStyled } from "../Cell/styles";
import { IRowProps } from "./types";

export const RowStyled = styled.tr<
  Pick<IRowProps<any, any>, "isDividerRow" | "isSelected" | "isPinned">
>`
  ${({ isDividerRow, theme }) =>
    isDividerRow &&
    css`
      td {
        border-bottom: 1px solid ${theme.colors.neutral2};
      }
    `}
  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.backgroundSecondaryOrange};
      ${CellStyled}.pinning-cell {
        background: ${theme.colors.backgroundSecondaryOrange};
      }
    `}

  ${({ isPinned, theme }) =>
    isPinned &&
    css`
      background: ${theme.colors.backgroundSecondaryNeutral};
    `}
  
  &.row-nested-table > td {
    padding: 16px 0 16px 64px;
  }

  :not(.row-nested-table):hover {
    background: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
  }
`;

RowStyled.defaultProps = {
  theme: LIGHT_THEME
};
