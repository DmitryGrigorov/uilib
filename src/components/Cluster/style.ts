import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IClusterProps } from "./types";

interface ICluster extends Partial<IClusterProps> {
  theme: ITheme;
}

type TClusterComponentProps = Pick<
  ICluster,
  "isDisabled" | "theme" | "isPressed"
>;

export const ClusterStyled = styled.div<TClusterComponentProps>`
  position: relative;
  border-radius: 8px 8px 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 45px;
  flex-direction: column;
  padding: 4px;
  user-select: none;

  ${({ isDisabled, theme, isPressed }) => {
    if (isDisabled) {
      return css`
        pointer-events: none;
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicDisabled};
      `;
    } else if (isPressed) {
      return css`
        background: ${theme.colors.neutral5};
        color: ${theme.colors.textBasicDefault};
      `;
    }
    return css`
      background: ${theme.colors.neutral0};
      color: ${theme.colors.textBasicPressed};
    `;
  }}

  &:hover {
    ${({ theme, isDisabled }) =>
      !isDisabled &&
      css`
        background: ${theme.colors.neutral6};
        color: ${theme.colors.textBasicHover};
        cursor: pointer;
      `}
  }
`;

ClusterStyled.defaultProps = {
  theme: LIGHT_THEME
};
