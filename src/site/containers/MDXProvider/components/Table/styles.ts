import styled, { css } from "styled-components";
import { TagStyled } from "../Td/styles";
import { DarkThemeSite } from "../../../../themes/dark";
import { ZINDEX } from "../../../../../components/Pallette/ZIndex";

export interface ITableProps {
  isScroll?: boolean;
}

export const TableStyled = styled.table<Pick<ITableProps, "isScroll">>`
  margin-bottom: 16px;
  overflow-x: auto;
  display: block;
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  box-shadow:
    inset 1px 0 ${({ theme }) => theme.backgroundSecondary},
    inset 0 1px ${({ theme }) => theme.background},
    1px 0 0 0 ${({ theme }) => theme.background},
    0 1px 0 0 ${({ theme }) => theme.background},
    1px 1px 0 0 ${({ theme }) => theme.background};
  border-collapse: unset;
  tr > th:first-child,
  tr > td:first-child {
    position: sticky;
    left: 0;

    ${({ isScroll, theme }) =>
      isScroll &&
      css`
        ${theme.shadowsTable?.rightShadow};
        transition: box-shadow 0.3s;
      `};
    ${TagStyled} {
      background: none;
      padding-left: 0;
    }
  }
  tr:nth-child(even) td {
    background: ${({ theme }) => theme.background};
  }

  tr:nth-child(odd) td {
    background: ${({ theme }) => theme.backgroundSecondary};
  }
  td:first-child {
    border-radius: 10px 0 0 10px;
    z-index: ${ZINDEX.widget};
  }
  td:last-child {
    border-radius: 0 10px 10px 0;
  }
  th,
  td {
    min-width: 382px;
  }

  tr > th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    padding-left: 8px;
  }

  tr > td:last-child {
    ${TagStyled} {
      background: none;
      padding-left: 0;
    }
  }
`;

TableStyled.defaultProps = {
  theme: DarkThemeSite
};
