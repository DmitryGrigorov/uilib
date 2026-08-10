import React, { useEffect, useMemo, useState } from "react";
import Table from "../../../Table";
import { IPaginationChangeParams, TColumn, ITableProps } from "../../../types";

export const ColumnsPinning: React.FC<ITableProps> = (props) => {
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [products, setProducts] = useState<any[]>([]);
  const [allRowsCount, setAllRowsCount] = useState(0);

  const handlePaginationChange = (params: IPaginationChangeParams): void => {
    setPage(params.newPage);
    setRowPerPage(params.rowPerPage);
  };

  const loadData = async (): Promise<void> => {
    const response = await fetch(
      `https://dummyjson.com/products?skip=${
        (page - 1) * rowPerPage
      }&limit=${rowPerPage}`
    );
    const data = await response.json();
    setProducts(data.products);
    setAllRowsCount(data.total);
  };

  useEffect(() => {
    loadData();
  }, [page, rowPerPage]);

  const COLUMNS: TColumn<any, string>[] = useMemo(
    () => [
      {
        field: "id",
        title: "id"
      },
      {
        field: "title",
        title: "Title",
        pinnedDirection: "left",
        isDefaultPinned: true
      },
      {
        field: "description",
        title: "Description",
        pinnedDirection: "left"
      },
      {
        field: "price",
        title: "Price"
      },
      {
        field: "discountPercentage",
        title: "Discount percentage",
        pinnedDirection: "left"
      },
      {
        field: "rating",
        title: "Rating",
        pinnedDirection: "right",
        isDefaultPinned: true
      },
      {
        field: "stock",
        title: "Stock",
        pinnedDirection: "right"
      },
      {
        field: "brand",
        title: "Brand",
        pinnedDirection: "left"
      },
      {
        field: "category",
        title: "Category"
      },
      {
        field: "thumbnail",
        title: "Thumbnail",
        columnTypes: "image",
        pinnedDirection: "right"
      }
    ],
    []
  );

  return (
    <Table
      {...props}
      style={{ height: "500px" }}
      rowModel="server"
      isPagination
      paginationPageSize={10}
      paginationAllRowCount={allRowsCount}
      title="Pinnable columns"
      columns={COLUMNS}
      rowData={products}
      onPaginationChange={handlePaginationChange}
      onChangePinnedColumn={(column, pinnedDirection) =>
        console.log(column, pinnedDirection)
      }
    />
  );
};
