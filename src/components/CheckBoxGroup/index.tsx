import React, { ChangeEvent, forwardRef, KeyboardEvent } from "react";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { ICheckBoxGroupProps, ICheckBoxGroupValue } from "./types";
import {
  CheckBoxGroupContainerStyled,
  CheckBoxGroupStyled,
  CheckBoxStyled,
  DividerCheckBoxGroupStyled,
  TextHeaderStyle,
  TextStatusStyled
} from "./styles";

const CheckBoxGroup = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<ICheckBoxGroupProps>
>(
  (
    {
      options,
      direction = "column",
      className,
      value,
      classNameCheckBox,
      onChange,
      isDisabled,
      name,
      status,
      statusText,
      headerText,
      style,
      testId = "testIDWithoutName",
      ...props
    },
    ref
  ) => {
    const [selectedItems, setSelectedItems] = useStateProps(value || []);

    const getChecked = (_value: ICheckBoxGroupValue): boolean =>
      selectedItems?.findIndex((v) => v === _value) !== -1;

    const handleChange = (
      event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
      selectedValue: ICheckBoxGroupValue
    ): void => {
      let newValue: ICheckBoxGroupValue[];
      if (getChecked(selectedValue)) {
        newValue = selectedItems?.filter((item) => item !== selectedValue);
      } else {
        newValue = [...selectedItems];
        newValue.push(selectedValue);
      }
      setSelectedItems(newValue);
      onChange?.(event, newValue);
    };

    return (
      <CheckBoxGroupContainerStyled
        data-testid={`${testId}_checkBoxGroupContainer`}
        data-element="checkBoxGroupContainer"
        style={style}>
        {status && (
          <DividerCheckBoxGroupStyled
            status={status}
            data-element="checkBoxGroup-divider"
          />
        )}
        <CheckBoxGroupContainerStyled className="checkBoxgroup-container--column">
          {headerText && (
            <TextHeaderStyle
              data-element="checkBoxGroup-headerText"
              type="phoenix"
              size={16}>
              {headerText}
            </TextHeaderStyle>
          )}
          <CheckBoxGroupStyled
            {...props}
            ref={ref}
            className={className}
            direction={direction}
            data-element="checkBox-group">
            {options.map((option) => (
              <CheckBoxStyled
                key={option.value}
                label={option.label}
                isDisabled={isDisabled || option.isDisabled}
                isChecked={getChecked(option.value)}
                onChange={(event) => handleChange(event, option.value)}
                className={classNameCheckBox}
                name={name}
              />
            ))}
          </CheckBoxGroupStyled>
          {status && statusText && (
            <TextStatusStyled
              data-element="checkBoxGroup-statusText"
              size="m"
              status={status}>
              {statusText}
            </TextStatusStyled>
          )}
        </CheckBoxGroupContainerStyled>
      </CheckBoxGroupContainerStyled>
    );
  }
);

CheckBoxGroup.displayName = "CheckBoxGroup";

export default CheckBoxGroup;
