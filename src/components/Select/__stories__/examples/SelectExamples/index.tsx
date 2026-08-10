import React, { useState } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Select from "../../../index";
import { TInputSize } from "../../../../InputBase/interfaces";
import AvatarImg from "../../../../../assets/avatar.svg";

const optionsData = [
  { label: "Moscow", value: "Moscow" },
  { label: "Paris", value: "Paris" },
  { label: "Prague", value: "Prague" },
  { label: "Amsterdam", value: "Amsterdam", isDisabled: true },
  { label: "Berlin", value: "Berlin" },
  { label: "London", value: "London" },
  { label: "Riga", value: "Riga" }
];

const opt = [
  { label: "Moscow", value: "Moscow" },
  { label: "Paris", value: "Paris" },
  { label: "Prague", value: "Prague" },
  { label: "Amsterdam", value: "Amsterdam", isDisabled: true }
];

const optionsUsers = [
  { label: "User1", value: "User1" },
  {
    label: "User2",
    value: "User2",
    url: AvatarImg
  },
  { label: "User3", value: "User3", url: AvatarImg },
  { label: "User4", value: "User4" }
];

export const SelectExample: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const SelectRequired: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof opt)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      options={opt}
      width="400px"
      size={size}
    />
  );
};

export const SelectIconLeft: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const SelectRequiredIconLeft: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const SelectDisabled: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const SelectRequiredDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const SelectIconLeftDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const SelectRequiredIconLeftDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      isDisabled={true}
      width="400px"
      size={size}
    />
  );
};

export const SelectError: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="error"
      options={optionsData}
      statusText="Error text"
      width="400px"
      size={size}
    />
  );
};

export const SelectErrorRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="error"
      statusText="Error text"
      width="400px"
      size={size}
    />
  );
};

export const SelectErrorIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="error"
      iconLeft={<IconSetting1 />}
      statusText="Error text"
      width="400px"
      size={size}
    />
  );
};

export const SelectErrorIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="error"
      iconLeft={<IconSetting1 />}
      statusText="Error text"
      width="400px"
      size={size}
    />
  );
};

export const SelectWarning: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="warning"
      statusText="Warning text"
      width="400px"
      size={size}
    />
  );
};

export const SelectWarningRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="warning"
      statusText="Warning text"
      width="400px"
      size={size}
    />
  );
};

export const SelectWarningIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="warning"
      iconLeft={<IconSetting1 />}
      statusText="Warning text"
      width="400px"
      size={size}
    />
  );
};

export const SelectWarningIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="warning"
      iconLeft={<IconSetting1 />}
      statusText="Warning text"
      width="400px"
      size={size}
    />
  );
};

export const SelectSuccess: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="success"
      statusText="Success text"
      width="400px"
      size={size}
    />
  );
};

export const SelectSuccessRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="success"
      statusText="Success text"
      width="400px"
      size={size}
    />
  );
};

export const SelectSuccessIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      status="success"
      iconLeft={<IconSetting1 />}
      statusText="Success text"
      width="400px"
      size={size}
    />
  );
};

export const SelectSuccessIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<(typeof optionsData)[0] | null>(null);

  return (
    <Select
      placeholder={["Label 1", "Label 2"]}
      value={value ?? undefined}
      isRequired
      onChange={(val) => setValue(val)}
      status="success"
      iconLeft={<IconSetting1 />}
      statusText="Success text"
      width="400px"
      size={size}
    />
  );
};

export const SelectAvatar: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<(typeof optionsUsers)[0] | null>(null);

  return (
    <Select
      placeholder="Select a user"
      value={value ?? undefined}
      onChange={(val) => setValue(val)}
      width="400px"
      size={size}
      options={optionsUsers}
      type="avatar"
    />
  );
};
