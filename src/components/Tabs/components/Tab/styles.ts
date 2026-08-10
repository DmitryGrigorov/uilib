import React from "react";
import styled, { css } from "styled-components";
import P1 from "../../../typography/P1";
import P2 from "../../../typography/P2";
import { Padding } from "../../../Pallette/style-utils";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";
import { ITabProps } from "./types";

interface ITab extends Partial<ITabProps> {
  theme: ITheme;
}

type TTabComponentProps = Pick<ITab, "isDisabled" | "size" | "theme">;

export const TabStyled = styled.button<TTabComponentProps>`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  border-radius: 16px;
  align-items: center;
  gap: 4px;
  position: relative;
  padding: 4px;

  ${({ size = "l" }) => {
    switch (size) {
      case "l":
        return css`
          height: 40px;
        `;
      case "m":
        return css`
          height: 24px;
          border-radius: 8px;
        `;
    }
    return "";
  }}

  ${({ theme, isDisabled }) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        margin: 0;
        color: ${theme.colors.textBasicDisabled};
        background: none;
        padding: 4px;
      `;
    }
    return css`
      color: ${theme.colors.textBasicPressed};

      &:hover:enabled {
        transition: all 0.1s;
        color: ${theme.colors.textBasicHover};
        background: ${theme.colors.overlay2};
        box-shadow: none;
        padding: 4px 8px;
      }
    `;
  }}
  
  .tab__icon {
    color: unset;
    padding-left: 4px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

TabStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const TabContent = styled(P1)<{ forwardedAs: React.ElementType }>`
  ${Padding.allSide(1)}
`;

export const TabContentS = styled(P2)<{ forwardedAs: React.ElementType }>`
  ${Padding.allSide(1)}
`;
