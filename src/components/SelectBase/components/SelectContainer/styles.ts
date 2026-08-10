import styled, { css } from "styled-components";
import InputBase, { TInputSize } from "../../../InputBase";
import { IconStyled } from "../../../InputBase/style";
import { AvatarStyle } from "../../../Avatar/style";

export const SelectContainerStyled = styled(InputBase)<{
  isFocused: boolean;
  isHasValue: boolean;
  isMulti: boolean;
  isReadOnly?: boolean;
  size?: TInputSize;
}>`
  min-width: 150px;
  height: ${({ isMulti }) => isMulti && "auto"};

  ${({ size, isHasValue }) =>
    size === "l"
      ? css`
          min-height: 56px;
          padding: ${isHasValue ? "12px 12px 8px 20px" : "12px 16px 11px"};
          &.select__avatar {
            padding: ${isHasValue ? "12px 12px 8px 16px" : "12px 16px 11px"};
          }
        `
      : css`
          min-height: 48px;
          padding: ${isHasValue ? "6px 12px 4px 20px" : "8px 16px 7px"};
          &.select__avatar {
            padding: ${isHasValue ? "6px 12px 4px 16px" : "8px 16px 7px"};
          }
        `};

  ${({ size, isFocused, isHasValue }) =>
    size === "m" &&
    css`
      ${IconStyled} {
        display: none;
      }
      ${
        (isFocused || isHasValue) &&
        css`
          .react-select__input-container {
            margin: 0;
            padding-bottom: 0;
          }
        `
      }
    `}

  .avatar_icon {
    svg {
      width: 7.5px;
    }
  }

  ${AvatarStyle} {
    width: 16px;
    height: 16px;
  }

  ${({ isFocused, isHasValue, isMulti, isReadOnly }) =>
    (isFocused || isHasValue || isReadOnly) &&
    isMulti &&
    css`
      .select__content {
        margin-top: 0;
      }
    `};

  ${({ isFocused, isHasValue, isMulti, isReadOnly, size }) =>
    (isFocused || isHasValue || isReadOnly) &&
    isMulti &&
    (size === "m"
      ? css`
          padding-left: 16px;
          ${IconStyled} {
            margin-top: 7px;
          }
        `
      : css`
          ${IconStyled} {
            margin-top: 7px;
          }
        `)};

  ${({ isMulti }) =>
    isMulti &&
    css`
      ${IconStyled} {
        margin-right: 8px;
      }
    `}
`;
