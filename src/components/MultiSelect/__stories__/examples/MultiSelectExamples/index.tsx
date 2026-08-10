import React, { useState } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import AvatarImg from "../../../../../assets/avatar.svg";
import MultiSelect from "../../../index";
import { TInputSize } from "../../../../InputBase/interfaces";

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
  { label: "User4", value: "User4" },
  { label: "User5", value: "User5", url: AvatarImg },
  { label: "User6", value: "User6" }
];

export const MultiSelectExample: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof opt>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      options={opt}
      onChangeReturnType="instance"
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectIconLeft: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectRequiredIconLeft: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectRequiredDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectIconLeftDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      isDisabled
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectRequiredIconLeftDisabled: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      isDisabled={true}
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectError: React.FC = ({ size }: { size?: TInputSize }) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="error"
      options={optionsData}
      statusText="Error text"
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectErrorRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="error"
      statusText="Error text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectErrorIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="error"
      iconLeft={<IconSetting1 />}
      statusText="Error text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectErrorIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="error"
      iconLeft={<IconSetting1 />}
      statusText="Error text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectWarning: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="warning"
      statusText="Warning text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectWarningRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="warning"
      statusText="Warning text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectWarningIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="warning"
      iconLeft={<IconSetting1 />}
      statusText="Warning text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectWarningIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="warning"
      iconLeft={<IconSetting1 />}
      statusText="Warning text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectSuccess: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="success"
      statusText="Success text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectSuccessRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="success"
      statusText="Success text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectSuccessIsIcon: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      status="success"
      iconLeft={<IconSetting1 />}
      statusText="Success text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectSuccessIsIconRequired: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      status="success"
      iconLeft={<IconSetting1 />}
      statusText="Success text"
      width="400px"
      size={size}
      options={optionsData}
    />
  );
};

export const MultiSelectExampleMulti: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectRequiredMulti: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      isRequired
      onChange={(val) => setValue(val)}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectIconLeftMulti: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      iconLeft={<IconSetting1 />}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectExampleDark: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder={["Label 1", "Label 2"]}
      value={value}
      onChange={(val) => setValue(val)}
      options={optionsData}
      width="400px"
      size={size}
    />
  );
};

export const MultiSelectExampleAvatar: React.FC = ({
  size
}: {
  size?: TInputSize;
}) => {
  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      placeholder="Select users"
      value={value}
      onChange={(val) => setValue(val)}
      options={optionsUsers}
      width="400px"
      size={size}
      type="avatar"
    />
  );
};
