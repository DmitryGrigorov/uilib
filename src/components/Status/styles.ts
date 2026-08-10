import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { Shape } from "../Pallette/Shape";
import { P1 } from "../typography";
import { IStatusProps, TColorTypeStatus, TCompStatus } from "./types";

const defineColor = (
  theme: ITheme | any,
  status?: TCompStatus,
  colorType?: string,
  isFilled?: boolean
): string => {
  if (isFilled) {
    switch (status?.toLocaleLowerCase()) {
      case "success":
        return theme.colors.teal12;
      case "completed":
        return theme.colors.textBasicPressed;
      case "error":
        return theme.colors.red12;
      case "warning":
        return theme.colors.amber12;
      case "processing":
        return theme.colors.blue12;
      default:
        return colorType
          ? theme.colors?.[colorType + "12"]
          : theme.colors.blue12;
    }
  } else {
    switch (status?.toLocaleLowerCase()) {
      case "success":
        return theme.colors.textColoredTeal;
      case "completed":
        return theme.colors.textBasicPressed;
      case "error":
        return theme.colors.textColoredRed;
      case "warning":
        return theme.colors.textColoredAmber;
      case "processing":
        return theme.colors.textColoredBlue;
      default:
        return colorType
          ? theme.colors?.[
              `textColored${
                colorType?.charAt(0).toUpperCase() + colorType?.slice(1)
              }`
            ]
          : theme.colors.blue12;
    }
  }
};

const capitalizeColor = (color: TColorTypeStatus): string =>
  color.charAt(0).toUpperCase() + color.slice(1);

const shadowColor = (
  theme: ITheme | any,
  status?: TCompStatus,
  colorType?: string
): string => {
  switch (status?.toLocaleLowerCase()) {
    case "completed":
      return theme.colors.componentPrimaryNeutralPressed;
    default:
      return theme.colors?.[colorType + "6"];
  }
};

const getColorTypeStatus = (
  status?: TCompStatus,
  colorType?: TColorTypeStatus
): TColorTypeStatus => {
  switch (status) {
    case "processing":
      return "blue";
    case "completed":
      return "neutral";
    case "success":
      return "teal";
    case "warning":
      return "amber";
    case "error":
      return "red";
    default:
      return colorType || "blue";
  }
};

export const StatusStyled = styled(P1).attrs<
  Pick<
    IStatusProps,
    | "colorType"
    | "isFilled"
    | "leadIcon"
    | "trailIcon"
    | "status"
    | "isDisabled"
    | "isPressed"
    | "canHover"
  >
>((props) => ({
  colorType: getColorTypeStatus(props.status, props.colorType)
}))<
  Pick<
    IStatusProps,
    | "isFilled"
    | "leadIcon"
    | "trailIcon"
    | "status"
    | "isDisabled"
    | "isPressed"
    | "canHover"
  > & {
    colorType: TColorTypeStatus;
  }
>`
  ${({ theme, colorType, isFilled, status }) => css`
    color: ${defineColor(theme, status, colorType, isFilled)};
  `};
  ${({ theme, colorType, isFilled, status }) =>
    !isFilled &&
    css`
      box-shadow: inset 0 0 0 1px ${shadowColor(theme, status, colorType)};
    `};

  ${({ isFilled, theme, colorType, isDisabled, canHover }) =>
    isFilled &&
    !isDisabled &&
    css`
      background-color: ${
        theme.colors[
          `componentSecondary${capitalizeColor(colorType)}Default` as keyof typeof theme.colors
        ]
      };
      ${() =>
        canHover &&
        css`
          &:hover {
            background-color: ${
              theme.colors[
                `componentSecondary${capitalizeColor(colorType)}Hover` as keyof typeof theme.colors
              ]
            };
          }
          &:active {
            background-color: ${
              theme.colors[
                `componentSecondary${capitalizeColor(colorType)}Pressed` as keyof typeof theme.colors
              ]
            };
          }
        `}
      border: none;
    `};

  ${({ theme, isDisabled, isFilled }) =>
    isDisabled &&
    isFilled &&
    css`
      color: ${theme.colors.textBasicDisabled};
      background-color: ${theme.colors.neutral3};
    `};

  ${({ theme, isPressed, isFilled, colorType }) =>
    isPressed &&
    isFilled &&
    css`
      background-color: ${
        theme.colors[
          `componentSecondary${capitalizeColor(colorType)}Pressed` as keyof typeof theme.colors
        ]
      };
    `};

  display: flex;
  align-items: center;
  width: max-content;
  border-radius: ${Shape.borderRadiusDefault};
  font-size: 16px;
  gap: 12px;
  padding: 4px 12px 4px 12px;
  height: 32px;

  .status__icon {
    color: unset;
    & > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

StatusStyled.defaultProps = {
  theme: LIGHT_THEME
};
