import React, { useState } from "react";
import InputColor from "../../../index";
import { TInputSize } from "../../../../InputBase/interfaces";

export const InputColorExample: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      isDisabled
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorDisabledRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      isDisabled
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorError: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="error"
      statusText="Error text"
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorErrorRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="error"
      statusText="Error text"
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorWarning: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="warning"
      statusText="Warning text"
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorWarningRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="warning"
      statusText="Warning text"
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorSuccess: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="success"
      statusText="Success text"
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorSuccessRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      status="success"
      statusText="Success text"
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorReadOnly: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      isReadOnly
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorReadOnlyRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      size={size}
      color={value}
      width={"400px"}
      isReadOnly
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorLine: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      viewType={"line"}
      size={size}
      color={value}
      width={"400px"}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorLineRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      viewType={"line"}
      size={size}
      color={value}
      width={"400px"}
      isRequired
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorUsage: React.FC = () => {
  const [value, setValue] = useState("");

  return <InputColor color={value} onChange={(val: string) => setValue(val)} />;
};

export const InputColorErrorUsage: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      status="error"
      statusText="Error text"
      color={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorWarningUsage: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      status="warning"
      statusText="Warning text"
      color={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorSuccessUsage: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      status="success"
      statusText="Success text"
      color={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const InputColorLineUsage: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <InputColor
      viewType={"line"}
      color={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};
