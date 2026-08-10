import React, { ChangeEvent, MouseEvent } from "react";
import { SearchBox, useDebounce, P2 } from "@dmitrygrigorov/components";
import { useObservable, useTableService } from "../../TableContext";
import { ISearchDropdownProps } from "./types";
import { SearchDropdownHintsWrapper } from "./styles";

const SearchDropdown = <TData, TValue>({
  column,
  onSearch
}: ISearchDropdownProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const searchColumns = useObservable(tableService.searchColumns);

  const handleSearch = useDebounce(
    (_: MouseEvent | ChangeEvent, value: string) => {
      tableService.searchRows(value, column);
      onSearch?.({ value, column });
    },
    200
  );

  return (
    <>
      <SearchBox
        size="m"
        viewType="line"
        onChange={handleSearch}
        value={column.id ? searchColumns.get(column.id) || "" : ""}
      />
      {column.hintsSearch?.length && (
        <SearchDropdownHintsWrapper>
          {column.hintsSearch.map((hint) => (
            <P2
              as="p"
              type="corvus"
              onClick={(event: MouseEvent) => handleSearch(event, hint)}
              key={hint}>
              {hint}
            </P2>
          ))}
        </SearchDropdownHintsWrapper>
      )}
    </>
  );
};

export default SearchDropdown;
