import { MouseEventHandler, ReactNode, ReactElement } from "react";
import { IListItemDataSource, IListBasicProps } from "../../types";

export interface IListProps extends IListBasicProps<IListItemDataSource> {
  onClickItem?: MouseEventHandler<HTMLLIElement>;
  onDoubleClickItem?: MouseEventHandler<HTMLLIElement>;
  renderItem?: (item: IListItemDataSource | any, index: number) => ReactNode;
  renderSelectAllItems?: () => ReactNode;
  isShowSelectAll?: boolean;
  children?: ReactElement | ReactElement[] | null;
}
