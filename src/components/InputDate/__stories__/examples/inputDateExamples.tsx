import React, { useState } from "react";
import {
  IconSetting1,
  IconInfoDanger,
  IconInfoWarning,
  IconTickCircle
} from "@dmitrygrigorov/icons";
import { TInputSize } from "../../../InputBase/interfaces";
import InputDate from "../../DatePicker";

export const InputExample: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      width="400px"
      value={value}
      placeholder={"Select a date"}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
    />
  );
};

export const InputDateMinMaxExample: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      value={value}
      minDate={"01.12.2022"}
      maxDate={"01.06.2023"}
      placeholder={"Select a date"}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
    />
  );
};

export const InputRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      width="400px"
      value={value}
      isRequired
      placeholder={"Select a date"}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
    />
  );
};

export const InputIconLeft: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconLeft={<IconSetting1 width={14} height={14} />}
      isShowClearIcon={true}
    />
  );
};

export const InputRequiredIconLeft: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      placeholder={"Select a date"}
      value={value}
      size={size}
      width="400px"
      isRequired
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconLeft={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputIconRight: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputRequiredIconRight: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      isDisabled
    />
  );
};

export const InputRequiredDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      placeholder={"Select a date"}
      value={value}
      isRequired
      size={size}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      isDisabled
    />
  );
};

export const InputIconLeftDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconLeft={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputRequiredIconLeftDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      placeholder={"Select a date"}
      value={value}
      size={size}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconLeft={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputIconRightDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconRight={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputRequiredIconRightDisabled: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={"Select a date"}
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      iconRight={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputError: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Error label"
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputErrorRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Error label"
      value={value}
      width="400px"
      isRequired
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputErrorIsIcon: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="error"
      width="400px"
      statusText="Error text"
      iconLeft={<IconInfoDanger width={14} height={14} />}
    />
  );
};

export const InputErrorIsIconRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Error label"
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="error"
      statusText="Error text"
      iconLeft={<IconInfoDanger width={14} height={14} />}
    />
  );
};

export const InputWarning: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Warning label"
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputWarningRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Warning label"
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputWarningIsIcon: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="warning"
      width="400px"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputWarningIsIconRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Warning label"
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="warning"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputSuccess: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Success label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="success"
      width="400px"
      statusText="Success text"
    />
  );
};

export const InputSuccessRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Success label"
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="success"
      statusText="Success text"
    />
  );
};

export const InputSuccessIsIcon: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Success label"
      value={value}
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="success"
      statusText="Success text"
      iconLeft={<IconTickCircle width={14} height={14} />}
    />
  );
};

export const InputSuccessIsIconRequired: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Success label"
      value={value}
      isRequired
      width="400px"
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="success"
      statusText="Success text"
      iconLeft={<IconTickCircle width={14} height={14} />}
    />
  );
};

export const InputExampleUsage: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
    />
  );
};

export const InputErrorUsage: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputWarningUsage: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputSuccessUsage: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Success label"
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
      status="success"
      statusText="Success text"
    />
  );
};

export const OptionalInputDateOptionalCalendar: React.FC<{
  size?: TInputSize;
  isRangeMode?: boolean;
}> = ({ size, isRangeMode }) => {
  const [value, setValue] = useState("");

  return (
    <InputDate
      size={size}
      placeholder="Enter a date"
      isCalendar={false}
      value={value}
      onChange={(_, val: string) => setValue(val)}
      isRangeMode={isRangeMode}
    />
  );
};
