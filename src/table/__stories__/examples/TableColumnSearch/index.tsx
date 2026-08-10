import React, { useEffect, useMemo, useState } from "react";
import { ITableProps, TColumn } from "../../../types";
import Table from "../../../Table";

export const TableColumnSearch: React.FC<Partial<ITableProps>> = (props) => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "name",
        isSearch: true
      },
      {
        field: "username"
      },
      {
        field: "email"
      },
      {
        field: "address.city",
        title: "city"
      }
    ],
    []
  );

  const [comments, setComments] = useState<any[]>([]);

  const loadData = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()) as any[];
    setComments(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table {...props} columns={columns} rowData={comments} size="s" isSearch />
  );
};
