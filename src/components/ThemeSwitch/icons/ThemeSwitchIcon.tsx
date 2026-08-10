import * as React from "react";
import { motion } from "motion/react";
import { TThemeSwitchSize } from "../types";
import {
  RAY_ANGLES,
  STAR_POSITIONS,
  THEME_SWITCH_DAY_COLOR,
  THEME_SWITCH_STAR_COLOR,
  createThemeSwitchVariants
} from "../motionVariants";

interface IThemeSwitchIconProps {
  isDark: boolean;
  reducedMotion: boolean;
  size: TThemeSwitchSize;
  className?: string;
}

const ICON_PIXEL_SIZE: Record<TThemeSwitchSize, number> = {
  l: 20,
  xl: 56
};

const ThemeSwitchIcon = ({
  isDark,
  reducedMotion,
  size,
  className
}: IThemeSwitchIconProps): JSX.Element => {
  const rawMaskId = React.useId();
  const maskId = `themeSwitchMask-${rawMaskId}`;
  const variants = React.useMemo(
    () => createThemeSwitchVariants(reducedMotion),
    [reducedMotion]
  );
  const activeVariant = isDark ? "night" : "day";
  const pixelSize = ICON_PIXEL_SIZE[size];

  return (
    <motion.svg
      className={className}
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 100 100"
      initial={false}
      animate={activeVariant}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))" }}>
      <motion.g
        variants={variants.rayGroup}
        whileHover={isDark ? undefined : "hovered"}
        style={{ transformOrigin: "50px 50px" }}>
        {RAY_ANGLES.map((angle) => (
          <rect
            key={angle}
            x={47}
            y={4}
            width={6}
            height={14}
            rx={3}
            fill={THEME_SWITCH_DAY_COLOR}
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </motion.g>
      <mask id={maskId}>
        <rect x={0} y={0} width={100} height={100} fill="#fff" />
        <motion.circle
          r={26}
          cy={38}
          fill="#000"
          variants={variants.crescentMask}
        />
      </mask>
      <motion.circle
        cx={50}
        cy={50}
        r={26}
        mask={`url(#${maskId})`}
        variants={variants.disc}
      />
      <motion.g variants={variants.starGroup}>
        {STAR_POSITIONS.map((star) => (
          <motion.circle
            key={`${star.x}-${star.y}`}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill={THEME_SWITCH_STAR_COLOR}
            variants={variants.star}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};

export default ThemeSwitchIcon;
