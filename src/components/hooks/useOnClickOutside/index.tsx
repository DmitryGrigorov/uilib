import React, { useEffect } from "react";

export function useOnClickOutside<E extends HTMLElement>(
  ref: React.RefObject<E | null> | React.RefObject<E | null>[],
  handler?: () => void,
  isOpen?: boolean
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      const mouseEvent: MouseEvent = event as MouseEvent;
      const isScrollBarClick =
        (window.scrollbars?.visible !== undefined
          ? window.scrollbars.visible
          : true) &&
        mouseEvent.clientX > document.documentElement.clientWidth - 20;

      if (!Array.isArray(ref)) {
        const isModalWindowClick = ref.current?.contains(
          event.target as HTMLElement
        );

        if (!ref.current || isModalWindowClick || isScrollBarClick) {
          return;
        }
      } else {
        const containsArray = ref.filter((r) =>
          r.current?.contains(event.target as HTMLElement)
        );
        if (containsArray.length || isScrollBarClick) {
          return;
        }
      }
      handler && handler();
    };

    const isUseEventListener: boolean = isOpen !== undefined ? isOpen : true;
    if (isUseEventListener) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return (): void => {
      if (isUseEventListener) {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    };
  }, [ref, handler, isOpen]);
}
