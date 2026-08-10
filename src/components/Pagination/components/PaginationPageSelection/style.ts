import styled from "styled-components";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

export const PaginationPageSelectionStyled = styled.div<{
  theme?: ITheme;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 24px;
`;

PaginationPageSelectionStyled.defaultProps = {
  theme: LIGHT_THEME
};
