import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { IProgressBarProps, TProgressBarSize } from "./types";

export const ProgressBarBase = styled.div<Pick<IProgressBarProps, "variant">>`
  width: 100%;
  .background {
    ${({ theme, variant }) => {
      switch (variant) {
        default:
          return css`
            background-color: ${theme.colors.orange2};
          `;
        case "success":
          return css`
            background-color: ${theme.colors.teal2};
          `;
        case "warning":
          return css`
            background-color: ${theme.colors.amber2};
          `;
        case "error":
          return css`
            background-color: ${theme.colors.red2};
          `;
      }
    }}
  }
  .filler {
    ${({ theme, variant }) => {
      switch (variant) {
        default:
          return css`
            background-color: ${theme.colors.orange7};
          `;
        case "success":
          return css`
            background-color: ${theme.colors.teal7};
          `;
        case "warning":
          return css`
            background-color: ${theme.colors.amber7};
          `;
        case "error":
          return css`
            background-color: ${theme.colors.red7};
          `;
      }
    }}
  }
  .progress-text {
    ${({ theme }) => css`
      color: ${theme.colors.textBasicPressed};
      padding-right: 4px;
      display: flex;
      align-items: center;
      justify-content: end;
      flex: 0 0 44px;
    `}
  }
`;

ProgressBarBase.defaultProps = {
  theme: LIGHT_THEME
};

export const ProgressBarStyle = styled.div<{ size?: TProgressBarSize }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  padding: 0;
  height: ${({ size }) => (size === "m" ? 16 : 8)}px;

  .background {
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;

export const Filler = styled.div<Pick<IProgressBarProps, "progress">>`
  width: ${({ progress }) => progress}%;
  transition: all 0.2s linear;
  height: 100%;
`;
