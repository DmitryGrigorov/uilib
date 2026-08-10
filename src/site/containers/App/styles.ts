import styled from "styled-components";
import { DarkThemeSite } from "../../themes/dark";
import { GridItem, Grid } from "../../components/GridLayout";
import { MEDIA } from "../../../components/Pallette/style-utils";

export const AppWrapper = styled.div`
  min-height: 100vh;
  padding-top: 16px;
  background: ${({ theme }) => theme.background};
  background-size: cover;

  @media (max-width: 949px) {
    padding-top: 8px;
  }
`;

export const AppGrid = styled(Grid).attrs({
  $cols: 12,
  $isLeftRightGap: true
})`
  min-height: calc(100vh - 80px);
`;

export const GridItemRouterStyled = styled(GridItem).attrs({
  $colStart: 5,
  $colEnd: 15
})`
  height: calc(100vh - 80px);
  overflow: auto;
  padding-top: 40px;
  padding-bottom: 40px;

  ${MEDIA.desktopXl`
    padding-right: 40px;
  `};
  ${MEDIA.desktopL`
    padding-right: 32px;
  `};
  ${MEDIA.desktopM`
    padding-right 24px;
  `};
  ${MEDIA.mobile`
    padding-right: 24px;
  `};
`;

AppWrapper.defaultProps = {
  theme: DarkThemeSite
};
