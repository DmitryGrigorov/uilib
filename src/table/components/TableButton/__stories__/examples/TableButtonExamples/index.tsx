import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import TableButton from "../../../";
import { TButtonSize } from "../../../types";

export const TableButtonTextIconDefault: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <TableButton icon={<IconSetting1 />} size={size}>
    P1-s
  </TableButton>
);

export const TableButtonTextIconDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <TableButton icon={<IconSetting1 />} size={size} isDisabled={true}>
    P1-s
  </TableButton>
);

export const TableButtonTextIconPressed: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <TableButton icon={<IconSetting1 />} size={size} isPressed={true}>
    P1-s
  </TableButton>
);

export const TableButtonTextDefault: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <TableButton size={size}>P1-s</TableButton>;

export const TableButtonTextDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <TableButton isDisabled={true} size={size}>
    P1-s
  </TableButton>
);

export const TableButtonTextPressed: React.FC<{ size?: TButtonSize }> = ({
  size
}) => (
  <TableButton isPressed={true} size={size}>
    P1-s
  </TableButton>
);

export const TableButtonIconDefault: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <TableButton icon={<IconSetting1 />} size={size} />;

export const TableButtonIconDisabled: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <TableButton icon={<IconSetting1 />} isDisabled={true} size={size} />;

export const TableButtonIconPressed: React.FC<{ size?: TButtonSize }> = ({
  size
}) => <TableButton icon={<IconSetting1 />} isPressed={true} size={size} />;

export const TableButtonTextIconS: React.FC<{ size?: TButtonSize }> = () => (
  <TableButton icon={<IconSetting1 />} size="s" />
);
