import styled from "styled-components";
import { LIGHT_THEME, Dropdown, P1 } from "@dmitrygrigorov/components";

export const ColumnTitleTextStyled = styled(P1)`
  color: ${({ theme }) => theme.colors.textBasicPressed};
`;

ColumnTitleTextStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const ColumnDescriptionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const SortAndFilterDropdownStyled = styled(Dropdown)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
