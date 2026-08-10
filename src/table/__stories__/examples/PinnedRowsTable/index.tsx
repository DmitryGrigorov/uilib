import React, { useEffect, useMemo, useState } from "react";
import { ITableProps } from "../../../types";
import Table from "../../../Table";

export const PinnedRowsTable: React.FC<Partial<ITableProps>> = () => {
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

  const [comments, setComments] = useState<any[]>([]);

  const loadData = async (): Promise<void> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = (await response.json()) as any[];
    setComments(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table
      paginationPageSize={10}
      title="Title 1"
      isPagination
      isSearch
      positionSearch="footer"
      columns={columns}
      rowData={comments}
      size="m"
      isPinningRows
      pinnedRowData={[comments[0]]}
    />
  );
};
