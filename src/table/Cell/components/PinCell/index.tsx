import React, { MouseEvent } from "react";
import { IconPin } from "@dmitrygrigorov/icons";
import { CellStyled } from "../../styles";
import { useTableService } from "../../../TableContext";
import { TableButtonStyled } from "./styles";
import { IPinCellProps } from "./types";

const PinCell = <TData,>({
  size,
  isHover,
  isPressed,
  node
}: IPinCellProps<TData>): React.ReactElement => {
  const tableService = useTableService<TData>();

  const handleClick = (event: MouseEvent): void => {
    event.preventDefault();
    if (isPressed) {
      tableService.setUnpinnedRow(node);
    } else {
      tableService.setPinnedRows([node]);
    }
  };

  return (
    <CellStyled size={size}>
      <TableButtonStyled
        isHover={isHover}
        icon={<IconPin />}
        size="s"
        isPressed={isPressed}
        onClick={handleClick}
      />
    </CellStyled>
  );
};

export default PinCell;
