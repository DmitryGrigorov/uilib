import React, { KeyboardEvent, FocusEvent, ChangeEvent } from "react";
import { IconCalendar1, IconCalendarEdit1 } from "@dmitrygrigorov/icons";
import InputMask from "../../InputMask";

import { IInputMaskProps } from "../../InputMask/types";
import { IInputDateProps } from "../interfaces";
import {
  dateMask,
  dateRangeMask,
  dateRangeBlocksMask,
  PlaceholderChar,
  MaxDateTemplate,
  numericPattern
} from "../constants";

const isCorrectedDatePipe = (value: string, placeholderChar: string): any =>
  value
    .split(" / ")[1]
    .replace(new RegExp(placeholderChar, "gi"), "")
    .split(".")
    .map(Number)
    .every((date, idx) => isNaN(date) || date <= MaxDateTemplate[idx]);

const InputDate = ({
  id,
  placeholder,
  toggleCalendar,
  onDateChange,
  value,
  isRangeMode,
  error,
  onBlur,
  onFocus,
  placeholderChar = PlaceholderChar,
  onKeyDown,
  isShowClearIcon,
  isReadOnly,
  onClear,
  autoComplete,
  form,
  list,
  accessKey,
  ...other
}: IInputDateProps & Partial<IInputMaskProps>): JSX.Element => {
  const mask = isRangeMode ? dateRangeMask : dateMask;

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (
      isRangeMode &&
      value &&
      !isCorrectedDatePipe(
        value.replace(new RegExp(placeholderChar, ""), event.key),
        placeholderChar
      )
    ) {
      event.preventDefault();
    }
  };

  const isNumeric = (_value: string): boolean => numericPattern.test(_value);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    const cursorPos = Number(target.selectionStart);
    const _value = target.value || "";

    if (event.key === "Delete" && cursorPos < _value.length) {
      event.preventDefault();

      if (isNumeric(value.charAt(cursorPos))) {
        target.value = `${_value.substring(
          0,
          cursorPos
        )}${placeholderChar}${_value.substring(cursorPos + 1, _value.length)}`;
      }

      target.setSelectionRange(cursorPos + 1, cursorPos + 1);
      onDateChange?.(event, target.value);
    }

    onKeyDown?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    const target = event.target;
    setTimeout(() => target.setSelectionRange(0, 0), 0);
    onFocus?.(event);
  };

  return (
    <InputMask
      {...other}
      id={id}
      isReadOnly={isReadOnly}
      error={error}
      type="text"
      placeholder={placeholder}
      mask={mask}
      value={value}
      iconRight={
        value && !error && !other.status ? (
          <IconCalendarEdit1 />
        ) : (
          <IconCalendar1 />
        )
      }
      onFocus={handleFocus}
      onBlur={onBlur}
      onIconRightClick={toggleCalendar}
      onChange={(event, _value) =>
        onDateChange?.(event as ChangeEvent<HTMLInputElement>, _value)
      }
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
      isShowClearIcon={isShowClearIcon}
      onClear={onClear}
      autoComplete={autoComplete}
      form={form}
      list={list}
      accessKey={accessKey}
      blocks={isRangeMode ? dateRangeBlocksMask : undefined}
    />
  );
};

export default InputDate;
