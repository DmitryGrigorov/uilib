import styled, { css } from "styled-components";
import { IconMinus, IconTick } from "@dmitrygrigorov/icons";
import { Shape } from "../Pallette/Shape";
import { BorderRadius } from "../Pallette/style-utils";
import { ITheme } from "../Pallette/themes";
import { ICheckBoxProps } from "./types";

interface ICheckBox extends Partial<ICheckBoxProps> {
  theme: ITheme;
}

type TCheckBoxComponentProps = Pick<
  ICheckBox,
  "isDisabled" | "isChecked" | "isIndeterminate" | "theme"
>;

const getColorText = (
  theme: ITheme,
  params: Pick<
    Partial<ICheckBoxProps>,
    "isDisabled" | "isChecked" | "isIndeterminate"
  >
): string => {
  if (params.isDisabled) {
    return theme.colors.textBasicDisabled;
  } else if (params.isChecked || params.isIndeterminate) {
    return theme.colors.textBasicPressed;
  }
  return theme.colors.textBasicDefault;
};

export const CheckBoxStyled = styled.label<TCheckBoxComponentProps>`
  width: max-content;
  padding: 4px 4px 4px 0;
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
  cursor: pointer;

  ${({
    theme,
    isDisabled,
    isIndeterminate,
    isChecked
  }: {
    theme: ITheme;
    isDisabled?: boolean;
    isChecked?: boolean;
    isIndeterminate?: boolean;
  }) => css`
    ${
      isDisabled &&
      css`
        pointer-events: unset;
        cursor: not-allowed;
      `
    };
    color: ${getColorText(theme, { isDisabled, isIndeterminate, isChecked })};

    :hover {
      ${
        !isIndeterminate &&
        !isChecked &&
        !isDisabled &&
        css`
          color: ${theme.colors.textBasicHover};
        `
      }
    }
  `};

  .checkbox-icon {
    pointer-events: none;
    ${({ isDisabled }) =>
      isDisabled &&
      css`
        cursor: not-allowed;
      `}
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.colors.textBasicDisabled
        : theme.colors.textBasicPressed};
  }
`;

// The box is styled on the input itself, not a ::before pseudo-element:
// <input> is a replaced element and browsers don't render generated
// content on it, so the pseudo-element version never painted anything.
export const InputStyled = styled.input<TCheckBoxComponentProps>`
  display: flex;
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
  align-items: center;
  cursor: pointer;
  appearance: none;
  ${({ theme }: { theme: ITheme }) => css`
    background: ${theme.colors.neutral3};
    ${BorderRadius.roundBorder(Shape.borderRadiusDefault)};
    border: 1px solid ${theme.colors.neutral6};
  `};

  :hover {
    ${({ theme, isIndeterminate, isChecked }) =>
      !isIndeterminate &&
      !isChecked &&
      css`
        background: ${theme.colors.neutral2};
        border: 2px solid ${theme.colors.neutral6};
      `}
  }

  ${({ isChecked, isIndeterminate, theme }) =>
    (isChecked || isIndeterminate) &&
    css`
      background: ${theme.colors.orange4};
      border: none;
    `}

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.neutral2};
    border: none;
  }
`;

export const IconStyles = css`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
`;

export const IconTickStyled = styled(IconTick)`
  ${IconStyles};
`;

export const IconMinusStyled = styled(IconMinus)`
  ${IconStyles};
`;
