import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IAvatarProps, TAvatarStatus } from "./types";

const getBackgroundStatus = (status: TAvatarStatus, theme: ITheme): string => {
  if (status === "online") {
    return theme.colors.componentPrimaryTealDefault;
  }
  if (status === "offline") {
    return theme.colors.componentPrimaryRedDefault;
  }
  if (status === "disabled") {
    return theme.colors.componentPrimaryNeutralDefault;
  }
  if (status === "busy") {
    return theme.colors.componentPrimaryAmberDefault;
  }
  return "";
};

export const OnlineStatus = styled.div<Pick<IAvatarProps, "status" | "size">>`
  ${({ status, theme }) =>
    status &&
    css`
      background: ${getBackgroundStatus(status, theme as ITheme)};
    `}
  position: absolute;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.neutral0};
  ${({ size }) => {
    switch (size) {
      case "l":
        return css`
          height: 10px;
          width: 10px;
          right: 0;
          top: 0;
          border-radius: 6px;
        `;
      case "m":
        return css`
          height: 10px;
          width: 10px;
          border-radius: 6px;
          right: -3px;
          top: -4px;
        `;
      case "s":
        return css`
          height: 10px;
          width: 10px;
          right: -3px;
          top: -3px;
          border-radius: 6px;
        `;
      case "xs":
        return css`
          height: 10px;
          width: 10px;
          right: -4px;
          top: -4px;
          border-radius: 6px;
        `;
      case "xl":
      default:
        return css`
          height: 16px;
          width: 16px;
          right: 0;
          border-radius: 6px;
          border: 2px solid ${({ theme }) => theme.colors.neutral0};
        `;
    }
  }};
`;

OnlineStatus.defaultProps = {
  theme: LIGHT_THEME
};

export const AvatarWrapper = styled.div`
  cursor: pointer;
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
`;

AvatarWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const AvatarStyle = styled.button<
  Pick<IAvatarProps, "image" | "size" | "onClick"> & { disabled?: boolean }
>`
  transition: all 0.3s linear;
  position: relative;
  background: ${({ image, disabled }) =>
    image && !disabled
      ? "url(" + image + ") center"
      : ({ theme }) => theme.colors.componentSecondaryNeutralDefault};
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case "l":
        return css`
          height: 48px;
          width: 48px;
          border-radius: 16px;
          .text {
            font-size: 16px;
            font-weight: 700;
          }
        `;
      case "m":
        return css`
          height: 32px;
          width: 32px;
          border-radius: 8px;
          .text {
            font-size: 8.75px;
            font-weight: 500;
          }
        `;
      case "s":
        return css`
          height: 24px;
          width: 24px;
          border-radius: 8px;
          .text {
            font-size: 8.75px;
            font-weight: 500;
          }
        `;
      case "xs":
        return css`
          height: 16px;
          width: 16px;
          border-radius: 12px;
          .text {
            font-size: 8.75px;
            font-weight: 500;
          }
        `;
      case "xl":
      default:
        return css`
          height: 64px;
          width: 64px;
          border-radius: 24px;
          font-size: 20px;
          font-weight: 700;
        `;
    }
  }}

  ${({ image, theme, disabled, onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        background: ${() => {
          if (!disabled) {
            return image
              ? theme.colors.componentSecondaryOrangeHover
              : theme.colors.componentSecondaryNeutralHover;
          }
          return undefined;
        }};

        .edit {
          visibility: visible;
          svg {
            color: ${
              image
                ? theme.colors.textBasicDefault
                : theme.colors.textBasicHover
            };
          }
          transition: opacity 0.3s linear;
          opacity: 1;
        }

        .avatar_icon {
          visibility: hidden;
          transition: all 0.3s linear;
          opacity: 0;
        }

        .text {
          opacity: 0;
          transition: all 0.3s linear;
        }
      }

      &:active {
        border: none;
        box-sizing: border-box;
        transition: all 0.3s linear;
        background: ${() => {
          if (!disabled) {
            return image
              ? theme.colors.componentSecondaryOrangePressed
              : theme.colors.componentSecondaryNeutralPressed;
          }
          return undefined;
        }};
        background-size: contain;

        .edit {
          visibility: visible;
          transition: color 0.3s linear;
          svg {
            color: ${theme.colors.textBasicPressed};
          }
        }
      }
    `}

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.neutral3};
    box-sizing: border-box;
    .disabled-icon {
      visibility: visible;
      opacity: 1;
      svg {
        color: ${({ theme }) => theme.colors.textBasicDisabled};
      }
    }
    &:hover {
      .edit {
        visibility: hidden;
      }
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    color: ${({ theme }) => theme.colors.textBasicDefault};
    ${({ size }) => {
      switch (size) {
        case "l":
          return css`
            width: 15px;
            height: 15px;
          `;
        case "m":
          return css`
            width: 10px;
            height: 10px;
          `;
        case "s":
          return css`
            width: 7.5px;
            height: 7.5px;
          `;
        case "xs":
          return css`
            width: 12px;
            height: 12px;
          `;
        case "xl":
        default:
          return css`
            width: 24px;
            height: 24px;
          `;
      }
    }}
  }

  .text {
    transition: all 0.3s linear;
    opacity: 1;
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  .edit {
    visibility: hidden;
    transition: all 0.3s linear;
    opacity: 0;
  }

  .avatar_icon {
    visibility: visible;
    transition: all 0.3s linear;
    opacity: 1;
  }
`;

AvatarStyle.defaultProps = {
  theme: LIGHT_THEME
};
