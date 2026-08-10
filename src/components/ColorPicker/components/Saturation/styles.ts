import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

interface ISaturation {
  theme: ITheme;
  hue: number;
}

interface IPointButton {
  left: number;
  top: number;
  hex: string;
}

export const Saturation = styled.div<ISaturation>`
  position: relative;
  width: 100%;
  min-width: 212px;
  padding: 5px;
  height: 100%;
  min-height: 100px;
  border-radius: 8px;
  background-color: ${({ hue }) => `hsl(${hue}, 100%, 50%)`};
  background-image:
    linear-gradient(0deg, #000000, transparent),
    linear-gradient(90deg, #ffffff, hsla(0, 0%, 100%, 0));

  & button {
    position: absolute;
    width: 11.56px;
    height: 11.56px;
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.colors.neutral0};
    border-radius: 50%;
    cursor: pointer;
    ${({ theme }) => theme.shadows.tp.bottom};
  }
`;

export const PointButton = styled.button<IPointButton>`
  ${({ hex, left, top }) => css`
    background: ${hex};
    left: calc(${left * 100}% - 5px);
    top: calc(${-(top * 100) + 100}% - 5px);
  `}
`;

export const SaturationActiveBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

Saturation.defaultProps = {
  theme: LIGHT_THEME
};
