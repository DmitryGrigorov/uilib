import React, { FC } from "react";
import { IconAddCircle, IconMinusCircle } from "@dmitrygrigorov/icons";
import TableButton from "../../../components/TableButton";
import { TTableSize } from "../../../types";
import { PlusCellStyled } from "./styles";

interface IPlusCellProps {
  isCollapsed?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: TTableSize;
}

const PlusCell: FC<IPlusCellProps> = ({ isCollapsed, onClick, size }) => (
  <PlusCellStyled size={size}>
    <TableButton
      isPressed={!isCollapsed}
      onClick={onClick}
      icon={isCollapsed ? <IconAddCircle /> : <IconMinusCircle />}
    />
  </PlusCellStyled>
);

export default PlusCell;
