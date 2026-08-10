import React, { useEffect } from "react";
import { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { DocsContainer, DocsContextProps } from "@storybook/addon-docs/blocks";
import { LIGHT_THEME, DARK_THEME } from "../src/components/Pallette/themes";
import { LIGHT_COLORS, DARK_COLORS } from "../src/components/Pallette/Colors";
import ScrollStyle from "../src/components/Scroll";

// Only DOM tag targets ("div", "button", ...) need filtering — a component
// target manages its own props already, so everything is forwarded to it.
const shouldForwardProp = (propName: string, target: unknown): boolean =>
  typeof target === "string" ? isPropValid(propName) : true;
import "../src/styles/index.css";

const darkMode = {
  dark: {
    ...themes.dark,
    appBg: DARK_COLORS.neutral0
  },
  light: {
    ...themes.normal,
    appBg: LIGHT_COLORS.neutral0
  },
  stylePreview: true,
  darkClass: "lights-out",
  lightClass: "lights-on"
};

export const parameters: Preview["parameters"] = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Documentation",
        ["Quick Start", "Theming"],
        "Typography",
        "Components",
        [
          "Foundations",
          "Controls",
          "Data display",
          "Navigation",
          "Feedback",
          "Layouts"
        ],
        "Icons",
        "Tables",
        [
          "Quick Start",
          "Parameters",
          "Column Properties",
          "Table Interface",
          "Table API",
          "*"
        ]
      ]
    }
  },
  controls: {
    matchers: {
      color: /(background|color|fill)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    options: {
      light: {
        name: "light",
        value: LIGHT_COLORS.neutral0
      },

      dark: {
        name: "dark",
        value: DARK_COLORS.neutral0
      }
    }
  },
  docs: {
    container: function DocsContainerWithTheme({
      children,
      context
    }: {
      children: JSX.Element;
      context: DocsContextProps;
    }) {
      const isDarkMode = useDarkMode();

      return (
        <DocsContainer
          context={context}
          theme={isDarkMode ? themes.dark : themes.normal}>
          <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
              <ScrollStyle />
              <div
                style={{
                  background: isDarkMode
                    ? DARK_COLORS.neutral0
                    : LIGHT_COLORS.neutral0
                }}>
                {children}
              </div>
            </ThemeProvider>
          </StyleSheetManager>
        </DocsContainer>
      );
    }
  },
  darkMode
};

const preview: Preview = {
  parameters,

  decorators: [
    (s) => {
      const isDarkMode = useDarkMode();
      const defaultTheme = isDarkMode ? darkMode.dark : darkMode.light;

      useEffect(() => {
        const sbRoot = document.getElementsByClassName(
          "sb-show-main"
        )[0] as HTMLElement;
        if (sbRoot) {
          sbRoot.style.setProperty(
            "background-color",
            defaultTheme.appBg as string,
            "important"
          );
        }
      }, [isDarkMode]);

      return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
            <ScrollStyle />
            <div
              style={{
                minHeight: "100vh",
                background: isDarkMode
                  ? DARK_COLORS.neutral0
                  : LIGHT_COLORS.neutral0
              }}>
              {s()}
            </div>
          </ThemeProvider>
        </StyleSheetManager>
      );
    }
  ],

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  },

  tags: ["autodocs"]
};

export default preview;
