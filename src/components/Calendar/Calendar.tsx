import React from "react";

import { ICalendarProps } from "./interfaces";
import { calendarAriaLabel } from "./locale";
import { CalendarRoot } from "./styles";
import Header from "./components/Header";
import Months from "./components/Months";
import Years from "./components/Years";
import CalendarList from "./components/CalendarList";
import { useCalendar } from "./hooks/useCalendar";

const Calendar = ({
  locale = "ru",
  isRangeMode = false,
  hasButtons = false,
  date = "",
  setDateToInput,
  closeCalendar,
  minDate,
  maxDate,
  id,
  testId = "testIDWithoutName"
}: ICalendarProps): JSX.Element => {
  const {
    currentMonthName,
    currentYear,
    yearRangeEnd,
    isMonthEditing,
    isYearEditing,
    setIsMonthEditing,
    setIsYearEditing,
    months,
    years,
    days,
    isRangeSubmitDisabled,
    goToNext,
    goToPrevious,
    selectMonth,
    selectYear,
    selectDay,
    confirmRangeSelection,
    cancelRangeSelection
  } = useCalendar({
    locale,
    isRangeMode,
    date,
    setDateToInput,
    closeCalendar,
    minDate,
    maxDate,
    id
  });

  return (
    <CalendarRoot
      id={id}
      role="group"
      aria-label={calendarAriaLabel[locale]}
      data-testid={`${testId}_calendar`}
      data-element="calendar">
      <Header
        locale={locale}
        currentMonth={currentMonthName}
        currentYear={currentYear}
        yearEnd={yearRangeEnd}
        isMonthEditing={isMonthEditing}
        isYearEditing={isYearEditing}
        setIsMonthEditing={setIsMonthEditing}
        setIsYearEditing={setIsYearEditing}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />

      {isMonthEditing && (
        <Months locale={locale} changeMonth={selectMonth} data={months} />
      )}
      {isYearEditing && (
        <Years locale={locale} changeYear={selectYear} data={years} />
      )}
      {!isMonthEditing && !isYearEditing && (
        <CalendarList
          locale={locale}
          days={days}
          isRangeMode={isRangeMode}
          hasButtons={hasButtons}
          isRangeSubmitDisabled={isRangeSubmitDisabled}
          onSelectDay={selectDay}
          onConfirm={confirmRangeSelection}
          onCancel={cancelRangeSelection}
        />
      )}
    </CalendarRoot>
  );
};

export default Calendar;
