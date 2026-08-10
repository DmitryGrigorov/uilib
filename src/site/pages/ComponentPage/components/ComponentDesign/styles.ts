import styled from "styled-components";
import { Shape } from "../../../../../components/Pallette/Shape";
import { DarkThemeSite } from "../../../../themes/dark";
import { GridItem, Grid } from "../../../../components/GridLayout";

export const ComponentDesignStyled = styled(Grid).attrs({
  $cols: 9
})`
  height: 100%;
  .component-design__card {
    background: ${({ theme }) => theme.backgroundSecondary};
    border-radius: ${Shape.borderRadiusMedium};
  }

  .component-design__card-component {
    padding: 48px 28px;
  }

  #Calendar,
  #ColorPicker {
    background: transparent;
  }

  #Banner {
    grid-column-end: 12;
  }

  #Banner-variants {
    grid-column-start: 1;
    grid-column-end: 12;
  }
`;

ComponentDesignStyled.defaultProps = {
  theme: DarkThemeSite
};

export const ComponentViewStyled = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 6
})`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-height: 600px) {
    overflow: auto;
  }
`;
