import React, { MouseEvent, forwardRef } from "react";
import ListItem from "../ListItem";
import { useStateProps } from "../../../hooks/useStateProps";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import RadioButton from "../../../RadioButton";
import List from "../List";
import { IListRadioButtons, IListItemRadioButtonDataSource } from "./types";

const ListRadioButtons = forwardRef<
  HTMLUListElement,
  TPropsWithAttributes<IListRadioButtons, "ul">
>(
  (
    {
      dataSource,
      onChange,
      defaultValue,
      className,
      style,
      isDisabled,
      header,
      height,
      width,
      viewType,
      isSelected,
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
      val: string
    ): void => {
      setValue(val);
      onChange?.(event, val);
      onClickItem?.(event, val);
    };

    const renderItem = (item: IListItemRadioButtonDataSource): JSX.Element => (
      <ListItem
        {...item}
        key={item.label}
        size={size}
        className={classNameItem}
        style={styleItem}
        isDisabled={isDisabled || item.isDisabled}
        onClick={(event) => handleCLick(event, item.value)}
        isSelected={item.value === value}
        leadContent={
          <RadioButton
            isDisabled={isDisabled || item.isDisabled}
            value={item.value}
            name={item.name}
            isChecked={item.value === value}
          />
        }>
        {item.label}
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
        className={className}
        style={style}
        size={size}
        dataSource={dataSource}
        renderItem={renderItem}
        isDisabled={isDisabled}
        {...props}
      />
    );
  }
);

ListRadioButtons.displayName = "ListRadioButtons";

export default ListRadioButtons;
