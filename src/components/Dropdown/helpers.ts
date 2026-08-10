import {
  TDropdownGetItemKey,
  IDropdownItem,
  TDropdownGetItemLeadContent,
  TDropdownGetItemDisabled,
  TDropdownGetItemLabel,
  TDropdownGetItemOnClick,
  TDropdownGetItemAttributes,
  TDropdownGetItemGroupId,
  TDropdownListProps,
  TDropdownDirection
} from "./types";

const defaultGetItemKey: TDropdownGetItemKey<IDropdownItem> = (item) =>
  item.key || (item.label as string);

const defaultGetItemLeadContent: TDropdownGetItemLeadContent<IDropdownItem> = (
  item
) => item.leadContent;

const defaultGetItemDisabled: TDropdownGetItemDisabled<IDropdownItem> = (
  item
) => item.isDisabled;

const defaultGetItemLabel: TDropdownGetItemLabel<IDropdownItem> = (item) =>
  item.label;

const defaultGetItemOnClick: TDropdownGetItemOnClick<IDropdownItem> = (item) =>
  item.onClick;

const defaultGetItemAttributes: TDropdownGetItemAttributes<IDropdownItem> = (
  item
) => item.attributes;

const defaultGetItemGroupId: TDropdownGetItemGroupId<IDropdownItem> = (item) =>
  item?.groupId;

export function withDefaultGetters<Item = IDropdownItem>(
  props: TDropdownListProps<Item>
): TDropdownListProps<Item> {
  return {
    ...props,
    getItemKey:
      props.getItemKey ||
      (defaultGetItemKey as unknown as TDropdownGetItemKey<Item>),
    getItemLabel:
      (props.getItemLabel as TDropdownGetItemLabel<Item>) ||
      defaultGetItemLabel,
    getItemLeadContent:
      props.getItemLeadContent ||
      (defaultGetItemLeadContent as unknown as TDropdownGetItemLeadContent<Item>),
    getItemDisabled:
      props.getItemDisabled ||
      (defaultGetItemDisabled as unknown as TDropdownGetItemDisabled<Item>),
    getItemOnClick:
      props.getItemOnClick ||
      (defaultGetItemOnClick as unknown as TDropdownGetItemOnClick<Item>),
    getItemGroupId:
      props.getItemGroupId ||
      (defaultGetItemGroupId as unknown as TDropdownGetItemGroupId<Item>),
    getItemAttributes:
      props.getItemAttributes ||
      (defaultGetItemAttributes as unknown as TDropdownGetItemAttributes<Item>)
  };
}

export const DEFAULT_RECT_ELEMENT: DOMRect = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: (): void => {
    /* */
  }
};

export const calculateRectElement = (el: Element | null): DOMRect => {
  if (el) {
    const { width, height, top, left, bottom, right, x, y } =
      el.getBoundingClientRect();
    return {
      width,
      height,
      top: top + window.scrollY,
      left,
      bottom: bottom + window.scrollY,
      right,
      x,
      y,
      toJSON(): void {
        /* */
      }
    };
  }

  return DEFAULT_RECT_ELEMENT;
};

interface IGetDirectionParams {
  anchorRect: DOMRect;
  dropdownRect: DOMRect;
  direction: TDropdownDirection;
  offset: number;
}

export const getDirection = ({
  anchorRect,
  direction,
  dropdownRect,
  offset
}: IGetDirectionParams): TDropdownDirection => {
  const viewerSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };

  const isTop = anchorRect.y - dropdownRect.height - offset >= 0;
  const isBottom =
    anchorRect.y + anchorRect.height + dropdownRect.height + offset <=
    viewerSize.height;
  const isRight =
    anchorRect.right + anchorRect.width + dropdownRect.width + offset <=
    viewerSize.width;
  const isLeft = anchorRect.x - dropdownRect.width - offset >= 0;

  switch (direction) {
    case "left":
      if (isLeft) {
        return "left";
      }
      return "right";
    case "right":
      if (isRight) {
        return "right";
      }
      return "left";
    case "top":
      if (isTop) {
        return "top";
      }
      return "bottom";
    case "topRight":
      if (isTop) {
        return "topRight";
      }
      return "bottomRight";
    case "topLeft":
      if (isTop) {
        return "topLeft";
      }
      return "bottomLeft";
    case "bottom":
      if (isBottom) {
        return "bottom";
      }
      return "top";
    case "bottomLeft":
      if (isBottom) {
        return "bottomLeft";
      }
      return "topLeft";
    case "bottomRight":
      if (isBottom) {
        return "bottomRight";
      }
      return "topRight";
    default:
      return direction;
  }
};
