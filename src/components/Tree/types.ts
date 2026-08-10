export interface ITreeProps {
  className?: string;
  dataSource: TreeSourceItem[];
  width?: string | number;
  onItemClick?: (item: TreeSourceItem) => void;
  onHandleDragStart?: (item: TreeSourceItem) => void;
  onHandleDragEnd?: () => void;
  onHandleDragEnter?: (item: TreeSourceItem) => void;
  onHandleDragOver?: (item: TreeSourceItem | undefined) => void;
  onHandleDragLeave?: (item: TreeSourceItem) => void;
  onHandleDrop?: (item: TreeSourceItem) => void;
  onTitleChanged?: (item: TreeSourceItem, newTitle: string) => void;
  onItemCollapse?: (item: TreeSourceItem, newStatus: boolean) => void;
  onChange?: (changedData: TreeSourceItem[]) => void;
  isDragAllowed?: boolean;
  isEditAllowed?: boolean;
  isDisabled?: boolean;
  testId?: string;
}

export type TTreeItemProps = {
  element: TreeSourceItem;
  className?: string;
  isDisabled?: boolean;
  isRoot?: boolean;
};

export interface ITreeContext {
  currentDraggedElement?: TreeSourceItem | undefined;
  isDragAllowed?: boolean;
  isEditAllowed?: boolean;

  onItemClick?: (item: TreeSourceItem) => void;
  onHandleDragStart?: (item: TreeSourceItem) => void;
  onHandleDragEnd?: () => void;
  onHandleDragEnter?: (item: TreeSourceItem) => void;
  onHandleDragOver?: (item: TreeSourceItem | undefined) => void;
  onHandleDragLeave?: (item: TreeSourceItem) => void;
  onHandleDrop?: (tree: TreeSourceItem) => void;
  onTitleChanged?: (item: TreeSourceItem, newTitle: string) => void;
  onItemCollapse?: (item: TreeSourceItem, newStatus: boolean) => void;
}

export interface TreeSourceItem {
  id: string;
  title: string;
  className?: string;
  isOpened?: boolean;
  isDisabled?: boolean;
  leadContent?: JSX.Element;
  trailContent?: JSX.Element;
  elements?: TreeSourceItem[];
}
