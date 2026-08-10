import React, { ChangeEvent, MouseEvent, useState, useRef } from "react";
import { useStateProps } from "../hooks/useStateProps";
import InputMask from "../InputMask";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import SelectCountries from "./components/SelectCountries";
import { IInputPhoneProps } from "./types";
import { RightContent } from "./styles";

const REGEX_SPACES = /\s/g;

const MASK = "+7 000 000 0000";

const InputPhone: React.FC<TPropsWithAttributes<IInputPhoneProps>> = ({
  onFocus,
  onBlur,
  value,
  onChange,
  testId = "inputPhone",
  isDisabled,
  autoComplete,
  form,
  list,
  accessKey,
  ...props
}) => {
  const [isFocused, setFocused] = useState(props.isAutoFocus);
  const [localValue, setLocalValue] = useStateProps(value);
  const ref = useRef<any>(null);

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(true);
    if (event.target.value.length === 0) {
      setTimeout(() => {
        (ref.current?.inputElement as HTMLInputElement).setSelectionRange(2, 2);
      }, 0);
    }
    onFocus?.(event);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    _value: string
  ): void => {
    setFocused(false);
    if (_value.replace(REGEX_SPACES, "") === "+7") {
      setLocalValue("");
    }
    onBlur?.(event, _value);
  };

  const handleChange = (
    event:
      ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement> | InputEvent,
    _value: string,
    id?: string
  ): void => {
    const val = _value.replace(REGEX_SPACES, " ");
    setLocalValue(val);
    onChange?.(event as ChangeEvent<HTMLInputElement>, val, id);
  };

  return (
    <InputMask
      testId={testId}
      {...props}
      mask={MASK}
      isDisabled={isDisabled}
      iconLeft={
        isFocused || Boolean(localValue) ? (
          <SelectCountries isDisabled={isDisabled} />
        ) : undefined
      }
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={localValue}
      isShowMaskOnFocus={true}
      isShowMask={isFocused}
      placeholderChar={"\u2000"}
      refMask={ref}
      iconRight={!isFocused && !localValue ? <RightContent /> : undefined}
      autoComplete={autoComplete}
      form={form}
      list={list}
      accessKey={accessKey}
    />
  );
};

export default InputPhone;
