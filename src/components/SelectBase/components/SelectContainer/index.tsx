import { ContainerProps } from "react-select";
import React from "react";
import { SelectContainerStyled } from "./styles";

const SelectContainer = <TOption, isMulti extends boolean = boolean>(
  props: ContainerProps<TOption, isMulti>
): JSX.Element => {
  const selectProps = props.selectProps;

  return (
    <SelectContainerStyled
      isMulti={props.isMulti}
      testId={selectProps.testId}
      placeholder={selectProps.placeholder as string | [string, string]}
      iconLeft={selectProps.iconLeft}
      iconRight={selectProps.iconRight}
      isRequired={selectProps.isRequired}
      size={selectProps.size}
      viewType={selectProps.viewType}
      width={selectProps.width}
      status={selectProps.status}
      statusText={selectProps.statusText}
      className={props.className}
      isDisabled={props.isDisabled}
      isFocused={props.isFocused && selectProps.menuIsOpen}
      isShowLabel={true}
      classNameContent="select__content"
      isReadOnly={selectProps.isReadOnly}
      isHasValue={props.hasValue}>
      {props.children}
    </SelectContainerStyled>
  );
};

export default SelectContainer;
