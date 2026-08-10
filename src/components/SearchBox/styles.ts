import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { Margin, Padding } from "../Pallette/style-utils";
import { corvusOnest } from "../Pallette/fonts";
import Label from "../Label";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";
import { ISearchBoxComponent, ISearchBoxProps, TSearchBoxSize } from "./types";

export const getHeight = (size?: TSearchBoxSize): string => {
  if (size === "m") {
    return "48px";
  } else {
    return "56px";
  }
};

const HEIGHT: { [key in TSearchBoxSize]: string } = {
  m: "48px",
  l: "56px"
};

export const IconWidth = 16;
export const IconWrapperMarginRight = 9;

export const ButtonStyled = styled.button`
  position: relative;
  border: none;
  width: auto;
  max-width: 100%;
  background: transparent;
  display: flex;
  box-sizing: border-box;
  align-items: baseline;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  &.search-box__icon {
    cursor: auto;
    margin-left: 24px;
  }
`;

ButtonStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const InputStyled = styled.input`
  border: none;
  overflow: hidden;
  background: transparent;
  flex: 1;
  outline: none;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  ${Padding.allSide(1)};
  ${corvusOnest};

  ::placeholder {
    user-select: none;
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  :hover {
    color: ${({ theme }) => theme.colors.textBasicHover};
    ::placeholder {
      user-select: none;
      color: ${({ theme }) => theme.colors.textBasicHover};
    }
  }

  :disabled {
    background: none;
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.textBasicDisabled};

    ::placeholder {
      color: ${({ theme }) => theme.colors.textBasicDisabled};
    }
  }
`;

InputStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const InputWrapper = styled.div<ISearchBoxComponent>`
  ${({ theme, size, viewType }: ISearchBoxComponent) => css`
    ${
      viewType === "round"
        ? css`
            background-color: ${theme.colors.backgroundSecondaryNeutral};
          `
        : css`
            border-bottom: 1px solid ${theme.colors.neutral6};
          `
    }
    height: ${HEIGHT[size]};
    color: ${theme.colors.textBasicDefault};
    & div > svg {
      color: ${theme.colors.textBasicDefault};
    }
  `};

  ${({ theme, viewType, isHasValue }: ISearchBoxComponent) =>
    isHasValue &&
    viewType === "line" &&
    css`
      border-bottom: 1px solid ${theme.colors.neutral10};
    `};

  ${({ theme, status, viewType }: ISearchBoxComponent) => {
    if (status === "error") {
      if (viewType === "round") {
        return css`
          background: ${theme.colors.backgroundSecondaryRed};
        `;
      } else {
        return css`
          border-bottom: 1px solid ${theme.colors.textColoredRed};
        `;
      }
    }
    return null;
  }};

  ${({ status, isFocused }: ISearchBoxComponent) =>
    status &&
    isFocused &&
    css`
      & div > svg {
        display: none;
      }
    `}

  ${({ viewType }) =>
    viewType === "round" &&
    css`
      border-radius: 16px;
    `}
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s ease-out;
  cursor: text;

  &:hover {
    ${({
      error,
      isDisabled,
      isFocused,
      theme,
      status,
      viewType
    }: ISearchBoxComponent) =>
      !isFocused &&
      !error &&
      !isDisabled &&
      !status &&
      css`
        color: ${theme.colors.textBasicHover};
        ${
          viewType === "round" &&
          css`
            background: ${theme.colors.neutral3};
          `
        }
        & div > svg {
          color: ${theme.colors.textBasicDefault};
        }
        & ${InputStyled} {
          ::placeholder {
            color: ${theme.colors.textBasicHover};
          }
        }
      `}
  }

  ${({
    isFocused,
    isDisabled,
    status,
    theme,
    viewType
  }: ISearchBoxComponent) => {
    if (isFocused && !status) {
      return css`
        ${
          viewType === "round"
            ? css`
                background: ${theme.colors.backgroundSecondaryOrange};
              `
            : css`
                border-bottom: 1px solid ${theme.colors.textColoredOrange};
              `
        }
        & div > svg {
          display: none;
        }
      `;
    }
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        ${
          viewType === "round"
            ? css`
                background: ${theme.colors.backgroundSecondaryNeutral};
              `
            : css`
                border-bottom: 1px solid ${theme.colors.neutral5};
              `
        }
        & div > span {
          color: ${theme.colors.textBasicDisabled};
        }
        & ${ButtonStyled} {
          & svg {
            color: ${theme.colors.textBasicDisabled};
          }
        }
      `;
    }
    return "";
  }}
`;

InputWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const SearchBoxStyled = styled.div<ISearchBoxProps>`
  display: flex;
  ${({ width }) => defineResponsibleWidth(width)}
  flex-direction: column;
`;

SearchBoxStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const IconWrapper = styled.div<{ isDisabled?: boolean }>`
  display: flex;
  margin-right: ${IconWrapperMarginRight}px;
`;

IconWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const LabelStyled = styled(Label)`
  ${Padding.left(6)};
  ${Margin.allSide(1, 0)}
`;
