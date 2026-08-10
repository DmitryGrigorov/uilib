import { useState, RefObject, useLayoutEffect } from "react";
import { TInputSize } from "../InputBase/interfaces";
import { SelectContainerStyled } from "./components/SelectContainer/styles";
import { TSelectInstanceRef } from "./types";

export const useGetMenuPosition = <
  TOption = unknown,
  IsMulti extends boolean = boolean
>(
  menuRef: RefObject<HTMLDivElement | null>,
  selectRef: TSelectInstanceRef<TOption, IsMulti>,
  selectSize?: TInputSize
): string => {
  const [cssProperties, setCssProperties] = useState("");

  useLayoutEffect(() => {
    if (
      menuRef.current &&
      selectRef &&
      selectRef.current &&
      selectRef.current.controlRef
    ) {
      const select = selectRef.current.controlRef.closest(
        `[class*='${String(SelectContainerStyled).slice(1)}']`
      );
      if (select) {
        const {
          width: selectWidth,
          bottom: selectBottom,
          top: selectTop,
          left: selectLeft
        } = select.getBoundingClientRect();

        const { bottom, top, height, left } =
          menuRef.current.getBoundingClientRect();

        let calculatedCssProperties = "";
        const distanceBetweenSelect = 7;

        calculatedCssProperties += `width: ${selectWidth}px; left: ${
          selectLeft - left
        }px;`;

        if (
          bottom > window.innerHeight &&
          top > height + (selectSize === "l" ? 56 : 48)
        ) {
          // Menu above the Select.
          calculatedCssProperties += `bottom: ${
            top - selectTop + distanceBetweenSelect
          }px;`;
        } else {
          // Menu below the Select.
          calculatedCssProperties += `top: ${
            selectBottom - top + distanceBetweenSelect
          }px;`;
        }
        setCssProperties(calculatedCssProperties);
      }
    }
  }, []);

  return cssProperties;
};
