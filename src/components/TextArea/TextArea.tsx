import React, {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useState,
  useRef,
  KeyboardEventHandler,
  useLayoutEffect
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  TextareaStyled,
  TextareaWrapper,
  TextAreaResizerWrapper
} from "./styles";
import { ITextareaProps } from "./types";
import getSizingData, { SizingData } from "./helpers/getSizingData";
import calculateNodeHeight from "./helpers/calculateNodeHeight";

const TextArea: React.FC<TPropsWithAttributes<ITextareaProps>> = ({
  id,
  value,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyPress,
  isAutoFocus,
  isDisabled,
  isRequired,
  error,
  size = "l",
  status,
  statusText,
  placeholder,
  testId = "textArea",
  tooltipContent,
  tooltipPosition,
  alignText,
  className,
  name,
  maxLength,
  isShowClearIcon,
  rows,
  cols,
  minRows = 1,
  maxRows = Infinity,
  isAutoSize = false,
  iconLeft,
  statusLabel,
  isReadOnly,
  readOnlyEmptyText = "Not filled in",
  ...props
}) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);
  const heightRef = React.useRef(0);
  const measurementsCacheRef = React.useRef<SizingData | undefined>(undefined);

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>): void => {
    onFocus && onFocus(event);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>): void => {
    const { value: _value } = event.target;
    onBlur && onBlur(event, _value);
    setFocused(false);
  };

  const handleClear = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onChange?.(event, "", id);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange?.(event, event.target.value, id);
  };

  const baseInputProps = {
    placeholder,
    error,
    tooltipPosition,
    tooltipContent,
    size,
    alignText,
    className,
    isDisabled,
    isShowClearIcon,
    isAutoFocus,
    testId,
    isFocused,
    statusText,
    status,
    isHasValue: Boolean(value) || Boolean(isReadOnly),
    onClear: handleClear,
    isRequired,
    isPasswordVisible: false,
    statusLabel,
    iconLeft,
    isReadOnly,
    ...props
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    onKeyDown?.(event);
  };

  const resizeTextarea = (): void => {
    const textAreaNode = textareaRef.current;
    const resizerNode = resizerRef.current;
    if (textAreaNode && resizerNode) {
      const textAreaSizingData = measurementsCacheRef.current
        ? measurementsCacheRef.current
        : getSizingData(textAreaNode);
      const resizerSizingData = getSizingData(resizerNode);

      if (!textAreaSizingData || !resizerSizingData) {
        return;
      }

      measurementsCacheRef.current = textAreaSizingData;

      const [heightTextArea] = calculateNodeHeight(
        textAreaSizingData,
        textAreaNode.value || textAreaNode.placeholder || "x",
        minRows,
        maxRows
      );

      const [heightResizer] = calculateNodeHeight(
        resizerSizingData,
        textAreaNode.value || textAreaNode.placeholder || "x",
        minRows,
        maxRows
      );
      if (heightResizer > heightTextArea || heightResizer < 30 || isAutoSize) {
        resizerNode.style.setProperty("overflow-y", "hidden");
      } else {
        resizerNode.style.setProperty("overflow-y", "visible");
      }

      if (heightRef.current !== heightTextArea) {
        heightRef.current = heightTextArea;
        textAreaNode.style.setProperty("height", `${heightTextArea}px`);
        if (
          (isAutoSize || minRows > 1 || Number.isFinite(maxRows)) &&
          resizerRef.current
        ) {
          resizerNode.style.setProperty("height", `${heightTextArea + 9}px`);
        }
      }
    }
  };

  useLayoutEffect(() => {
    resizeTextarea();
  });

  return (
    <TextareaWrapper
      {...baseInputProps}
      isShowLabel={true}
      cols={cols}
      classNameIconBox="textarea__icon-box"
      classNameContent="textarea__content"
      classNameAddonsRight="textarea__resizer-wrapper">
      <TextAreaResizerWrapper
        size={size}
        ref={resizerRef}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}>
        <TextareaStyled
          id={id}
          name={name}
          value={!value && isReadOnly ? readOnlyEmptyText : value || ""}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onKeyPress={onKeyPress}
          onChange={handleChange}
          rows={rows}
          cols={cols}
          disabled={isDisabled}
          size={size}
          isShowClearIcon={isShowClearIcon && Boolean(value)}
          ref={textareaRef}
          readOnly={isReadOnly}
        />
      </TextAreaResizerWrapper>
    </TextareaWrapper>
  );
};

export default TextArea;
