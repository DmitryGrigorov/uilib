import styled, { css } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { IMapObjectProps, TMapObjectType } from "./types";

interface IMapObject extends Partial<IMapObjectProps> {
  theme: ITheme;
  typeColor: TMapObjectType;
}

export const StripeStyled = styled.div<Pick<IMapObject, "isChecked">>`
  position: absolute;
  border-radius: 2px;
  width: 12px;
  transition: all 0.3s;
  ${({ isChecked }) => {
    if (isChecked) {
      return css`
        height: 2px;
      `;
    } else {
      return css`
        height: 0;
      `;
    }
  }}

  bottom: 8px;
`;
const defineColor = (
  theme: ITheme | any,
  typeColor: TMapObjectType,
  type: string
): string => {
  switch (typeColor) {
    case "positive":
      return theme.colors[`componentPrimaryTeal${type}`];
    case "warning":
      return theme.colors[`componentPrimaryAmber${type}`];
    case "danger":
      return theme.colors[`componentPrimaryRed${type}`];
    default:
      return theme.colors.componentPrimaryOrangeDefault;
  }
};
export const MapObjectRoot = styled.div<
  Pick<IMapObject, "theme" | "isChecked" | "isDisabled" | "typeColor">
>`
  position: relative;
  border-radius: 8px 8px 8px 0;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  flex-direction: column;
  border: none;
  cursor: pointer;
  padding: 8px;

  background: ${({ theme, typeColor, isDisabled, isChecked }) => {
    if (isDisabled) {
      return theme.colors.neutral3;
    } else if (isChecked) {
      return defineColor(theme, typeColor, "Pressed");
    } else {
      return defineColor(theme, typeColor, "Default");
    }
  }};

  ${({ theme, typeColor, isDisabled }) => css`
    & ${StripeStyled} {
      background: ${theme.colors.textBasicExtra};
    }
    & svg {
      color: ${
        isDisabled
          ? theme.colors.textBasicDisabled
          : theme.colors.textBasicExtra
      };
    }

    &:hover {
      background: ${defineColor(theme, typeColor, "Hover")};

      ${
        isDisabled &&
        css`
          pointer-events: none;
        `
      }
    }
  `}

  ${({ isChecked }) =>
    isChecked &&
    css`
      height: 42px;
    `}
`;

MapObjectRoot.defaultProps = {
  theme: LIGHT_THEME
};
