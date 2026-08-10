import styled, { css, DefaultTheme } from "styled-components";
import { IconArrowLeft1, IconArrowRight1 } from "@dmitrygrigorov/icons";
import { Shape } from "../Pallette/Shape";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";

import { IStylesProps } from "./interfaces";

export const CalendarRoot = styled.section<IStylesProps>`
  position: relative;
  padding: 16px;
  width: 320px;

  ${({ theme }: IStylesProps) => css`
    background: ${theme.colors.backgroundTetriary0};
    border-radius: ${Shape.borderRadiusMedium};
    ${theme.shadows.sp.bottom};
  `}
`;

CalendarRoot.defaultProps = {
  theme: LIGHT_THEME
};

// Header Styles
export const HeaderContainer = styled.div<IStylesProps>`
  position: relative;
  display: flex;
  user-select: none;
  height: 28px;
`;

export const HeaderWrapper = styled.header<{ isMonthEditing?: boolean }>`
  height: 32px;
  margin-bottom: 16px;
  justify-content: ${({ isMonthEditing }) =>
    isMonthEditing ? "center" : "space-between"};
  align-items: center;
  position: relative;
  display: flex;
  user-select: none;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 4px;
  border-radius: ${({ theme }) => theme.shape.borderRadiusDefault};
  :hover {
    background-color: ${({ theme }) => theme.colors.overlay2};
    svg {
      color: ${({ theme }) => theme.colors.textBasicHover};
    }
  }
  :active {
    background: inherit;
    svg {
      color: ${({ theme }) => theme.colors.componentPrimaryOrangePressed};
    }
  }
`;

ArrowsContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const BtnBase = styled.button<IStylesProps>`
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;

  & + & {
    margin: 0 0 0 48px;
  }
  background: transparent;

  ${({ theme }: IStylesProps) => css`
    color: ${theme.colors.componentPrimaryOrangeDefault};

    &:hover {
      color: ${theme.colors.componentPrimaryOrangeHover};
    }
  `}
`;

BtnBase.defaultProps = {
  theme: LIGHT_THEME
};

export const MonthBtn = styled(BtnBase)<IStylesProps>`
  background: transparent;

  ${({ offset }: IStylesProps) => css`
    opacity: ${offset ? "0" : "1"};
    ${offset && "pointer-events: none;"}
  `}
`;

export const YearBtn = styled(BtnBase)<IStylesProps>`
  height: 28px;
  flex-shrink: 0;
  ${({ offset }: IStylesProps) => css`
    transform: translateX(-${offset && offset - 14}px);
  `}
`;

export const ArrowIconStyles = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${theme.colors.textBasicDefault};

    &:hover {
      color: ${theme.colors.textBasicHover};
    }
  `}

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ArrowLeft = styled(IconArrowLeft1)`
  ${ArrowIconStyles};
`;

ArrowLeft.defaultProps = {
  theme: LIGHT_THEME
};

export const ArrowRight = styled(IconArrowRight1)`
  ${ArrowIconStyles};
`;

ArrowRight.defaultProps = {
  theme: LIGHT_THEME
};

// Months & Dates Styles
export const MonthsContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const MonthItem = styled.li<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  height: 40px;
  width: 33.33%;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s ease-out;

  ${({ theme }: IStylesProps) => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.fontSizeM};
    line-height: ${theme.typography.lineHeightXs};
  `}

  ${({ theme, isActive, isDisabled }: IStylesProps) => {
    if (isDisabled) {
      return css`
        color: ${theme.colors.textBasicDisabled};
        background: transparent;
        pointer-events: none;
        cursor: default;
      `;
    } else if (isActive) {
      return css`
        color: ${theme.colors.textColoredOrange};
        background: ${theme.colors.backgroundSecondaryOrange};
        cursor: pointer;
      `;
    } else {
      return css`
        color: ${theme.colors.textBasicPressed};
        background: transparent;
        cursor: pointer;
      `;
    }
  }}
`;

MonthItem.defaultProps = {
  theme: LIGHT_THEME
};

export const YearsContainer = styled(MonthsContainer)`
  display: flex;
`;

export const YearItem = styled(MonthItem)`
  width: 33.33%;
`;

// Calendar Styles
export const CalendarContainer = styled.section`
  display: block;
`;

export const WeekContainer = styled.ul`
  margin: 0 0 8px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const DividerCalendarCurrenDay = styled.div<IStylesProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 0;
    flex-grow: 1;
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textColoredOrange};
  }
`;

DividerCalendarCurrenDay.defaultProps = {
  theme: LIGHT_THEME
};

export const DaysItem = styled.li<IStylesProps>`
  position: relative;
  margin: 0 4px 8px 0;
  padding: 4px 4px 4px 5px;
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.4s ease-out;

  ${({
    theme,
    isDisabled,
    isActive,
    isInRange,
    isRangeStart,
    isDiffMonth,
    isRangeEnd,
    isOuterItem,
    isToday
  }: IStylesProps) => css`
    &:nth-child(7n),
    &:nth-child(7n - 1),
    &:last-child {
      color: ${() => {
        if (isActive || isRangeStart || isRangeEnd || isInRange) {
          return theme.colors.textBasicPressed;
        } else if (isDisabled || isDiffMonth) {
          return theme.colors.textBasicDisabled;
        }
        return theme.colors.red7;
      }};
    }

    ${!isOuterItem && "border-radius: 8px;"};
    ${
      isInRange &&
      css`
        &:before {
          position: absolute;
          left: -18px;
          width: calc(100% + 40px);
          height: 32px;
          content: "";
          z-index: -1;
          top: 0;
        }

        &:nth-child(7n) {
          &:before {
            width: calc(100% + 18px);
          }
        }

        &:nth-child(7n + 1),
        &:last-child {
          &:before {
            left: 0;
            width: calc(100% + 18px);
          }
        }
      `
    };

    background: ${getDayBackGroundColor(
      theme,
      isActive,
      isDisabled,
      isDiffMonth,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isToday
    )};
    color: ${getDayColor(
      theme,
      isActive,
      isDisabled,
      isDiffMonth,
      isRangeStart,
      isRangeEnd,
      isInRange,
      isToday
    )};
    cursor: ${isDisabled || isActive || isOuterItem ? "default" : "pointer"};

    ${
      isRangeStart &&
      css`
        &:before {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          border-radius: 0 8px 8px 0;
          height: 100%;
          content: "";
          background: ${theme.colors.orange2};
          z-index: 0;
        }
      `
    };

    ${
      isRangeEnd &&
      css`
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          border-radius: 8px 0 0 8px;
          height: 100%;
          content: "";
          background: ${theme.colors.orange2};
          z-index: 0;
        }
      `
    };

    ${
      !isDisabled &&
      !isActive &&
      !isOuterItem &&
      css`
        &:hover {
          background: ${theme.colors.overlay2};
          color: ${theme.colors.textBasicPressed};
        }
      `
    };
  `}
`;

DaysItem.defaultProps = {
  theme: LIGHT_THEME
};

export const WeekItem = styled.li<IStylesProps>`
  padding: 4px 4px 4px 5px;
  width: 36px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  user-select: none;

  &:nth-child(7n),
  &:nth-child(7n - 1),
  &:last-child {
    color: ${({ theme }) => theme.colors.textColoredRed};
  }

  ${({ theme }: IStylesProps) => css`
    color: ${theme.colors.textBasicDefault};
    text-transform: uppercase;
  `}
`;

WeekItem.defaultProps = {
  theme: LIGHT_THEME
};

export const ButtonContainer = styled.div<IStylesProps>`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

ButtonContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const DaysContainer = styled.ul`
  position: relative;
  z-index: 0;
  margin: 0 -4px -8px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;

  & + button {
    margin-top: 24px;
  }
`;

const getDayColor = (
  theme: ITheme,
  isActive?: boolean,
  isDisabled?: boolean,
  isDiffMonth?: boolean,
  isRangeStart?: boolean | null,
  isRangeEnd?: boolean | null,
  isInRange?: boolean | null,
  isToday?: boolean
): string => {
  if (isActive || isRangeStart || isRangeEnd) {
    return theme.colors.textBasicPressed;
  } else if (isInRange) {
    return theme.colors.textBasicPressed;
  } else if (isDisabled) {
    return theme.colors.textBasicDisabled;
  } else if (isDiffMonth) {
    return theme.colors.textBasicDisabled;
  } else if (isToday) {
    return theme.colors.textColoredOrange;
  } else {
    return theme.colors.textBasicPressed;
  }
};

const getDayBackGroundColor = (
  theme: ITheme,
  isActive?: boolean,
  isDisabled?: boolean,
  isDiffMonth?: boolean,
  isInRange?: boolean | null,
  isRangeStart?: boolean | null,
  isRangeEnd?: boolean | null,
  isToday?: boolean
): string => {
  if (isActive || isRangeStart || isRangeEnd) {
    return theme.colors.orange4;
  } else if (isInRange) {
    return theme.colors.orange2;
  } else if (isDisabled) {
    return theme.colors.neutral1;
  } else if (isDiffMonth) {
    return "";
  } else if (isToday) {
    return "transparent";
  } else {
    return "transparent";
  }
};
