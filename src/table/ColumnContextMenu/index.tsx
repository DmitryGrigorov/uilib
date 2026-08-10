import React, { FC, useState } from "react";
import { Dropdown } from "@dmitrygrigorov/components";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import { IColumnContextMenuProps, TContextMenuItem } from "./types";
import { ContextMenuButton } from "./styles";

const ColumnContextMenu: FC<IColumnContextMenuProps> = ({
  menuItems,
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown<TContextMenuItem>
      items={menuItems}
      onItemClick={onItemClick}
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(!isOpen)}
      getItemLabel={(item) => {
        if (typeof item === "string") {
          return item;
        }
        return item.label;
      }}>
      <ContextMenuButton
        icon={<IconArrowDown1 />}
        isOpen={isOpen}
        viewType="link"
        size="s"
        onClick={() => setIsOpen(!isOpen)}
      />
    </Dropdown>
  );
};

export default ColumnContextMenu;
