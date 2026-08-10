import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

interface ITabsStyledProps {
  theme: ITheme;
}

export const TabsStyled = styled.div<ITabsStyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .tab_selected {
    padding: 4px 8px;
    ${({ theme }) => css`
      transition: all 0.2s;
      color: ${theme.colors.textColoredOrange};
      background: ${theme.colors.backgroundSecondaryOrange};
    `}

    & > svg {
      fill: ${({ theme }) => theme.colors.componentPrimaryOrangePressed};
    }
  }
`;

TabsStyled.defaultProps = {
  theme: LIGHT_THEME
};
