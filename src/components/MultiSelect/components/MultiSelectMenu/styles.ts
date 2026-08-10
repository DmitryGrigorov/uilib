import styled, { css } from "styled-components";
import { BorderRadius } from "../../../Pallette/style-utils";
import { LIGHT_THEME } from "../../../Pallette/themes";
import { ISelectStyle } from "../../../SelectBase/types";
import SearchBox from "../../../SearchBox";
import { ZINDEX } from "../../../Pallette/ZIndex";

export const MenuStyle = styled.div<
  Pick<ISelectStyle, "isError" | "iconRight"> & { cssProperties?: string }
>`
  position: absolute;
  padding: 16px;
  z-index: ${ZINDEX.tooltip};
  ${({ theme }) => css`
    ${theme.shadows.sp.bottom};
    background-color: ${theme.colors.backgroundTetriary0};
    ${BorderRadius.roundBorder(theme.shape.borderRadiusMedium)};
    color: ${theme.colors.textBasicDefault};
  `};

  ${({ cssProperties }) => css`
    ${cssProperties}
  `}

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.colors.textColoredRed};
    `};
  border-top: none;
  box-sizing: border-box;
`;

MenuStyle.defaultProps = {
  theme: LIGHT_THEME
};

export const MenuButtonsWrapper = styled.div`
  .select-menu__divider {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .react-select__menu-list > label:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SearchBoxStyled = styled(SearchBox)`
  margin-bottom: 16px;
`;
