import React, { useEffect, useMemo, useState } from "react";
import Table from "../../../Table";
import { IHeaderTable } from "./types";

export const HeaderTable: React.FC<IHeaderTable> = (props) => {
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
      "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10"
    );
    const data = (await response.json()) as any[];
    setComments(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table
      size="m"
      title="Title"
      columns={columns}
      rowData={comments}
      {...props}
    />
  );
};
