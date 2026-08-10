import React, {
  MouseEvent,
  ChangeEvent,
  forwardRef,
  KeyboardEvent
} from "react";
import ListItem from "../ListItem";
import { useStateProps } from "../../../hooks/useStateProps";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import CheckBox from "../../../CheckBox";
import List from "../List";
import { IListCheckBoxProps, IListItemCheckBoxDataSource } from "./types";

const DEFAULT_VALUE: (string | number)[] = [];

const ListCheckBoxes = forwardRef<
  HTMLUListElement,
  TPropsWithAttributes<IListCheckBoxProps, "ul">
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
      event: MouseEvent<HTMLLIElement> | ChangeEvent | KeyboardEvent,
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

    const handleSelectAll = (
      event: MouseEvent<HTMLLIElement> | ChangeEvent | KeyboardEvent
    ): void => {
      let values: typeof value;
      if (value.length === dataSource?.length) {
        values = [];
      } else {
        values = dataSource?.map((item) => item.value) || [];
      }
      setValue(values);
      onChange?.(event, values);
    };

    const renderItem = (item: IListItemCheckBoxDataSource): JSX.Element => (
      <ListItem
        {...item}
        key={item.label}
        className={classNameItem}
        style={styleItem}
        isDisabled={isDisabled || item.isDisabled}
        onClick={(event) => handleCLick(event, item.value)}
        isSelected={value.indexOf(item.value) !== -1}
        size={size}
        leadContent={
          <CheckBox
            isDisabled={isDisabled || item.isDisabled}
            name={item.name}
            isChecked={value.indexOf(item.value) !== -1}
            onChange={(event) => handleCLick(event, item.value)}
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
        leadContent={
          <CheckBox
            isDisabled={isDisabled}
            isChecked={Boolean(value.length === dataSource?.length)}
            onChange={(event) => handleSelectAll(event)}
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

ListCheckBoxes.displayName = "ListCheckBoxes";

export default ListCheckBoxes;
