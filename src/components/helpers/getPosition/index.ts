import { IPosition, TDirection, TAlignMode } from "./types";

export const MARGIN = 15;

function getScrollTop(): number {
  return document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollLeft(): number {
  return document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function parseDirection(direction: TDirection): [TDirection, TAlignMode] {
  const defaultAlign = "center";
  const directionArray = direction
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ");

  const realDirection = directionArray[0];
  const alignMode =
    directionArray.length > 1 ? directionArray[1].toLowerCase() : defaultAlign;

  return [realDirection as TDirection, alignMode as TAlignMode];
}

function checkLeftRightWidthSufficient(
  tip: HTMLElement,
  target: HTMLElement
): boolean {
  const targetRect = target.getBoundingClientRect();
  const deadSpace = Math.min(
    targetRect.left,
    document.documentElement.clientWidth - targetRect.right
  );

  return (
    tip.offsetWidth + target.offsetWidth + deadSpace <
    document.documentElement.clientWidth
  );
}

function getDirection(
  currentDirection: TDirection,
  tip: HTMLElement,
  target: HTMLElement | null
): TDirection {
  if (!target) {
    return currentDirection;
  }

  const targetRect = target.getBoundingClientRect();

  const heightOfTipWithArrow = tip.offsetHeight;

  const spaceBelowTarget = window.innerHeight - targetRect.bottom;
  const spaceAboveTarget = targetRect.top;

  const hasSpaceBelow = spaceBelowTarget >= heightOfTipWithArrow;
  const hasSpaceAbove = spaceAboveTarget >= heightOfTipWithArrow;

  switch (currentDirection) {
    case "left":
      if (!checkLeftRightWidthSufficient(tip, target)) {
        return getDirection("top", tip, target);
      }

      if (targetRect.left < tip.offsetWidth) {
        return "right";
      }

      return "left";

    case "right":
      if (!checkLeftRightWidthSufficient(tip, target)) {
        return getDirection("top", tip, target);
      }

      if (
        document.documentElement.clientWidth - targetRect.right <
        tip.offsetWidth
      ) {
        return "left";
      }
      return "right";

    case "top":
      if (!hasSpaceAbove) {
        if (checkLeftRightWidthSufficient(tip, target)) {
          return getDirection("left", tip, target);
        }
        return "bottom";
      }
      return "top";

    case "bottom":
    default:
      if (!hasSpaceBelow) {
        if (checkLeftRightWidthSufficient(tip, target)) {
          return getDirection("right", tip, target);
        }

        if (hasSpaceAbove) {
          return "top";
        }
      }
      return "bottom";
  }
}

function getTopBottomPosition(
  tip: HTMLElement | null,
  target: HTMLElement | null,
  direction: TDirection,
  alignMode: TAlignMode
): IPosition {
  let left = -10000000;
  let top = -10000000;

  if (tip && target) {
    const scrollLeft = getScrollLeft();
    const targetRect = target.getBoundingClientRect();
    const targetLeft = targetRect.left + scrollLeft;

    const halfTargetWidth = Math.round(target.offsetWidth / 2);
    const tipWidth = tip.offsetWidth;

    if (alignMode === "left") {
      left = targetLeft;
    } else if (alignMode === "right") {
      const rightEdge = targetLeft + target.offsetWidth;
      left = Math.max(rightEdge - tipWidth, scrollLeft);
    } else {
      const centeredLeft =
        targetLeft + halfTargetWidth - Math.round(tipWidth / 2);
      left = Math.max(centeredLeft, scrollLeft);
    }

    const rightOfTip = left + tipWidth;
    const rightOfScreen = scrollLeft + document.documentElement.clientWidth;
    const rightOverhang = rightOfTip - rightOfScreen;
    if (rightOverhang > 0) {
      left -= rightOverhang;
    }

    if (direction === "top") {
      top = targetRect.top + getScrollTop() - tip.offsetHeight - MARGIN;
    } else {
      top = targetRect.bottom + getScrollTop() + MARGIN;
    }
  }

  return {
    left,
    top
  };
}

function getLeftRightPosition(
  tip: HTMLElement | null,
  target: HTMLElement | null,
  direction: TDirection,
  alignMode: TAlignMode
): IPosition {
  let left = -10000000;
  let top = -10000000;

  if (tip && target) {
    const scrollTop = getScrollTop();
    const scrollLeft = getScrollLeft();
    const targetRect = target.getBoundingClientRect();
    const targetTop = targetRect.top + scrollTop;
    const halfTargetHeight = Math.round(target.offsetHeight / 2);

    if (alignMode === "top") {
      top = targetTop;
    } else if (alignMode === "bottom") {
      top = targetRect.bottom + scrollTop - tip.offsetHeight;
    } else {
      top = Math.max(
        targetTop + halfTargetHeight - Math.round(tip.offsetHeight / 2),
        scrollTop
      );
    }

    const bottomOverhang =
      top - scrollTop + tip.offsetHeight - window.innerHeight;

    const bottomOverhandCenter =
      top - scrollTop + tip.offsetHeight / 2 - window.innerHeight;

    if (bottomOverhang > 0) {
      top =
        bottomOverhandCenter > 0
          ? target.offsetTop - tip.offsetHeight + target.offsetHeight
          : target.offsetTop - tip.offsetHeight / 2 + target.offsetHeight;
    }

    if (top === 0) {
      top = target.offsetTop;
    }

    if (direction === "right") {
      left = targetRect.right + scrollLeft + MARGIN;
    } else {
      left = targetRect.left - tip.offsetWidth + scrollLeft - MARGIN;
    }
  }

  return {
    left,
    top
  };
}

export default function getPositions(
  direction: TDirection,
  tip: HTMLElement | null,
  target: HTMLElement | null
): IPosition {
  let realDirection = parseDirection(direction)[0];
  const alignMode = parseDirection(direction)[1];

  if (realDirection && tip && target) {
    realDirection = getDirection(realDirection, tip, target);
  }

  const position =
    realDirection === "top" || realDirection === "bottom"
      ? getTopBottomPosition(tip, target, realDirection, alignMode)
      : getLeftRightPosition(tip, target, realDirection, alignMode);

  return {
    ...position
  };
}
