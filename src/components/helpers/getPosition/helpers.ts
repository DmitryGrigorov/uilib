import { IComponentSizeAndPosition, TDirection } from "./types";

export const DEFAULT_SIZE_AND_POSITION_ELEMENT = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0
};

export const calculateSizeAnPositionElement = (
  el: Element | null
): IComponentSizeAndPosition => {
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
      y
    };
  }

  return DEFAULT_SIZE_AND_POSITION_ELEMENT;
};

interface ComputedDirectionParams {
  componentSizeAndPosition: IComponentSizeAndPosition;
  textContentSize: IComponentSizeAndPosition;
  offset: number;
  direction: TDirection;
}

// Checks whether the tooltip fits at the requested position and flips it when necessary.

export const getComputedDirection = ({
  componentSizeAndPosition,
  textContentSize,
  offset,
  direction
}: ComputedDirectionParams): TDirection => {
  const viewerSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };

  const isRight =
    componentSizeAndPosition.right +
      componentSizeAndPosition.width +
      textContentSize.width +
      offset <=
    viewerSize.width;
  const isLeft =
    componentSizeAndPosition.x - textContentSize.width - offset >= 0;
  const isTop =
    componentSizeAndPosition.y - textContentSize.height - offset >= 0;
  const isBottom =
    componentSizeAndPosition.y +
      componentSizeAndPosition.height +
      textContentSize.height +
      offset <=
    viewerSize.height;

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
