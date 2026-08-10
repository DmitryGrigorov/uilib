import styled, { css } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";
import { IPaginationProps } from "./types";

interface IStyledPaginationProps extends Partial<IPaginationProps> {
  theme: ITheme;
}

export const ELEMENTS_GAP = 8;
export const ELEMENT_WIDTH = 40;

export const PaginationContainer = styled.div<
  Pick<IStyledPaginationProps, "theme" | "width" | "isFill">
>`
  ${({ width }) => defineResponsibleWidth(width)};
  ${({ isFill, theme }) =>
    isFill &&
    css`
      background: ${theme.colors.backgroundSecondaryNeutral};
      border-radius: ${theme.shape.borderRadiusMedium};
    `}
`;

PaginationContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const PaginationHeader = styled.div<
  Pick<IStyledPaginationProps, "theme">
>`
  position: relative;
  padding: 8px;
  margin: 0;
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: ${ELEMENTS_GAP}px;

  user-select: none;

  .error-text {
    color: ${({ theme }) => theme.colors.textColoredRed};
  }
`;

PaginationHeader.defaultProps = {
  theme: LIGHT_THEME
};

export const PaginationConfiguration = styled.div`
  padding: 16px 8px;
`;

PaginationConfiguration.defaultProps = {
  theme: LIGHT_THEME
};

export const Dots = styled.div<
  Pick<IStyledPaginationProps, "theme" | "isDisabled">
>`
  line-height: 40px;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
  width: ${ELEMENT_WIDTH}px;
  height: 40px;
  color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.textBasicDisabled
      : theme.colors.textBasicPressed};
`;

Dots.defaultProps = {
  theme: LIGHT_THEME
};

export const MinimizedContainer = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export const ElementsContainer = styled.div`
  position: relative;
  padding: 0px ${ELEMENTS_GAP}px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: ${ELEMENTS_GAP}px;
  justify-content: center;
  overflow: hidden;
`;

ElementsContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const PageElement = styled.div<{
  isSelected: boolean;
  isDisabled?: boolean;
}>`
  position: relative;
  width: ${ELEMENT_WIDTH}px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  flex-shrink: 0;
  flex-grow: 0;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.backgroundSecondaryOrange : "transparent"};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.textColoredOrange
      : theme.colors.textBasicPressed};

  ${({ theme, isSelected, isDisabled = false }) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.colors.textBasicDisabled};
      `;
    } else {
      return css`
        &:hover {
          cursor: ${isSelected ? "default" : "pointer"};
          background-color: ${
            isSelected
              ? theme.colors.backgroundSecondaryOrange
              : theme.colors.overlay2
          };
        }
      `;
    }
  }}

  transition: background-color 0.2s;
`;

PageElement.defaultProps = {
  theme: LIGHT_THEME
};

export const TrailIcon = styled.div<
  Pick<IStyledPaginationProps, "theme" | "isDisabled">
>`
  padding: 8px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.textBasicDisabled
      : theme.colors.textBasicPressed};
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.colors.textBasicDisabled
        : theme.colors.textBasicPressed};
  }
`;

TrailIcon.defaultProps = {
  theme: LIGHT_THEME
};
