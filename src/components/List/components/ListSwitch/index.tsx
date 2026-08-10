import React, { MouseEvent, forwardRef } from "react";
import ListItem from "../ListItem";
import { useStateProps } from "../../../hooks/useStateProps";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import Switch from "../../../Switch";
import List from "../List";
import { IListSwitchProps, IListItemSwitchDataSource } from "./types";

const DEFAULT_VALUE: (string | number)[] = [];

const ListSwitch = forwardRef<
  HTMLUListElement,
  TPropsWithAttributes<IListSwitchProps, "ul">
>(
  (
    {
      dataSource,
      onChange,
      defaultValue = DEFAULT_VALUE,
      className,
      style,
      isDisabled,
      header,
      height,
      width,
      viewType,
      isSelected,
      isShowSelectAll,
      styleItem,
      classNameItem,
      size = "l",
      onClickItem,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useStateProps(defaultValue);

    const handleCLick = (
      event: MouseEvent<HTMLLIElement>,
      val: string | number
    ): void => {
      const values = [...value];
      if (values.includes(val)) {
        values.splice(values.indexOf(val), 1);
      } else {
        values.push(val);
      }
      setValue(values);
      onChange?.(event, values);
      onClickItem?.(event, val);
    };

    const handleSelectAll = (event: MouseEvent<HTMLLIElement>): void => {
      let values: typeof value;
      if (value.length === dataSource?.length) {
        values = [];
      } else {
        values = dataSource?.map((item) => item.value) || [];
      }
      setValue(values);
      onChange?.(event, values);
    };

    const renderItem = (item: IListItemSwitchDataSource): JSX.Element => (
      <ListItem
        size={size}
        {...item}
        key={item.label}
        className={classNameItem}
        style={styleItem}
        isDisabled={isDisabled || item.isDisabled}
        onClick={(event) => handleCLick(event, item.value)}
        isSelected={value.indexOf(item.value) !== -1}
        trailContent={
          <Switch
            isDisabled={isDisabled || item.isDisabled}
            isChecked={value.indexOf(item.value) !== -1}
          />
        }>
        {item.label}
      </ListItem>
    );

    const renderSelectAllItems = (): JSX.Element => (
      <ListItem
        size={size}
        key="selectAll"
        className={classNameItem}
        style={styleItem}
        isDisabled={isDisabled}
        onClick={(event) => handleSelectAll(event)}
        isSelected={Boolean(value.length === dataSource?.length)}
        trailContent={
          <Switch
            isDisabled={isDisabled}
            isChecked={Boolean(value.length === dataSource?.length)}
          />
        }>
        Select all
      </ListItem>
    );

    return (
      <List
        ref={ref}
        header={header}
        height={height}
        width={width}
        viewType={viewType}
        isSelected={isSelected}
        isShowSelectAll={isShowSelectAll}
        className={className}
        style={style}
        size={size}
        dataSource={dataSource}
        renderItem={renderItem}
        renderSelectAllItems={renderSelectAllItems}
        isDisabled={isDisabled}
        {...props}
      />
    );
  }
);

ListSwitch.displayName = "ListSwitch";

export default ListSwitch;
