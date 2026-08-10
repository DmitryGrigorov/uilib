import styled from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";
import { IPageHeaderProps } from "./types";

interface IPageHeader extends IPageHeaderProps {
  theme: ITheme;
}

export const PageHeaderStyled = styled.div<IPageHeader>`
  display: flex;
  align-items: center;
  ${({ width }) => defineResponsibleWidth(width)}
  .page-header_button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.colors.neutral10};
      width: 16px;
      height: 16px;
    }
  }

  .page-header_text {
    padding-left: 4px;
    color: ${({ theme }) => theme.colors.textBasicPressed};
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .page-header_trail-button {
    align-self: flex-start;
    svg {
      color: ${({ theme }) => theme.colors.textBasicDefault};
      width: 16px;
      height: 16px;
    }
  }
`;

PageHeaderStyled.defaultProps = {
  theme: LIGHT_THEME
};
