import styled from "styled-components";
import { DarkThemeSite } from "../../../../themes/dark";

export const OlStyled = styled.ol`
  margin-bottom: 16px;
  margin-left: 16px;
  list-style-type: none;
  color: ${({ theme }) => theme.colorSecondary};
  & li {
    margin-bottom: 3px;
  }
`;

OlStyled.defaultProps = {
  theme: DarkThemeSite
};
