import React, { useState, FocusEvent, useMemo } from "react";
import { Tooltip } from "@dmitrygrigorov/components";
import { CellTitleStyled } from "../../styles";
import { EditableContainer, InputStyled } from "./style";
import { BasicCellProps } from "./types";

const BasicCell = <TData, TValue>({
  isEditable,
  value,
  onCellValueChanged,
  onCellEditingStarted,
  onCellEditingStopped,
  onRowEditingStarted,
  onRowEditingStopped,
  node,
  data,
  column,
  width,
  valueFormatter,
  isTooltip,
  cellIcon
}: BasicCellProps<TData, TValue>): JSX.Element => {
  const [_defValue, setValue] = useState<string>(value as unknown as string);
  const [widthEditable, setWidthEditable] = useState<number>(
    String(value).length
  );

  const cellTrailContent = useMemo(() => {
    if (typeof column.cellTrailContent === "function") {
      return column.cellTrailContent({ value, column, data, node });
    }
    return column.cellTrailContent;
  }, [column.cellTrailContent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const _value = e.target.value;
    setValue(_value);
    setWidthEditable(e.target.value.length);
    onCellValueChanged?.(
      value,
      _value as unknown as TValue,
      e as unknown as Event
    );
  };

  const handleFocus = (event: FocusEvent): void => {
    onCellEditingStarted?.(value, event as unknown as Event);
    onRowEditingStarted?.(event as unknown as Event);
  };

  const handleBlur = (event: FocusEvent): void => {
    onCellEditingStopped?.(
      value,
      _defValue as unknown as TValue,
      event as unknown as Event
    );
    onRowEditingStopped?.(event as unknown as Event);
  };

  return (
    <CellTitleStyled width={width}>
      <EditableContainer
        type="corvus"
        forwardedAs="div"
        isEditable={isEditable}>
        <>
          {cellIcon}
          {isEditable ? (
            <InputStyled
              style={{ width: widthEditable + "ch" }}
              value={String(_defValue)}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <Tooltip text={valueFormatter} isVisible={isTooltip}>
              <span>{valueFormatter}</span>
            </Tooltip>
          )}
        </>
      </EditableContainer>
      {cellTrailContent}
    </CellTitleStyled>
  );
};

export default BasicCell;
