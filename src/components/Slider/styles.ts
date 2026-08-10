import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import Tag from "../Tag";
import {
  ISliderProps,
  TSliderSize,
  TSliderDirection,
  TSliderStatus
} from "./types";

export const TagStyled = styled(Tag)<{
  sizeSlider: TSliderSize;
  direction: TSliderDirection;
}>`
  position: absolute;
  z-index: 3;
  transition: none;
  user-select: none;

  ${({ direction, sizeSlider }) =>
    direction === "horizontal"
      ? css`
          margin-top: ${sizeSlider === "m" ? 20 : 11}px;
          margin-left: -11px;
        `
      : css``};
`;

export const SliderWrapper = styled.div<
  Pick<ISliderProps, "direction" | "width" | "height" | "size">
>`
  padding: ${({ size }) =>
    size === "m" ? "12px 8px 8px 8px" : "10px 4px 4px 4px"};
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ direction, height, width }) =>
    direction === "horizontal"
      ? css`
          width: ${width || "100%"};
          ${
            height &&
            css`
              height: ${height};
            `
          };
          min-width: 150px;
        `
      : css`
          height: ${height || "100%"};
          max-width: 100%;
          ${
            width &&
            css`
              width: ${width};
            `
          }
        `}

  .sliders_control {
    position: relative;
    ${({ direction, size }) =>
      direction === "horizontal"
        ? css`
            height: ${size === "m" ? 8 : 4}px;
          `
        : css`
            height: 100%;
          `}
  }

  #fromSlider {
    height: 0;
    z-index: 1;
    margin-top: ${({ size }) => (size === "m" ? 4 : 2)}px;
  }
`;

const defineBackgroundColor = (
  theme: ITheme | any,
  status: TSliderStatus,
  state: string
): string => {
  switch (status.toLocaleLowerCase()) {
    case "success":
      return theme.colors[`componentPrimaryTeal${state}`];
    case "error":
      return theme.colors[`componentPrimaryRed${state}`];
    case "warning":
      return theme.colors[`componentPrimaryAmber${state}`];
    default:
      return theme.colors[`componentPrimaryBlue${state}`];
  }
};

export const SliderInputStyled = styled.input<
  Required<Pick<ISliderProps, "status" | "direction"> & { sizeS: TSliderSize }>
>`
  -webkit-appearance: none;
  appearance: none;
  height: ${({ sizeS }) => (sizeS === "m" ? 8 : 4)}px;
  width: 100%;
  position: absolute;
  pointer-events: none;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral2};
  `}

  ${({ direction }) =>
    direction === "vertical" &&
    css`
      transform: rotate(-90deg) translateX(-96%) translateY(40px);
      transform-origin: left;
    `};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    ${({ sizeS }) =>
      sizeS === "m"
        ? css`
            width: 16px;
            height: 16px;
          `
        : css`
            width: 10px;
            height: 10px;
          `}
    ${({ theme, status }) => css`
      background-color: ${defineBackgroundColor(theme, status, "Default")};
      border: 2px solid ${theme.colors.neutral0};
    `};
    border-radius: 6px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    ${({ sizeS }) =>
      sizeS === "m"
        ? css`
            width: 12px;
            height: 12px;
          `
        : css`
            width: 8px;
            height: 8px;
          `}
    ${({ theme, status }) => css`
      background-color: ${defineBackgroundColor(theme, status, "Default")};
      border: 2px solid ${theme.colors.neutral0};
    `};
    border-radius: 4px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb:hover {
    ${({ theme, status }) => css`
      background-color: ${defineBackgroundColor(theme, status, "Hover")};
    `};
  }

  &::-webkit-slider-thumb:active {
    ${({ theme, status }) => css`
      background-color: ${defineBackgroundColor(theme, status, "Pressed")};
    `};
  }

  &:disabled {
    &::-webkit-slider-thumb {
      background-color: ${({ theme }) =>
        theme.colors.componentSecondaryNeutralPressed};
    }

    &::-moz-range-thumb {
      background-color: ${({ theme }) =>
        theme.colors.componentSecondaryNeutralPressed};
    }
  }
`;
SliderInputStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const SliderLeadTextWrapper = styled.div<{ size: TSliderSize }>`
  margin-bottom: ${({ size }) => (size === "m" ? "16" : "10")}px;
  display: flex;
  width: 100%;

  color: ${({ theme }) => theme.colors.textBasicDefault};

  .slider__lead-text {
    margin-right: 8px;
  }

  .slider__trail-text {
    margin-right: 0;
    margin-left: auto;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

SliderLeadTextWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const SliderTrailTextWrapper = styled.div<{
  direction: TSliderDirection;
  size: TSliderSize;
}>`
  margin-bottom: ${({ size }) => (size === "m" ? "16" : "10")}px;
  display: flex;
  width: 100%;
  justify-content: ${({ direction }) =>
    direction === "horizontal" ? "right" : "flex-start"};

  color: ${({ theme }) => theme.colors.textBasicDefault};

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

SliderTrailTextWrapper.defaultProps = {
  theme: LIGHT_THEME
};
