import React, { FocusEvent, useMemo, useState } from "react";
import { INumberProps } from "./types";
import { StyledNumber, StyledPostfix, StyledValue, InputStyled } from "./style";

const NumberCell = <TValue,>({
  value,
  data,
  node,
  column,
  isEditable,
  onCellValueChanged,
  onCellEditingStarted,
  onRowEditingStarted,
  onRowEditingStopped,
  onCellEditingStopped,
  cellIcon
}: INumberProps<TValue>): JSX.Element => {
  const formattedValue = useMemo(() => {
    if (column.valueFormatter) {
      return column.valueFormatter({
        column,
        data,
        node,
        value
      });
    }
    return value;
  }, [value, column.valueFormatter, data]);

  const formattedValueDefiner = (): string =>
    String(formattedValue)
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      .replace(/\./g, ",");

  const valueViewDefiner = (): string =>
    String(value)
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      .replace(/\./g, ",");

  const inUseValueDefiner = (): string =>
    column.valueFormatter ? formattedValueDefiner() : valueViewDefiner();

  const [_defValue, setValue] = useState<string | TValue>(inUseValueDefiner());
  const [width, setWidth] = useState<number>(
    column.valueFormatter
      ? formattedValueDefiner().length
      : valueViewDefiner().length
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const _value = e.target.value;
    setValue(_value);
    setWidth(e.target.value.length);
    onCellValueChanged?.(
      value,
      _value as unknown as TValue,
      e as unknown as Event
    );
  };

  const handleFocus = (event: FocusEvent): void => {
    onCellEditingStarted?.(value, event as unknown as Event);
    onRowEditingStarted?.(event as unknown as Event);
    setIsEditing(true);
    setValue(String(value));
    setWidth(
      column.valueFormatter
        ? formattedValueDefiner().length
        : valueViewDefiner().length
    );
  };

  const handleBlur = (event: FocusEvent): void => {
    onCellEditingStopped?.(
      value,
      _defValue as unknown as TValue,
      event as unknown as Event
    );
    setValue(inUseValueDefiner());
    onRowEditingStopped?.(event as unknown as Event);
    setWidth(
      column.valueFormatter
        ? formattedValueDefiner().length
        : valueViewDefiner().length
    );
    setIsEditing(false);
  };

  return (
    <StyledNumber>
      <StyledValue isEditable={isEditable}>
        {isEditable ? (
          <InputStyled
            style={{ width: width + "ch" }}
            defaultValue={inUseValueDefiner()}
            value={String(_defValue)}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          inUseValueDefiner()
        )}
      </StyledValue>
      {!isEditing && <StyledPostfix>{cellIcon}</StyledPostfix>}
    </StyledNumber>
  );
};

export default NumberCell;
