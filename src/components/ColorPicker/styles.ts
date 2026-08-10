import styled from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IColorPickerProps } from "./types";

interface IColorPicker extends Partial<IColorPickerProps> {
  theme: ITheme;
}

type TColorPickerComponentProps = Pick<IColorPicker, "isInput" | "theme"> & {
  isLastColors: boolean;
};

type TSelectedColorProps = Pick<IColorPicker, "theme"> & {
  hex: string;
};

export const ColorPickerComponent = styled.div<TColorPickerComponentProps>`
  width: 320px;
  height: 244px;
  background-color: ${({ theme }) => theme.colors.neutral0};
  ${({ theme }) => theme.shadows.sp.bottom};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    height: 100%;
    width: 100%;
  }

  & > div > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .color-picker-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 100%;
  }
`;

export const SelectedColor = styled.div<TSelectedColorProps>`
  border-radius: 8px;
  height: 100%;
  width: 60px;
  min-width: 60px;
  background: ${({ hex }) => hex};
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
`;

export const UsedColors = styled.div`
  height: 100%;
  width: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .used-colors-list {
    min-height: 132px;
    width: 56px;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 12px 8px;
    flex-wrap: wrap;
  }

  .used-colors-list > button {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }
`;

ColorPickerComponent.defaultProps = {
  theme: LIGHT_THEME
};

SelectedColor.defaultProps = {
  theme: LIGHT_THEME
};
