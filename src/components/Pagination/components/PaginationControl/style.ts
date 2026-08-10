import styled from "styled-components";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

export const PaginationControlStyled = styled.div<{
  theme?: ITheme;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 24px;

  .control-select__control {
    min-height: 0;
    cursor: pointer;
    width: auto;
    background-color: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
    border: none;
    border-radius: 8px;
    padding: 0 8px;
    gap: 4px;
    box-shadow: none;

    &:hover {
      border: none;
    }
  }

  .control-select__indicator-separator {
    display: none;
  }

  .control-select__value-container {
    padding: 0 4px;
    max-width: 70px;
  }

  .value-text {
    display: grid;
    align-items: center;
  }

  .control-select__indicator {
    padding: 0;
  }

  .dropdown-icon {
    padding: 4px;
  }
`;

PaginationControlStyled.defaultProps = {
  theme: LIGHT_THEME
};
