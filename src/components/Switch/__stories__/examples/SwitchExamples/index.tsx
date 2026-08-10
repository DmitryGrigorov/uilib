import React, { useState } from "react";
import { IconCloseCircle, IconTickCircle } from "@dmitrygrigorov/icons";
import Switch from "../../../";
import IconBefore from "../../../../../assets/icon-before-switch.svg";
import IconAfter from "../../../../../assets/icon-after-switch.svg";

export const SwitchExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch onChange={(_e, val) => setIsChecked(val)} isChecked={isChecked} />
  );
};

export const SwitchExampleText: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      onChange={(_e, val) => setIsChecked(val)}
      isChecked={isChecked}
      hasTextOrIcon
    />
  );
};

export const SwitchExampleIcon: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      onChange={(_e, val) => setIsChecked(val)}
      isChecked={isChecked}
      hasTextOrIcon
      iconAfter={<IconCloseCircle />}
      iconBefore={<IconTickCircle />}
    />
  );
};

export const SwitchExampleCustomText: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      onChange={(_e, val) => setIsChecked(val)}
      isChecked={isChecked}
      textBefore="text_2"
      textAfter="text_1"
      hasTextOrIcon
    />
  );
};

export const SwitchExampleCustomIcon: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      onChange={(_e, val) => setIsChecked(val)}
      isChecked={isChecked}
      hasTextOrIcon
      iconBefore={<img src={IconBefore} width="12px" height="12px" />}
      iconAfter={<img src={IconAfter} width="12px" height="12px" />}
    />
  );
};

export const SwitchExampleIndeterminate: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      onChange={(_e, val) => setIsChecked(val)}
      isChecked={isChecked}
      isIndeterminate
    />
  );
};
