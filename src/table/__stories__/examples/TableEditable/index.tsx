import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@dmitrygrigorov/components";
import { IconEdit2 } from "@dmitrygrigorov/icons";
import { ITableProps, TColumn, IEditableCallbackParams } from "../../../types";
import Table from "../../../Table";

export const TableEditable: React.FC<Partial<ITableProps>> = (props) => {
  const columns = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "name",
        isEditable: true
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

  return <Table {...props} columns={columns} rowData={comments} size="s" />;
};

export const TableConditionalEditable: React.FC<Partial<ITableProps>> = (
  props
) => {
  const [rowIndexEditable, setRowIndexEditable] = useState<number | null>(null);
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id"
      },
      {
        field: "name",
        columnTypes: "basic",
        isEditable: (params: IEditableCallbackParams<any, string>) =>
          params.node.rowIndex === rowIndexEditable
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
      },
      {
        field: "edit",
        cellRenderer: ({ rowIndex }) => (
          <Button
            viewType="icon"
            onClick={() => setRowIndexEditable(rowIndex)}
            size="s">
            <IconEdit2 />
          </Button>
        )
      }
    ],
    [rowIndexEditable]
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

  return <Table {...props} columns={columns} rowData={comments} size="s" />;
};
