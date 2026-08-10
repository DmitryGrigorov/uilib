import React, { useMemo } from "react";
import { IDropdownItem } from "@dmitrygrigorov/components";
import { TColumn, TGetColumnMenuItems } from "../../../types";
import Table from "../../../Table";

const getContextMenuStringItems = (): string[] => ["P2-1", "P2-2", "P2-3"];

const getContextMenuDropdownItem = (): IDropdownItem[] => [
  { label: "1", groupId: 1 },
  { label: "2", groupId: 2 },
  { label: "12", groupId: 1 },
  { label: "123", groupId: 1 },
  { label: "124", groupId: 1 },
  { label: "125", groupId: 1 }
];

const getContextMenuDropdownItemWithClick = (): IDropdownItem[] => [
  {
    label: "Item 1",
    groupId: 1,
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert("You clicked item 1");
    }
  }
];

export const TableColumnContextMenuObject: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id",
        isContextMenu: true,
        getContextMenu: getContextMenuStringItems
      },
      {
        field: "fullName",
        title: "Full name",
        isContextMenu: true,
        getContextMenu: getContextMenuDropdownItem
      },
      {
        field: "email",
        title: "email",
        getContextMenu: getContextMenuStringItems
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Denis Kryukov",
      email: "denerVeryCool@gmaul.com"
    },
    {
      id: "2",
      fullName: "Gennady Fyodorov",
      email: "gennady.fdorov@gmaul.com"
    },
    {
      id: "3",
      fullName: "Mikhail Terentyev",
      email: "mik.palych@gmail.com"
    }
  ];

  return <Table title="Context menu" columns={columns} rowData={row} />;
};

export const TableColumnContextMenuTable: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id",
        isContextMenu: true
      },
      {
        field: "fullName",
        title: "Full name",
        isContextMenu: true
      },
      {
        field: "email",
        title: "email",
        isContextMenu: true,
        getContextMenu: getContextMenuStringItems
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Denis Kryukov",
      email: "denerVeryCool@gmaul.com"
    },
    {
      id: "2",
      fullName: "Gennady Fyodorov",
      email: "gennady.fdorov@gmaul.com"
    },
    {
      id: "3",
      fullName: "Mikhail Terentyev",
      email: "mik.palych@gmail.com"
    }
  ];

  return (
    <Table
      title="Context menu"
      columns={columns}
      rowData={row}
      getContextMenu={getContextMenuDropdownItem}
    />
  );
};

export const TableColumnContextMenuByColumn: React.FC = () => {
  const getContextMenuByColumn: TGetColumnMenuItems = ({ column }) => {
    if (column?.field === "fullName") {
      return ["Delete", "Create"];
    }
    return ["Edit", "Delete", "Create"];
  };

  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id",
        isContextMenu: true,
        getContextMenu: getContextMenuByColumn
      },
      {
        field: "fullName",
        title: "Full name",
        isContextMenu: true,
        getContextMenu: getContextMenuByColumn
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Denis Kryukov"
    }
  ];

  return <Table title="Context menu" columns={columns} rowData={row} />;
};

export const TableColumnContextMenuWithClickItems: React.FC = () => {
  const columns: TColumn[] = useMemo(
    () => [
      {
        field: "id",
        title: "id",
        isContextMenu: true,
        getContextMenu: getContextMenuStringItems,
        onClickContextMenuItem: (_event, item) => {
          alert(`You clicked ${item as string}`);
        }
      },
      {
        field: "fullName",
        title: "Full name",
        isContextMenu: true,
        getContextMenu: getContextMenuDropdownItemWithClick
      }
    ],
    []
  );

  const row = [
    {
      id: "1",
      fullName: "Denis Kryukov"
    },
    {
      id: "2",
      fullName: "Korney Nikitin"
    },
    {
      id: "3",
      fullName: "Prokhor Timofeyev"
    }
  ];

  return <Table title="Context menu" columns={columns} rowData={row} />;
};
