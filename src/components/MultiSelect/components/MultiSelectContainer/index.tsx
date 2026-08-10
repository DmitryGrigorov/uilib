import { ContainerProps } from "react-select";
import React from "react";
import { SelectContainerStyled } from "../../../SelectBase/components/SelectContainer/styles";

const MultiSelectContainer = <TOption, isMulti extends boolean = boolean>(
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
      className={
        selectProps.type === "avatar"
          ? `${props.className || ""} select__avatar`
          : `${props.className || ""}`
      }
      isDisabled={props.isDisabled}
      isFocused={selectProps.menuIsOpen}
      isShowLabel={true}
      classNameContent="select__content"
      isReadOnly={selectProps.isReadOnly}
      isHasValue={props.hasValue}>
      {props.children}
    </SelectContainerStyled>
  );
};

export default MultiSelectContainer;
