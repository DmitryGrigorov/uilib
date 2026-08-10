import { Transition, Variants } from "motion/react";

export const SPRING_PRESETS: Record<string, Transition> = {
  snappy: { type: "spring", stiffness: 500, damping: 35 },
  gentle: { type: "spring", stiffness: 260, damping: 30 },
  bouncy: { type: "spring", stiffness: 400, damping: 17 },
  elastic: { type: "spring", stiffness: 700, damping: 12 }
};

export const FADE_IN_VARIANTS: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } }
};

export const SLIDE_OVER_VARIANTS: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_PRESETS.gentle
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.1 }
  }
};

export const COLLAPSE_VARIANTS: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: SPRING_PRESETS.gentle
  }
};
