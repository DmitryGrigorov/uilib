import React, { FC, ChangeEvent, KeyboardEvent } from "react";
import { CheckBox } from "@dmitrygrigorov/components";
import { TTableSize } from "../../../types";
import { CellStyled } from "../../styles";

interface ICheckboxCellProps {
  isSelected: boolean;
  handleChange: (e: ChangeEvent | KeyboardEvent, value: boolean) => void;
  size: TTableSize;
  isSelectable: boolean;
}

const CheckboxCell: FC<ICheckboxCellProps> = ({
  isSelected,
  handleChange,
  isSelectable,
  size
}) => (
  <CellStyled className={isSelected ? "pinning-cell" : undefined} size={size}>
    <CheckBox
      isDisabled={!isSelectable}
      isChecked={isSelected}
      onChange={(e, value: boolean) => handleChange(e, value)}
      onClick={(e) => e.stopPropagation()}
    />
  </CellStyled>
);

export default CheckboxCell;
