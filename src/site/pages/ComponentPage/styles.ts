import styled, { css } from "styled-components";
import { GridItem, Grid } from "../../components/GridLayout";
import { DarkThemeSite } from "../../themes/dark";
import { MEDIA } from "../../../components/Pallette/style-utils";
import { Shape } from "../../../components/Pallette/Shape";
import Status from "../../../components/Status";
import H from "../../../components/typography/H";

export const ComponentPageStyled = styled(Grid).attrs({
  $cols: 8
})<{ tab: string | number }>`
  ${({ tab }) =>
    tab === "design" &&
    css`
      @media (min-height: 600px) {
        max-height: calc(100vh - 80px);
      }
    `};
  grid-template-rows: max-content max-content 1fr;
`;

export const ComponentPageHeader = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 9
})`
  height: max-content;
  padding: 52px 28px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: ${Shape.borderRadiusMedium};
`;

ComponentPageHeader.defaultProps = {
  theme: DarkThemeSite
};

export const ComponentPageTitle = styled(H)`
  margin-bottom: 56px;
  display: flex;
  align-items: center;
`;

export const ComponentPageSubTitle = styled(H)`
  margin-bottom: 16px;
`;

export const ComponentDescriptionArrayWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ComponentDescriptionWrapper = styled.div`
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

export const ComponentPageStatus = styled(Status).attrs({
  status: "success",
  isFilled: true
})`
  margin-right: 0;
  margin-left: auto;
`;

export const ComponentPageTabPanelStyled = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 9
})<{ value: string }>`
  ${({ value }) =>
    value === "docs" &&
    css`
      height: max-content;
    `};

  @media (min-height: 600px) {
    overflow: hidden;
  }
`;
