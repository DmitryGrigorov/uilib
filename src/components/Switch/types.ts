import React from "react";

export interface ISwitchProps {
  isIndeterminate?: boolean;
  isChecked?: boolean;
  hasTextOrIcon?: boolean;
  ariaLabel?: string;
  textBefore?: string;
  textAfter?: string;
  onChange?: (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isChecked: boolean
  ) => void;
  isDisabled?: boolean;
  className?: string;
  iconAfter?: JSX.Element;
  iconBefore?: JSX.Element;
  textDisabled?: string;
  testId?: string;
}
