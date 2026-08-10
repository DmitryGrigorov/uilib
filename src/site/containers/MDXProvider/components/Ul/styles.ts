import styled from "styled-components";
import { DarkThemeSite } from "../../../../themes/dark";

export const UlStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  margin-left: 16px;
  margin-bottom: 16px;
  column-gap: 40px;
  color: ${({ theme }) => theme.colorSecondary};
  overflow-x: auto;
`;

UlStyled.defaultProps = {
  theme: DarkThemeSite
};
