import styled from "styled-components";
import { DarkThemeSite } from "../../../../themes/dark";
import { Shape } from "../../../../../components/Pallette/Shape";
import { GridItem } from "../../../../components/GridLayout";

export const ComponentDocsWrapper = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 9
})`
  border-radius: ${Shape.borderRadiusMedium};
`;

ComponentDocsWrapper.defaultProps = {
  theme: DarkThemeSite
};
