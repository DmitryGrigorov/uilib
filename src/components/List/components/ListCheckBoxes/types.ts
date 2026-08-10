import { MouseEvent, ChangeEvent, KeyboardEvent } from "react";
import { IListItemBasicDataSource, IListBasicProps } from "../../types";

export interface IListCheckBoxProps extends IListBasicProps<IListItemCheckBoxDataSource> {
  defaultValue?: (string | number)[];
  isShowSelectAll?: boolean;
  onChange?: (
    event: MouseEvent<HTMLLIElement> | ChangeEvent | KeyboardEvent,
    value: (string | number)[]
  ) => void;
  onClickItem?: (
    event: MouseEvent<HTMLLIElement> | ChangeEvent | KeyboardEvent,
    value: string | number
  ) => void;
}

export interface IListItemCheckBoxDataSource extends Omit<
  IListItemBasicDataSource,
  "leadIcon"
> {
  value: string | number;
  name?: string;
}
