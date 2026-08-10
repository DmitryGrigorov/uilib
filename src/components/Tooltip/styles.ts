import styled, { css, RuleSet } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { ZINDEX } from "../Pallette/ZIndex";
import { TDirection } from "../helpers/getPosition/types";
import P1 from "../typography/P1";
import { ITooltipProps, IComponentSizeAndPosition } from "./types";

interface ITooltip extends Partial<ITooltipProps> {
  theme: ITheme;
  isVisible: boolean;
  direction: TDirection;
  componentSizeAndPosition: IComponentSizeAndPosition;
  textContentSize: IComponentSizeAndPosition;
}

export const MARGIN = 15;

export const COMPONENT_NAME = "tooltip";

const getDirectionStyles = (
  direction: TDirection,
  componentSizeAndPosition: IComponentSizeAndPosition,
  textContentSize: IComponentSizeAndPosition
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
      `;
    case "bottom":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${
          componentSizeAndPosition.left +
          componentSizeAndPosition.width / 2 -
          textContentSize.width / 2
        }px;
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
      `;
    case "bottomRight":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${componentSizeAndPosition.right - textContentSize.width}px;
      `;
    case "bottomLeft":
      return css`
        top: ${componentSizeAndPosition.bottom + MARGIN}px;
        left: ${componentSizeAndPosition.left}px;
      `;
    case "topLeft":
      return css`
        top: ${
          componentSizeAndPosition.top - MARGIN - textContentSize.height
        }px;
        left: ${componentSizeAndPosition.left}px;
      `;
    case "topRight":
      return css`
        top: ${
          componentSizeAndPosition.top - MARGIN - textContentSize.height
        }px;
        left: ${componentSizeAndPosition.right - textContentSize.width}px;
      `;
    default:
      return css``;
  }
};

export const TooltipStyled = styled.div`
  display: inline-block;
`;

export const TrailContentStyled = styled(P1)``;

export const TooltipContentWrapper = styled.div<
  Pick<
    ITooltip,
    | "direction"
    | "componentSizeAndPosition"
    | "textContentSize"
    | "isShadow"
    | "theme"
  >
>`
  position: absolute;

  padding: 2px 8px 2px 8px;
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 9px;
  border-radius: 8px;
  z-index: ${ZINDEX.tooltip};
  ::after {
    border-width: 4px;
    border-style: solid;
    border-radius: 1px;

    ${({ direction, theme }) => {
      switch (direction) {
        case "top":
          return css`
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: ${theme.colors.componentTooltipBackground} transparent
              transparent;
          `;
        case "bottom":
          return css`
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: transparent transparent
              ${theme.colors.componentTooltipBackground};
          `;
        case "right":
          return css`
            content: "";
            position: absolute;
            bottom: 30%;
            right: 100%;
            margin-left: -5px;
            border-color: transparent ${theme.colors.componentTooltipBackground}
              transparent transparent;
          `;
        case "left":
          return css`
            content: "";
            position: absolute;
            bottom: 30%;
            left: 100%;
            margin-right: -5px;
            border-color: transparent transparent transparent
              ${theme.colors.componentTooltipBackground};
          `;
        case "topRight":
          return css`
            content: "";
            position: absolute;
            top: 100%;
            right: 10%;
            margin-right: 5px;
            border-color: ${theme.colors.componentTooltipBackground} transparent
              transparent;
          `;
        case "bottomRight":
          return css`
            content: "";
            position: absolute;
            bottom: 100%;
            right: 10%;
            margin-right: 5px;
            border-color: transparent transparent
              ${theme.colors.componentTooltipBackground};
          `;
        case "topLeft":
          return css`
            content: "";
            position: absolute;
            top: 100%;
            left: 10%;
            margin-left: 5px;
            border-color: ${theme.colors.componentTooltipBackground} transparent
              transparent;
          `;
        case "bottomLeft":
          return css`
            content: "";
            position: absolute;
            bottom: 100%;
            left: 10%;
            margin-left: 5px;
            border-color: transparent transparent
              ${theme.colors.componentTooltipBackground};
          `;

        default:
          return css`
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
          `;
      }
    }}
  }
  ${({ theme }) => css`
    background: ${theme.colors.componentTooltipBackground};
    color: ${theme.colors.componentTooltipTextColor};
  `};

  ${({ isShadow, theme }) => isShadow && theme.shadows.hp.bottom};

  ${({ direction, componentSizeAndPosition, textContentSize }) =>
    getDirectionStyles(direction, componentSizeAndPosition, textContentSize)};

  ${TrailContentStyled} {
    color: ${({ theme }) => theme.colors.componentTooltipHelpTextColor};
  }

  opacity: 0;

  &.tooltip-content {
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

TooltipContentWrapper.defaultProps = {
  theme: LIGHT_THEME
};
