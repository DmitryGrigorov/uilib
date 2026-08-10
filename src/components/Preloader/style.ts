import styled, { keyframes, css } from "styled-components";
import { Margin, Padding } from "../Pallette/style-utils";
import { LIGHT_THEME } from "../Pallette/themes";
import { IPreloaderProps } from "./types";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PreloaderBase = styled.div<
  Pick<IPreloaderProps, "isShowLabel" | "width" | "height">
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  ${Margin.allSide(6, 0)};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};

  svg {
    width: ${({ isShowLabel }) => (isShowLabel ? "15px" : "20px")};
    height: ${({ isShowLabel }) => (isShowLabel ? "19px" : "20px")};
    display: flex;
    color: ${({ theme }) => theme.colors.orange7};
    animation: ${spinner} 1s linear infinite;
  }

  .progressbar {
    margin-top: ${({ isShowLabel }) => (isShowLabel ? "0.4px" : "6px")};
    justify-content: center;
    align-items: center;
  }
`;

PreloaderBase.defaultProps = {
  theme: LIGHT_THEME
};

export const ProgressBarStyle = styled.div`
  width: 40px;
  height: 2px;
  display: flex;
  flex-direction: row;
  ${Padding.allSide(0)};
  background: ${({ theme }) => theme.colors.orange2};
`;
ProgressBarStyle.defaultProps = {
  theme: LIGHT_THEME
};
export const Filler = styled.div<Pick<IPreloaderProps, "progress">>`
  width: ${({ progress }) => progress}%;
  transition: all 0.2s linear;
  height: 100%;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.orange7};
`;
Filler.defaultProps = {
  theme: LIGHT_THEME
};
export const Label = styled.label`
  font-weight: 400;
  line-height: 16px;
  font-size: 12px;
  height: 16px;
  ${Margin.allSide(1, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  ${Padding.allSide(1)};
  color: ${({ theme }) => theme.colors.textBasicDefault};
`;

Label.defaultProps = {
  theme: LIGHT_THEME
};
