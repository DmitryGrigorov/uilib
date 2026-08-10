import { MouseEvent } from "react";
import { IListItemBasicDataSource, IListBasicProps } from "../../types";

export interface IListSwitchProps extends IListBasicProps<IListItemSwitchDataSource> {
  defaultValue?: (string | number)[];
  isShowSelectAll?: boolean;
  onChange?: (
    event: MouseEvent<HTMLLIElement>,
    value: (string | number)[]
  ) => void;
  onClickItem?: (
    event: MouseEvent<HTMLLIElement>,
    value: string | number
  ) => void;
}

export interface IListItemSwitchDataSource extends Omit<
  IListItemBasicDataSource,
  "leadIcon"
> {
  value: string | number;
  name?: string;
}
