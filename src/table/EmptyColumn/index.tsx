import React from "react";
import { EmptyColumnStyled } from "./styles";
import { IEmptyColumn } from "./types";

const EmptyColumn: React.FC<IEmptyColumn> = ({ size, viewTypeDetail }) => (
  <EmptyColumnStyled size={size} viewTypeDetail={viewTypeDetail} />
);

export default EmptyColumn;
