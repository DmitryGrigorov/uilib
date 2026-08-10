import styled, { css } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { ITagProps, TTagSize } from "./types";

interface ITag extends Partial<ITagProps> {
  theme: ITheme;
}

const Padding: Record<TTagSize, string> = {
  s: "padding: 0 6px 0 8px;",
  m: "padding: 0 10px 0 12px;",
  xs: "padding: 0 6px 0 8px;"
};

const PaddingAvatar: Record<TTagSize, string> = {
  s: "padding: 0 10px 0 8px;",
  m: "padding: 0 10px 0 12px;",
  xs: "padding: 0 6px 0 8px;"
};

type TTagComponentProps = Pick<
  ITag,
  | "isPressed"
  | "isClosable"
  | "isDisabled"
  | "theme"
  | "avatarProps"
  | "isReadOnly"
  | "isStroke"
> &
  Required<Pick<ITag, "size">>;

export const TagWrapper = styled.button<TTagComponentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  ${({ avatarProps, size }) => {
    if (avatarProps && size !== "xs") {
      return PaddingAvatar[size];
    } else {
      return Padding[size];
    }
  }};
  border: 0;
  border-radius: 16px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  transition: all 0.2s linear;
  cursor: pointer;

  .tag__avatar {
    margin-right: 4px;
    & > div {
      cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
      background: ${({ isDisabled, theme }) =>
        isDisabled && theme.colors.neutral3};
    }
  }

  ${({ size }) => {
    switch (size) {
      case "xs":
        return css`
          height: 20px;
        `;
      case "s":
        return css`
          height: 24px;
        `;
      default:
        return css`
          height: 32px;
        `;
    }
  }}

  ${({ isStroke, isPressed, isDisabled, isReadOnly, theme }) => {
    if (isStroke) {
      if (isDisabled) {
        return css`
          background: transparent;
          color: ${theme.colors.textBasicDisabled};
          box-shadow: inset 0 0 0 1px ${theme.colors.textBasicDisabled};
          svg {
            color: ${theme.colors.textBasicDisabled};
          }
          cursor: not-allowed;
        `;
      } else if (isPressed) {
        return css`
          background: ${theme.colors.overlay2};
          color: ${theme.colors.textBasicPressed};
          box-shadow: inset 0 0 0 1px ${theme.colors.textBasicPressed};
          svg {
            color: ${theme.colors.textBasicPressed};
          }
        `;
      } else if (isReadOnly) {
        return css`
          background: transparent;
          box-shadow: inset 0 0 0 1px ${theme.colors.textBasicDisabled};
          color: ${theme.colors.textBasicHover};
          svg {
            color: ${theme.colors.textBasicDisabled};
          }
          cursor: not-allowed;
        `;
      } else {
        return css`
          background: transparent;
          box-shadow: inset 0 0 0 1px ${theme.colors.neutral6};
          color: ${theme.colors.textBasicDefault};
          svg {
            color: ${theme.colors.textBasicDefault};
          }

          &:hover {
            background: transparent;
            color: ${theme.colors.textBasicHover};
            box-shadow: inset 0 0 0 1px ${theme.colors.textBasicHover};
            svg {
              color: ${theme.colors.textBasicHover};
            }
          }
        `;
      }
    }
    if (isDisabled) {
      return css`
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicDisabled};
        svg {
          color: ${theme.colors.textBasicDisabled};
        }
        cursor: not-allowed;
      `;
    } else if (isReadOnly) {
      return css`
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicHover};
        svg {
          color: ${theme.colors.textBasicDisabled};
        }
        cursor: not-allowed;
      `;
    } else if (isPressed) {
      return css`
        background: ${theme.colors.componentSecondaryNeutralPressed};
        color: ${theme.colors.textBasicPressed};
        svg {
          color: ${theme.colors.textBasicPressed};
        }
      `;
    } else {
      return css`
        background: ${theme.colors.componentSecondaryNeutralDefault};
        color: ${theme.colors.textBasicDefault};
        svg {
          color: ${theme.colors.textBasicDefault};
        }

        &:hover {
          background: ${theme.colors.componentSecondaryNeutralHover};
          color: ${theme.colors.textBasicHover};
          svg {
            color: ${theme.colors.textBasicHover};
          }
        }
      `;
    }
  }}
`;

TagWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const LeadIconWrapper = styled.span`
  margin-right: 8px;
  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const CloseIconWrapper = styled.span<
  Pick<ITag, "size" | "isDisabled" | "isReadOnly" | "avatarProps">
>`
  width: 12px;
  height: 12px;
  svg {
    width: 12px;
    height: 12px;
    color: ${({ isDisabled, isReadOnly, theme }) =>
      isDisabled || isReadOnly
        ? theme.colors.textBasicDisabled
        : theme.colors.textBasicDefault};
  }
  ${({ avatarProps, size }) => {
    switch (size) {
      case "xs":
        return css`
          margin-left: 6px;
        `;
      case "s":
        return avatarProps
          ? css`
              margin-left: 14px;
            `
          : css`
              margin-left: 6px;
            `;
      default:
        return css`
          margin-left: 14px;
        `;
    }
  }}
`;

CloseIconWrapper.defaultProps = {
  theme: LIGHT_THEME
};
