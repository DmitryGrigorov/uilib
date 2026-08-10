import React, { forwardRef } from "react";
import { AnimatePresence, Variants } from "motion/react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import HeaderRoll from "./components/HeaderRoll";
import SubHeaderRoll from "./components/SubHeaderRoll";
import { IRollProps } from "./types";
import {
  RollStyled,
  RollAnimWrapper,
  RollContentWrapper,
  FooterStyled
} from "./styles";

const ROLL_ANIM_VARIANTS: Variants = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: "0%", transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.5 } }
};

const Roll = forwardRef<HTMLDivElement, TPropsWithAttributes<IRollProps>>(
  (
    {
      style,
      titleHeader,
      subTitleHeader,
      titleSubHeader,
      size,
      textOverflow = "ellipsis",
      statusSubHeader,
      labelSubHeader,
      className,
      isOpenRoll,
      mainContent,
      rollContent,
      classNameContent,
      footer,
      trailContentHeader,
      isIconStatusSubHeader,
      ...props
    },
    ref
  ) => (
    <RollStyled
      style={style}
      ref={ref}
      className={className}
      isOpenRoll={isOpenRoll}
      {...props}>
      <HeaderRoll
        textOverflow={textOverflow}
        title={titleHeader}
        subTitle={subTitleHeader}
        size={size}
        className="roll__header"
        trailContent={trailContentHeader}
      />
      <AnimatePresence mode="wait" initial={false}>
        <RollAnimWrapper
          className="roll-anim"
          key={String(isOpenRoll)}
          variants={ROLL_ANIM_VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit">
          <RollContentWrapper
            className={classNameContent}
            size={size}
            isOpenRoll={isOpenRoll}>
            {isOpenRoll ? (
              <div>
                {titleSubHeader && (
                  <SubHeaderRoll
                    textOverflow={textOverflow}
                    title={titleSubHeader}
                    statusLabel={statusSubHeader}
                    textLabel={labelSubHeader}
                    isIconLabel={isIconStatusSubHeader}
                  />
                )}
                {rollContent}
              </div>
            ) : (
              mainContent
            )}
          </RollContentWrapper>
          {isOpenRoll && footer && <FooterStyled>{footer}</FooterStyled>}
        </RollAnimWrapper>
      </AnimatePresence>
    </RollStyled>
  )
);

Roll.displayName = "Roll";

export default Roll;
