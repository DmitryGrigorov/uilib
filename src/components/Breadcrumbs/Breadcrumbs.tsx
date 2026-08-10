import React, {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import Tooltip from "../Tooltip";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import getTextWidth from "../utils/getTextWidth";
import { useStateProps } from "../hooks/useStateProps";
import useDebounce from "../hooks/useDebounce";
import { Dropdown } from "../Dropdown";
import { TDirection } from "../helpers/getPosition/types";
import BreadcrumbItem from "./components/BreadcrumbItem";
import {
  BreadcrumbsDropdownIndicatorStyled,
  BreadcrumbsWrapper,
  Divider,
  IconWrapper,
  ItemWrapper,
  ContentWrapper
} from "./style";
import { IBreadcrumbItem, IBreadcrumbsProps } from "./types";

const Breadcrumbs: React.FC<
  TPropsWithAttributes<PropsWithChildren<IBreadcrumbsProps>>
> = ({
  children,
  items,
  maxNoCollapsedItems = 1,
  className,
  testId = "breadcrumbs",
  ...props
}) => {
  const breadcrumbsRef = useRef<HTMLDivElement>(null);
  const [isLastChildEllipsis, setIsLastChildEllipsis] = useState(false);
  const [_maxNoCollapsedItems, setMaxNoCollapsedItems] =
    useStateProps(maxNoCollapsedItems);
  const [widthLastNodeElement, setWidthLastNodeElement] = useState<
    "unset" | number
  >("unset");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(-1);
  const [, setCurrentItemTypes] = useState<string[]>([]);
  const [initialCurrentItem, setInitialCurrentItem] =
    useState<IBreadcrumbItem | null>(null);

  const adaptSize = (): void => {
    if (!breadcrumbsRef.current || maxNoCollapsedItems === 0) {
      return;
    }

    const font = getComputedStyle(breadcrumbsRef.current).font;
    const minWidthTextForLastChild = 40;

    const { childNodes } = breadcrumbsRef.current;

    if (!childNodes || childNodes.length === 0) {
      return;
    }

    const lastChildNode = childNodes.item(childNodes.length - 1) as Element;
    if (!lastChildNode) {
      return;
    }

    function getElementsWidth(
      _noCollapsedItems: number,
      skipElementsCount: number = 0
    ): number {
      let width = 0;

      for (let i = 0; i < items.length - skipElementsCount; i++) {
        const item = items[i];
        let widthItem = item.icon ? 40 : 0;
        widthItem += item.subitems ? 20 : 0;
        if (items.length - i <= _noCollapsedItems) {
          widthItem += getTextWidth(item.text || "", font);
        }
        width = width + widthItem + (i === items.length - 1 ? 0 : 24);
      }
      return width;
    }

    const lastChildRect = lastChildNode.getBoundingClientRect();
    const breadcrumbsRect = breadcrumbsRef.current.getBoundingClientRect();

    let noCollapsedItems = _maxNoCollapsedItems;
    let isEllipsis = isLastChildEllipsis;
    let newWidthLastChild: number | "unset" = "unset";
    const widthBreadCrumbs = breadcrumbsRect.width;
    let widthElements = getElementsWidth(noCollapsedItems);

    while (widthElements > widthBreadCrumbs && noCollapsedItems > 1) {
      const itemIndex = items.length - noCollapsedItems;
      if (itemIndex >= 0 && itemIndex < items.length) {
        const item = items[itemIndex];
        widthElements -= getTextWidth(item.text || "", font);
        if (item.icon) {
          widthElements -= 32;
        }
      }
      noCollapsedItems--;
    }

    if (noCollapsedItems === 1) {
      const allWidth = getElementsWidth(noCollapsedItems, 1);
      const availableWidth = breadcrumbsRect.width - allWidth;
      const maxWidthText = getTextWidth(
        items[items.length - 1].text || "",
        font
      );

      if (availableWidth >= maxWidthText + 32) {
        newWidthLastChild = "unset";
        isEllipsis = false;
      } else if (availableWidth < minWidthTextForLastChild) {
        newWidthLastChild = "unset";
        noCollapsedItems = noCollapsedItems - 1;
        isEllipsis = false;
      } else {
        newWidthLastChild = breadcrumbsRect.width - getElementsWidth(0);
        isEllipsis = true;
      }
    }

    if (noCollapsedItems === 0) {
      const freeSpace = breadcrumbsRect.right - lastChildRect.right;
      if (freeSpace >= minWidthTextForLastChild) {
        isEllipsis = true;
        noCollapsedItems = noCollapsedItems + 1;
      }
    }

    setWidthLastNodeElement(newWidthLastChild);
    setMaxNoCollapsedItems(noCollapsedItems);
    setIsLastChildEllipsis(isEllipsis);
  };

  const adaptSizeDebounce = useDebounce(adaptSize, 100);

  useLayoutEffect(() => {
    adaptSizeDebounce();
  }, [maxNoCollapsedItems]);

  useEffect(() => {
    window.addEventListener("resize", adaptSizeDebounce);
    return () => window.removeEventListener("resize", adaptSizeDebounce);
  }, []);

  // One-time derivation of initial state from the items prop on mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const currentTypes = items.filter(
      (item) => item.viewType === "current"
    ) as string[];

    setCurrentItemTypes(currentTypes);

    const initialCurrent = items.find((item) => item.viewType === "current");
    setInitialCurrentItem(initialCurrent || null);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function shouldShowTooltip(index: number): boolean {
    return Boolean(
      (index < items.length - _maxNoCollapsedItems &&
        items[index].icon &&
        items[index].text) ||
      (index === items.length - 1 && isLastChildEllipsis)
    );
  }

  function getDirectionTooltip(index: number): TDirection {
    if (isDropdownOpen && index === currentItemIndex) {
      return "right";
    } else if (
      index === items.length - 1 &&
      (isLastChildEllipsis || _maxNoCollapsedItems === 0)
    ) {
      return "bottomRight";
    } else if (items[index].viewType === "current" && isDropdownOpen) {
      return "right";
    } else {
      return "bottomLeft";
    }
  }

  function handleItemClickCommon(
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
    item: IBreadcrumbItem,
    index: number
  ): void {
    if (item.onClick) {
      item.onClick(e, item);
    }

    if (item.isDisabled) {
      return;
    }

    // These items come from the `items` prop and are mutated in place to
    // keep viewType in sync with currentItemIndex; pre-existing pattern,
    // not something to redesign as part of this fix.
    /* eslint-disable react-hooks/immutability */
    if (item.viewType === "current") {
      item.viewType = undefined;
      setCurrentItemIndex(-1);
    } else {
      if (initialCurrentItem) {
        initialCurrentItem.viewType = undefined;
      }
      if (currentItemIndex !== -1) {
        items[currentItemIndex].viewType = undefined;
      }

      item.viewType = "current";
      setCurrentItemIndex(index);
    }
    /* eslint-enable react-hooks/immutability */
  }

  function handleItemClickWithDropdown(
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
    item: IBreadcrumbItem,
    index: number
  ): void {
    handleItemClickCommon(e, item, index);
    setIsDropdownOpen(true);
  }

  function handleItemClick(
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
    item: IBreadcrumbItem,
    index: number
  ): void {
    handleItemClickCommon(e, item, index);
    setIsDropdownOpen(false);
  }

  return (
    <BreadcrumbsWrapper
      data-testid={testId}
      className={className}
      widthLastNodeElement={widthLastNodeElement}
      ref={breadcrumbsRef}
      {...props}
      isLastChildEllipsis={isLastChildEllipsis}>
      {items.map((item, index) => (
        <React.Fragment
          key={`${item.text || item.to || ""}${item.viewType || ""}`}>
          <ContentWrapper isDisabled={item.isDisabled} viewType={item.viewType}>
            <Tooltip
              className="breadcrumbs__tooltip"
              text={item.text || ""}
              direction={getDirectionTooltip(index)}
              isShow={shouldShowTooltip(index)}>
              {item.subitems ? (
                <Dropdown
                  isDisabled={item.isDisabled}
                  items={item.subitems}
                  isOpen={item.viewType === "current"}
                  onClickOutside={() => {
                    item.viewType = undefined;
                    setIsDropdownOpen(false);
                    setCurrentItemTypes([]);
                  }}>
                  <ItemWrapper
                    isDisabled={item.isDisabled}
                    viewType={item.viewType}
                    className={
                      item.viewType === "current" ? "open-dropdown-pointer" : ""
                    }
                    as={item.to && "a"}
                    href={item.to || ""}
                    onClick={(
                      e: React.MouseEvent<
                        HTMLDivElement | HTMLAnchorElement,
                        MouseEvent
                      >
                    ) => handleItemClickWithDropdown(e, item, index)}>
                    <BreadcrumbItem
                      item={item}
                      items={items}
                      _maxNoCollapsedItems={_maxNoCollapsedItems}
                      index={index}>
                      <BreadcrumbsDropdownIndicatorStyled
                        isDisabled={item.isDisabled}
                        viewType={item.viewType}>
                        <IconArrowDown1
                          className="select-dropdown-icon"
                          width={12}
                          height={12}
                        />
                      </BreadcrumbsDropdownIndicatorStyled>
                    </BreadcrumbItem>
                  </ItemWrapper>
                </Dropdown>
              ) : (
                <ItemWrapper
                  isDisabled={item.isDisabled}
                  viewType={item.viewType}
                  as={item.to && "a"}
                  href={item.to || ""}
                  onClick={(
                    e: React.MouseEvent<
                      HTMLDivElement | HTMLAnchorElement,
                      MouseEvent
                    >
                  ) => handleItemClick(e, item, index)}>
                  <BreadcrumbItem
                    item={item}
                    items={items}
                    _maxNoCollapsedItems={_maxNoCollapsedItems}
                    index={index}>
                    {item.icon && item.iconType === "trail" && (
                      <IconWrapper>{item.icon}</IconWrapper>
                    )}
                  </BreadcrumbItem>
                </ItemWrapper>
              )}
            </Tooltip>
            {index < items.length - 1 && <Divider type="corvus">/</Divider>}
          </ContentWrapper>
        </React.Fragment>
      ))}
      {children}
    </BreadcrumbsWrapper>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
