import React, { PropsWithChildren } from "react";

import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import Button from "../Button";
import { EmptyStateWrapper, HeaderStyled, IconBox, TextStyled } from "./style";
import { TEmptyStateProps } from "./types";

const EmptyState: React.FC<
  TPropsWithAttributes<PropsWithChildren<TEmptyStateProps>>
> = ({
  icon,
  header,
  className,
  text,
  width,
  buttonIcon,
  isButton,
  onButtonClick,
  buttonText,
  ...props
}) => (
  <EmptyStateWrapper width={width} className={className} {...props}>
    {icon && <IconBox>{icon}</IconBox>}
    {header && <HeaderStyled type="capricornus">{header}</HeaderStyled>}
    {text && <TextStyled type="corvus">{text}</TextStyled>}
    {(isButton || onButtonClick) && (
      <Button icon={buttonIcon} width="100%" onClick={() => onButtonClick?.()}>
        {buttonText}
      </Button>
    )}
  </EmptyStateWrapper>
);

export default EmptyState;
