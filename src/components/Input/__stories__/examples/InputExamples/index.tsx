import React, { useState } from "react";
import {
  IconSetting1,
  IconInfoDanger,
  IconInfoWarning,
  IconTickCircle
} from "@dmitrygrigorov/icons";
import Input from "../../../index";
import { TInputSize } from "../../../../InputBase/interfaces";

export const InputExample: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      width="400px"
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(_e, val: string) => setValue(val)}
    />
  );
};

export const InputRequired: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      width="400px"
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(_e, val: string) => setValue(val)}
    />
  );
};

export const InputIconLeft: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputRequiredIconLeft: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder={["Label 1", "Label 2"]}
      value={value}
      size={size}
      width="400px"
      isRequired
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputIconRight: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputRequiredIconRight: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
    />
  );
};

export const InputDisabled: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      isDisabled
    />
  );
};

export const InputRequiredDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      size={size}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      isDisabled
    />
  );
};

export const InputIconLeftDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputRequiredIconLeftDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder={["Label 1", "Label 2"]}
      value={value}
      size={size}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconLeft={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputIconRightDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputRequiredIconRightDisabled: React.FC<{
  size?: TInputSize;
}> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      iconRight={<IconSetting1 width={14} height={14} />}
      isDisabled
    />
  );
};

export const InputError: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Error label"
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputErrorRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Error label"
      value={value}
      width="400px"
      isRequired
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputErrorIsIcon: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      width="400px"
      statusText="Error text"
      iconLeft={<IconInfoDanger width={14} height={14} />}
    />
  );
};

export const InputErrorIsIconRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Error label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
      iconLeft={<IconInfoDanger width={14} height={14} />}
    />
  );
};

export const InputWarning: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Warning label"
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputWarningRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Warning label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputWarningIsIcon: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      width="400px"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputWarningIsIconRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Warning label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
      iconLeft={<IconInfoWarning width={14} height={14} />}
    />
  );
};

export const InputSuccess: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Success label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      width="400px"
      statusText="Success text"
    />
  );
};

export const InputSuccessRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Success label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
    />
  );
};

export const InputSuccessIsIcon: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Success label"
      value={value}
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
      iconLeft={<IconTickCircle width={14} height={14} />}
    />
  );
};

export const InputSuccessIsIconRequired: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Success label"
      value={value}
      isRequired
      width="400px"
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
      iconLeft={<IconTickCircle width={14} height={14} />}
    />
  );
};

export const InputExampleUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(_e, val: string) => setValue(val)}
    />
  );
};

export const InputErrorUsage: React.FC<{ size?: TInputSize }> = ({ size }) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Error label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="error"
      statusText="Error text"
    />
  );
};

export const InputWarningUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Warning label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="warning"
      statusText="Warning text"
    />
  );
};

export const InputSuccessUsage: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [value, setValue] = useState("");

  return (
    <Input
      size={size}
      placeholder="Success label"
      value={value}
      onChange={(_e, val: string) => setValue(val)}
      status="success"
      statusText="Success text"
    />
  );
};
