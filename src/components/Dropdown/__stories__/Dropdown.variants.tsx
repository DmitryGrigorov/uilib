import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";

import { observer } from "mobx-react-lite";
import { DropdownList } from "../";

const DropdownVariants: React.FC = observer(() => {
  const items = [
    {
      label: "P1-1",
      leadContent: <IconSetting1 />
    },
    {
      label: "P1-2",
      leadContent: <IconSetting1 />
    },
    {
      label: "P1-3",
      leadContent: <IconSetting1 />
    }
  ];

  return <DropdownList items={items} />;
});

export default DropdownVariants;
