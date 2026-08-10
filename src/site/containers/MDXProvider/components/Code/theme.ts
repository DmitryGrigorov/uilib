import React from "react";
import type { IThemeSite } from "../../../../themes/types";

export const themeCode = (
  theme: IThemeSite
): Record<string, React.CSSProperties> => ({
  'code[class*="language-"]': {
    background: "none",
    color: theme.colors.neutral12,
    fontFamily: theme.typography?.fontFamily,
    whiteSpace: "pre",
    fontSize: theme.typography?.fontSizeM,
    lineHeight: "24px"
  },

  'pre[class*="language-"]': {
    background: "none",
    color: theme.colors.neutral12,
    whiteSpace: "pre",
    fontSize: theme.typography?.fontSizeM,
    overflow: "auto",
    lineHeight: "24px"
  },
  comment: {
    color: theme.colors.neutral7
  },
  prolog: {
    color: theme.colors.neutral7
  },
  doctype: {
    color: theme.colors.neutral7
  },
  cdata: {
    color: theme.colors.neutral7
  },
  punctuation: {
    color: theme.colors.neutral6
  },
  namespace: {
    opacity: ".7"
  },
  property: {
    color: theme.colors.amber6
  },
  tag: {
    color: theme.colors.amber6
  },
  boolean: {
    color: theme.colors.amber6
  },
  number: {
    color: theme.colors.amber6
  },
  constant: {
    color: theme.colors.amber6
  },
  symbol: {
    color: theme.colors.amber6
  },
  deleted: {
    color: theme.colors.amber6
  },
  selector: {
    color: theme.colors.teal7
  },
  "attr-name": {
    color: theme.colors.teal7
  },
  string: {
    color: theme.colors.teal7
  },
  char: {
    color: theme.colors.teal7
  },
  builtin: {
    color: theme.colors.teal7
  },
  inserted: {
    color: theme.colors.teal7
  },
  operator: {
    color: theme.colors.neutral10
  },
  entity: {
    color: theme.colors.neutral10,
    cursor: "help"
  },
  url: {
    color: theme.colors.neutral10
  },
  ".language-css .token.string": {
    color: theme.colors.neutral10
  },
  ".style .token.string": {
    color: theme.colors.neutral10
  },
  atrule: {
    color: theme.colors.blue7
  },
  "attr-value": {
    color: theme.colors.blue7
  },
  keyword: {
    color: theme.colors.blue7
  },
  function: {
    color: theme.colors.red7
  },
  "class-name": {
    color: theme.colors.red7
  },
  regex: {
    color: theme.colors.amber5
  },
  important: {
    color: theme.colors.amber5,
    fontWeight: "bold"
  },
  variable: {
    color: theme.colors.amber5
  },
  bold: {
    fontWeight: "bold"
  }
});
