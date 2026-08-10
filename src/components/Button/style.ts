import { ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";
import P1 from "../typography/P1";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { Padding } from "../Pallette/style-utils";
import { Shape } from "../Pallette/Shape";
import Preloader from "../Preloader";
import {
  IButtonBaseProps,
  IButtonPropsOther,
  IButtonPropsPrimary,
  IButtonPropsSecondary,
  TButtonPrimaryColor,
  TButtonSecondaryColor
} from "./types";

interface IButtonBase extends IButtonBaseProps {
  theme: ITheme;
  href?: string;
  $content: ReactNode;
  $color?: TButtonPrimaryColor | TButtonSecondaryColor;
}

type IButton = IButtonBase &
  Partial<IButtonPropsPrimary | IButtonPropsSecondary | IButtonPropsOther>;

type TButtonComponentProps = Pick<
  IButton,
  "viewType" | "theme" | "width" | "size" | "$color" | "$content" | "isPressed"
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonColor = ["red", "green", "yellow", "gray"] as const;
type TButtonColor = (typeof buttonColor)[number];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonViewType = [
  "primary",
  "secondary",
  "ghost",
  "link",
  "icon"
] as const;
type TButtonViewType = (typeof buttonViewType)[number];

const ButtonSizeStyles = {
  m: css`
    height: 48px;
    border-radius: ${Shape.borderRadiusMedium};
    ${Padding.allSide(2, 3)};
  `,
  l: css`
    height: 56px;
    border-radius: ${Shape.borderRadiusMedium};
    ${Padding.allSide(2, 4)};
  `,
  s: css`
    height: 32px;
    border-radius: ${Shape.borderRadiusDefault};
    ${Padding.allSide(1, 2)};
  `,
  xs: css`
    height: 24px;
    border-radius: ${Shape.borderRadiusDefault};
    ${Padding.allSide(1, 1)};
  `
};

const getPressedPrimaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "red":
      return theme.colors.componentPrimaryRedPressed;
    case "green":
      return theme.colors.componentPrimaryTealPressed;
    case "yellow":
      return theme.colors.componentPrimaryAmberPressed;
    default:
      return theme.colors.componentPrimaryOrangePressed;
  }
};

const getDefaultPrimaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "red":
      return theme.colors.componentPrimaryRedDefault;
    case "green":
      return theme.colors.componentPrimaryTealDefault;
    case "yellow":
      return theme.colors.componentPrimaryAmberDefault;
    default:
      return theme.colors.componentPrimaryOrangeDefault;
  }
};

const getHoverPrimaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "red":
      return theme.colors.componentPrimaryRedHover;
    case "green":
      return theme.colors.componentPrimaryTealHover;
    case "yellow":
      return theme.colors.componentPrimaryAmberHover;
    default:
      return theme.colors.componentPrimaryOrangeHover;
  }
};

const getPressedSecondaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "gray":
      return theme.colors.neutral10;
    default:
      return theme.colors.componentSecondaryNeutralPressed;
  }
};

const getDefaultSecondaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "gray":
      return theme.colors.neutral7;
    default:
      return theme.colors.componentSecondaryNeutralDefault;
  }
};

const getHoverSecondaryBackground = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "gray":
      return theme.colors.neutral8;
    default:
      return theme.colors.componentSecondaryNeutralHover;
  }
};

const getDefaultSecondaryColor = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "gray":
      return theme.colors.textBasicExtra;
    default:
      return theme.colors.textBasicDefault;
  }
};

const getPressedSecondaryColor = (
  theme: ITheme,
  color?: TButtonColor
): string => {
  switch (color) {
    case "gray":
      return theme.colors.textBasicExtra;
    default:
      return theme.colors.textBasicPressed;
  }
};

const ButtonIconSizeStyles = {
  l: css`
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 16px;
  `,
  m: css`
    height: 32px;
    width: 32px;
    padding: 4px;
    border-radius: 8px;
  `,
  s: css`
    height: 24px;
    width: 24px;
    padding: 4px;
    border-radius: 8px;
  `,
  xs: css`
    height: 16px;
    width: 16px;
    padding: 2px;
    border-radius: 4px;
  `
};

const pressedStylesButton = ({
  theme,
  viewType,
  $color
}: Omit<TButtonComponentProps, "$content">): RuleSet<object> => {
  switch (viewType) {
    case "ghost":
      return css`
        color: ${theme.colors.textBasicPressed};
      `;
    case "link":
      return css`
        color: ${getPressedPrimaryBackground(theme, $color)};
      `;
    case "secondary":
      return css`
        background-color: ${getPressedSecondaryBackground(theme, $color)};
        color: ${getPressedSecondaryColor(theme, $color)};
      `;
    case "icon":
      return css`
        background: transparent;
        color: ${theme.colors.orange9};
      `;
    case "primary":
    default:
      return css`
        background: ${getPressedPrimaryBackground(theme, $color)};
        color: ${theme.colors.textBasicExtra};
      `;
  }
};

export const ButtonComponent = styled(P1)<
  Omit<IButton, "$color"> & { $color: string | undefined }
>`
  ${({ theme }: { theme: ITheme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
    font-size: ${theme.typography.fontSizeM};
    font-family: ${theme.typography.fontFamily};
  `};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  transform: scale(1);

  &:active:enabled {
    transform: scale(0.97);
  }
  cursor: ${({ isLoading }: { isLoading?: boolean }) =>
    isLoading ? "not-allowed" : "pointer"};
  transition: all 0.1s ease-out;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  max-width: 100%;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-decoration: none;
  ${({ $content }) =>
    Boolean($content) &&
    css`
      .lead-icon {
        margin-right: 12px;
        min-width: 16px;
      }
    `};
  .button-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  ${({ size = "l", viewType }) =>
    viewType === "icon" ? ButtonIconSizeStyles[size] : ButtonSizeStyles[size]};

  ${(props: any) => {
    const { viewType, theme, $color } = props as {
      viewType: TButtonViewType;
      theme: ITheme;
      $color?: TButtonColor;
    };
    if (viewType === "ghost") {
      return css`
        background: transparent;
        color: ${theme.colors.textBasicDefault};

        &:hover:enabled {
          color: ${theme.colors.textBasicHover};
        }

        &:active:enabled {
          ${pressedStylesButton({ theme, viewType, $color })};
        }
      `;
    }
    if (viewType === "link") {
      return css`
        background: transparent;
        color: ${getDefaultPrimaryBackground(theme, $color)};

        &:hover:enabled {
          color: ${getHoverPrimaryBackground(theme, $color)};
        }

        &:active:enabled {
          ${pressedStylesButton({ theme, viewType, $color })};
        }
      `;
    }
    if (viewType === "secondary") {
      return css`
        background: ${getDefaultSecondaryBackground(theme, $color)};
        color: ${getDefaultSecondaryColor(theme, $color)};

        &:disabled {
          background: ${theme.colors.neutral3};
        }

        &:hover:enabled {
          background: ${getHoverSecondaryBackground(theme, $color)};
        }

        &:active:enabled {
          ${pressedStylesButton({ theme, viewType, $color })};
        }
      `;
    }
    if (viewType === "icon") {
      return css`
        background: transparent;
        color: ${theme.colors.neutral10};
        .button__icon {
          color: unset;
        }

        &:disabled {
          background: transparent;
        }

        &:hover:enabled {
          background: ${theme.colors.overlay2};
          color: ${theme.colors.neutral8};
        }

        &:active:enabled {
          ${pressedStylesButton({ theme, viewType, $color })};
        }
      `;
    }
    return css`
      background: ${getDefaultPrimaryBackground(theme, $color)};
      color: ${theme.colors.textBasicExtra};

      &:disabled {
        background: ${theme.colors.neutral3};
      }

      &:hover:enabled {
        background: ${getHoverPrimaryBackground(theme, $color)};
      }
      &:active:enabled {
        ${pressedStylesButton({ theme, viewType, $color })};
      }
    `;
  }};

  ${({ isPressed }) =>
    isPressed && (pressedStylesButton as unknown as RuleSet<object>)};

  ${({ theme }: { theme: ITheme }) => css`
    &:disabled {
      color: ${theme.colors.textBasicDisabled};
      cursor: not-allowed;

      & svg {
        color: ${theme.colors.textBasicDisabled};
      }
    }
  `}

  .lead-icon {
    color: unset;
  }
`;

ButtonComponent.defaultProps = {
  theme: LIGHT_THEME
};

export const PreloaderStyled = styled(Preloader)<{
  $color: string | undefined;
  viewType: TButtonViewType;
  size: string;
}>`
  margin-right: ${({ viewType }) => (viewType === "icon" ? "0" : "8px")};
  & svg {
    ${({ viewType, theme, $color }) => {
      switch (viewType) {
        case "secondary":
        case "ghost":
        case "icon":
          return css`
            color: ${theme.colors.textBasicDefault};
          `;
        case "link":
          switch ($color) {
            case "red":
              return css`
                color: ${theme.colors.componentPrimaryRedDefault};
              `;
            case "green":
              return css`
                color: ${theme.colors.componentPrimaryTealDefault};
              `;
            case "yellow":
              return css`
                color: ${theme.colors.componentPrimaryAmberDefault};
              `;
            default:
              return css`
                color: ${theme.colors.componentPrimaryOrangeDefault};
              `;
          }
        default:
          return css`
            color: ${theme.colors.textBasicExtra};
          `;
      }
    }}
    ${({ size }) => {
      const preloaderSize = size === "l" || size === "m" ? "24px" : "16px";
      return css`
        width: ${preloaderSize};
        height: ${preloaderSize};
      `;
    }}
  }
`;

PreloaderStyled.defaultProps = {
  theme: LIGHT_THEME
};
