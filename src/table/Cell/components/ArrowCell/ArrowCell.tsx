import React, { FC } from "react";
import { IconArrowRight1 } from "@dmitrygrigorov/icons";
import { TTableSize } from "../../../types";
import TableButton from "../../../components/TableButton";
import { ArrowCellStyled } from "./styles";

interface IArrowCellProps {
  isCollapsed?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: TTableSize;
}

const ArrowCell: FC<IArrowCellProps> = ({ isCollapsed, onClick, size }) => (
  <ArrowCellStyled isCollapsed={isCollapsed} size={size}>
    <TableButton
      size="xs"
      isPressed={!isCollapsed}
      onClick={onClick}
      icon={<IconArrowRight1 />}
    />
  </ArrowCellStyled>
);

export default ArrowCell;
