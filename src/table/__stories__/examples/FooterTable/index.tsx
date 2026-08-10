import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@dmitrygrigorov/components";
import Table from "../../../Table";
import { IFooterTable } from "./types";

export const FooterTable: React.FC<IFooterTable> = (props) => {
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
      paginationPageSize={5}
      title="Title"
      size="m"
      columns={columns}
      rowData={comments}
      isPagination={props.isPagination}
      isSearch={props.isSearch}
      positionSearch="footer"
      footerText={props.isText ? "Footer text" : undefined}
      isPaginationRowPerPage={props.isPaginationRowPerPage}
      footerContent={
        props.isContent ? <Button size="m">Button</Button> : undefined
      }
    />
  );
};
