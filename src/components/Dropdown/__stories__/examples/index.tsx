import React, { MouseEvent, useState, useRef } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../../../Button";
import SearchBox from "../../../SearchBox";
import Dropdown from "../../Dropdown";
import DropdownList from "../../components/DropdownList";
import DropdownItem from "../../components/DropdownItem";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export const DropdownExampleLabel: React.FC = () => {
  const items = ["P1-1", "P1-2", "P1-3"];

  return (
    <Dropdown<string>
      items={items}
      getItemLabel={(item) => item}
      getItemKey={(item) => item}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleDisable: React.FC = () => {
  interface IItem {
    label: string;
    isActive: boolean;
  }

  const items: IItem[] = [
    {
      label: "P1-1",
      isActive: false
    },
    {
      label: "P1-2",
      isActive: true
    },
    {
      label: "P1-3",
      isActive: false
    }
  ];

  return (
    <Dropdown<IItem> items={items} getItemDisabled={(item) => !item.isActive}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleLeadContent: React.FC = () => {
  interface IItem {
    label: string;
    leadContent?: JSX.Element;
  }

  const items: IItem[] = [
    {
      label: "P1-1"
    },
    {
      label: "P1-2"
    },
    {
      label: "P1-3"
    }
  ];
  return (
    <Dropdown<IItem> items={items} getItemLeadContent={() => <IconSetting1 />}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleClick: React.FC = () => {
  interface IItem {
    label: string;
    onClick?: () => void;
  }

  const items: IItem[] = [
    {
      label: "P1-1",
      onClick: () => alert("Clicked the first item")
    },
    {
      label: "P1-2"
    },
    {
      label: "P1-3"
    }
  ];

  return (
    <Dropdown<IItem>
      items={items}
      onItemClick={() => alert("Clicked another item")}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleGroup: React.FC = () => {
  interface IItem {
    label: string;
    groupId?: string;
    isDisabled?: boolean;
  }

  const items: IItem[] = [
    {
      label: "P1-1",
      isDisabled: true
    },
    {
      label: "P1-2",
      groupId: "1"
    },
    {
      label: "P1-3",
      isDisabled: true
    }
  ];

  return (
    <Dropdown<IItem>
      items={items}
      getItemGroupId={(item) => String(item.isDisabled)}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleSortGroup: React.FC = () => {
  interface IItem {
    label: string;
    groupId?: string;
  }

  const items: IItem[] = [
    {
      label: "P1-1",
      groupId: "2"
    },
    {
      label: "P1-2",
      groupId: "1"
    },
    {
      label: "P1-3",
      groupId: "3"
    }
  ];

  const sortGroup = (a: number | string, b: number | string): number => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  };

  return (
    <Dropdown items={items} sortGroup={sortGroup}>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownExampleClose: React.FC = () => {
  interface IItem {
    label: string;
  }

  const items: IItem[] = [
    {
      label: "P1-1"
    },
    {
      label: "P1-2"
    },
    {
      label: "P1-3"
    }
  ];

  return (
    <Dropdown
      items={items}
      onClickClose={() => alert("You closed the menu")}
      onClickOutside={() =>
        alert("You closed the menu by clicking outside it")
      }>
      <Button>Click</Button>
    </Dropdown>
  );
};

export const DropdownContextMenu: React.FC = () => {
  const items = [
    {
      label: "P1-1"
    },
    {
      label: "P1-2"
    },
    {
      label: "P1-3"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleContextMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsOpen(true);
    setPoints({ x: event.pageX, y: event.pageY });
  };

  return (
    <>
      <Button onContextMenu={handleContextMenu}>Click</Button>
      {isOpen && (
        <DropdownList
          top={points.y}
          left={points.x}
          items={items}
          ref={dropdownRef}
          direction="bottomLeft"
        />
      )}
    </>
  );
};

export const DropdownExamples: React.FC = () => {
  const items = [
    {
      label: "P1-s",
      groupId: 1,
      key: 1
    },
    {
      label: "P1-s",
      groupId: 1,
      key: 2
    },
    {
      label: "P1-s",
      groupId: 1,
      key: 3
    },
    {
      label: "P1-s",
      groupId: 1,
      key: 4
    },
    {
      label: "P1-s",
      groupId: 2,
      key: 12
    },
    {
      label: "P1-s",
      groupId: 2,
      key: 22
    },
    {
      label: "P1-s",
      groupId: 2,
      key: 32
    },
    {
      label: "P1-s",
      groupId: 2,
      key: 42
    }
  ];

  const DROPDOWN_EXAMPLES = [
    {
      key: "1",
      dropdown: <DropdownList items={items} width="320px" />
    }
  ];
  return <StorybookDocExamples items={DROPDOWN_EXAMPLES} />;
};

export const CustomContentDropDown: React.FC = () => (
  <Dropdown
    content={
      <div>
        <SearchBox placeholder="Search" viewType="line" size="m" />
        <DropdownItem item="Item 1" getItemLabel={(item) => item} />
        <DropdownItem item="Item 2" getItemLabel={(item) => item} />
        <DropdownItem item="Item 3" getItemLabel={(item) => item} />
      </div>
    }>
    <Button>Click</Button>
  </Dropdown>
);

export const DropdownExampleNotCloseOutside: React.FC = () => {
  const items = ["P1-1", "P1-2", "P1-3"];

  return (
    <Dropdown<string>
      isNotCloseOutside
      items={items}
      getItemLabel={(item) => item}
      getItemKey={(item) => item}>
      <Button>Click</Button>
    </Dropdown>
  );
};
