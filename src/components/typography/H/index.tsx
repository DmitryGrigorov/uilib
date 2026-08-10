import React, { forwardRef, PropsWithChildren, PropsWithRef } from "react";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import { IHProps } from "./types";
import { HStyled } from "./styles";

const H = forwardRef<
  HTMLElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<IHProps>>, "span">
>(
  (
    {
      className,
      children,
      size,
      type = "aries",
      onClick,
      color,
      as = "span",
      fontFamily = "Onest",
      ...props
    },
    ref
  ) => (
    <HStyled
      size={size}
      type={type}
      onClick={onClick}
      className={className}
      color={color}
      as={as}
      fontFamily={fontFamily}
      ref={ref}
      {...props}>
      {children}
    </HStyled>
  )
);

H.displayName = "H";

export default H;
