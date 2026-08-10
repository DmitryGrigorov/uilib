import styled, { css } from "styled-components";
import Input from "../Input";
import { IInputProps } from "../Input/interfaces";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";

interface IInputColorComponent extends Partial<IInputProps> {
  theme: ITheme;
  isReadonly: boolean;
}

interface IColorPickerWrapper {
  left: number;
  top: number;
}

export const InputColorComponent = styled(Input)<IInputColorComponent>`
  ${({ isReadonly }) => {
    if (isReadonly) {
      return css`
        div {
          cursor: default;
        }
      `;
    }
    return "";
  }};
  ${({ isDisabled, isReadOnly }) =>
    (isDisabled || isReadOnly) &&
    css`
      button {
        cursor: not-allowed;
      }
    `};
`;

export const ColorButton = styled.button`
  width: 24px;
  height: 24px;
  background: ${({ color }): string =>
    !color || color.length < 7 ? "transparent" : color};
  border: 1px solid
    ${({ color, theme }): string => {
      if (!color || color.length < 7) {
        return theme.colors.neutral6;
      }
      return color;
    }};
  border-radius: 8px;
  cursor: pointer;
`;

export const InputColorWrapper = styled.div`
  display: block;
`;

export const ColorPickerWrapper = styled.div<IColorPickerWrapper>`
  ${({ left, top, theme }) => css`
    left: ${left}px;
    top: ${top}px;
    z-index: ${theme.zindex?.tooltip};
  `};
  position: absolute;
`;

ColorButton.defaultProps = {
  theme: LIGHT_THEME
};

ColorPickerWrapper.defaultProps = {
  theme: LIGHT_THEME
};

InputColorComponent.defaultProps = {
  theme: LIGHT_THEME
};
