import styled from "styled-components";
import { LIGHT_THEME } from "@dmitrygrigorov/components";

export const TableColumnsRow = styled.thead`
  th {
    background: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
  }
  tr:first-child th:first-child {
    border-radius: 8px 0 0 0;
  }

  tr:first-child th:last-child {
    border-radius: 0 8px 0 0;
  }

  tr:first-child {
    position: sticky;
    top: 0;
    z-index: 1;
    th {
      border-bottom: 1px solid ${({ theme }) => theme.colors.neutral2};
    }
  }
`;

TableColumnsRow.defaultProps = {
  theme: LIGHT_THEME
};
