import React from "react";
import { OptionProps } from "react-select";
import RadioButton from "../../../RadioButton";

const SelectOption = <TOption,>(
  props: OptionProps<TOption, false> & { value?: string }
): JSX.Element => {
  const { innerProps } = props;
  return (
    <RadioButton
      value={props.value}
      label={props.children}
      onClick={innerProps.onClick}
      isChecked={props.isSelected}
      isDisabled={props.isDisabled}
    />
  );
};

export default SelectOption;
