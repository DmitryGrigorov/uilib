import React, { useEffect, useState, useMemo } from "react";
import Table from "../../../Table";
import { ITableProps, TColumn } from "../../../types";

export const CheckboxTable: React.FC<ITableProps> = (props) => {
  const columns: TColumn[] = useMemo(
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
      "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=20"
    );
    const data = (await response.json()) as any[];
    setComments(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table
      {...props}
      size="m"
      title="Title"
      columns={columns}
      isCheckboxSelection
      isHeaderCheckboxSelection
      rowData={comments}
      isPagination
      paginationPageSize={10}
    />
  );
};
