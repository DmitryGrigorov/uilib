import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IDateBoxProps } from "./types";

interface ITag extends Partial<IDateBoxProps> {
  theme: ITheme;
}

type TDateBoxComponentProps = Pick<
  ITag,
  "viewType" | "isDisabled" | "theme" | "size"
>;

export const DateBoxWrapper = styled.button<TDateBoxComponentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  cursor: pointer;
  border-radius: 8px;

  ${({ size }) => {
    if (size === "m") {
      return css`
        width: 24px;
        height: 24px;
      `;
    }
    return css`
      width: 32px;
      height: 32px;
    `;
  }}

  ${({ viewType, theme }) => {
    switch (viewType) {
      case "current":
        return css`
          color: ${theme.colors.textColoredOrange};
        `;
      case "selected":
        return css`
          background: ${theme.colors.orange4};
          color: ${theme.colors.textBasicPressed};
        `;
      case "start":
        return css`
          padding-left: 2px;
          background: linear-gradient(
            to right,
            ${theme.colors.orange4} 87.5%,
            ${theme.colors.orange2} 0%
          );
          color: ${theme.colors.textBasicPressed};
        `;
      case "in":
        return css`
          background: ${theme.colors.orange4};
          color: ${theme.colors.textBasicPressed};
        `;
      case "finish":
        return css`
          padding-right: 2px;
          background: linear-gradient(
            to right,
            ${theme.colors.orange2} 12.5%,
            ${theme.colors.orange4} 0%
          );
          color: ${theme.colors.textBasicPressed};
        `;
      case "weekend":
        return css`
          color: ${theme.colors.red7};
        `;
      default:
        return css`
          color: ${theme.colors.textBasicPressed};
          &:hover {
            background: ${theme.colors.overlay2};
            color: ${theme.colors.textBasicPressed};
          }
        `;
    }
  }}  
  ${({ theme }) => css`
    &:disabled {
      background: ${theme.colors.neutral1};
      color: ${theme.colors.textBasicDisabled};
      cursor: not-allowed;
    }
  `}
`;

DateBoxWrapper.defaultProps = {
  theme: LIGHT_THEME
};
