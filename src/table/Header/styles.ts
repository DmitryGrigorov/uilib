import styled, { css } from "styled-components";
import {
  ITheme,
  Padding,
  SearchBox,
  LIGHT_THEME
} from "@dmitrygrigorov/components";
import { TTableHeaderProps } from "./types";

interface ITableHeader {
  theme?: ITheme;
}

export const MainHeaderContent = styled.div<ITableHeader>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  .buttonHolder {
    display: flex;
    gap: 16px;
  }
`;

MainHeaderContent.defaultProps = {
  theme: LIGHT_THEME
};

export const HeaderWrapper = styled.div<
  Pick<TTableHeaderProps<any, string>, "size">
>`
  ${({ size }) => {
    if (size === "m") {
      return Padding.allSide(4, 6);
    } else if (size === "s") {
      return Padding.allSide(2, 4);
    }
    return Padding.allSide(6);
  }};

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SearchBoxStyled = styled(SearchBox)<{
  isRightPosition: boolean;
  isMobile?: boolean;
}>`
  margin-left: auto;
  max-width: ${({ isMobile }) => (isMobile ? "none" : "320px")};
  ${({ isRightPosition }) =>
    isRightPosition &&
    css`
      margin-left: auto;
    `};
`;

export const HeaderControlsWrapper = styled.div<
  Pick<TTableHeaderProps<any, string>, "isMobile">
>`
  display: flex;
  align-items: center;
  gap: ${({ isMobile }) => (isMobile ? "none" : "40px")};
`;
