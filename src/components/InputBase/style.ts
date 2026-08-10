import styled, { css } from "styled-components";
import P2 from "../typography/P2";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";
import {
  IInput,
  IInputWrapperProps,
  IPlaceholder,
  IStylesIcon,
  TInputSize,
  TStatusInput
} from "./interfaces";

const svgRepeatedStyles = (theme: ITheme, isFocused?: boolean): string => `
  svg {
    color: ${
      isFocused ? theme.colors.textBasicPressed : theme.colors.textBasicDefault
    };
  }

  &:hover {
    svg {
      color: ${theme.colors.textBasicHover};
    }
  }
`;

const INPUT_COMPONENT_HEIGHTS = {
  l: 56,
  m: 48
};

export const defineBorderBottom = ({
  viewType,
  theme,
  isHasValue,
  status,
  isReadOnly,
  isFocused,
  isDisabled
}: IInputWrapperProps): string => {
  if (viewType === "line") {
    if (isReadOnly || isDisabled) {
      return `1px solid ${theme.colors.neutral5}`;
    }

    if (status) {
      return `1px solid ${getStatusColor(theme, status)}`;
    }

    if (isFocused) {
      return `1px solid ${theme.colors.textColoredOrange}`;
    }

    if (isHasValue) {
      return `1px solid
      ${theme.colors.neutral10};
        `;
    }

    return `1px solid
        ${theme.colors.neutral6}`;
  } else {
    return "none";
  }
};

export const defineBorderRadius = ({ viewType }: IInputWrapperProps): number =>
  viewType === "line" ? 0 : 16;

export const defineInputColor = ({
  theme,
  isDisabled,
  isReadOnly
}: Pick<IInputWrapperProps, "theme" | "isDisabled" | "isReadOnly">): string => {
  if (isDisabled) {
    return theme.colors.textBasicDisabled;
  }
  if (isReadOnly) {
    return theme.colors.textBasicHover;
  }

  return theme.colors.textBasicDefault;
};

export const defineBackgroundColor = ({
  theme,
  status,
  isReadOnly = false,
  isDisabled = false,
  isFocused = false,
  viewType = "round"
}: IInputWrapperProps): string => {
  if (viewType === "line") {
    return "transparent";
  }

  if (isReadOnly || isDisabled) {
    return theme.colors.neutral1;
  }

  if (isFocused && !status) {
    return theme.colors.backgroundSecondaryOrange;
  }

  switch (status) {
    case "error":
      return theme.colors.backgroundSecondaryRed;
    case "warning":
      return theme.colors.backgroundSecondaryAmber;
    case "success":
      return theme.colors.backgroundSecondaryTeal;
    default:
      return theme.colors.backgroundSecondaryNeutral;
  }
};

export const defineRightIconColor = ({
  theme,
  isDisabled,
  isReadOnly
}: IStylesIcon): string => {
  if (isReadOnly || isDisabled) {
    return theme.colors.textBasicDisabled;
  }
  return theme.colors.textBasicDefault;
};

export const defineIconColor = ({
  theme,
  isDisabled,
  isReadOnly
}: IStylesIcon): string => {
  if (isReadOnly || isDisabled) {
    return theme.colors.textBasicDisabled;
  }
  return theme.colors.textBasicDefault;
};

export const definePlaceholderColor = ({
  theme,
  status,
  isFocused,
  isDisabled,
  isReadOnly
}: IPlaceholder): string => {
  if (isReadOnly || isDisabled) {
    return theme.colors.textBasicDisabled;
  }
  if (status) {
    return getStatusColor(theme, status);
  }
  if (isFocused) {
    return theme.colors.textColoredOrange;
  }
  return theme.colors.textBasicDefault;
};

const definePlaceholderMaxWidth = ({
  isFocused,
  isReadOnly,
  isHasValue,
  iconRight
}: IPlaceholder): number => {
  if (iconRight && isHasValue && !isReadOnly) {
    return 100;
  } else if (iconRight && !isReadOnly) {
    return 90;
  } else if ((isFocused || isHasValue || iconRight) && isReadOnly) {
    return 60;
  } else if (isHasValue) {
    return 60;
  } else if (iconRight && isReadOnly) {
    return 90;
  } else if (!iconRight && isReadOnly) {
    return 60;
  }
  return 60;
};

export const getStatusColor = (theme: ITheme, status: TStatusInput): string => {
  switch (status) {
    case "error":
      return theme.colors.textColoredRed;
    case "warning":
      return theme.colors.textColoredAmber;
    case "success":
      return theme.colors.textColoredTeal;
    default:
      return theme.colors.textBasicDefault;
  }
};

export const LabelStyled = styled.div<Pick<IInputWrapperProps, "width">>`
  ${({ width }) => defineResponsibleWidth(width)};
`;

export const PLACEHOLDER_PADDING_TOP = {
  l: 16,
  m: 13
};

export const TextStatusStyled = styled(P2)<
  Pick<IPlaceholder, "theme" | "status">
>`
  display: inline-flex;
  margin-top: 9px;
  margin-left: 20px;
  max-height: max-content;
  overflow: hidden;

  ${({ theme, status }: IInput) =>
    status &&
    css`
      color: ${getStatusColor(theme, status)};
    `}
`;

TextStatusStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const IconWrapper = styled.div<IInput>`
  min-width: 16px;
  display: flex;
  ${({ theme, isFocused }: IInput) => svgRepeatedStyles(theme, isFocused)}
`;

IconWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const IconsBoxStyled = styled.div<{ size?: TInputSize }>`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
  .icon-clear {
    margin-right: ${({ size }) => (size === "m" ? "16px" : "20px")};
  }
`;

export const RequiredStyle = styled.span<{ isDisabled?: boolean }>`
  margin-left: 7px;
  color: ${({ theme, isDisabled }) => {
    if (isDisabled) {
      return theme.colors.textBasicDisabled;
    } else {
      return theme.colors.textColoredRed;
    }
  }};
`;

RequiredStyle.defaultProps = {
  theme: LIGHT_THEME
};

export const IconStyled = styled.div<IStylesIcon>`
  display: inline-flex;
  align-items: center;
  margin-right: 11px;

  svg {
    width: 16px;
    height: 16px;
    transition: all 0.1s ease-out;
    color: ${defineIconColor};
  }
`;

IconStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const IconRightStyled = styled(IconStyled)<IStylesIcon>`
  svg {
    color: ${defineRightIconColor};
  }
  margin-right: 0;
`;

IconRightStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const InputLeadContentStyled = styled.div<IStylesIcon>`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ isFocused, isHasValue, isPlaceholder }) =>
    (isHasValue || isFocused) &&
    isPlaceholder &&
    css`
      transition: all 0.1s ease-out;
      margin-top: 7px;
    `}
`;

InputLeadContentStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const PlaceholderStyled = styled.div<IPlaceholder>`
  display: flex;
  line-height: 24px;
  position: absolute;
  box-sizing: border-box;
  white-space: nowrap;
  transition: all 0.1s;
  user-select: none;
  pointer-events: none;
  max-width: ${(p) => `calc(100% - ${definePlaceholderMaxWidth(p)}px);`};

  color: ${definePlaceholderColor};

  top: ${({ size, isFocused, isHasValue }) =>
    isFocused || isHasValue
      ? -2
      : (PLACEHOLDER_PADDING_TOP[size as "l" | "m"] ?? -2)}px;

  left: ${({ isFocused, isHasValue, iconLeft }) => {
    if (!isFocused && !isHasValue && !iconLeft) {
      return "20px";
    } else if (!isFocused && !isHasValue) {
      return "48px";
    }
    return "20px";
  }};

  ${({ isFocused, isHasValue }) =>
    (isFocused || isHasValue) &&
    css`
      ${RequiredStyle} {
        margin-left: 4px;
      }
    `}

  .placeholder-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  font-size: ${({ theme, isFocused, isHasValue }) =>
    isFocused || isHasValue
      ? theme.typography.fontSizeXs
      : theme.typography.fontSizeM};

  font-weight: ${({ isFocused, isHasValue, theme }) =>
    isFocused || isHasValue
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular};
`;

PlaceholderStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const InputWrapperStyled = styled.div<IInputWrapperProps>`
  display: flex;
  position: relative;
  gap: 4px;
  font-family: ${({ theme }: IInputWrapperProps) =>
    theme.typography.fontFamily};
  align-items: center;
  height: ${({ size = "l" }) => INPUT_COMPONENT_HEIGHTS[size] ?? 56}px;
  border-radius: ${defineBorderRadius}px;
  border-bottom: ${defineBorderBottom};
  background-color: ${defineBackgroundColor};

  ${({ width }) => defineResponsibleWidth(width)};

  & > ${InputLeadContentStyled} > input,
  & > ${InputLeadContentStyled} > * > input {
    ${({ theme, isDisabled, isReadOnly, alignText }: IInputWrapperProps) => css`
      font-family: ${theme.typography.fontFamily};
      line-height: ${theme.typography.lineHeight2xs};
      font-size: ${theme.typography.fontSizeM};
      text-align: ${alignText};
      color: ${defineInputColor({ theme, isDisabled, isReadOnly })};
      cursor: ${isDisabled ? "not-allowed" : "auto"};
    `};
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    resize: none;
    z-index: 1;

    &::-ms-clear {
      display: none;
    }
    &::-ms-reveal {
      display: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: all 5000s ease-in-out 0s;
    }

    box-sizing: content-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ size }) => {
    switch (size) {
      case "l":
        return css`
          padding: 16px 20px 16px 18px;
        `;
      case "m":
        return css`
          padding: 14px 20px 14px 20px;
        `;
    }
    return "";
  }}

  ${({ theme, isDisabled, isReadOnly, isHasValue, isFocused }) =>
    !isDisabled &&
    !isReadOnly &&
    css`
      &:hover {
        & > ${InputLeadContentStyled} > input,
        & > ${InputLeadContentStyled} > * > input {
          color: ${theme.colors.textBasicHover};
        }

        ${IconStyled} {
          svg {
            color: ${theme.colors.textBasicHover};
          }
        }

        ${() =>
          !isHasValue &&
          !isFocused &&
          css`
            ${PlaceholderStyled} {
              color: ${theme.colors.textBasicDefault};
            }
          `}
      }
    `}
`;

InputWrapperStyled.defaultProps = {
  theme: LIGHT_THEME
};
