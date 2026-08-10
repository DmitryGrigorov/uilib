import styled, { css } from "styled-components";
import InputBase from "../InputBase";
import { corvusOnest } from "../Pallette/fonts";
import { LIGHT_THEME } from "../Pallette/themes";
import { ITextareaProps } from "./types";

type TTextareaWrapper = Pick<ITextareaProps, "cols" | "size">;

export const TextareaWrapper = styled(InputBase)<TTextareaWrapper>`
  padding-top: 8px;
  padding-bottom: 8px;
  ${({ cols }) =>
    cols &&
    css`
      width: max-content;
    `}

  ${({ size }) => css`
    height: auto;
    min-height: ${size === "l" ? 56 : 48}px;
  `}

  .textarea__icon-box {
    position: absolute;
    top: calc(50% - 8px);
    right: 48px;
  }
`;

type TTextareaProps = Pick<
  ITextareaProps,
  "cols" | "rows" | "size" | "isShowClearIcon"
>;

type TTextAreaResizerWrapperProps = Pick<TTextareaProps, "size"> &
  Pick<ITextareaProps, "isReadOnly" | "isDisabled">;

export const TextAreaResizerWrapper = styled.div<TTextAreaResizerWrapperProps>`
  width: 100%;
  resize: vertical;
  overflow-x: hidden;
  overflow-y: visible;
  height: ${({ size }) => (size === "m" ? "16" : "24")}px;
  min-height: ${({ size }) => (size === "m" ? "16" : "24")}px;

  &::-webkit-resizer {
    ${({ theme, isReadOnly, isDisabled }) => {
      let color = theme.colors.neutral7;
      if (isReadOnly || isDisabled) {
        color = theme.colors.neutral5;
      }
      const url = `data:image/svg+xml;charset=UTF-8,%3csvg width='8' height='16' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_4433_237979)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.86654 0.133464C8.04449 0.311417 8.04449 0.599934 7.86654 0.777887L0.777886 7.86653C0.599934 8.04448 0.311416 8.04448 0.133464 7.86653C-0.0444877 7.68858 -0.0444886 7.40006 0.133464 7.22211L7.22211 0.133464C7.40007 -0.0444883 7.68858 -0.0444879 7.86654 0.133464ZM7.86654 2.71121C8.04449 2.88916 8.04449 3.17768 7.86654 3.35563L3.35558 7.86659C3.17762 8.04454 2.88911 8.04454 2.71115 7.86659C2.5332 7.68864 2.5332 7.40012 2.71115 7.22217L7.22211 2.71121C7.40007 2.53326 7.68858 2.53326 7.86654 2.71121ZM7.86654 5.93327C8.04449 5.75532 8.04449 5.4668 7.86654 5.28885C7.68858 5.1109 7.40006 5.1109 7.22211 5.28885L5.28884 7.22212C5.11089 7.40007 5.11089 7.68859 5.28884 7.86654C5.4668 8.04449 5.75531 8.04449 5.93327 7.86654L7.86654 5.93327Z' fill='${color.replace(
        "#",
        "%23"
      )}' /%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_4433_237979'%3e%3crect width='8' height='8' fill='white' transform='matrix(-1 -8.74228e-08 -8.74228e-08 1 8 0)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e `;
      return css`
        background: url("${url}") no-repeat;
      `;
    }};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutral7};
    border: 4px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

TextAreaResizerWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const TextareaStyled = styled.textarea<TTextareaProps>`
  ${corvusOnest};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ isShowClearIcon }) =>
    isShowClearIcon ? "calc(100% - 48px)" : "calc(100% - 26px)"};
  box-sizing: content-box;
  text-overflow: ellipsis;
  min-height: 24px;
  ${({ cols }) =>
    cols &&
    css`
      width: auto;
    `};
  resize: none;

  .textarea__resizer-icon {
    fill: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textBasicHover};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textBasicDisabled};
  }

  &:active {
    color: ${({ theme }) => theme.colors.textBasicPressed};
  }

  &:read-only {
    color: ${({ theme }) => theme.colors.neutral8};
  }
`;

TextareaStyled.defaultProps = {
  theme: LIGHT_THEME
};
