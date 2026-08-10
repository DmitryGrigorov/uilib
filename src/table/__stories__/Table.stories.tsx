import { Meta, StoryObj } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { Button } from "@dmitrygrigorov/components";
import Table from "../Table";
import { TColumn, TCellParamsStatus } from "../types";
import { MobileTableExample } from "./examples/MobileTable";
import {
  TablePagination,
  TablePaginationServer
} from "./examples/TablePagination";
import { FooterTable as FooterTableExample } from "./examples/FooterTable";
import { HeaderTable as HeaderTableExample } from "./examples/HeaderTable";
import { CheckboxTable as CheckboxTableExample } from "./examples/CheckboxTable";
import { TableSorting } from "./examples/TableSorting";
import { TableEditable } from "./examples/TableEditable";
import { TableFilter } from "./examples/TableFilter";
import { TableFullScreen } from "./examples/TableFullScreen";
import { TableColumnSearch } from "./examples/TableColumnSearch";
import { DetailRowRerender } from "./examples/NestedData";
import { PinnedRowsTable as PinnedRows } from "./examples/PinnedRowsTable";
import { ColumnsPinning } from "./examples/ColumnsPinning";

const COLUMNS: TColumn<any, string>[] = [
  {
    field: "p1S1",
    title: "P1-s",
    cellTrailContent: <IconSetting1 />,
    cellIcon: <IconSetting1 />,
    iconTitle: <IconSetting1 />,
    isContextMenu: true,
    getContextMenu: (): string[] => ["P2-1", "P2-2", "P2-3"]
  },
  {
    field: "p1S2",
    title: "P1-s",
    description: "P1-s",
    columnTypes: "status",
    cellParamsGetter: (): TCellParamsStatus => ({
      status: "error",
      leadIcon: <IconSetting1 />
    }),
    iconDescription: <IconSetting1 />
  },
  {
    field: "p1S3",
    title: "P1-s"
  },
  {
    field: "p1S4",
    title: "P1-s"
  }
];

const ROW_DATA = [
  {
    p1S1: "P2-l-1",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-2",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-3",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-4",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-5",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-6",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-7",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  },
  {
    p1S1: "P2-l-8",
    p1S2: "P2-l",
    p1S3: "P2-l",
    p1S4: "P2-l"
  }
];

const NESTED_COLUMNS = [
  {
    field: "a2"
  },
  {
    field: "b2"
  },
  {
    field: "c2"
  }
];

const NESTED_ROWS = [
  {
    p1S1: "level 1 - 111",
    p1S2: "level 1 - 222",
    dataNestedTable: [
      { a2: "level 2 - 5551", b2: "level 2 - 6661", c2: "level 2 - 7771" },
      { a2: "level 2 - 5552", b2: "level 2 - 6662", c2: "level 2 - 7772" },
      { a2: "level 2 - 5552", b2: "level 2 - 6662", c2: "level 2 - 7772" },
      { a2: "level 2 - 5554", b2: "level 2 - 6664", c2: "level 2 - 7774" },
      { a2: "level 2 - 5555", b2: "level 2 - 6665", c2: "level 2 - 7775" },
      { a2: "level 2 - 5556", b2: "level 2 - 6666", c2: "level 2 - 7776" }
    ]
  },
  {
    p1S1: "level 1",
    p1S2: "level 1",
    dataNestedTable: [
      { a2: "level 2 - 5551", b2: "level 2 - 6661", c2: "level 2 - 7771" },
      { a2: "level 2 - 5552", b2: "level 2 - 6662", c2: "level 2 - 7772" },
      { a2: "level 2 - 5552", b2: "level 2 - 6662", c2: "level 2 - 7772" },
      { a2: "level 2 - 5554", b2: "level 2 - 6664", c2: "level 2 - 7774" },
      { a2: "level 2 - 5555", b2: "level 2 - 6665", c2: "level 2 - 7775" },
      { a2: "level 2 - 5556", b2: "level 2 - 6666", c2: "level 2 - 7776" }
    ]
  }
];

export default {
  title: "Tables/Examples",
  component: Table
} as Meta<typeof Table<any, string>>;

export const BaseTable: StoryObj<typeof Table<any, string>> = {
  args: {
    size: "m",
    title: "Title",
    columns: COLUMNS,
    rowData: ROW_DATA,
    description: "Description",
    isDividerRow: true
  },
  argTypes: {
    positionSearch: {
      options: ["header", "footer"],
      control: { type: "radio" }
    },
    viewTypeDetail: {
      options: ["table", "info"],
      control: { type: "radio" }
    }
  }
};

export const PaginationTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TablePaginationServer {...args} />,
  args: {
    title: "Title",
    description: "Description",
    isDividerRow: false,
    isPagination: true,
    paginationPageSize: 10,
    paginationCurrentPage: 1,
    isPaginationRowPerPage: false,
    paginationCounts: [1, 5, 10],
    isFillPagination: false
  }
};

export const SearchTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TablePagination {...args} />,
  args: {
    title: "Title",
    rowData: ROW_DATA,
    description: "Description",
    isDividerRow: false,
    isPagination: true,
    paginationPageSize: 4,
    paginationCurrentPage: 2,
    isPaginationRowPerPage: false,
    paginationCounts: [1, 5, 10],
    isSearch: true,
    search: ""
  },
  argTypes: {
    positionSearch: {
      options: ["header", "footer"],
      control: { type: "radio" }
    },
    viewTypeDetail: {
      options: ["table", "info"],
      control: { type: "radio" }
    }
  }
};

export const SortingTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TableSorting {...args} />
};

export const NestedTable: StoryObj<typeof Table<any, string>> = {
  args: {
    size: "l",
    title: "Nested tables",
    columns: COLUMNS,
    rowData: NESTED_ROWS,
    description: "Description",
    isDetailRow: true,
    isDividerRow: false,
    viewTypeDetail: "table",
    detailRowOptions: {
      isHiddenColumnHeader: true,
      columns: NESTED_COLUMNS,
      getDetailRowData: ({ data }) => data.dataNestedTable
    },
    detailRowRenderer: DetailRowRerender
  },
  argTypes: {
    positionSearch: {
      options: ["header", "footer"],
      control: { type: "radio" }
    },
    viewTypeDetail: {
      options: ["table", "info"],
      control: { type: "radio" }
    }
  }
};

export const FooterTable: StoryObj<typeof FooterTableExample> = {
  render: (args) => <FooterTableExample {...args} />,
  args: {
    isContent: false,
    isPagination: false,
    isSearch: false,
    isText: false,
    isPaginationRowPerPage: false
  }
};

export const HeaderTable: StoryObj<typeof HeaderTableExample> = {
  render: (args) => <HeaderTableExample {...args} />,
  args: {
    isContent: false,
    isSearch: true,
    additionalButton: <IconSetting1 />,
    headerContent: (
      <>
        <Button viewType="primary" size="m">
          Button
        </Button>
        <Button viewType="secondary" size="m">
          Button
        </Button>
      </>
    )
  }
};

export const EditableTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TableEditable {...args} />
};

export const FullScreen: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TableFullScreen {...args} />,
  parameters: {
    layout: "centered"
  }
};

export const FilterTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TableFilter {...args} />
};

export const SearchColumn: StoryObj<typeof Table<any, string>> = {
  render: (args) => <TableColumnSearch {...args} />
};

export const CheckboxTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <CheckboxTableExample {...args} />
};

export const PinnedRowsTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <PinnedRows {...args} />
};

export const ColumnsPinningTable: StoryObj<typeof Table<any, string>> = {
  render: (args) => <ColumnsPinning {...args} />
};

export const MobileTable: StoryObj<typeof MobileTableExample> = {
  render: (args) => <MobileTableExample {...args} />
};
