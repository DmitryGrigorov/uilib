import {
  IconInformation,
  IconInfoDanger,
  IconTickCircle,
  IconInfoWarning,
  IconSetting1
} from "@dmitrygrigorov/icons";
import { ITheme } from "../Pallette/themes";
import { TLabelStatus, TLabelIcon } from "./types";

export const labelIcon: TLabelIcon = {
  info: IconInformation,
  error: IconInfoDanger,
  success: IconTickCircle,
  warning: IconInfoWarning,
  focused: IconSetting1,
  filled: IconSetting1
};

export const getComputedLabelColor = (
  status: TLabelStatus,
  theme: ITheme,
  isDisabled?: boolean
): string => {
  if (isDisabled) {
    return theme.colors.textBasicDisabled;
  } else {
    switch (status) {
      case "info":
        return theme.colors.textColoredCyan;
      case "focused":
        return theme.colors.componentPrimaryOrangePressed;
      case "error":
        return theme.colors.textColoredRed;
      case "success":
        return theme.colors.textColoredTeal;
      case "warning":
        return theme.colors.textColoredAmber;
      default:
        return theme.colors.textBasicDefault;
    }
  }
};
