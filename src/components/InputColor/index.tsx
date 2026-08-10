import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useMultipleResizeObserver } from "../hooks/useMultipleResizeObserver";
import ColorPicker from "../ColorPicker";
import convertStringToHexFormat from "../utils/convertStringToHexFormat";
import getPositions from "../helpers/getPosition";
import { IPosition } from "../helpers/getPosition/types";
import {
  ColorButton,
  InputColorComponent,
  InputColorWrapper,
  ColorPickerWrapper
} from "./styles";
import { TInputColorProps } from "./types";

const InputColor: React.FC<TPropsWithAttributes<TInputColorProps>> = (
  props
) => {
  const {
    placeholder = "Color code",
    color,
    onChange,
    isReadOnly = false,
    isShowClearIcon = false,
    isShowLabel = true,
    isDisabled,
    width,
    size,
    direction = "bottomLeft",
    isInputColorPicker = false,
    lastColors,
    viewType = "round",
    ...otherProps
  } = props;

  const [value, setValue] = useState<string>(
    convertStringToHexFormat(color || "")
  );
  const [isColorPickerShown, setColorPickerShown] = useState<boolean>(false);
  const colorWrapperRef = useRef<HTMLDivElement>(null);
  const colorPickerWrapperRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLElement>(document.body);
  const [windowSize, setWindowSize] = useState<IPosition>({ top: 0, left: 0 });
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const optionalCallback = (entry: DOMRectReadOnly): void =>
    setWindowSize({ top: entry.top, left: entry.left });

  useOnClickOutside(colorWrapperRef, () => setColorPickerShown(false));
  useMultipleResizeObserver([windowRef], (el) => el, optionalCallback);

  // Keep internal value in sync with the externally-controlled `color` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setValue(convertStringToHexFormat(color || ""));
  }, [color]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    newColor: string
  ): void => {
    updateColor(newColor);
  };

  const updateColor = (newColor: string): void => {
    if (!isReadOnly) {
      newColor = convertStringToHexFormat(newColor);
      setValue(newColor);
      onChange && onChange(newColor);
    }
  };

  const updatePosition = (): void => {
    const { left: _left, top: _top } = getPositions(
      direction,
      colorPickerWrapperRef.current,
      colorWrapperRef.current
    );

    setLeft(_left);
    setTop(_top);
  };

  useEffect(() => {
    updatePosition();
  }, [isColorPickerShown, windowSize, direction]);

  return (
    <InputColorWrapper ref={colorWrapperRef}>
      <InputColorComponent
        isReadOnly={isReadOnly}
        value={value}
        isShowLabel={isShowLabel}
        isShowClearIcon={isShowClearIcon}
        width={width}
        size={size}
        viewType={viewType}
        onChange={(e, _value) => handleChange(e, _value)}
        iconRight={
          <ColorButton
            onClick={() =>
              !isReadOnly &&
              !isDisabled &&
              setColorPickerShown(!isColorPickerShown)
            }
            color={value}
          />
        }
        placeholder={placeholder}
        isReadonly={isReadOnly}
        isDisabled={isDisabled}
        {...otherProps}
      />

      {isColorPickerShown && (
        <ColorPickerWrapper ref={colorPickerWrapperRef} left={left} top={top}>
          <ColorPicker
            color={value}
            isInput={isInputColorPicker}
            lastColors={lastColors}
            onChange={({ color: _color }) => updateColor(_color)}
          />
        </ColorPickerWrapper>
      )}
    </InputColorWrapper>
  );
};

InputColor.displayName = "InputColor";

export default InputColor;
