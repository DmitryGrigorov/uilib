import styled, { css } from "styled-components";
import { Padding } from "../Pallette/style-utils";
import { Shape } from "../Pallette/Shape";
import P2 from "../typography/P2";
import { TP2FontType } from "../typography/P2/types";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { TListSize } from "./types";

export interface IListBaseItemStyledProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  size?: TListSize;
  theme: ITheme;
  type?: TP2FontType;
}

export const ListBaseItemStyled = styled(P2)<IListBaseItemStyledProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow-wrap: break-word;
  border-radius: ${Shape.borderRadiusMedium};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  ${({ size }) => {
    if (size === "m") {
      return css`
        height: 48px;
        padding: 8px 16px;
      `;
    }
    if (size === "s") {
      return css`
        height: 32px;
        padding: 0px 4px;
      `;
    }
    return css`
      height: 56px;
      padding: 12px 16px;
    `;
  }}

  p, h6 {
    ${Padding.allSide(1)}
  }

  ${({ theme, isSelected, isDisabled }) => {
    if (isDisabled) {
      return css`
        background: ${theme.colors.backgroundSecondaryNeutral};
        color: ${theme.colors.textBasicDisabled};
      `;
    }
    if (isSelected) {
      return css`
        background: ${theme.colors.backgroundSecondaryOrange};
        color: ${theme.colors.textBasicPressed};
      `;
    }
    return css`
      background: ${theme.colors.backgroundSecondaryNeutral};
      color: ${theme.colors.textBasicDefault};

      &:hover {
        svg {
          color: ${theme.colors.textBasicHover};
        }
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicHover};
      }
    `;
  }};
`;

ListBaseItemStyled.defaultProps = {
  theme: LIGHT_THEME
};
