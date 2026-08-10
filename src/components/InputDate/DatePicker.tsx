import React, { ChangeEvent } from "react";
import Calendar from "../Calendar/Calendar";

import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";

import { IDatePickerProps } from "./interfaces";
import { useDatePicker } from "./hooks/useDatePicker";
import { PlaceholderChar } from "./constants";
import { DatePickerWrapper, CalendarWrapper, StyledInputDate } from "./styles";

const InputDate: React.FC<TPropsWithAttributes<IDatePickerProps>> = ({
  id,
  isCalendar = true,
  idCalendar,
  locale = "ru",
  isRangeMode = false,
  onChange,
  placeholder,
  maxDate = "31.12.2999",
  minDate = "01.01.1700",
  onKeyDown,
  isShowMask = true,
  className,
  value = "",
  onCalendarClose,
  onCalendarOpen,
  onDateSelected,
  placeholderChar = PlaceholderChar,
  onBlur,
  onFocus,
  isDisabled,
  testId = "inputDate",
  width,
  status,
  size,
  isRequired,
  isShowClearIcon,
  iconLeft,
  iconRight,
  isReadOnly,
  viewType,
  onClear,
  autoComplete,
  form,
  list,
  accessKey,
  ...otherProps
}) => {
  const useInternalError = !("statusText" in otherProps);
  const { statusText } = otherProps;

  const {
    datePickerRef,
    isCalendarShown,
    toggleCalendar,
    currentDate,
    error,
    isShowMask: isMaskVisible,
    onDateChange,
    handleKeyDown,
    handleFocus,
    handleBlur,
    handleCloseCalendar,
    handleSettingDateToInputFromCalendar
  } = useDatePicker({
    id,
    isRangeMode,
    onChange,
    minDate,
    maxDate,
    onKeyDown,
    isShowMask,
    value,
    onCalendarClose,
    onCalendarOpen,
    onDateSelected,
    onBlur,
    onFocus,
    isRequired,
    useInternalError
  });

  return (
    <DatePickerWrapper
      width={width}
      className={className}
      ref={datePickerRef}
      aria-expanded={isCalendarShown}>
      <StyledInputDate
        className={className}
        testId={testId}
        id={id}
        isCalendarShown={isCalendarShown}
        placeholder={placeholder}
        isRangeMode={isRangeMode}
        toggleCalendar={toggleCalendar}
        onDateChange={(event, _value, _id) =>
          onDateChange(
            event as ChangeEvent<HTMLInputElement>,
            _value,
            _id as string
          )
        }
        value={currentDate}
        isDisabled={isDisabled}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus}
        isShowMask={isMaskVisible}
        type="text"
        placeholderChar={placeholderChar}
        width={width}
        statusText={useInternalError ? error : statusText}
        isRequired={isRequired}
        isShowClearIcon={isShowClearIcon}
        status={error ? "error" : status}
        size={size}
        iconLeft={iconLeft}
        iconRight={iconRight}
        isReadOnly={isReadOnly}
        viewType={viewType}
        onClear={onClear}
        autoComplete={autoComplete}
        form={form}
        list={list}
        accessKey={accessKey}
      />
      {isCalendar && isCalendarShown && (
        <CalendarWrapper id={idCalendar ? `${idCalendar}_popup` : undefined}>
          <Calendar
            id={idCalendar}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
            isRangeMode={isRangeMode}
            closeCalendar={handleCloseCalendar}
            date={value}
            setDateToInput={(date, event, _id) =>
              handleSettingDateToInputFromCalendar(
                event as ChangeEvent<HTMLInputElement>,
                date,
                _id as string
              )
            }
          />
        </CalendarWrapper>
      )}
    </DatePickerWrapper>
  );
};

export default InputDate;
