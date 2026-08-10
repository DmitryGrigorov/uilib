import React from "react";
import { ControlProps } from "react-select";
import { ControlSelectStyle } from "./styles";

const SelectControl = <TOption, isMulti extends boolean = boolean>(
  props: ControlProps<TOption, isMulti>
): JSX.Element => {
  const { innerRef, innerProps, selectProps } = props;

  return (
    <ControlSelectStyle
      data-element="select-controlComponent"
      ref={innerRef}
      isMulti={selectProps.isMulti}
      menuIsOpen={selectProps.menuIsOpen}
      {...innerProps}>
      {props.children}
    </ControlSelectStyle>
  );
};

export default SelectControl;
