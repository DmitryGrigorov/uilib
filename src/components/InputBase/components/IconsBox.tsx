import React from "react";
import {
  IconCloseCircle,
  IconEye1,
  IconEyeSlash1,
  IconInfoCircle
} from "@dmitrygrigorov/icons";

import Tooltip from "../../Tooltip";
import { IIconsBox } from "../interfaces";
import { IconWrapper, IconsBoxStyled } from "../style";

const IconsBox: React.FC<IIconsBox> = ({
  isHasValue,
  isDisabled,
  type,
  isPasswordVisible,
  tooltipContent,
  tooltipPosition,
  isShowClearIcon,
  onClear,
  onPasswordToggle,
  testId = "",
  classNameIconBox,
  isReadOnly,
  isRightContent,
  size
}) => {
  const onClickHandler = (): void => {
    !isDisabled && onPasswordToggle?.();
  };

  return (
    <IconsBoxStyled size={size} className={classNameIconBox}>
      {isShowClearIcon && (
        <IconWrapper
          onClick={onClear}
          data-element="input-clearFunc"
          className={
            isRightContent ||
            (type === "password" && !isReadOnly && !isDisabled)
              ? "icon-clear"
              : undefined
          }>
          {isHasValue && !isDisabled && !isReadOnly && (
            <IconCloseCircle
              data-element="input-clearIcon"
              width={14}
              height={14}
            />
          )}
        </IconWrapper>
      )}
      {type === "password" && !isReadOnly && !isDisabled && (
        <IconWrapper onClick={onClickHandler}>
          {isPasswordVisible ? (
            <IconEye1
              data-element="input-hidePasswordIcon"
              data-test-id={`input_eye_${testId}`}
              width={14}
              height={14}
            />
          ) : (
            <IconEyeSlash1
              data-element="input-showPasswordIcon"
              data-test-id={`input_eye_${testId}`}
              width={14}
              height={14}
            />
          )}
        </IconWrapper>
      )}
      {tooltipContent && (
        <IconWrapper>
          <Tooltip text={tooltipContent} direction={tooltipPosition}>
            <IconInfoCircle width={14} height={14} />
          </Tooltip>
        </IconWrapper>
      )}
    </IconsBoxStyled>
  );
};

export default IconsBox;
