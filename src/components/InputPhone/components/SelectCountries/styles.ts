import styled from "styled-components";
import { LIGHT_THEME } from "../../../Pallette/themes";

export const SelectCountriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.dividers.secondary.right};

  svg {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }
`;

SelectCountriesWrapper.defaultProps = {
  theme: LIGHT_THEME
};
