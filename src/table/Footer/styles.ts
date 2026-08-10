import styled from "styled-components";
import {
  Padding,
  Pagination,
  LIGHT_THEME,
  SearchBox,
  P1
} from "@dmitrygrigorov/components";
import { IFooterProps } from "./types";

type FooterStyledProps<TData, TValue> = Pick<
  IFooterProps<TData, TValue>,
  "size" | "isMobile"
> & {
  countElements: number;
};

export const FooterStyled = styled.div<FooterStyledProps<any, string>>`
  ${({ size }) => {
    if (size === "m") {
      return Padding.allSide(4, 6);
    }
    if (size === "s") {
      return Padding.allSide(2, 4);
    }
    return Padding.allSide(6);
  }};
  display: flex;
  align-items: center;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : null)};
  gap: ${({ isMobile }) => (isMobile ? "16px" : "24px")};
  justify-content: ${({ countElements }) =>
    countElements === 2 ? "space-between" : "flex-end"};
`;

export const PaginationStyled = styled(Pagination)`
  max-width: 382px;
`;

export const SearchBoxStyled = styled(SearchBox)`
  max-width: 320px;
`;

export const FooterSelectPerPageStyled = styled.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};

  .footer-select-per-page__icon-rotate {
    transform: rotateX(180deg);
  }
`;

FooterSelectPerPageStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const FooterPerPageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.textBasicDefault};

  .footer-per-page__text {
    white-space: nowrap;
  }
`;

FooterPerPageWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const FooterTextStyled = styled(P1)`
  margin-left: 0;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.textBasicPressed};
`;

FooterTextStyled.defaultProps = {
  theme: LIGHT_THEME
};
