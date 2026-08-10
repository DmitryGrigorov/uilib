import { MouseEvent } from "react";
import { IListItemBasicDataSource, IListBasicProps } from "../../types";

export interface IListRadioButtons extends IListBasicProps<IListItemRadioButtonDataSource> {
  defaultValue?: string;
  onChange?: (event: MouseEvent<HTMLLIElement>, value: string | number) => void;
  onClickItem?: (
    event: MouseEvent<HTMLLIElement>,
    value: string | number
  ) => void;
}

export interface IListItemRadioButtonDataSource extends Omit<
  IListItemBasicDataSource,
  "leadIcon"
> {
  value: string;
  name?: string;
}
