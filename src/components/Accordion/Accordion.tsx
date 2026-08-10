import React, { FC } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { useStateProps } from "../hooks/useStateProps";
import Divider from "../Divider";
import { IAccordionProps } from "./types";
import AccordionHeader from "./components/AccordionHeader";
import { AccordionContent, AccordionStyled, AccordionWrapper } from "./style";

const Accordion: FC<TPropsWithAttributes<IAccordionProps>> = ({
  children,
  title,
  isOpened = false,
  style,
  className,
  isDisabled,
  width,
  leadIcon,
  trailContent,
  onToggle,
  ...otherProps
}) => {
  const [isShown, setIsShown] = useStateProps<boolean>(isOpened);

  const handleHeaderClick = (): void => {
    onToggle?.(!isShown);
    setIsShown(!isShown);
  };

  return (
    <AccordionStyled>
      <AccordionWrapper
        width={width}
        style={style}
        className={className}
        isOpened={isShown}
        {...otherProps}>
        <AccordionHeader
          isOpened={isShown}
          leadIcon={leadIcon}
          trailContent={trailContent}
          title={title}
          isDisabled={isDisabled}
          onHeaderClick={handleHeaderClick}
        />
        {isShown && <AccordionContent>{children}</AccordionContent>}
      </AccordionWrapper>
      <Divider />
    </AccordionStyled>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;
