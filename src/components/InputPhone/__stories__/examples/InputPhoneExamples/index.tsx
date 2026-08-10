import React, { ChangeEvent, MouseEvent, useState } from "react";
import InputPhone from "../../../";
import { TInputSize, TStatusInput } from "../../../../InputBase/interfaces";

export const InputPhoneExampleDefault: React.FC<{
  isShowClearIcon?: boolean;
  size?: TInputSize;
}> = ({ isShowClearIcon, size }) => {
  const [phone, setPhone] = useState("");
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };

  return (
    <InputPhone
      value={phone}
      isShowClearIcon={isShowClearIcon}
      size={size}
      onChange={handleChange}
      placeholder="Phone number"
    />
  );
};

export const InputPhoneExampleStatus: React.FC<{
  status?: TStatusInput;
  statusText?: string;
  size?: TInputSize;
}> = ({ status, statusText, size }) => {
  const [phone, setPhone] = useState("+79234859874");
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };

  return (
    <InputPhone
      placeholder="Phone number"
      status={status}
      statusText={statusText}
      value={phone}
      onChange={handleChange}
      size={size}
    />
  );
};

export const InputPhoneExampleIsRequired: React.FC<{
  isRequired?: boolean;
  size?: TInputSize;
}> = ({ isRequired, size }) => {
  const [phone, setPhone] = useState("+79234859874");
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };

  return (
    <InputPhone
      isRequired={isRequired}
      placeholder="Phone number"
      value={phone}
      onChange={handleChange}
      size={size}
    />
  );
};

export const InputPhoneExampleIsDisabled: React.FC<{ size?: TInputSize }> = ({
  size
}) => {
  const [phone, setPhone] = useState("+79234859874");
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };
  return (
    <InputPhone
      isDisabled
      placeholder="Phone number"
      value={phone}
      onChange={handleChange}
      size={size}
    />
  );
};

export const InputPhoneExampleFilled: React.FC<{
  isShowClearIcon?: boolean;
  size?: TInputSize;
}> = ({ isShowClearIcon, size }) => {
  const [phone, setPhone] = useState("+79234859874");
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };

  return (
    <InputPhone
      isShowClearIcon={isShowClearIcon}
      value={phone}
      onChange={handleChange}
      size={size}
    />
  );
};
