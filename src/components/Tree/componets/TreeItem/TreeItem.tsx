import React, { FC, useContext, useRef, useState } from "react";
import { IconArrowRight1, IconDrag2 } from "@dmitrygrigorov/icons";
import { useStateProps } from "../../../hooks/useStateProps";
import { TTreeItemProps } from "../../types";
import {
  TreeWrapper,
  TreeHeader,
  IconWrapper,
  TreeList,
  Title
} from "../../styles";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { TreeContext } from "../../Tree";
import P1 from "../../../typography/P1";
import P2 from "../../../typography/P2";

const TreeItem: FC<TPropsWithAttributes<TTreeItemProps>> = ({
  element,
  isDisabled: isDisabledFromParent,
  isRoot = false
}) => {
  const { isOpened = false, isDisabled: isDisabledCurrentElement = false } =
    element;

  const isDisabled =
    (isDisabledFromParent ?? false) || isDisabledCurrentElement;

  const [titleState, setTitleState] = useStateProps(element.title);
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  const {
    currentDraggedElement,
    isDragAllowed,
    isEditAllowed,

    onItemClick,
    onHandleDragStart,
    onHandleDragEnd,
    onHandleDragEnter,
    onHandleDragOver,
    onHandleDragLeave,
    onHandleDrop,
    onTitleChanged,
    onItemCollapse
  } = useContext(TreeContext);

  const isDragging = currentDraggedElement?.id === element.id;

  const editableTitleRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    onItemClick?.(element);
    if (!isDisabled && (element.elements ?? []).length > 0) {
      onItemCollapse?.(element, !isOpened);
    }
  };

  const handleDoubleClick = (): void => {
    if (!isDisabled && isEditAllowed) {
      setIsTitleEditing(true);
      setTimeout(() => editableTitleRef.current?.focus(), 10);
    }
  };

  const handleTitleChangeFinished = (): void => {
    setIsTitleEditing(false);
    onTitleChanged?.(element, titleState);
  };

  const resetTitleChange = (): void => {
    setIsTitleEditing(false);
    setTitleState(element.title);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!isTitleEditing) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleTitleChangeFinished();
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      resetTitleChange();
    }
  };

  const isDragOver = useRef<boolean>(false);

  const renderTitle = (): JSX.Element => {
    if (isRoot) {
      return (
        <P1
          id="title_span"
          className="title-span"
          style={{
            pointerEvents:
              typeof currentDraggedElement !== "undefined" ? "none" : "auto"
          }}
          type="phoenix"
          size={16}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            e.detail === 1 ? handleClick() : handleDoubleClick();
          }}>
          {titleState}
        </P1>
      );
    } else {
      return (
        <P2
          id="title_span"
          className="title-span"
          style={{
            pointerEvents:
              typeof currentDraggedElement !== "undefined" ? "none" : "auto"
          }}
          type="corvus"
          size={16}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            e.detail === 1 ? handleClick() : handleDoubleClick();
          }}>
          {titleState}
        </P2>
      );
    }
  };

  return (
    <TreeWrapper
      data-element="tree-item"
      className={element.className}
      // eslint-disable-next-line react-hooks/refs -- mutated imperatively by drag handlers; re-renders are already driven by `isDragging` state.
      isDragOver={isDragOver.current}
      isDragging={isDragging}>
      <TreeHeader
        draggable={!isDisabled && isDragAllowed}
        isOpened={element.isOpened}
        isHaveChildren={(element.elements ?? []).length > 0}
        isDisabled={isDisabled}
        isAnyDragging={
          typeof currentDraggedElement !== "undefined" && isDragging
        }
        className="tree_header"
        onClick={handleClick}
        onDragStartCapture={() => {
          if (isDisabled) {
            return;
          }
          onHandleDragStart?.(element);
        }}
        onDragEndCapture={() => {
          if (isDisabled) {
            return;
          }
          onHandleDragEnd?.();
        }}
        onDragEnterCapture={() => {
          if (isDisabled) {
            return;
          }
          onHandleDragOver?.(element);
          onHandleDragEnter?.(element);
          isDragOver.current = true;
        }}
        onDragLeaveCapture={() => {
          if (isDisabled) {
            return;
          }
          onHandleDragLeave?.(element);
          onHandleDragOver?.(undefined);
          isDragOver.current = false;
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (isDisabled) {
            return;
          }
          onHandleDrop?.(element);
        }}>
        {((element.elements ?? []).length > 0 || isDragging) && (
          <IconWrapper isShown={isOpened}>
            {isDragging ? (
              <IconDrag2 width={16} height={16} />
            ) : (
              <IconArrowRight1 className="arrow-icon" width={16} height={16} />
            )}
          </IconWrapper>
        )}
        {!isDragging && element.leadContent}
        {isTitleEditing ? (
          <Title
            ref={editableTitleRef}
            readOnly={isDragging}
            disabled={isDisabled}
            className="tree-header__title"
            value={titleState}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setTitleState(e.target.value)}
            onBlur={handleTitleChangeFinished}
            onKeyDown={handleKeyDown}
          />
        ) : (
          renderTitle()
        )}
        {!isDragging && element.trailContent && (
          <div className="tree-header__right-content">
            <IconWrapper>{element.trailContent}</IconWrapper>
          </div>
        )}
      </TreeHeader>
      {isOpened && !isDragging && (
        <TreeList isBorderless={typeof element.title === "undefined"}>
          {(element.elements ?? []).length > 0 &&
            (element.elements ?? []).map((el) => (
              <TreeItem
                key={`${el.id}___${el.title}___${JSON.stringify(
                  el.isOpened
                )}___${(el.elements ?? []).length}`}
                element={el}
                isDisabled={isDisabled}
              />
            ))}
        </TreeList>
      )}
    </TreeWrapper>
  );
};

export default TreeItem;
