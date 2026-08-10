import { DARK_THEME } from "../../components/Pallette/themes";
import { DARK_COLORS } from "../../components/Pallette/Colors";
import { Typography } from "../../components/Pallette/Typography";
import { SHADOWS_DARK } from "../../components/Pallette/effects";
import logoDark from "../assets/logo_dark.svg";
import { IThemeSite } from "./types";

export const DarkThemeSite: IThemeSite = {
  ...DARK_THEME,
  typography: Typography,
  background: DARK_COLORS.neutral1,
  backgroundSecondary: DARK_COLORS.neutral0,
  backgroundTag: DARK_COLORS.neutral3,
  header: {
    logo: logoDark,
    logoColor: DARK_COLORS.neutral12,
    fill: DARK_COLORS.neutral12
  },
  mainPage: {
    color: DARK_COLORS.neutral12,
    background: DARK_COLORS.neutral0
  },
  sideBar: {
    background: DARK_COLORS.neutral0
  },
  sitePageHeader: {
    colorReleaseText: DARK_COLORS.teal1,
    backgroundRelease: DARK_COLORS.teal4
  },
  foundation: {
    colorsPage: {
      borderColorExample: DARK_COLORS.neutral6,
      colorText: DARK_COLORS.neutral10
    },
    communicationStylePage: {
      fillDanger: DARK_COLORS.red1,
      fillSuccess: DARK_COLORS.teal1
    },
    gridsPage: {
      backgroundGridExample: DARK_COLORS.overlay1,
      backgroundGridExamplePadding: DARK_COLORS.overlay3,
      backgroundSpacing: DARK_COLORS.neutral6
    },
    fontsPage: {
      borderTableRow: DARK_COLORS.neutral6
    },
    backgroundBadge: DARK_COLORS.neutral6,
    backgroundBadgeHover: DARK_COLORS.neutral4
  },
  colorMain: DARK_COLORS.neutral12,
  colorSecondary: DARK_COLORS.neutral10,
  shadowsTable: {
    rightShadow: SHADOWS_DARK.hp.right
  }
};
