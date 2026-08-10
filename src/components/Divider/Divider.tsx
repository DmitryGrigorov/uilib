import React, { forwardRef, PropsWithChildren } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import P2 from "../typography/P2";
import { IPropsDivider } from "./types";
import { DividerComponent } from "./styles";

const Divider = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithChildren<IPropsDivider>>
>(
  (
    {
      id,
      children,
      className,
      status = "default",
      direction = "row",
      align = "center",
      testId = "divider",
      width,
      height,
      ...otherProps
    },
    ref
  ) => (
    <DividerComponent
      ref={ref}
      id={id}
      className={className}
      status={status}
      direction={direction}
      align={align}
      data-testid={testId}
      width={width}
      isHasChildren={Boolean(children)}
      height={height}
      {...otherProps}>
      {typeof children === "string" ? (
        <P2 type="lynx">{children}</P2>
      ) : (
        children
      )}
    </DividerComponent>
  )
);

Divider.displayName = "Divider";

export default Divider;
