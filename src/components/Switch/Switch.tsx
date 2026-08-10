import React, { cloneElement, useEffect, useRef } from "react";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  SwitchComponent,
  SwitchInput,
  SwitchSlider,
  SwitchWrapper,
  TextAfter,
  TextBefore,
  SwitchSliderIndeterminate
} from "./style";
import { ISwitchProps } from "./types";

const Switch = ({
  isChecked,
  isDisabled,
  className,
  hasTextOrIcon,
  ariaLabel = "Toggle setting",
  onChange,
  iconBefore,
  iconAfter,
  textAfter,
  textBefore,
  isIndeterminate,
  textDisabled,
  testId = "switch",
  ...props
}: TPropsWithAttributes<ISwitchProps>): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isChecked, isIndeterminate]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(
      evt as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
      evt.currentTarget.checked
    );
  };

  const renderBefore = (): JSX.Element | null | false | undefined => {
    if (hasTextOrIcon && !isIndeterminate) {
      if (isChecked) {
        if (iconBefore) {
          return cloneElement(iconBefore, {
            className: "beforeSVG",
            width: 12,
            height: 12
          });
        }
        return (
          <TextBefore>
            <P2 as="div" type="cetus">
              {textBefore ? textBefore : "On"}
            </P2>
          </TextBefore>
        );
      }
    }
    return null;
  };

  const renderAfter = (): JSX.Element | null | false | undefined => {
    if (hasTextOrIcon && !isIndeterminate) {
      if (!isChecked) {
        if (iconAfter) {
          return cloneElement(iconAfter, {
            className: "afterSVG",
            width: 12,
            height: 12
          });
        }
        return (
          <TextAfter>
            <P2 as="div" type="cetus">
              {isDisabled ? textDisabled || "N/A" : textAfter || "Off"}
            </P2>
          </TextAfter>
        );
      }
    }
    return null;
  };

  return (
    <SwitchComponent className={className} data-testid={testId} {...props}>
      <SwitchWrapper
        $isDisabled={isDisabled}
        $isChecked={isChecked}
        $hasTextOrIcon={hasTextOrIcon}
        $iconAfter={iconAfter}
        $isIndeterminate={isIndeterminate}
        $iconBefore={iconBefore}>
        {renderBefore()}
        <SwitchInput
          ref={inputRef}
          data-testid={`${testId}-input`}
          data-element="switch-input"
          type="checkbox"
          checked={Boolean(isChecked)}
          disabled={Boolean(isDisabled)}
          name="checkbox"
          aria-label={ariaLabel}
          aria-checked={isIndeterminate ? "mixed" : undefined}
          onChange={handleChange}
        />
        {isIndeterminate ? (
          <SwitchSliderIndeterminate />
        ) : (
          <SwitchSlider
            data-element="switch-slider"
            $isChecked={isChecked}
            $isDisabled={isDisabled}
            $hasTextOrIcon={hasTextOrIcon}
          />
        )}
        {renderAfter()}
      </SwitchWrapper>
    </SwitchComponent>
  );
};

export default Switch;
