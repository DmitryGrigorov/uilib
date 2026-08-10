import React, { useEffect, useMemo, useState } from "react";
import { IPaginationChangeParams, ITableProps } from "../../../types";
import Table from "../../..//Table";

export const TableFullScreen: React.FC<Partial<ITableProps>> = ({
  paginationCurrentPage,
  paginationPageSize,
  ...props
}) => {
  const columns = useMemo(
    () => [
      {
        field: "postId"
      },
      {
        field: "id"
      },
      {
        field: "name"
      },
      {
        field: "email"
      }
    ],
    []
  );
  const [page, setPage] = useState(paginationCurrentPage || 1);
  const [rowPerPage, setRowPerPage] = useState(paginationPageSize || 10);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    paginationPageSize && setRowPerPage(paginationPageSize);
  }, [paginationPageSize]);

  useEffect(() => {
    paginationCurrentPage && setPage(paginationCurrentPage);
  }, [paginationCurrentPage]);

  const handlePaginationChange = (params: IPaginationChangeParams): void => {
    setPage(params.newPage);
    setRowPerPage(params.rowPerPage);
  };

  const loadData = async (): Promise<void> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_start=${
        (page - 1) * rowPerPage
      }&_limit=${rowPerPage}`
    );
    const data = (await response.json()) as any[];
    setComments(data);
  };

  useEffect(() => {
    loadData();
  }, [page, rowPerPage]);
  return (
    <div style={{ width: "500px", height: "300px" }}>
      <Table
        {...props}
        title="Table"
        rowModel="server"
        columns={columns}
        rowData={comments}
        onPaginationChange={handlePaginationChange}
        paginationPageSize={rowPerPage}
        paginationCurrentPage={page}
        paginationAllRowCount={500}
        isPagination
        isResize
      />
    </div>
  );
};
