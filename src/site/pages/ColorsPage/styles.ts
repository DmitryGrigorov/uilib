import styled, { css } from "styled-components";
import H from "../../../components/typography/H";
import P2 from "../../../components/typography/P2";
import { DarkThemeSite } from "../../themes/dark";
import { Shape } from "../../../components/Pallette/Shape";
import { Grid, GridItem } from "../../components/GridLayout";
import { MEDIA } from "../../../components/Pallette/style-utils";
import Tabs from "../../../components/Tabs";

export const ColorsPageStyled = styled(Grid).attrs({
  $cols: 8
})<{ tab: string }>`
  ${({ tab }) =>
    tab === "design" &&
    css`
      @media (min-height: 600px) {
        max-height: calc(100vh - 80px);
      }
    `};
  grid-template-rows: max-content max-content 1fr;
  .text_align_center {
    justify-items: center;
  }
  .color-page__header__holder {
    display: flex;
    gap: 180px;
  }
  .color-page__table__header {
    margin-bottom: 68px;
  }
  .color-page__table {
    & > * {
      align-self: center;
    }
    vertical-align: middle;
    margin-bottom: 32px;
  }
`;

export const ColorPageContent = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 4
})<{ $padding?: string }>`
  background: ${({ theme }) => theme.backgroundSecondary};
  grid-template-rows: 288px;
  vertical-align: center;
  align-items: center;
  padding: ${({ $padding }) => $padding};
  border-radius: ${Shape.borderRadiusMedium};
`;

export const ColorPageTitle = styled(H)`
  margin-bottom: 56px;
`;

export const ColorPageSubTitle = styled(H)`
  margin-bottom: 16px;
`;

export const ColorPageDescription = styled(P2)`
  margin-bottom: 12px;
`;

export const ColorPageCard = styled(GridItem)`
  padding: 48px 24px 24px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: ${Shape.borderRadiusMedium};
  margin: 40px 0px;
  .color-page__header__holder {
    display: flex;
  }
`;

ColorPageCard.defaultProps = {
  theme: DarkThemeSite
};

export const ColorsPageTabPanelStyled = styled(Tabs.TabPanel)`
  @media (min-height: 600px) {
    overflow: hidden;
  }
  margin-top: 40px;
  overflow-y: hidden;
  height: 100%;
`;

export const ColorsPageDescriptionWrapper = styled.div`
  ${MEDIA.desktopXl`
    max-width: 382px;
  `};

  ${MEDIA.desktopL`
    max-width: 288px;
  `};

  ${MEDIA.desktopM`
    max-width: 194px;
  `}

  ${MEDIA.mobile`
    max-width: 327px;
  `};
`;

export const ColorExample = styled.div<{ $color?: string }>`
  width: 80px;
  height: 80px;
  border: 1px solid
    ${({ theme }) => theme.foundation?.colorsPage.borderColorExample};
  border-radius: 50%;
  ${({ $color }) =>
    $color &&
    css`
      background-color: ${$color};
    `};
`;

export const ColorBadge = styled.div`
  padding: 4px 8px;
  border-radius: 16px;
  width: min-content;
  white-space: nowrap;
  place-self: center;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.foundation?.backgroundBadgeHover};
  }
  text-align: center;
  background-color: ${({ theme }) => theme.foundation?.backgroundBadge};
`;

export const StyledTable = styled(Grid)<{ isOverlay?: string }>`
  grid-template-columns: ${({ isOverlay }) =>
    isOverlay ? "1fr 1.8fr 2fr 2.5fr 2.5fr" : "1fr 1.8fr 2fr 2.5fr"};
  grid-template-rows: 50px;
  align-items: center;
  justify-items: center;
  .left-align {
    justify-self: start;
    text-align: left;
  }
  .top-align {
    align-self: start;
  }
`;
