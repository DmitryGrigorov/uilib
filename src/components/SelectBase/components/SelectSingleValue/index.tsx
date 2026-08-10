import { SingleValueProps } from "react-select";
import React from "react";
import { SingleValueStyle } from "./styles";

const SelectSingleValue = <TOption, isMulti extends boolean = boolean>(
  props: SingleValueProps<TOption, isMulti>
): JSX.Element => (
  <SingleValueStyle
    data-element="select-singleValue"
    type="corvus"
    isDisabled={props.isDisabled}>
    {props.children}
  </SingleValueStyle>
);

export default SelectSingleValue;
