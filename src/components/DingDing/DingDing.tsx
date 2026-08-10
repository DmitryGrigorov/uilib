import React, { useMemo, useState, useEffect, MouseEventHandler } from "react";
import {
  IconNotification,
  IconNotificationSlash,
  IconNotificationBing
} from "@dmitrygrigorov/icons";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import Badge from "../Badge";
import { DingDingStyled, DingDingStick, DingDingDot } from "./styles";
import type { IDingDingProps } from "./types";

export const DingDing: React.FC<
  TPropsWithAttributes<IDingDingProps, "button">
> = ({
  size = "s",
  colorNotificationCount = "red",
  isSelected,
  isDisabled,
  onClick,
  notificationCount,
  ...props
}) => {
  const [selected, setSelected] = useState(isSelected ?? false);

  // Keep internal selection in sync with the externally-controlled `isSelected` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setSelected(isSelected ?? false);
  }, [isSelected]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const icon = useMemo(() => {
    if (isDisabled) {
      return <IconNotificationSlash className="ding-ding__icon" />;
    } else if (notificationCount) {
      return <IconNotificationBing className="ding-ding__icon" />;
    }
    return <IconNotification className="ding-ding__icon" />;
  }, [isDisabled, notificationCount]);

  const badge = useMemo(() => {
    if (notificationCount) {
      if (size === "s") {
        return <DingDingDot className="ding-ding__badge" />;
      }
      return (
        <Badge
          size="m"
          className="ding-ding__badge"
          colorType={colorNotificationCount}>
          {notificationCount}
        </Badge>
      );
    }
    return null;
  }, [notificationCount, size]);

  const handleMouseDown: MouseEventHandler<HTMLButtonElement> = (e): void => {
    setSelected(true);
    props.onMouseDown?.(e);
  };

  const handleMouseUp: MouseEventHandler<HTMLButtonElement> = (e): void => {
    setSelected(false);
    props.onMouseEnter?.(e);
  };

  return (
    <DingDingStyled
      size={size}
      disabled={isDisabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      isSelected={selected && !isDisabled}
      {...props}>
      {badge}
      {icon}
      {selected && !isDisabled && <DingDingStick />}
    </DingDingStyled>
  );
};
