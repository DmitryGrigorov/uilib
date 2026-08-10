import { IListItemProps } from "../ListItem/types";
import { IListAvatar } from "../../types";

export interface IListItemAvatarProps
  extends Omit<IListItemProps, "leadContent" | "leadIcon">, IListAvatar {}
