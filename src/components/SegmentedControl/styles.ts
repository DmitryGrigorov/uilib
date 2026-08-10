import styled, { css } from "styled-components";
import { P1 } from "../typography";
import { Shape } from "../Pallette/Shape";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { ISegmentedControlProps } from "./types";

interface ISegmentedControl extends Partial<ISegmentedControlProps> {
  theme: ITheme;
}
interface IBracket extends Partial<ISegmentedControl> {
  bracketPosition: { left: number; width: number } | any;
}
interface IControlItem {
  theme: ITheme;
  isDisabled: boolean | undefined;
  isPressed: boolean;
}

export const SegmentedControlWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const SegmentedControlBase = styled.div<ISegmentedControl>`
  width: 100%;
  z-index: 0;
  padding: 8px;
  display: flex;
  position: relative;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
  ${({ size }) => {
    switch (size) {
      case "l":
        return css`
          height: 72px;
          border-radius: 16px;
          ${Bracket} {
            border-radius: 16px;
            height: 56px;
          }
        `;
      case "m":
        return css`
          height: 64px;
          border-radius: 16px;
          ${Bracket} {
            border-radius: 16px;
            height: 48px;
          }
        `;
      case "s":
        return css`
          height: 48px;
          border-radius: 8px;
          ${Bracket} {
            border-radius: 8px;
            height: 32px;
          }
        `;
      case "xs":
        return css`
          height: 40px;
          border-radius: 8px;
          ${Bracket} {
            border-radius: 8px;
            height: 24px;
          }
        `;
    }
    return "";
  }}
`;

export const ControlItem = styled(P1)<IControlItem>`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  gap: 12px;
  line-height: 24px;
  padding: 4px 8px;
  min-width: 90px;
  width: 100%;
  vertical-align: middle;
  background-color: transparent;
  border-radius: ${Shape.borderRadiusMedium};
  ${({ theme, isPressed, isDisabled }) => {
    if (isDisabled) {
      return css`
        color: ${theme.colors.textBasicDisabled};
        cursor: not-allowed;
      `;
    } else if (isPressed) {
      return css`
        color: ${theme.colors.textBasicPressed};
      `;
    }
    return css`
      color: ${theme.colors.textBasicDefault};
      :hover {
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicHover};
      }
    `;
  }};
  z-index: 2;
  & > svg {
    color: currentColor;
  }
`;

export const Bracket = styled.div<IBracket>`
  z-index: 1;
  position: absolute;
  transition: left 0.3s;
  background-color: ${({ theme }) => theme.colors.neutral2};
  ${({ bracketPosition }) => css`
    left: ${bracketPosition.left}px;
    width: ${bracketPosition.width}px;
  `}
`;

SegmentedControlBase.defaultProps = {
  theme: LIGHT_THEME
};
ControlItem.defaultProps = {
  theme: LIGHT_THEME
};
Bracket.defaultProps = {
  theme: LIGHT_THEME
};
