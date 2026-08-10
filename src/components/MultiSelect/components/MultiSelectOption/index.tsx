import React, { MouseEvent } from "react";
import { OptionProps } from "react-select";
import CheckBox from "../../../CheckBox";

const SelectOption = <TOption, isMulti extends boolean = boolean>(
  props: OptionProps<TOption, isMulti>
): JSX.Element => {
  const { innerProps } = props;
  return (
    <CheckBox
      label={props.children}
      onClick={(event) => {
        event.preventDefault();
        innerProps.onClick?.(event as MouseEvent<any>);
      }}
      isChecked={props.isSelected}
      isDisabled={props.isDisabled}
    />
  );
};

export default SelectOption;
