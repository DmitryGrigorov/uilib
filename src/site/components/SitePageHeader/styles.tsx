import styled from "styled-components";
import { Shape } from "../../../components/Pallette/Shape";
import { GridItem } from "../GridLayout";

export const StyledHeader = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 9
})`
  background: ${({ theme }) => theme.backgroundSecondary};
  height: max-content;
  grid-template-rows: 288px;
  padding: 48px 24px;
  border-radius: ${Shape.borderRadiusMedium};
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const StyledRealesedState = styled.div`
  padding: 4px 8px;
  color: ${({ theme }) => theme.sitePageHeader?.colorReleaseText};
  background: ${({ theme }) => theme.sitePageHeader?.backgroundRelease};
  text-align: center;
  align-self: center;
  border-radius: 8px;
`;
