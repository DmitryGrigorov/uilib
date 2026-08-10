import styled from "styled-components";
import { FC } from "react";
import Table from "../../../Table";
import {
  IDetailRowOptions,
  IRowDetailRendererParams,
  ITableProps,
  TColumn
} from "../../../types";

const COLUMNS: TColumn[] = [
  { field: "name", width: "40%" },
  {
    field: "files",
    columnTypes: "number",
    width: "20%",
    valueFormatter: (params) => `${params.value} pcs.`
  },
  { field: "user", width: "40%" }
];

const NESTED_ROWS = [
  {
    name: "Upload from 12.01.2024 22:10:48",
    files: 2,
    user: "K. Konstantinopolsky",
    dataNestedTable: [
      {
        name: "Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      },
      {
        name: "Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      }
    ]
  },
  {
    name: "Upload from 10.01.2024 18:10:48",
    files: 2,
    user: "level 1 - 555",
    dataNestedTable: [
      {
        name: "Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      },
      {
        name: "Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      }
    ]
  }
];

const NESTED_ROWS1 = [
  {
    name: "Upload from 12.01.2024 22:10:48",
    files: 2,
    user: "K. Konstantinopolsky",
    dataNestedTable: [
      {
        name: "Invoice_OPIvanov_11.12.2023_22.124 22:10:48",
        files: 1,
        user: "A. Konstantinopolskaya-Piernartsissova"
      },
      {
        name: "Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      }
    ]
  },
  {
    name: "Upload from 10.01.2024 18:10:48",
    files: 1,
    user: "K. Konstantinopolsky",
    dataNestedTable: [
      {
        name: "Copy_Copy_Invoice_OPIvanov_11.12.2023_22.124 22:10:48",
        files: 1,
        user: "Alexandra Konstantinopolskaya-Piernartsissova"
      },
      {
        name: "Copy_Final_Passport_OPIvanov_11.12.2023_22.15",
        files: 1,
        user: "K. Konstantinopolsky"
      }
    ]
  }
];

const detailRowOptions = {
  columns: [
    {
      field: "name",
      width: "40%"
    },
    {
      field: "files",
      width: "20%"
    },
    {
      field: "user",
      width: "40%"
    }
  ],
  getDetailRowData: ({ data }) => data.dataNestedTable
} as IDetailRowOptions<any, any>;

const DetailRowWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
`;

export const DetailRowRerender: FC<IRowDetailRendererParams<any, any>> = ({
  data
}) => (
  <DetailRowWrapper>
    {data.dataNestedTable.map((row: any) => (
      <div key={JSON.stringify(row)}>
        <p>a2 {row.a2}</p>
        <p>b2 {row.b2}</p>
        <p>c2 {row.c2}</p>
      </div>
    ))}
  </DetailRowWrapper>
);

export const BaseNestedTable = (props: Partial<ITableProps>): JSX.Element => (
  <Table
    {...props}
    columns={COLUMNS}
    isDetailRow
    viewTypeDetail="table"
    rowData={NESTED_ROWS}
    detailRowOptions={detailRowOptions}
  />
);

export const NestedTableWithoutHeaders = (
  props: Partial<ITableProps>
): JSX.Element => (
  <Table
    {...props}
    columns={COLUMNS}
    isDetailRow
    viewTypeDetail="table"
    rowData={NESTED_ROWS1}
    detailRowOptions={{ ...detailRowOptions, isHiddenColumnHeader: true }}
  />
);

export const NestedDetailsRowTable = (
  props: Partial<ITableProps>
): JSX.Element => (
  <Table
    {...props}
    columns={COLUMNS}
    viewTypeDetail="info"
    isDetailRow
    rowData={NESTED_ROWS}
    detailRowOptions={{ ...detailRowOptions, isHiddenColumnHeader: true }}
    detailRowRenderer={DetailRowRerender}
  />
);
