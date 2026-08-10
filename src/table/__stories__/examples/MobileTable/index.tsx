import React, { useEffect, useMemo, useState } from "react";
import Table from "../../../Table";
import { StyledWindowTableMobile } from "./style";
import { IMobileTable } from "./types";

export const MobileTableExample: React.FC<IMobileTable> = (props) => {
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
    <StyledWindowTableMobile>
      <Table
        isPagination
        isPaginationRowPerPage
        isMobile
        isSearch
        size="s"
        title="Title"
        columns={columns}
        rowData={comments}
        {...props}
      />
    </StyledWindowTableMobile>
  );
};
