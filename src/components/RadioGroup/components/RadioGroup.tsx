import React, { MouseEvent, KeyboardEvent, Children } from "react";
import { useStateProps } from "../../hooks/useStateProps";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import { IRadioGroupProps } from "../types";
import {
  RadioGroupStyled,
  RadioOptionStyled,
  TextStatusStyled,
  RadioGroupContainerStyled,
  DividerRadioGroupStyled,
  TextHeaderStyle
} from "../styles";
import { RadioGroupContext } from "./RadioGroupContext";

const RadioGroup: React.FC<TPropsWithAttributes<IRadioGroupProps>> = (
  props
) => {
  const {
    value,
    onChange,
    onClick,
    children,
    classNameButton,
    options,
    className,
    name,
    isDisabled,
    direction = "column",
    status,
    statusText,
    headerText,
    testId = "testIDWithoutName",
    style,
    ...otherProps
  } = props;
  const [groupValue, setGroupValue] = useStateProps<
    string | null | number | undefined
  >(value);

  const handleClick = (
    event: MouseEvent<HTMLDivElement>,
    _value?: string | number
  ): void => {
    onClick && onClick(event, _value);
  };

  const handleChange = (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
    _value?: string | number
  ): void => {
    if (groupValue !== _value) {
      onChange && onChange(event, _value);
      setGroupValue(_value || null);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{
        groupValue,
        onChange: handleChange,
        onClick: handleClick
      }}>
      <RadioGroupContainerStyled
        style={style}
        data-testid={`${testId}_radioGroupContainer`}
        data-element="radioGroupContainer">
        {status && (
          <DividerRadioGroupStyled
            data-element="radioGroup-divider"
            status={status}
          />
        )}
        <RadioGroupContainerStyled className="radiogroup-container--column">
          {headerText && (
            <TextHeaderStyle
              data-element="radioGroup-headerText"
              type="phoenix"
              size={16}>
              {headerText}
            </TextHeaderStyle>
          )}
          <RadioGroupStyled
            className={className}
            direction={direction}
            data-element="radioGroup-group"
            {...otherProps}>
            {options
              ? options.map((option) => (
                  <RadioOptionStyled
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    className={classNameButton}
                    isDisabled={option.isDisabled || isDisabled}
                    name={name}
                  />
                ))
              : Children.map(children, (child) => (
                  <RadioOptionStyled
                    name={name}
                    isDisabled={isDisabled}
                    className={classNameButton}>
                    {child}
                  </RadioOptionStyled>
                ))}
          </RadioGroupStyled>
          {status && statusText && (
            <TextStatusStyled
              data-element="radioGroup-statusText"
              size="m"
              status={status}>
              {statusText}
            </TextStatusStyled>
          )}
        </RadioGroupContainerStyled>
      </RadioGroupContainerStyled>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
