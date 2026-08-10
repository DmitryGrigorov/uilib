import styled, { css } from "styled-components";
import { LIGHT_THEME } from "@dmitrygrigorov/components";
import TableButton from "../../../components/TableButton";

export const TableButtonStyled = styled(TableButton)<{ isHover?: boolean }>`
  ${({ isPressed, isHover }) =>
    !isPressed &&
    !isHover &&
    css`
      visibility: hidden;
    `}
  ${({ theme, isPressed }) =>
    isPressed &&
    css`
      background: ${theme.colors.backgroundSecondaryOrange};
    `}
`;

TableButtonStyled.defaultProps = {
  theme: LIGHT_THEME
};
