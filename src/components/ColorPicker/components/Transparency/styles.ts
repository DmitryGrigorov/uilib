import styled, { css } from "styled-components";
import { ColorLine } from "../Hue/styles";
import { RGB } from "../../../utils/colorConvectors/types";
import { LIGHT_THEME } from "../../../Pallette/themes";

interface ITransparencyLine {
  colorRgb: RGB;
}

interface IPointButton {
  colorRgb: RGB;
  alpha: number;
}

export const TransparencyLine = styled(ColorLine)<ITransparencyLine>`
  ${({ theme }) => css`
    background: repeating-conic-gradient(
        ${theme.colors.neutral1} 0% 25%,
        ${theme.colors.neutral0} 0% 50%
      )
      50% / 10px 10px;

    & > button {
      background: repeating-conic-gradient(
          ${theme.colors.neutral1} 0% 25%,
          ${theme.colors.neutral0} 0% 50%
        )
        50% / 8px 12px;
    }
  `}
  background-position-x: 9px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 8px;
    ${({ colorRgb }) => css`
      background: linear-gradient(
        90deg,
        rgba(255, 33, 2, 0) 0%,
        rgb(${Object.values(colorRgb).join(",")}) 100%
      );
    `}
  }
`;

export const PointButton = styled.button<IPointButton>`
  ${({ colorRgb, alpha }) => css`
    box-shadow: inset 0 0 20px 0
      rgba(${Object.values(colorRgb).join(",")}, ${alpha});
    left: calc(${alpha * 100}% - 4px);
  `}
  z-index: 1;
`;

TransparencyLine.defaultProps = {
  theme: LIGHT_THEME
};
