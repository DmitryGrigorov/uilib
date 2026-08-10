import React, {
  useState,
  MouseEvent,
  useEffect,
  forwardRef,
  ReactElement,
  cloneElement,
  isValidElement
} from "react";
import Tab from "../Tab";
import { useTabContext } from "../TabContext";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { ITabProps } from "../Tab/types";
import { ITabsProps } from "./types";
import { TabsStyled } from "./styles";

interface ITabPropsWithChildren extends ITabProps {
  children?: React.ReactNode;
}

const Tabs = forwardRef<HTMLDivElement, TPropsWithAttributes<ITabsProps>>(
  (
    {
      items,
      children,
      className,
      value,
      size,
      onChange,
      testId = "tabs",
      ...props
    },
    ref
  ) => {
    const context = useTabContext();

    const [selected, setSelected] = useState<string | number | undefined>(
      typeof value === "undefined" ? context?.value : value
    );

    const handleChange = (event: MouseEvent, _value: string | number): void => {
      setSelected(_value);
      onChange?.(event, _value);
      if (!value) {
        context?.onChange(_value);
      }
    };

    useEffect(() => {
      setSelected(value);
    }, [value]);

    useEffect(() => {
      if (!value) {
        setSelected(context?.value || selected);
      }
    }, [context?.value]);

    const cloneTabElement = (
      element: ReactElement<ITabPropsWithChildren>,
      index: number
    ): ReactElement<ITabPropsWithChildren> => {
      if (!isValidElement(element)) {
        return element;
      }

      if (element.type === Tab) {
        const isSelected = element.props.value === selected;
        return cloneElement(element, {
          size,
          isSelected,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            handleChange(e, element.props.value || index);
            element.props.onClick?.(e);
          }
        });
      }

      if (element.props.children) {
        const clonedChildren = React.Children.map(
          element.props.children,
          (child, childIndex) =>
            isValidElement(child)
              ? cloneTabElement(
                  child as ReactElement<ITabPropsWithChildren>,
                  childIndex
                )
              : child
        );
        return cloneElement(element, { children: clonedChildren });
      }

      return element;
    };

    return (
      <TabsStyled
        className={className}
        role="tablist"
        ref={ref}
        data-testid={testId}
        {...props}>
        {children
          ? React.Children.map(children, (child, index) =>
              cloneTabElement(child, index)
            )
          : items?.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <Tab
                    size={size}
                    key={item}
                    label={item}
                    isSelected={index === selected}
                    onClick={(event: MouseEvent) => handleChange(event, index)}
                  />
                );
              }
              return (
                <Tab
                  size={size}
                  key={item.label}
                  label={item.label}
                  isSelected={item.value === selected}
                  icon={item.icon}
                  onClick={(event: MouseEvent) =>
                    handleChange(event, item.value || index)
                  }
                />
              );
            })}
      </TabsStyled>
    );
  }
);

Tabs.displayName = "Tabs";

export default Tabs;
