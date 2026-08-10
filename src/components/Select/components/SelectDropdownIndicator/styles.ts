import styled, { css } from "styled-components";
import { IconMoreSquare1 } from "@dmitrygrigorov/icons";
import { LIGHT_THEME } from "../../../Pallette/themes";

export const SelectDropdownIndicatorStyled = styled.div<{
  isDisabled?: boolean;
  isFocused?: boolean;
}>`
  padding: 4px;
  display: flex;

  .select-dropdown-icon {
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  border-radius: ${({ theme }) => theme.shape.borderRadiusDefault};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      .select-dropdown-icon {
        svg {
          color: ${theme.colors.componentPrimaryOrangePressed} !important;
        }
      }
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: inherit;
      .select-dropdown-icon {
        svg {
          color: ${({ theme }) => theme.colors.textBasicDisabled} !important;
        }
      }
      cursor: not-allowed;
    `}
  
  :hover {
    background-color: ${({ theme, isFocused, isDisabled }) =>
      !isFocused && !isDisabled && theme.colors.overlay2};
    .select-dropdown-icon {
      svg {
        color: ${({ theme }) => theme.colors.textBasicHover};
      }
    }
  }
`;

SelectDropdownIndicatorStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const SelectDrawerIcon = styled(IconMoreSquare1)`
  color: ${({ theme }) => theme.colors.textBasicDefault};
  padding: 4px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

SelectDrawerIcon.defaultProps = {
  theme: LIGHT_THEME
};
