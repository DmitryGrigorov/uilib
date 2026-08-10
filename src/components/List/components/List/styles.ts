import styled, { css } from "styled-components";
import { TListViewType } from "../../types";
import { LIGHT_THEME } from "../../../Pallette/themes";
import {
  defineResponsibleWidth,
  defineResponsibleHeight
} from "../../../utils/defineResponsibleSize";

export const ListStyled = styled.ul<{
  width?: number | string;
  height?: number | string;
}>`
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  ${({ width }) => defineResponsibleWidth(width)};
  ${({ height }) => defineResponsibleHeight(height)};
`;

ListStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const ListItemsWrapper = styled.div<{
  isExpand: boolean;
  type?: TListViewType;
  isHeader: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.3s;

  ${({ isExpand, type, isHeader }) => {
    if (type === "collapse" && isHeader) {
      return isExpand
        ? css`
            opacity: 1;
            max-height: 100%;
          `
        : css`
            opacity: 0;
            max-height: 0;
            display: none;
          `;
    }
    return null;
  }}
`;

ListItemsWrapper.defaultProps = {
  theme: LIGHT_THEME
};
