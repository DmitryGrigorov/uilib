import styled from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { ZINDEX } from "../Pallette/ZIndex";
import { SnackBarStyled } from "./components/SnackBar/styles";

export const SnackBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  z-index: ${ZINDEX.tooltip};
  bottom: 20px;

  ${SnackBarStyled}:not(:last-child) {
    margin-bottom: 12px;
  }
`;

SnackBarWrapper.defaultProps = {
  theme: LIGHT_THEME
};
