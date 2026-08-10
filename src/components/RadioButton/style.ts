import styled, { css } from "styled-components";
import { size } from "polished";

import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { IRadioButtonProps } from "./types";

interface IRadioBtn extends Partial<IRadioButtonProps> {
  theme: ITheme;
}

export const Mark = styled.span<IRadioBtn>`
  position: absolute;
  flex: none;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: 0.2s;
  left: 4px;
  top: 16px;

  ${size("16px")};

  ${({ theme, isDisabled }: IRadioBtn) => {
    if (isDisabled) {
      return css`
        background-color: ${theme.colors.neutral5};
        border: none;
      `;
    }
    return css`
      background-color: ${theme.colors.neutral2};
      outline: solid 1px ${theme.colors.neutral6};
    `;
  }}

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: all 0.2s;
    ${size("8px")}
    background: ${({ theme, isDisabled }: IRadioBtn) =>
      isDisabled ? theme.colors.neutral5 : theme.colors.orange6};
  }
`;

Mark.defaultProps = {
  theme: LIGHT_THEME
};

export const Input = styled.input<IRadioBtn>`
  display: flex;
  opacity: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:focus ~ ${Mark} {
    ${({ theme, isDisabled }) => css`
      outline: solid 2px
        ${isDisabled ? theme.colors.neutral5 : theme.colors.orange6};
    `}
  }

  &:checked ~ ${Mark} {
    border: none;
    ${({ theme, isDisabled }) => css`
      background-color: ${theme.colors.neutral1};
      outline: solid 2px
        ${isDisabled ? theme.colors.neutral5 : theme.colors.orange6};
    `}
  }

  &:checked ~ ${Mark}:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

Input.defaultProps = {
  theme: LIGHT_THEME
};

export const RadioButtonComponent = styled.div<IRadioBtn>`
  width: max-content;
  display: flex;
  position: relative;
  font-weight: normal;
  user-select: none;
  gap: 12px;
  padding: 4px 4px 4px 0;

  ${({ isDisabled }: IRadioBtn) => css`
    pointer-events: ${isDisabled ? "none" : "default"};
    min-height: 24px;
    cursor: ${isDisabled ? "not-allowed" : "pointer"};
  `}

  color: ${({ isDisabled, theme, isChecked }) => {
    if (isDisabled) {
      return theme.colors.textBasicDisabled;
    }
    if (isChecked) {
      return theme.colors.textBasicPressed;
    }
    return theme.colors.textBasicDefault;
  }};

  ${({ isError, theme }: IRadioBtn) =>
    isError &&
    css`
      ${Mark} {
        border: solid 2px ${theme.colors.amber1};
      }
    `};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textBasicHover};

    ${Mark} {
      ${({ theme }) => css`
        background: ${theme.colors.neutral1};
        outline: solid 2px ${theme.colors.neutral6};
      `}
    }

    ${Input}:checked ~ ${Mark} {
      ${Mark} {
        ${({ theme, isDisabled }: IRadioBtn) =>
          !isDisabled &&
          css`
            background-color: ${theme.colors.neutral1};
            outline: solid 2px ${theme.colors.neutral6};
          `}
      }
    }
  }

  ${Input}:checked ~ ${Mark} {
    ${({ theme, isDisabled }: IRadioBtn) =>
      !isDisabled &&
      css`
        background-color: ${theme.colors.neutral1};
        outline: solid 2px ${theme.colors.orange6};
      `};
  }
`;

RadioButtonComponent.defaultProps = {
  theme: LIGHT_THEME
};
