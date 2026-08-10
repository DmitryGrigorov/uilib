import React, { MouseEvent, Fragment } from "react";
import { RadioButton, Divider, Button } from "@dmitrygrigorov/components";
import { IconReset } from "@dmitrygrigorov/icons";
import { useTableService, useObservable } from "../../TableContext";
import { ISortDropdownProps } from "./types";
import { DividerStyled } from "./styles";

const SortDropdown = <TData, TValue>({
  items,
  column,
  onChangeSort
}: ISortDropdownProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const sortParams = useObservable(tableService.sortParams);

  const handleChangeSort = (_: MouseEvent, value?: string | number): void => {
    tableService.setSorting(column, value as string);
    onChangeSort?.(value as string);
  };

  const handleResetSort = (): void => {
    tableService.setSorting(column, null);
    onChangeSort?.(null);
  };

  return (
    <>
      {items.map((item) => (
        <Fragment key={item.title}>
          {item.title && <Divider align="left">{item.title}</Divider>}
          {item.options.map((option) => (
            <RadioButton
              name={option.nameSort}
              label={option.title}
              key={option.nameSort}
              value={option.nameSort}
              onClick={handleChangeSort}
              isChecked={
                sortParams?.name === option.nameSort &&
                column.field === sortParams.field
              }
            />
          ))}
        </Fragment>
      ))}
      {sortParams?.field === column.field && (
        <>
          <DividerStyled />
          <Button
            viewType="link"
            size="s"
            icon={<IconReset />}
            onClick={handleResetSort}>
            Reset
          </Button>
        </>
      )}
    </>
  );
};

export default SortDropdown;
