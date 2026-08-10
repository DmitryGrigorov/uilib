import styled from "styled-components";
import { IImageCellProps } from "./types";

export const StyledImage = styled.img<IImageCellProps>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
