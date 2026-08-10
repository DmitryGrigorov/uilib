import React, { useContext, cloneElement } from "react";

import RadioButton from "../../RadioButton";
import { IRadioButtonProps } from "../../RadioButton/types";
import { IRadioGroupOptionContext, IRadioGroupOptionProps } from "../types";
import { RadioGroupContext } from "./RadioGroupContext";

const RadioGroupOption: React.FC<IRadioGroupOptionProps> = (props) => {
  const { label, name, value, isDisabled, isError, className, children } =
    props;

  const { groupValue, onClick, onChange } =
    useContext<IRadioGroupOptionContext>(RadioGroupContext);

  if (children) {
    return cloneElement<IRadioButtonProps>(children, {
      ...children.props,
      isChecked: children.props.value === groupValue,
      isError: children.props.value !== groupValue && isError,
      onChange,
      onClick,
      name,
      isDisabled: children.props.isDisabled || isDisabled
    });
  }
  return (
    <RadioButton
      isChecked={value === groupValue}
      name={name}
      isDisabled={isDisabled}
      isError={value !== groupValue && isError}
      label={label}
      value={value}
      onChange={onChange}
      onClick={onClick}
      className={className}
    />
  );
};

export default RadioGroupOption;
