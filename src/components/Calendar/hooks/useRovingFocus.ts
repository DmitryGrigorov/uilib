import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export interface IUseRovingFocusOptions {
  itemCount: number;
  /** Grid width, used to move focus vertically with ArrowUp/ArrowDown. */
  columns: number;
  /** Preferred tab stop (e.g. the active/selected item); re-synced when it changes. */
  activeIndex: number;
  isItemDisabled?: (index: number) => boolean;
  onActivate: (index: number) => void;
}

export interface IUseRovingFocusResult {
  getTabIndex: (index: number) => 0 | -1;
  registerItem: (index: number) => (node: HTMLElement | null) => void;
  onKeyDown: (event: KeyboardEvent, index: number) => void;
}

/**
 * Roving-tabindex keyboard navigation shared by the day/month/year grids:
 * only one cell is a tab stop at a time, arrow keys move it, Enter/Space
 * activates it. Reused across grids of different sizes via `columns`.
 */
export const useRovingFocus = ({
  itemCount,
  columns,
  activeIndex,
  isItemDisabled,
  onActivate
}: IUseRovingFocusOptions): IUseRovingFocusResult => {
  const [focusedIndex, setFocusedIndex] = useState(activeIndex);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const shouldMoveDomFocus = useRef(false);

  // Syncs internal state with the externally-controlled activeIndex prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setFocusedIndex(activeIndex);
  }, [activeIndex]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (shouldMoveDomFocus.current) {
      itemRefs.current[focusedIndex]?.focus();
      shouldMoveDomFocus.current = false;
    }
  }, [focusedIndex]);

  const moveFocus = (nextIndex: number): void => {
    if (nextIndex < 0 || nextIndex >= itemCount) {
      return;
    }

    shouldMoveDomFocus.current = true;
    setFocusedIndex(nextIndex);
  };

  const registerItem =
    (index: number) =>
    (node: HTMLElement | null): void => {
      itemRefs.current[index] = node;
    };

  const handleKeyDown = (event: KeyboardEvent, index: number): void => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        moveFocus(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        moveFocus(index - 1);
        break;
      case "ArrowDown":
        event.preventDefault();
        moveFocus(index + columns);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveFocus(index - columns);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(0);
        break;
      case "End":
        event.preventDefault();
        moveFocus(itemCount - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isItemDisabled?.(index)) {
          onActivate(index);
        }
        break;
      default:
        break;
    }
  };

  const getTabIndex = (index: number): 0 | -1 =>
    index === focusedIndex ? 0 : -1;

  return { getTabIndex, registerItem, onKeyDown: handleKeyDown };
};
