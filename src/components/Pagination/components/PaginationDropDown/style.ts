import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../../../Pallette/themes";
import { ZINDEX } from "../../../Pallette/ZIndex";

export const PaginationDropDownStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
  width: auto;
  border-radius: 8px;
  position: relative;
`;

PaginationDropDownStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 0 8px;
  height: 32px;
`;

DropDownContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const DropDownHeader = styled.div<{
  isOpen?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  .paginationHeader-title {
    min-width: 30px;
    max-width: 5ch;
    padding: 0 4px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .pagination-dropdown-icon {
    padding: 4px;
  }

  .pagination-dropdown-icon {
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  }
`;

DropDownHeader.defaultProps = {
  theme: LIGHT_THEME
};

export const DropDownListContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: ${ZINDEX.tooltip};
  ${({ theme }) => css`
    ${theme.shadows.sp.bottom};
    background-color: ${theme.colors.backgroundTetriary0};
    color: ${theme.colors.textBasicDefault};
  `};
  border-radius: 8px;
  max-height: 300px;
  overflow: auto;
  margin: 8px 0;
  padding: 4px 0;
`;

DropDownListContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

DropDownList.defaultProps = {
  theme: LIGHT_THEME
};

export const ListItem = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 0 8px;
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.overlay2};
  }
`;

ListItem.defaultProps = {
  theme: LIGHT_THEME
};
