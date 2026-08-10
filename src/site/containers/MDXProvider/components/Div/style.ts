import styled from "styled-components";
import { DarkThemeSite } from "../../../../themes/dark";

export const DivStyled = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 24px;
  &.notshown {
    display: none;
  }
`;

DivStyled.defaultProps = {
  theme: DarkThemeSite
};
