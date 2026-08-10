import { css, Interpolation, RuleSet } from "styled-components";

import * as style from "../variables";

export const MEDIA = {
  mobile: (
    p: TemplateStringsArray,
    ...args: TemplateStringsArray[] | Interpolation<object>[]
  ): RuleSet<object> => css`
    @media (${style.MEDIA.mobile}) {
      ${css(p, ...args)}
    }
  `,
  tablet: (
    p: TemplateStringsArray,
    ...args: TemplateStringsArray[] | Interpolation<object>[]
  ): RuleSet<object> => css`
    @media (${style.MEDIA.tablet}) {
      ${css(p, ...args)}
    }
  `,
  desktopM: (
    p: TemplateStringsArray,
    ...args: TemplateStringsArray[] | Interpolation<object>[]
  ): RuleSet<object> => css`
    @media (${style.MEDIA.desktopM}) {
      ${css(p, ...args)}
    }
  `,
  desktopL: (
    p: TemplateStringsArray,
    ...args: TemplateStringsArray[] | Interpolation<object>[]
  ): RuleSet<object> => css`
    @media (${style.MEDIA.desktopL}) {
      ${css(p, ...args)}
    }
  `,
  desktopXl: (
    p: TemplateStringsArray,
    ...args: TemplateStringsArray[] | Interpolation<object>[]
  ): RuleSet<object> => css`
    @media (${style.MEDIA.desktopXL}) {
      ${css(p, ...args)}
    }
  `
};

export const BorderRadius = {
  roundBorder: (
    ...borderRadius:
      [string] | [string, string] | [string, string, string, string]
  ): RuleSet<object> => css`
    border-radius: ${borderRadius.join(" ")};
  `,
  roundBorderTop: (borderRadius: string): RuleSet<object> => css`
    border-radius: ${borderRadius} ${borderRadius} 0 0;
  `,
  roundBorderBottom: (borderRadius: string): RuleSet<object> => css`
    border-radius: 0 0 ${borderRadius} ${borderRadius};
  `
};

export const Padding = {
  allSide: (
    ...steps:
      | [number]
      | [number, number]
      | [number, number, number]
      | [number, number, number, number]
  ): RuleSet<object> => css`
    padding: ${steps.map((step) => `${step * style.SUPER_PIXEL}px`).join(" ")};
  `,
  top: (step: number): RuleSet<object> => css`
    padding-top: ${step * style.SUPER_PIXEL}px;
  `,
  bottom: (step: number): RuleSet<object> => css`
    padding-bottom: ${step * style.SUPER_PIXEL}px;
  `,
  right: (step: number): RuleSet<object> => css`
    padding-right: ${step * style.SUPER_PIXEL}px;
  `,
  left: (step: number): RuleSet<object> => css`
    padding-left: ${step * style.SUPER_PIXEL}px;
  `
};

export const Margin = {
  allSide: (
    ...steps:
      | [number]
      | [number, number]
      | [number, number, number]
      | [number, number, number, number]
  ): RuleSet<object> => css`
    margin: ${steps.map((step) => `${step * style.SUPER_PIXEL}px`).join(" ")};
  `,
  top: (step: number): RuleSet<object> => css`
    margin-top: ${step * style.SUPER_PIXEL}px;
  `,
  bottom: (step: number): RuleSet<object> => css`
    margin-bottom: ${step * style.SUPER_PIXEL}px;
  `,
  right: (step: number): RuleSet<object> => css`
    margin-right: ${step * style.SUPER_PIXEL}px;
  `,
  left: (step: number): RuleSet<object> => css`
    margin-left: ${step * style.SUPER_PIXEL}px;
  `
};
