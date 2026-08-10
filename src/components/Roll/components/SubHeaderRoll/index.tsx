import React, { forwardRef, useEffect, useRef } from "react";
import getTextWidth from "../../../utils/getTextWidth";
import P1 from "../../../typography/P1";
import Label from "../../../Label";
import { ISubHeaderRollProps } from "./types";
import { SubHeaderRollStyled } from "./styles";

const SubHeaderRoll = forwardRef<HTMLDivElement, ISubHeaderRollProps>(
  (
    {
      title,
      statusLabel = "info",
      textLabel,
      textOverflow,
      isIconLabel,
      ...props
    },
    ref
  ) => {
    const titleRef = useRef<HTMLElement>(null);

    const setTooltipWhenOverflowTitle = (): void => {
      if (titleRef.current) {
        titleRef.current.removeAttribute("title");
        const widthText = getTextWidth(
          String(title),
          getComputedStyle(titleRef.current).font
        );
        if (widthText >= titleRef.current.clientWidth) {
          titleRef.current.setAttribute("title", String(title));
        }
      }
    };

    useEffect(() => {
      setTooltipWhenOverflowTitle();
    }, [title]);

    return (
      <SubHeaderRollStyled ref={ref} textOverflow={textOverflow} {...props}>
        <P1 className="title" ref={titleRef} type="phoenix" as="p">
          {title}
        </P1>
        {textLabel && (
          <Label className="subtitle" status={statusLabel} isIcon={isIconLabel}>
            {textLabel}
          </Label>
        )}
      </SubHeaderRollStyled>
    );
  }
);

SubHeaderRoll.displayName = "SubHeaderRoll";

export default SubHeaderRoll;
