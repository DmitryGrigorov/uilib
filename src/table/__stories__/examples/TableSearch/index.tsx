import React, { useEffect, useMemo, useState } from "react";
import { ITableProps, TColumn } from "../../../types";
import Table from "../../../Table";

export const TableSearch: React.FC<Partial<ITableProps>> = (props) => {
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
      title="Title"
      {...props}
      isPagination
      isSearch
      positionSearch="footer"
      columns={columns}
      rowData={comments}
      size="m"
    />
  );
};

export const TableSearchWithValueGetter: React.FC<Partial<ITableProps>> = (
  props
) => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "username",
        valueGetter: ({ data }) => `${data.username} ${data.name}`
      },
      {
        field: "username"
      }
    ],
    []
  );

  const [users, setUsers] = useState<any[]>([]);

  const loadData = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await response.json()) as any[];
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table
      paginationPageSize={10}
      title="Title"
      {...props}
      isPagination
      isSearch
      positionSearch="footer"
      columns={columns}
      rowData={users}
      size="m"
    />
  );
};
