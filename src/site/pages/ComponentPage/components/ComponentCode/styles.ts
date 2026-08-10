import styled from "styled-components";
import { Shape } from "@dmitrygrigorov/components";
import { themes } from "prism-react-renderer";
import { DarkThemeSite } from "../../../../themes/dark";
import { IThemeSite } from "../../../../themes/types";
import { GridItem, Grid } from "../../../../components/GridLayout";

export const ComponentCodeStyled = styled(Grid).attrs({
  $cols: 9
})`
  height: 100%;
`;

export const styleLiveCode = (theme: IThemeSite): typeof themes.nightOwl => ({
  plain: {
    color: theme.colorMain,
    backgroundColor: theme.backgroundSecondary
  },
  styles: [
    {
      types: ["punctuation"],
      style: {
        color: theme.colors.neutral6
      }
    },
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: theme.colors.neutral7
      }
    },
    {
      types: ["tag"],
      style: {
        color: theme.colors.red7
      }
    },
    {
      types: ["builtin"],
      style: {
        color: theme.colors.teal7
      }
    },
    {
      types: ["number", "property"],
      style: {
        color: theme.colors.amber6
      }
    },
    {
      types: ["operator"],
      style: {
        color: theme.colors.neutral10
      }
    },
    {
      types: ["function"],
      style: {
        color: theme.colors.red7
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id", "attr-name", "string"],
      style: {
        color: theme.colors.teal7
      }
    },
    {
      types: [
        "boolean",
        "entity",
        "url",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable",
        "important"
      ],
      style: {
        color: theme.colors.amber5
      }
    },
    {
      types: ["keyword", "attr-value"],
      style: {
        color: theme.colors.blue7
      }
    }
  ]
});

export const ComponentEditorWrapper = styled(GridItem).attrs({
  $colStart: 1,
  $colEnd: 6
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  overflow: auto;

  & > div,
  .prism-code {
    height: 100%;
    overflow: auto;
  }

  .prism-code {
    border-radius: ${Shape.borderRadiusMedium};
    background-color: ${({ theme }) => theme.backgroundSecondary};
    overflow: auto;
    padding: 28px !important;
  }

  & > pre {
    padding: 28px 28px;
    background: ${({ theme }) => theme.backgroundSecondary};
    border-radius: ${Shape.borderRadiusMedium};
    overflow: auto;
  }
`;

ComponentEditorWrapper.defaultProps = {
  theme: DarkThemeSite
};

export const ComponentViewStyled = styled(GridItem).attrs({
  $colStart: 6,
  $colEnd: 10
})`
  padding: 48px 28px;
  display: flex;
  justify-content: center;
  @media (min-height: 600px) {
    overflow: auto;
  }
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: ${Shape.borderRadiusMedium};

  & > div {
    width: 100%;
  }
`;

ComponentViewStyled.defaultProps = {
  theme: DarkThemeSite
};
