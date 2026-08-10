import React, { ChangeEvent, KeyboardEvent } from "react";
import { CheckBox } from "@dmitrygrigorov/components";
import { TableColumnBaseStyled, TableColumnTitleStyled } from "../styles";
import { useObservable, useTableService } from "../TableContext";
import { IColumnCheckBoxProps } from "./types";

const ColumnCheckBox = <TData, TValue>({
  size,
  isHiddenCheckbox
}: IColumnCheckBoxProps): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const rowsSelection = useObservable(tableService.rowsSelection);

  const handleSetAllRowSelection = (
    _: ChangeEvent | KeyboardEvent,
    value: boolean
  ): void => {
    tableService.selectAllRows(value);
  };

  return (
    <TableColumnBaseStyled isCheckboxSelection size={size}>
      <TableColumnTitleStyled>
        {!isHiddenCheckbox && (
          <CheckBox
            isIndeterminate={rowsSelection === "some"}
            isChecked={rowsSelection === "all"}
            onChange={handleSetAllRowSelection}
          />
        )}
      </TableColumnTitleStyled>
    </TableColumnBaseStyled>
  );
};

export default ColumnCheckBox;
