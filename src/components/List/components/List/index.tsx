import React, { MouseEventHandler, forwardRef } from "react";
import ListHeader from "../ListHeader";
import ListItem from "../ListItem";
import { useStateProps } from "../../../hooks/useStateProps";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { IListProps } from "./types";
import { ListStyled, ListItemsWrapper } from "./styles";

const List = forwardRef<
  HTMLUListElement,
  TPropsWithAttributes<IListProps, "ul">
>(
  (
    {
      header,
      dataSource,
      viewType,
      className,
      classNameItem,
      onClickItem,
      style,
      styleItem,
      renderItem,
      renderSelectAllItems,
      isSelected = false,
      isDisabled = false,
      isShowSelectAll = false,
      onDoubleClickItem,
      width,
      height,
      size = "l",
      children,
      testId = "testIDWithoutName",
      ...props
    },
    ref
  ) => {
    const [isExpand, setIsExpand] = useStateProps<boolean>(isSelected);

    const handleClickHeader: MouseEventHandler<HTMLDivElement> = (event) => {
      setIsExpand(!isExpand);
      header?.onClick?.(event);
    };

    const renderItems = (): React.ReactNode => {
      if (!children) {
        if (renderItem) {
          return dataSource?.map((item, index) => renderItem(item, index));
        }
        return dataSource?.map((item) => (
          <ListItem
            {...item}
            data-element="list-item"
            size={size}
            key={item.label}
            className={classNameItem}
            style={styleItem}
            isSelected={item.isSelected}
            isDisabled={isDisabled || item.isDisabled}
            onDoubleClick={onDoubleClickItem}
            onClick={onClickItem}>
            {item.label}
          </ListItem>
        ));
      }
      return children;
    };

    return (
      <ListStyled
        className={className}
        style={style}
        ref={ref}
        width={width}
        height={height}
        data-testid={`${testId}_list`}
        data-element="list"
        {...props}>
        {header && (
          <ListHeader
            data-element="list-header"
            size={size}
            viewType={viewType}
            isDisabled={isDisabled}
            onClick={handleClickHeader}
            isSelectedDefault={isExpand}
            leadIcon={header.leadIcon}
            trailIcon={header.trailIcon}
            className={header.className}
            style={header.style}
            avatar={header.avatar}>
            {header.content}
          </ListHeader>
        )}
        <ListItemsWrapper
          data-element="list-item-wrapper"
          isExpand={isExpand}
          isHeader={Boolean(header)}
          type={viewType}>
          <>
            {isShowSelectAll && renderSelectAllItems && renderSelectAllItems()}
            {renderItems()}
          </>
        </ListItemsWrapper>
      </ListStyled>
    );
  }
);

List.displayName = "List";

export default List;
