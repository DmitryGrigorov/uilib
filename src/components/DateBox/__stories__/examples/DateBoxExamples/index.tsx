import React from "react";
import DateBox from "../../../index";
import { TDateBoxSize } from "../../../types";

export const DateBoxExampleDefault: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => <DateBox size={size}>22</DateBox>;

export const DateBoxExampleWeekend: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="weekend" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleCurrent: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="current" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleSelected: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="selected" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleStart: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="start" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleIn: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="in" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleFinish: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox viewType="finish" size={size}>
    22
  </DateBox>
);

export const DateBoxExampleIsDisable: React.FC<{ size?: TDateBoxSize }> = ({
  size
}) => (
  <DateBox isDisabled size={size}>
    22
  </DateBox>
);
