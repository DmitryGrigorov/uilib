import React from "react";

import { ICalendarListProps, IDay } from "../interfaces";
import {
  weekCalendar,
  closeBtn,
  cancelBtn,
  daysListAriaLabel
} from "../locale";
import Button from "../../Button";
import {
  CalendarContainer,
  WeekContainer,
  WeekItem,
  DaysContainer,
  DaysItem,
  ButtonContainer,
  DividerCalendarCurrenDay
} from "../styles";
import { P2 } from "../../typography";
import { getAccessibleDateLabel } from "../utils/dateHelpers";

import { useRovingFocus } from "../hooks/useRovingFocus";

const GRID_COLUMNS = 7;

const findPreferredIndex = (days: IDay[]): number => {
  const selectedIndex = days.findIndex(
    (day) => day.isActive || day.isRangeStart || day.isRangeEnd
  );
  if (selectedIndex !== -1) {
    return selectedIndex;
  }

  const todayIndex = days.findIndex(
    (day) => day.isToday && !day.isPrevMonth && !day.isNextMonth
  );
  if (todayIndex !== -1) {
    return todayIndex;
  }

  const firstEnabledIndex = days.findIndex(
    (day) => !day.isDisabled && !day.isPrevMonth && !day.isNextMonth
  );

  return firstEnabledIndex === -1 ? 0 : firstEnabledIndex;
};

const CalendarList = ({
  locale,
  days,
  isRangeMode,
  hasButtons,
  isRangeSubmitDisabled,
  onSelectDay,
  onConfirm,
  onCancel
}: ICalendarListProps): JSX.Element => {
  const week = weekCalendar[locale];
  const activeIndex = findPreferredIndex(days);

  const { getTabIndex, registerItem, onKeyDown } = useRovingFocus({
    itemCount: days.length,
    columns: GRID_COLUMNS,
    activeIndex,
    isItemDisabled: (index) => Boolean(days[index]?.isDisabled),
    onActivate: (index) => onSelectDay(days[index])
  });

  return (
    <CalendarContainer data-element="calendar-list">
      <WeekContainer>
        {week.map((weekday: string) => (
          <WeekItem key={weekday}>
            <P2 type="pavo">{weekday}</P2>
          </WeekItem>
        ))}
      </WeekContainer>
      <DaysContainer
        role="listbox"
        aria-label={daysListAriaLabel[locale]}
        aria-multiselectable={isRangeMode}
        data-element="calendar-days-container">
        {days.map((day: IDay, index: number) => (
          <DaysItem
            ref={registerItem(index)}
            role="option"
            aria-selected={
              day.isActive ||
              day.isRangeStart ||
              day.isRangeEnd ||
              !!day.isInRange
            }
            aria-disabled={day.isDisabled}
            aria-current={day.isToday ? "date" : undefined}
            aria-label={
              day.dateValue
                ? getAccessibleDateLabel(day.dateValue, locale)
                : undefined
            }
            tabIndex={getTabIndex(index)}
            data-element="calendar-day"
            data-element-day={
              day.isPrevMonth || day.isNextMonth ? "diff-month" : ""
            }
            onClick={(event) => onSelectDay(day, event)}
            onKeyDown={(event) => onKeyDown(event, index)}
            isDisabled={day.isDisabled}
            isActive={day.isActive}
            isToday={day.isToday && !day.isDisabled}
            isDiffMonth={day.isPrevMonth || day.isNextMonth}
            isInRange={day.isInRange}
            isRangeStart={day.isRangeStart}
            isRangeEnd={day.isRangeEnd}
            key={day.date ?? day.id}>
            <P2 type="lynx">{day.day}</P2>
            {day.isToday && !day.isDisabled && <DividerCalendarCurrenDay />}
          </DaysItem>
        ))}
      </DaysContainer>
      {isRangeMode && hasButtons && (
        <ButtonContainer data-element="calendar-btn-container">
          <Button
            data-element="calendar-cancelBtn"
            viewType="secondary"
            width="140px"
            onClick={onCancel}
            isDisabled={isRangeSubmitDisabled}
            size="m">
            {cancelBtn[locale]}
          </Button>
          <Button
            data-element="calendar-closeBtn"
            width="140px"
            onClick={onConfirm}
            isDisabled={isRangeSubmitDisabled}
            size="m">
            {closeBtn[locale]}
          </Button>
        </ButtonContainer>
      )}
    </CalendarContainer>
  );
};

export default CalendarList;
