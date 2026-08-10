import React from "react";
import { StyledImage } from "./style";
import { IImageCellProps } from "./types";

const ImageCell = ({ img }: IImageCellProps): JSX.Element => (
  <StyledImage src={img} />
);

export default ImageCell;
