import styled, { css } from "styled-components";
import Divider from "../Divider";
import { LIGHT_THEME } from "../Pallette/themes";
import { ZINDEX } from "../Pallette/ZIndex";
import { TDropdownDirection, IDropdownProps } from "./types";

type TDropdownStyledProps = Required<Pick<IDropdownProps, "direction">> & {
  top?: number;
  left?: number;
  width?: string;
};

const getBorderRadius = (direction: TDropdownDirection): string => {
  switch (direction) {
    case "bottomLeft":
      return "0 16px 16px 16px";
    case "bottomRight":
      return "16px 0 16px 16px";
    case "topLeft":
      return "16px 16px 16px 0";
    case "topRight":
      return "16px 16px 0 16px";
    default:
      return "16px";
  }
};

export const DropdownListWrapper = styled.div<TDropdownStyledProps>`
  ${({ theme, direction }) => css`
    background: ${theme.colors.backgroundTetriary0};
    ${theme.shadows.hp.bottom};
    padding: ${theme.shape.borderRadiusMedium};
    border-radius: ${getBorderRadius(direction)};
  `};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ top, left }) =>
    top &&
    left &&
    css`
      left: ${left}px;
      top: ${top}px;
      position: absolute;
      z-index: ${ZINDEX.tooltip};
    `};
`;

DropdownListWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const DropdownItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DividerStyled = styled(Divider)`
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: max-content;
`;
