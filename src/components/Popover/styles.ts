import styled, { css, RuleSet } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { BorderRadius } from "../Pallette/style-utils";
import { ZINDEX } from "../Pallette/ZIndex";
import {
  TDirection,
  IComponentSizeAndPosition
} from "../helpers/getPosition/types";
import { IPopoverProps } from "./types";

interface IPopover extends Partial<IPopoverProps> {
  theme: ITheme;
  isVisible: boolean;
  direction: TDirection;
  componentSizeAndPosition: IComponentSizeAndPosition;
  textContentSize: IComponentSizeAndPosition;
}

export const MARGIN = 15;

export const COMPONENT_NAME = "popover";

const getDirectionStyles = (
  direction: TDirection,
  componentSizeAndPosition: IComponentSizeAndPosition,
  textContentSize: IComponentSizeAndPosition,
  theme: ITheme
): RuleSet<object> => {
  switch (direction) {
    case "top":
      return css`
        left: ${
          componentSizeAndPosition.left +
          componentSizeAndPosition.width / 2 -
          textContentSize.width / 2
        }px;
        top: ${
          componentSizeAndPosition.top - MARGIN - textContentSize.height
        }px;
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
          transform: rotate(180deg);
        }
      `;
    case "bottom":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${
          componentSizeAndPosition.left +
          componentSizeAndPosition.width / 2 -
          textContentSize.width / 2
        }px;
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
        }
      `;
    case "right":
      return css`
        top: ${
          componentSizeAndPosition.height / 2 -
          textContentSize.height / 2 +
          componentSizeAndPosition.top
        }px;
        left: ${
          componentSizeAndPosition.left +
          MARGIN +
          componentSizeAndPosition.width
        }px;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
          transform: rotate(-90deg);
        }
      `;
    case "left":
      return css`
        left: ${
          componentSizeAndPosition.left - MARGIN - textContentSize.width
        }px;
        top: ${
          componentSizeAndPosition.height / 2 -
          textContentSize.height / 2 +
          componentSizeAndPosition.top
        }px;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
          transform: rotate(90deg);
        }
      `;
    case "bottomRight":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${componentSizeAndPosition.right - textContentSize.width}px;
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          right: 16px;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
        }
      `;
    case "bottomLeft":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${componentSizeAndPosition.left}px;
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 16px;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
        }
      `;
    case "topLeft":
      return css`
        top: ${
          componentSizeAndPosition.top - MARGIN - textContentSize.height
        }px;
        left: ${componentSizeAndPosition.left}px;
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 16px;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
          transform: rotate(180deg);
        }
      `;
    case "topRight":
      return css`
        top: ${
          componentSizeAndPosition.top - MARGIN - textContentSize.height
        }px;
        left: ${componentSizeAndPosition.right - textContentSize.width}px;
        &::after {
          content: "";
          position: absolute;
          top: 100%;
          right: 16px;
          border-width: 6px;
          border-style: solid;
          border-color: transparent transparent
            ${theme.colors.backgroundTetriary0} transparent;
          transform: rotate(180deg);
        }
      `;
    default:
      return css``;
  }
};

export const PopoverStyled = styled.div`
  display: inline-block;
  position: relative;
`;

export const PopoverContentWrapper = styled.div<
  Pick<
    IPopover,
    "direction" | "componentSizeAndPosition" | "textContentSize" | "theme"
  >
>`
  position: absolute;

  padding: 24px;
  width: 320px;
  display: flex;
  flex-direction: column;
  z-index: ${ZINDEX.tooltip};

  ${({ theme }) => css`
    background: ${theme.colors.backgroundTetriary0};
    .popoverHeader {
      color: ${theme.colors.textBasicPressed};
    }
    .popoverDescription {
      color: ${theme.colors.textBasicDefault};
    }
  `};

  ${({ theme }) => theme.shadows.hp.bottom};
  ${BorderRadius.roundBorder("16px")}
  ${({ direction, componentSizeAndPosition, textContentSize, theme }) =>
    getDirectionStyles(
      direction,
      componentSizeAndPosition,
      textContentSize,
      theme
    )};
  opacity: 0;

  .buttonHolder {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
  }
  .popoverHeader {
    display: flex;
    span {
      overflow-wrap: break-word;
    }
    width: 280px;
    flex-direction: column;
    gap: 8px;
  }

  &.Popover-content {
    &-enter {
      opacity: 0;
    }
    &-enter-done {
      opacity: 1;
    }
    &-exit {
      opacity: 1;
    }
    &-exit-active {
      opacity: 0;
    }
  }
`;

PopoverContentWrapper.defaultProps = {
  theme: LIGHT_THEME
};
