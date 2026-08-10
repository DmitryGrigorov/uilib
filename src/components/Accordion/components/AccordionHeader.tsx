import React, { FC } from "react";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import {
  AccordionHeaderWrap,
  IconWrapper,
  LeadWrapperHeader,
  TrailWrapperHeader
} from "../style";
import { TAccordionHeaderProps } from "../types";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import P1 from "../../typography/P1";

const AccordionHeader: FC<TPropsWithAttributes<TAccordionHeaderProps>> = ({
  title,
  isOpened,
  isDisabled,
  leadIcon,
  trailContent,
  onHeaderClick
}) => (
  <AccordionHeaderWrap
    isDisabled={isDisabled}
    onClick={() => !isDisabled && onHeaderClick()}>
    <LeadWrapperHeader>
      {leadIcon && <IconWrapper>{leadIcon}</IconWrapper>}
      <P1 id="accordion-title" type="phoenix">
        {title}
      </P1>
    </LeadWrapperHeader>
    <TrailWrapperHeader>
      {trailContent}
      <IconWrapper isShown={isOpened}>
        <IconArrowDown1 className="arrow-icon" width={16} height={16} />
      </IconWrapper>
    </TrailWrapperHeader>
  </AccordionHeaderWrap>
);

export default AccordionHeader;
