import { css, RuleSet } from "styled-components";
import { rgba } from "polished";
import { LIGHT_COLORS, DARK_COLORS } from "./Colors";

export type TBorderPosition = "bottom" | "left" | "right";
export type TBorderColor = "jotun" | "muspel" | "vana" | "mid";

export type IBorders = Record<
  TBorderPosition,
  Record<TBorderColor, RuleSet<object>>
>;

export type TShadowPriority = "hp" | "sp" | "tp";
export type TShadowPosition = "top" | "bottom" | "right" | "left";

export type IShadows = Record<
  TShadowPriority,
  Record<TShadowPosition, RuleSet<object>>
>;

export interface IBlur {
  blbg1: RuleSet<object>;
  blbg2: RuleSet<object>;
}

export type IDividersColors = Record<TDividersType, string>;

export type TDividersType = "primary" | "secondary";
export type TDividersPosition = "top" | "bottom" | "left" | "right";

export type IDividers = Record<
  TDividersType,
  Record<TDividersPosition, RuleSet<object>>
>;

const borderLeft = (color: string, size = 2): RuleSet<object> => css`
  filter: drop-shadow(-${size}px 0 ${color});
`;

const borderBottom = (color: string, size = 2): RuleSet<object> => css`
  filter: drop-shadow(0 ${size}px 0 ${color});
`;

const borderRight = (color: string, size = 2): RuleSet<object> => css`
  filter: drop-shadow(${size}px 0 0 ${color});
`;

export const BORDERS_LIGHT: IBorders = {
  bottom: {
    jotun: borderBottom(LIGHT_COLORS.blue1),
    muspel: borderBottom(LIGHT_COLORS.red1),
    vana: borderBottom(LIGHT_COLORS.teal1),
    mid: borderBottom(LIGHT_COLORS.amber1)
  },
  left: {
    jotun: borderLeft(LIGHT_COLORS.blue1),
    muspel: borderLeft(LIGHT_COLORS.red1),
    vana: borderLeft(LIGHT_COLORS.teal1),
    mid: borderLeft(LIGHT_COLORS.amber1)
  },
  right: {
    jotun: borderRight(LIGHT_COLORS.blue1),
    muspel: borderRight(LIGHT_COLORS.red1),
    vana: borderRight(LIGHT_COLORS.teal1),
    mid: borderRight(LIGHT_COLORS.amber1)
  }
};

export const BORDERS_DARK: IBorders = {
  bottom: {
    jotun: borderBottom(DARK_COLORS.blue1),
    muspel: borderBottom(DARK_COLORS.red1),
    vana: borderBottom(DARK_COLORS.teal1),
    mid: borderBottom(DARK_COLORS.amber1)
  },
  left: {
    jotun: borderLeft(DARK_COLORS.blue1),
    muspel: borderLeft(DARK_COLORS.red1),
    vana: borderLeft(DARK_COLORS.teal1),
    mid: borderLeft(DARK_COLORS.amber1)
  },
  right: {
    jotun: borderRight(DARK_COLORS.blue1),
    muspel: borderRight(DARK_COLORS.red1),
    vana: borderRight(DARK_COLORS.teal1),
    mid: borderRight(DARK_COLORS.amber1)
  }
};

export const SHADOWS_LIGHT: IShadows = {
  hp: {
    top: css`
      box-shadow: 0 -8px 32px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    bottom: css`
      box-shadow: 0 8px 32px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    left: css`
      box-shadow: -8px 0 32px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    right: css`
      box-shadow: 8px 0 32px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `
  },
  sp: {
    top: css`
      box-shadow: 0px -2px 16px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    bottom: css`
      box-shadow: 0 2px 16px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    left: css`
      box-shadow: -2px 0 16px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `,
    right: css`
      box-shadow: 2px 0 16px ${rgba(LIGHT_COLORS.neutral4, 0.6)};
    `
  },
  tp: {
    top: css`
      filter: drop-shadow(0 -1px 4px ${rgba(LIGHT_COLORS.neutral6, 0.8)});
    `,
    bottom: css`
      filter: drop-shadow(0 -1px 4px ${rgba(LIGHT_COLORS.neutral6, 0.8)});
    `,
    left: css`
      filter: drop-shadow(-1px 0 4px ${rgba(LIGHT_COLORS.neutral6, 0.8)});
    `,
    right: css`
      filter: drop-shadow(1px 0 4px ${rgba(LIGHT_COLORS.neutral6, 0.8)});
    `
  }
};

export const SHADOWS_DARK: IShadows = {
  hp: {
    top: css`
      box-shadow: 0px -8px 32px ${rgba(DARK_COLORS.neutral0, 0.8)};
    `,
    bottom: css`
      box-shadow: 0 8px 32px ${rgba(DARK_COLORS.neutral0, 0.8)};
    `,
    left: css`
      box-shadow: -8px 0 32px ${rgba(DARK_COLORS.neutral0, 0.8)};
    `,
    right: css`
      box-shadow: 8px 0 32px ${rgba(DARK_COLORS.neutral0, 0.8)};
    `
  },
  sp: {
    top: css`
      box-shadow: 0px -2px 16px ${DARK_COLORS.neutral0};
    `,
    bottom: css`
      box-shadow: 0 2px 16px ${DARK_COLORS.neutral0};
    `,
    left: css`
      box-shadow: -2px 0 16px ${DARK_COLORS.neutral0};
    `,
    right: css`
      box-shadow: 2px 0 16px ${DARK_COLORS.neutral0};
    `
  },
  tp: {
    top: css`
      filter: drop-shadow(0 -1px 4px ${DARK_COLORS.neutral0});
    `,
    bottom: css`
      filter: drop-shadow(0 -1px 4px ${DARK_COLORS.neutral0});
    `,
    left: css`
      filter: drop-shadow(-1px 0 4px ${DARK_COLORS.neutral0});
    `,
    right: css`
      filter: drop-shadow(1px 0 4px ${DARK_COLORS.neutral0});
    `
  }
};

export const BLUR: IBlur = {
  blbg1: css`
    backdrop-filter: blur(4px);
  `,
  blbg2: css`
    backdrop-filter: blur(8px);
  `
};

export const DIVIDERS_COLOR_LIGHT: IDividersColors = {
  primary: LIGHT_COLORS.orange1,
  secondary: LIGHT_COLORS.neutral6
};

export const DIVIDERS_COLOR_DARK: IDividersColors = {
  primary: DARK_COLORS.orange1,
  secondary: DARK_COLORS.neutral6
};

export const DIVIDERS_LIGHT: IDividers = {
  primary: {
    top: css`
      box-shadow: 0 -1px 0 ${DIVIDERS_COLOR_LIGHT.primary};
    `,
    bottom: css`
      box-shadow: 0 1px 0 ${DIVIDERS_COLOR_LIGHT.primary};
    `,
    left: css`
      box-shadow: -1px 0 0 ${DIVIDERS_COLOR_LIGHT.primary};
    `,
    right: css`
      box-shadow: 1px 0 0 ${DIVIDERS_COLOR_LIGHT.primary};
    `
  },
  secondary: {
    top: css`
      box-shadow: 0 -1px 0 ${DIVIDERS_COLOR_LIGHT.secondary};
    `,
    bottom: css`
      box-shadow: 0 1px 0 ${DIVIDERS_COLOR_LIGHT.secondary};
    `,
    left: css`
      box-shadow: -1px 0 0 ${DIVIDERS_COLOR_LIGHT.secondary};
    `,
    right: css`
      box-shadow: 1px 0 0 ${DIVIDERS_COLOR_LIGHT.secondary};
    `
  }
};

export const DIVIDERS_DARK: IDividers = {
  primary: {
    top: css`
      box-shadow: 0 -1px 0 ${DIVIDERS_COLOR_DARK.primary};
    `,
    bottom: css`
      box-shadow: 0 1px 0 ${DIVIDERS_COLOR_DARK.primary};
    `,
    left: css`
      box-shadow: -1px 0 0 ${DIVIDERS_COLOR_DARK.primary};
    `,
    right: css`
      box-shadow: 1px 0 0 ${DIVIDERS_COLOR_DARK.primary};
    `
  },
  secondary: {
    top: css`
      box-shadow: 0 -1px 0 ${DIVIDERS_COLOR_DARK.secondary};
    `,
    bottom: css`
      box-shadow: 0 1px 0 ${DIVIDERS_COLOR_DARK.secondary};
    `,
    left: css`
      box-shadow: -1px 0 0 ${DIVIDERS_COLOR_DARK.secondary};
    `,
    right: css`
      box-shadow: 1px 0 0 ${DIVIDERS_COLOR_DARK.secondary};
    `
  }
};
