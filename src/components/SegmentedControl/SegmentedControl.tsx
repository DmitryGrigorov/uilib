import React, { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { useMultipleResizeObserver } from "../hooks/useMultipleResizeObserver";
import { ISegmentedControlProps } from "./types";
import {
  Bracket,
  ControlItem,
  SegmentedControlBase,
  SegmentedControlWrapper
} from "./styles";

export const SegmentedControl = <Value,>({
  className,
  options,
  value,
  size = "l",
  onChange,
  ...props
}: TPropsWithAttributes<ISegmentedControlProps<Value>>): JSX.Element => {
  const [selectPosition, setSelection] = useState({});
  const [selectedValue, setValue] = useStateProps(value);
  const ref = useRef<Record<string, HTMLDivElement>>({});
  const segmentedControlRef = useRef(null);
  const [segmentedControlWidth, setSegmentedControlWidth] = useState(0);

  const setSegmentedControlWidthDebounce = useDebounce(
    setSegmentedControlWidth,
    100
  );

  const optionalCallback = (entry: DOMRectReadOnly): void => {
    setSegmentedControlWidthDebounce(entry.width);
  };

  useMultipleResizeObserver(
    [segmentedControlRef],
    (el) => el,
    optionalCallback
  );

  // Measures the selected option's DOM position to move the highlight bracket.
  // `ref.current` is intentionally excluded from deps: mutating a ref never
  // triggers a re-run, and effects always see the latest ref value regardless.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (selectedValue && ref.current[String(selectedValue)]) {
      const selectedOption = options.find((opt) => opt.value === selectedValue);
      if (selectedOption?.isDisabled) {
        setSelection({});
        return;
      }
      setSelection({
        left: ref.current[String(selectedValue)].offsetLeft,
        width: ref.current[String(selectedValue)].getBoundingClientRect().width
      });
    }
  }, [selectedValue, segmentedControlWidth, options]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleClick = (_value: Value): void => {
    setValue(_value);
    onChange?.(_value);
  };

  return (
    <SegmentedControlWrapper className={className} {...props}>
      <SegmentedControlBase ref={segmentedControlRef} size={size}>
        <Bracket bracketPosition={selectPosition} />
        {options.map((opt) => (
          <ControlItem
            forwardedAs="div"
            type="phoenix"
            isDisabled={opt.isDisabled}
            isPressed={opt.value === selectedValue}
            key={String(opt.value)}
            ref={(el: HTMLDivElement) => {
              ref.current[String(opt.value)] = el;
            }}
            onClick={() => !opt.isDisabled && handleClick(opt.value)}>
            <>
              {opt.label}
              {opt.icon && opt.icon}
            </>
          </ControlItem>
        ))}
      </SegmentedControlBase>
    </SegmentedControlWrapper>
  );
};
