import React, { ChangeEvent, useMemo, KeyboardEvent } from "react";
import {
  Divider,
  CheckBoxGroup,
  CheckBox,
  useDebounce
} from "@dmitrygrigorov/components";
import { useObservable, useTableService } from "../../TableContext";
import { ITableFilterMenuOptions } from "../../types";
import { IFilterDropdownProps } from "./types";

const FilterDropdown = <TData, TValue>({
  items,
  column,
  onFilterChanged
}: IFilterDropdownProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const filterParams = useObservable(tableService.filterParams);
  const filterParamsColumn = useMemo(
    () => filterParams?.[column.id]?.params || [],
    [filterParams, column]
  );

  const filterOtherColumns = useMemo(() => {
    const filter = { ...filterParams };
    delete filter[column.id];
    return Object.values(filter);
  }, [filterParams]);

  const handleChangeFilter = useDebounce(
    (values: (string | number)[], options: ITableFilterMenuOptions[]): void => {
      const filter = filterParamsColumn.filter(
        (p) => !options.map((o) => o.name).includes(p)
      );
      const newFilter = [...filter, ...(values as string[])];

      tableService.setFilter(column, newFilter);

      if (newFilter.length) {
        onFilterChanged?.([
          ...filterOtherColumns,
          { column, params: newFilter }
        ]);
      } else {
        onFilterChanged?.([...filterOtherColumns]);
      }
    },
    column.filterDebounceMs || 200
  );

  const handleClickAllCheckBox = useDebounce(
    (isChecked: boolean, options: ITableFilterMenuOptions[]): void => {
      const optionsStringArray = options.map((option) => option.name);
      const newFilter = isChecked
        ? [...new Set(optionsStringArray), ...filterParamsColumn]
        : [
            ...filterParamsColumn.filter(
              (param) => !optionsStringArray.includes(param)
            )
          ];

      tableService.setFilter(column, newFilter);

      if (newFilter.length) {
        onFilterChanged?.([
          ...filterOtherColumns,
          { column, params: newFilter }
        ]);
      } else {
        onFilterChanged?.([...filterOtherColumns]);
      }
    },
    column.filterDebounceMs || 200
  );

  return (
    <>
      {Array.isArray(items)
        ? items.map((item) => (
            <React.Fragment key={item.title}>
              {item.title && <Divider align="left">{item.title}</Divider>}
              <CheckBox
                label="All"
                isChecked={
                  item.options.filter(
                    (option) => !filterParamsColumn.includes(option.name)
                  ).length === 0
                }
                onChange={(
                  _: ChangeEvent | KeyboardEvent,
                  isChecked: boolean
                ) => handleClickAllCheckBox(isChecked, item.options)}
              />
              <CheckBoxGroup
                options={item.options.map((option) => ({
                  label: option.title,
                  value: option.name
                }))}
                value={
                  item.options
                    .filter((option) =>
                      filterParamsColumn?.includes(option.name)
                    )
                    .map((option) => option.name) || []
                }
                onChange={(_, value) => handleChangeFilter(value, item.options)}
              />
            </React.Fragment>
          ))
        : items}
    </>
  );
};

export default FilterDropdown;
