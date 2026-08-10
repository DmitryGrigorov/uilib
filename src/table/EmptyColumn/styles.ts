import styled from "styled-components";
import { IEmptyColumn } from "./types";

export const EmptyColumnStyled = styled.th<IEmptyColumn>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: ${({ viewTypeDetail }) => (viewTypeDetail ? "48px" : "64px")};
  height: ${({ size }) => {
    if (size === "m") {
      return "56px";
    }
    if (size === "s") {
      return "48px";
    }
    return "64px";
  }};
`;
