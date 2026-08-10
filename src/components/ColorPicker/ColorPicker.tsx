import React, {
  MouseEvent,
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  forwardRef
} from "react";
import convertStringToHexFormat from "../utils/convertStringToHexFormat";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import Input from "../Input/index";
import useDebounce from "../hooks/useDebounce";
import { useStateProps } from "../hooks/useStateProps";
import { HSV, HSL } from "../utils/colorConvectors/types";
import { hexToHsv } from "../utils/colorConvectors/hexToHsv";
import { hexToHsl } from "../utils/colorConvectors/hexToHsl";
import { hsvToHex } from "../utils/colorConvectors/hsvToHex";
import { hsvToRgb } from "../utils/colorConvectors/hsvToRgb";
import { getValidAlpha } from "./helpers/getValidAlpha";
import { ColorPickerComponent, SelectedColor, UsedColors } from "./styles";
import { IColorPickerProps } from "./types";
import SaturationBlock from "./components/Saturation";
import Hue from "./components/Hue";
import Transparency from "./components/Transparency";

const ColorPicker = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IColorPickerProps>
>((props, ref) => {
  const {
    id,
    className,
    color,
    lastColors,
    onChange = () => {
      /* */
    },
    colorKey,
    isInput,
    isTransparency,
    alpha = 1,
    testId = "color-picker",
    testIdInputColor = "color-picker-input",
    testIdTransparency = "transparency-input",
    ...otherProps
  } = props;

  const [colorInput, setColorInput] = useStateProps(
    convertStringToHexFormat(color)
  );
  const previousColorHsl = useRef<HSL>(
    hexToHsl(colorInput) || { h: 0, s: 0, l: 0 }
  );
  const previousColorHsv = useRef<HSV>(
    hexToHsv(colorInput) || { h: 0, s: 0, v: 0 }
  );
  const [hsvState, setHsv] = useState<HSV>(
    hexToHsv(colorInput) || previousColorHsv.current
  );
  const [hslState, setHsl] = useState<HSL>(
    hexToHsl(colorInput) || previousColorHsl.current
  );
  const [alphaState, setAlpha] = useStateProps(
    getValidAlpha(alpha * 100 + "%")
  );
  const onChangeDebounce = useDebounce(() => {
    if (!isTransparency) {
      return onChange({ color: colorInput });
    }
    return onChange({
      color: colorInput,
      alpha: Number.parseInt(alphaState, 10) / 100
    });
  }, 500);

  useEffect(() => {
    previousColorHsv.current = hsvState;
  }, [hsvState]);

  useEffect(() => {
    previousColorHsl.current = hslState;
  }, [hslState]);

  useEffect(() => {
    if (hsvToHex(hsvState).toUpperCase() !== color.toUpperCase()) {
      const hsv = hexToHsv(color);
      if (hsv) {
        const oldHsv = previousColorHsv.current;
        setHsv(hexToHsv(color) || oldHsv);
        if (oldHsv.v === hsv.v && oldHsv.s === hsv.s) {
          setHsl(hexToHsl(color) || previousColorHsl.current);
        } else if (Math.round(hsv.h) === Math.round(hexToHsl(color)?.h || 0)) {
          setHsl(hexToHsl(color) || previousColorHsl.current);
        }
      }
    }
  }, [color]);

  useEffect(() => {
    onChangeDebounce();
  }, [colorInput, alphaState]);

  const handleChangeColor = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    const hex = convertStringToHexFormat(value);
    updateColor(hex);
  };

  const handleChangeAlpha = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => setAlpha(getValidAlpha(value));

  const updateColor = (newColor: string): void => {
    setColorInput(newColor);
    setHsv(hexToHsv(newColor) || previousColorHsv.current);
    onChangeDebounce();
    setHsl(hexToHsl(newColor) || previousColorHsl.current);
  };

  const checkLastColor = (): boolean => {
    if (!lastColors) {
      return false;
    }
    return lastColors.length > 0;
  };

  return (
    <ColorPickerComponent
      data-testid={testId}
      id={id}
      className={className}
      isLastColors={checkLastColor()}
      isInput={isInput}
      ref={ref}
      {...otherProps}>
      <div>
        <div>
          {!isInput && (
            <SaturationBlock
              hsv={hsvState}
              hsl={hslState}
              setHsv={setHsv}
              setColorInput={setColorInput}
            />
          )}
          {isInput &&
            (!lastColors || (lastColors && lastColors.length > 0)) && (
              <div className="color-picker-row">
                <SaturationBlock
                  hsv={hsvState}
                  hsl={hslState}
                  setHsv={setHsv}
                  setColorInput={setColorInput}
                />
                <SelectedColor hex={hsvToHex(hsvState)} />
              </div>
            )}
          <Hue
            hsl={hslState}
            hsv={hsvState}
            setHsv={setHsv}
            setHsl={setHsl}
            setColorInput={setColorInput}
          />
          {isTransparency && (
            <Transparency
              colorRgb={hsvToRgb(hsvState)}
              setAlpha={setAlpha}
              alpha={Number.parseInt(alphaState, 10)}
            />
          )}
          {isInput && isTransparency && (
            <div className="color-picker-row">
              <Input
                onChange={handleChangeColor}
                placeholder="Color code"
                type="text"
                value={colorInput}
                width="100%"
                testId={testIdInputColor}
              />
              <Input
                placeholder="100%"
                type="text"
                value={alphaState}
                isShowClearIcon={false}
                isShowLabel={false}
                width="80px"
                onChange={handleChangeAlpha}
                testId={testIdTransparency}
              />
            </div>
          )}
          {isInput && !isTransparency && (
            <Input
              onChange={handleChangeColor}
              placeholder="Color code"
              type="text"
              value={colorInput}
              width="100%"
              testId={testIdInputColor}
            />
          )}
        </div>
        {!isInput && lastColors && lastColors.length > 0 && (
          <UsedColors>
            <SelectedColor hex={hsvToHex(hsvState)} />
            <div className="used-colors-list">
              {(lastColors.length > 8
                ? lastColors.slice(0, 8)
                : lastColors
              ).map((usedColor, i) => (
                <button
                  key={colorKey ? colorKey(i, usedColor) : usedColor}
                  style={{ backgroundColor: usedColor }}
                  onClick={() => {
                    updateColor(usedColor.toUpperCase());
                  }}
                />
              ))}
            </div>
          </UsedColors>
        )}
      </div>
    </ColorPickerComponent>
  );
});

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
