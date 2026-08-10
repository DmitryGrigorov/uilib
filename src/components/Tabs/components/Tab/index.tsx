import React, {
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  cloneElement
} from "react";
import { useTabContext } from "../TabContext";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { TabStyled, TabContent, TabContentS } from "./styles";
import { ITabProps } from "./types";

const Tab = forwardRef<
  HTMLButtonElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<ITabProps>>, "button">
>(
  (
    {
      label,
      className,
      onClick,
      isDisabled,
      icon,
      size,
      style,
      as,
      children,
      testId = "tab",
      value,
      isSelected,
      ...props
    },
    ref
  ) => {
    const context = useTabContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      if (!isDisabled) {
        onClick?.(e);
        context?.onChange(value as string | number);
      }
    };

    return (
      <TabStyled
        {...props}
        data-testid={testId}
        role="tab"
        className={`${className || ""} ${isSelected ? "tab_selected" : ""}`}
        size={size}
        isDisabled={isDisabled}
        onClick={handleClick}
        style={style}
        ref={ref}
        as={as}>
        {icon && cloneElement(icon, { className: "tab__icon" })}
        {label &&
          (size === "m" ? (
            <TabContentS type="pavo" forwardedAs="span">
              {label}
            </TabContentS>
          ) : (
            <TabContent type="phoenix" forwardedAs="span">
              {label}
            </TabContent>
          ))}
        {children}
      </TabStyled>
    );
  }
);

Tab.displayName = "Tab";

export default Tab;
