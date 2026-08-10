import React, { useMemo } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { LabelStyled } from "./styles";
import { ILabelProps } from "./types";
import { labelIcon } from "./helpers";

const Label: React.FC<TPropsWithAttributes<ILabelProps, "span">> = ({
  icon,
  isIcon,
  isDisabled,
  status,
  children,
  isRequired,
  as,
  size,
  className,
  testId = "label",
  ...props
}) => {
  const LabelIcon = useMemo(() => labelIcon[status], [status]);

  return (
    <LabelStyled
      as={as}
      status={status}
      isDisabled={isDisabled}
      isRequired={isRequired}
      type="cygnus"
      size={size}
      isIcon={isIcon}
      className={className}
      data-testid={testId}
      {...props}>
      {isIcon && !icon && (
        <LabelIcon className="label-icon" width={12} height={12} />
      )}
      {icon && icon}
      {children}
      {isRequired && <span className="required-container">*</span>}
    </LabelStyled>
  );
};

export default Label;
