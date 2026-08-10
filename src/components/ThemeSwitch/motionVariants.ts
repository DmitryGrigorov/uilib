import { Transition, Variants } from "motion/react";
import { SPRING_PRESETS } from "../Pallette/motion";
import { LIGHT_COLORS } from "../Pallette/Colors";

export const THEME_SWITCH_DAY_COLOR = LIGHT_COLORS.orange3;
export const THEME_SWITCH_NIGHT_COLOR = LIGHT_COLORS.blue11;
export const THEME_SWITCH_STAR_COLOR = LIGHT_COLORS.neutral1;

export const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export const STAR_POSITIONS: { x: number; y: number; r: number }[] = [
  { x: 78, y: 20, r: 2 },
  { x: 86, y: 34, r: 1.4 },
  { x: 70, y: 14, r: 1.2 }
];

export const CRESCENT_MASK_OFF_X = 140;
export const CRESCENT_MASK_ON_X = 64;

export const KNOB_OFFSET = { light: 0, dark: 20 };
export const KNOB_TRANSITION: Transition = SPRING_PRESETS.elastic;

export const RIPPLE_TRANSITION: Transition = { duration: 0.5, ease: "easeOut" };

interface IThemeSwitchVariants {
  disc: Variants;
  crescentMask: Variants;
  rayGroup: Variants;
  starGroup: Variants;
  star: Variants;
}

export const createThemeSwitchVariants = (
  reducedMotion: boolean
): IThemeSwitchVariants => {
  const colorTransition: Transition = reducedMotion
    ? { duration: 0.12 }
    : SPRING_PRESETS.gentle;
  const rayTransition: Transition = reducedMotion
    ? { duration: 0.12 }
    : SPRING_PRESETS.bouncy;
  const starTransition: Transition = reducedMotion
    ? { duration: 0.12 }
    : SPRING_PRESETS.snappy;

  return {
    disc: {
      day: { fill: THEME_SWITCH_DAY_COLOR, transition: colorTransition },
      night: { fill: THEME_SWITCH_NIGHT_COLOR, transition: colorTransition }
    },
    crescentMask: {
      day: { cx: CRESCENT_MASK_OFF_X, transition: colorTransition },
      night: { cx: CRESCENT_MASK_ON_X, transition: colorTransition }
    },
    rayGroup: {
      day: { opacity: 1, scale: 1, rotate: 0, transition: rayTransition },
      night: { opacity: 0, scale: 0.4, transition: rayTransition },
      hovered: reducedMotion
        ? {}
        : { rotate: 25, transition: SPRING_PRESETS.gentle }
    },
    starGroup: {
      day: { transition: { staggerChildren: 0.04 } },
      night: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
    },
    star: {
      day: { opacity: 0, scale: 0, transition: starTransition },
      night: { opacity: 1, scale: 1, transition: starTransition }
    }
  };
};
