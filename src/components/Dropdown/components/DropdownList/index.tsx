import React, { forwardRef, useMemo, ForwardedRef } from "react";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import {
  TDropdownListProps,
  TDropdownGetItemLabel,
  TDropdownGetItemAttributes,
  TDropdownGetItemDisabled,
  TDropdownGetItemLeadContent,
  TDropdownGetItemOnClick,
  TDropdownGetItemKey,
  TDropdownGetItemGroupId
} from "../../types";
import {
  DropdownListWrapper,
  DropdownItemsWrapper,
  DividerStyled
} from "../../styles";
import DropdownItem from "../DropdownItem";
import { withDefaultGetters } from "../../helpers";

const DropdownList = forwardRef(
  <Item,>(
    props: TPropsWithAttributes<TDropdownListProps<Item>, "div">,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const {
      items = [],
      direction = "bottom",
      getItemKey,
      getItemOnClick,
      getItemLeadContent,
      getItemGroupId,
      getItemDisabled,
      getItemAttributes,
      getItemLabel,
      className,
      onItemClick,
      sortGroup,
      width,
      content,
      ...otherProps
    } = withDefaultGetters<Item>(props);

    const groups = useMemo((): Item[][] => {
      const _groups = items.reduce<Item[][]>(
        (result, x) => {
          if ((getItemGroupId as TDropdownGetItemGroupId<Item>)(x)) {
            const index =
              result.length &&
              result[0].length &&
              result.findIndex(
                (r) =>
                  (getItemGroupId as TDropdownGetItemGroupId<Item>)(r[0]) ===
                  (getItemGroupId as TDropdownGetItemGroupId<Item>)(x)
              );
            if (index !== -1) {
              result[index].push(x);
            } else {
              result.push([]);
              result[result.length - 1].push(x);
            }
          } else {
            result[0].push(x);
          }
          return result;
        },
        [[]]
      );
      return sortGroup
        ? _groups.sort((items1, items2) =>
            sortGroup(
              (getItemGroupId as TDropdownGetItemGroupId<Item>)(items1[0]) || 1,
              (getItemGroupId as TDropdownGetItemGroupId<Item>)(items2[0]) || -1
            )
          )
        : _groups;
    }, [items]);

    if (items.length === 0 && !content) {
      return null;
    }

    return (
      <DropdownListWrapper
        ref={ref}
        direction={direction}
        className={className}
        width={width}
        {...otherProps}>
        {content
          ? content
          : groups.map((gItems, index) => (
              <React.Fragment
                key={`dropdown-group-${
                  (getItemGroupId as TDropdownGetItemGroupId<Item>)(
                    gItems[0]
                  ) as string
                }`}>
                <DropdownItemsWrapper>
                  {gItems.map((item) => (
                    <DropdownItem<Item>
                      key={(getItemKey as TDropdownGetItemKey<Item>)(item)}
                      item={item}
                      getItemAttributes={
                        getItemAttributes as TDropdownGetItemAttributes<Item>
                      }
                      getItemLabel={getItemLabel as TDropdownGetItemLabel<Item>}
                      getItemDisabled={
                        getItemDisabled as TDropdownGetItemDisabled<Item>
                      }
                      getItemLeadContent={
                        getItemLeadContent as TDropdownGetItemLeadContent<Item>
                      }
                      getItemOnClick={
                        getItemOnClick as TDropdownGetItemOnClick<Item>
                      }
                      onItemClick={onItemClick}
                    />
                  ))}
                </DropdownItemsWrapper>
                {index !== groups.length - 1 && <DividerStyled />}
              </React.Fragment>
            ))}
      </DropdownListWrapper>
    );
  }
);

DropdownList.displayName = "DropdownList";

export default DropdownList;
