import ListComponent from "./components/List";
import ListHeaderComponent from "./components/ListHeader";
import ListItemComponent from "./components/ListItem";
import ListRadioButtons from "./components/ListRadioButtons";
import ListCheckBoxes from "./components/ListCheckBoxes";
import ListSwitch from "./components/ListSwitch";
import ListItemAvatar from "./components/ListItemAvatar";

type TList = typeof ListComponent & {
  ListHeader: typeof ListHeaderComponent;
  ListItem: typeof ListItemComponent;
  ListRadioButtons: typeof ListRadioButtons;
  ListCheckBoxes: typeof ListCheckBoxes;
  ListSwitch: typeof ListSwitch;
  ListItemAvatar: typeof ListItemAvatar;
};

export const List = ListComponent as TList;
List.ListHeader = ListHeaderComponent;
List.ListItem = ListItemComponent;
List.ListRadioButtons = ListRadioButtons;
List.ListCheckBoxes = ListCheckBoxes;
List.ListSwitch = ListSwitch;
List.ListItemAvatar = ListItemAvatar;

export type {
  IListItemDataSource,
  TListSize,
  TListViewType,
  IListAvatar
} from "./types";
export type { IListItemCheckBoxDataSource } from "./components/ListCheckBoxes/types";
export type { IListItemRadioButtonDataSource } from "./components/ListRadioButtons/types";
export type { IListItemSwitchDataSource } from "./components/ListSwitch/types";
