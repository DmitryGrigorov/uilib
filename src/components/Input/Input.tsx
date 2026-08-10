import React, {
  useRef,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useState
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import InputBase from "../InputBase";
import { ISharedInputBase } from "../InputBase/interfaces";

import { IInputProps, IShared } from "./interfaces";

const Input: React.FC<TPropsWithAttributes<IInputProps>> = (props) => {
  const {
    id,
    isAutoFocus,
    error,
    width,
    name,
    type = "text",
    isDisabled,
    isShowClearIcon = true,
    placeholder,
    tooltipContent,
    tooltipPosition = "bottom",
    maxLength,
    title,
    onKeyDown,
    alignText = "left",
    isAutoFill = true,
    className,
    inputMode,
    pattern,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    testId = "unknownTestId",
    isRequired,
    size = "m",
    status,
    statusText,
    iconLeft,
    iconRight,
    isShowLabel = true,
    viewType = "round",
    isReadOnly,
    readOnlyEmptyText = "Not provided",
    autoComplete,
    form,
    list,
    accessKey,
    ...otherProps
  } = props;
  const inputTargetRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value: _value } = event.target;
    onChange && onChange(event, _value, id);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    !isReadOnly && onFocus && onFocus(event);
    !isReadOnly && setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const { value: _value } = event.target;
    onBlur && onBlur(event, _value);
    setFocused(false);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress && onKeyPress(event);
  };

  const handlePasswordToggle = (): void => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClear = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onChange && onChange(event, "", id);
    inputTargetRef.current?.focus();
  };

  let autoCompleteValue: string;
  if (autoComplete !== undefined) {
    autoCompleteValue = autoComplete;
  } else {
    autoCompleteValue =
      type === "password" || !isAutoFill ? "new-password" : "on";
  }

  const baseInputProps: ISharedInputBase = {
    error,
    placeholder,
    tooltipContent,
    tooltipPosition,
    type,
    size,
    title,
    iconLeft,
    iconRight,
    width,
    alignText,
    className,
    isDisabled,
    isShowClearIcon,
    isFocused,
    isPasswordVisible,
    testId,
    status,
    statusText,
    isHasValue: Boolean(value),
    onClear: handleClear,
    onPasswordToggle: handlePasswordToggle,
    isRequired,
    isShowLabel,
    viewType,
    isReadOnly
  };

  const sharedProps: IShared = {
    id,
    maxLength,
    name,
    autoFocus: isAutoFocus,
    value: !value && isReadOnly ? readOnlyEmptyText : value || "",
    inputMode,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown,
    pattern,
    status,
    disabled: isDisabled,
    readOnly: isReadOnly,
    autoComplete: autoCompleteValue,
    type: type === "password" && isPasswordVisible ? "text" : type,
    form,
    list,
    accessKey
  };

  return (
    <InputBase {...baseInputProps} {...otherProps}>
      <input
        data-testid={`input_${testId}`}
        data-element="input"
        {...sharedProps}
        ref={inputTargetRef}
      />
    </InputBase>
  );
};

export default Input;
