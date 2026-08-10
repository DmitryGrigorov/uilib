import styled, { css } from "styled-components";
import { NumericFormat } from "react-number-format";
import { LIGHT_THEME } from "../Pallette/themes";
import InputBase from "../InputBase";

export const InputNumberWrapper = styled(InputBase)`
  ${({ size }) => {
    switch (size) {
      case "m":
        return css`
          height: 48px;
        `;
      case "l":
      default:
        return css`
          height: 56px;
        `;
    }
  }};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: stretch;
  gap: 0;

  input {
    ::placeholder {
      ${({ theme, isReadOnly }) =>
        isReadOnly &&
        css`
          color: ${theme.colors.textBasicHover};
        `}
    }
  }
`;

export const InputNumberStyled = styled(NumericFormat)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StepWrapper = styled.div<{
  isDisabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 36px;
  user-select: none;
  -webkit-user-select: none;

  .stepper-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0;

    ${({ theme, isDisabled = false }) => css`
      cursor: ${isDisabled ? "not-allowed" : "pointer"};
      svg {
        color: ${
          theme.colors[isDisabled ? "textBasicDisabled" : "textBasicDefault"]
        };
      }
      :disabled {
        background: inherit;
      }
      &:hover:enabled {
        background: ${theme.colors.componentSecondaryNeutralHover};
        svg {
          color: ${theme.colors.textBasicHover};
        }
      }
      :active:not([disabled]) {
        background: inherit;
        svg {
          color: ${theme.colors.componentPrimaryOrangePressed};
        }
      }
    `}
  }
`;

StepWrapper.defaultProps = {
  theme: LIGHT_THEME
};

InputNumberWrapper.defaultProps = {
  theme: LIGHT_THEME
};
