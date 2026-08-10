import styled from "styled-components";
import { LIGHT_THEME } from "../../../Pallette/themes";
import { TInputSize } from "../../../InputBase";

export const SelectBaseClearIndicatorStyled = styled.div<{ size?: TInputSize }>`
  cursor: pointer;

  margin-right: ${({ size }) => (size === "m" ? "12px" : "20px")};
  svg {
    color: ${({ theme }) => theme.colors.textBasicPressed};
  }
`;

SelectBaseClearIndicatorStyled.defaultProps = {
  theme: LIGHT_THEME
};
