import styled, { css } from "styled-components";
import { IconMoreSquare1 } from "@dmitrygrigorov/icons";
import { LIGHT_THEME } from "../../../Pallette/themes";

export const MultiSelectDropdownIndicatorStyled = styled.div<{
  isDisabled?: boolean;
  isFocused?: boolean;
}>`
  padding: 4px;
  display: flex;

  svg {
    color: ${({ theme, isFocused }) => {
      if (isFocused) {
        return theme.colors.componentPrimaryOrangePressed;
      }
      return theme.colors.textBasicDefault;
    }}!important;
  }
  &:hover {
    background-color: ${({ theme, isFocused }) =>
      isFocused ? "inherit" : theme.colors.overlay2};
  }

  border-radius: ${({ theme }) => theme.shape.borderRadiusDefault};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.textBasicDisabled}!important;
      }
      background: inherit;
    `}
`;

MultiSelectDropdownIndicatorStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const MultiSelectDrawerIcon = styled(IconMoreSquare1)`
  color: ${({ theme }) => theme.colors.textBasicDefault};

  svg {
    width: 16px;
    height: 16px;
  }
`;

MultiSelectDrawerIcon.defaultProps = {
  theme: LIGHT_THEME
};
