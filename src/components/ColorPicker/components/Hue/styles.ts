import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

export interface IColorLine {
  theme: ITheme;
}

interface IPointButton {
  left: number;
  hue: number;
}

export const ColorLine = styled.div<IColorLine>`
  width: 100%;
  min-width: 212px;
  min-height: 8px;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
  border-radius: 8px;
  position: relative;

  & > button {
    position: absolute;
    width: 8px;
    height: 16px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.neutral0};
    ${({ theme }) => theme.shadows.tp.bottom};
    top: -3.6px;
    cursor: pointer;
  }
`;

export const PointButton = styled.button<IPointButton>`
  ${({ hue, left }) => css`
    left: calc(${left / 360}% - 4px);
    background: hsl(${hue}, 100%, 50%);
  `}
`;

ColorLine.defaultProps = {
  theme: LIGHT_THEME
};
