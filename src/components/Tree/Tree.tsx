import React, { FC, createContext, useState } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { useStateProps } from "../hooks/useStateProps";
import { changeOpenedStatus, changeTitle, moveNode } from "./helpers";
import TreeItem from "./componets/TreeItem";
import { TreeWrapper, TreeList, TreeRootDropArea } from "./styles";
import { ITreeContext, ITreeProps, TreeSourceItem } from "./types";

export const TreeContext = createContext<ITreeContext>({});

const Tree: FC<TPropsWithAttributes<ITreeProps>> = ({
  dataSource,
  style,
  className,
  width,
  onItemClick,
  onHandleDragStart,
  onHandleDragEnd,
  onHandleDragEnter,
  onHandleDragOver,
  onHandleDragLeave,
  onHandleDrop,
  onTitleChanged,
  onItemCollapse,
  onChange,
  isDisabled = false,
  isDragAllowed = false,
  isEditAllowed = false,
  testId = "testIDWithoutName",
  ...otherProps
}) => {
  const [_, setUpdateLocalStateTS] = useState<number>();
  const updateLocalStateForce = (): void => {
    setUpdateLocalStateTS(Date.now() / 1);
  };

  const [dataSourceLocal, setDataSourceLocal] =
    useStateProps<TreeSourceItem[]>(dataSource);

  const [currentDraggedElement, setCurrentDraggedElement] = useState<
    TreeSourceItem | undefined
  >();
  const [isDragOverRoot, setIsDragOverRoot] = useState<boolean>(false);

  const handleDragEnd = (): void => {
    setCurrentDraggedElement(undefined);
    onHandleDragEnd?.();
  };

  const handleDragStart = (item: TreeSourceItem): void => {
    setCurrentDraggedElement(item);
    updateLocalStateForce();
    onHandleDragStart?.(item);
  };

  const handleDragOver = (item: TreeSourceItem | undefined): void => {
    onHandleDragOver?.(item);
    updateLocalStateForce();
  };

  const handleDrop = (item: TreeSourceItem): void => {
    if (
      typeof currentDraggedElement !== "undefined" &&
      currentDraggedElement?.id !== item.id
    ) {
      const newTree = moveNode(
        dataSourceLocal,
        currentDraggedElement.id,
        item.id
      );
      onHandleDrop?.(item);
      setDataSourceLocal(newTree);
      onChange?.(newTree);
    }
    setCurrentDraggedElement(undefined);
    setIsDragOverRoot(false);
    updateLocalStateForce();
  };

  const handleChangeTitle = (item: TreeSourceItem, newTitle: string): void => {
    const newTree = changeTitle(dataSourceLocal, `${item.id}`, newTitle);
    onTitleChanged?.(item, newTitle);
    setDataSourceLocal(newTree);
    onChange?.(newTree);
  };

  const handleCollapse = (item: TreeSourceItem, newStatus: boolean): void => {
    const newTree = changeOpenedStatus(dataSourceLocal, item.id, newStatus);
    onItemCollapse?.(item, newStatus);
    setDataSourceLocal(newTree);
    onChange?.(newTree);
  };

  return (
    <TreeContext.Provider
      value={{
        currentDraggedElement,
        isDragAllowed,
        isEditAllowed,

        onItemClick,
        onHandleDragStart: handleDragStart,
        onHandleDragEnd: handleDragEnd,
        onHandleDragEnter,
        onHandleDragOver: handleDragOver,
        onHandleDragLeave,
        onHandleDrop: handleDrop,
        onTitleChanged: handleChangeTitle,
        onItemCollapse: handleCollapse
      }}>
      <TreeWrapper
        data-testid={`${testId}_tree`}
        data-element="tree"
        style={{ ...style }}
        className={className}
        width={width}
        {...otherProps}>
        {isDragAllowed && currentDraggedElement && (
          <TreeRootDropArea
            isDragOverRoot={isDragOverRoot}
            onDragEnter={() => setIsDragOverRoot(true)}
            onDragLeave={() => setIsDragOverRoot(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              handleDrop?.({ id: "root", title: "" });
            }}>
            &nbsp;
          </TreeRootDropArea>
        )}

        <TreeList
          isBorderless={true}
          data-element="tree-list"
          onMouseLeave={() => {
            handleDragOver?.(undefined);
          }}>
          {dataSourceLocal.length > 0 &&
            dataSourceLocal.map((element) => (
              <TreeItem
                className="tree-item"
                key={`${element.id}___${element.title}___${JSON.stringify(
                  element.isOpened
                )}___${(element.elements ?? []).length}`}
                element={element}
                isDisabled={isDisabled}
                isRoot={true}
              />
            ))}
        </TreeList>
      </TreeWrapper>
    </TreeContext.Provider>
  );
};

Tree.displayName = "Tree";

export default Tree;
