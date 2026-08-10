import React, { useEffect, useRef } from "react";
import getTextWidth from "../../../utils/getTextWidth";
import H from "../../../typography/H";
import P2 from "../../../typography/P2";
import { HeaderRollStyled, LeadContentStyled, TrailContent } from "./styles";
import { IHeaderRollProps } from "./types";

const HeaderRoll: React.FC<IHeaderRollProps> = ({
  title,
  subTitle,
  trailContent,
  size = "l",
  textOverflow,
  ...props
}) => {
  const headerRollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLElement>(null);

  const resetTooltip = (): void => {
    titleRef.current?.removeAttribute("title");
    subtitleRef.current?.removeAttribute("title");
  };

  const setTooltip = (): void => {
    titleRef.current?.setAttribute("title", String(title));
    subTitle !== undefined &&
      subtitleRef.current?.setAttribute("title", String(subTitle));
  };

  const setTooltipWhenOverflowText = (): void => {
    resetTooltip();
    if (headerRollRef.current && titleRef.current && subtitleRef.current) {
      const widthTitleText = getTextWidth(
        String(title),
        getComputedStyle(titleRef.current).font
      );
      const widthSubTitleText = getTextWidth(
        String(subTitle || ""),
        getComputedStyle(subtitleRef.current).font
      );
      const gapBetweenTitles = subTitle ? 8 : 0;

      const headerRoll = headerRollRef.current;
      const { paddingLeft, paddingRight } = getComputedStyle(headerRoll);

      const contentMaxWidth =
        headerRoll.clientWidth -
        parseInt(paddingLeft, 10) -
        parseInt(paddingRight, 10) -
        gapBetweenTitles;

      const widthText = widthTitleText + widthSubTitleText;
      if (widthText > contentMaxWidth) {
        setTooltip();
      }
    }
  };

  useEffect(() => {
    setTooltipWhenOverflowText();
  }, [title, subTitle]);

  return (
    <HeaderRollStyled
      ref={headerRollRef}
      size={size}
      textOverflow={textOverflow}
      {...props}>
      <LeadContentStyled>
        <H type="capricornus" ref={titleRef} className="text title">
          {title}
        </H>
        <P2 type="corvus" ref={subtitleRef} className="text sub-title">
          {subTitle}
        </P2>
      </LeadContentStyled>
      {trailContent && <TrailContent>{trailContent}</TrailContent>}
    </HeaderRollStyled>
  );
};

export default HeaderRoll;
