import React, { useState } from "react";
import Calendar from "../../Calendar";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";

export const CalendarExample = (): JSX.Element => <Calendar />;

export const CalendarMinMaxDate = (): JSX.Element => (
  <Calendar minDate={"02.11.2023"} maxDate={"20.11.2023"} />
);

export const CalendarWithEventHandlers = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <Calendar
      date={value}
      setDateToInput={(date) => {
        setValue(date);
      }}
    />
  );
};

export const CalendarRangeWithEventHandlers = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <Calendar
      isRangeMode={true}
      date={value}
      setDateToInput={(date) => {
        setValue(date);
      }}
    />
  );
};

export const CalendarExamples = (): JSX.Element => {
  const CALENDAR_EXAMPLES = [
    {
      key: "default",
      example1: <CalendarExample />
    }
  ];

  return <StorybookDocExamples items={CALENDAR_EXAMPLES} />;
};
