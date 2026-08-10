import { INavigationItem } from "./types";

export const PRIMARY_NAVIGATION: ReadonlyArray<INavigationItem> = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Components",
    href: "/components"
  },
  {
    label: "Colors",
    href: "/colors"
  }
];

export const RESOURCE_NAVIGATION: ReadonlyArray<INavigationItem> = [
  {
    label: "Storybook",
    href: "/storybook/",
    external: true,
    ariaLabel: "Open the UI Lib Storybook"
  },
  {
    label: "GitHub",
    href: "https://github.com/DmitryGrigorov/uilib",
    external: true,
    newTab: true,
    ariaLabel: "View UI Lib on GitHub (opens in a new tab)"
  }
];
