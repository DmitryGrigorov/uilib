import { LIGHT_THEME } from "../../components/Pallette/themes";
import { LIGHT_COLORS } from "../../components/Pallette/Colors";
import { Typography } from "../../components/Pallette/Typography";
import { SHADOWS_LIGHT } from "../../components/Pallette/effects";
import logo from "../assets/logo.svg";
import { IThemeSite } from "./types";

export const LightThemeSite: IThemeSite = {
  ...LIGHT_THEME,
  typography: Typography,
  background: LIGHT_COLORS.neutral1,
  backgroundSecondary: LIGHT_COLORS.neutral0,
  backgroundTag: LIGHT_COLORS.neutral3,
  header: {
    logo,
    logoColor: LIGHT_COLORS.neutral12,
    fill: LIGHT_COLORS.neutral12
  },
  mainPage: {
    color: LIGHT_COLORS.neutral12,
    background: LIGHT_COLORS.neutral0
  },
  sideBar: {
    background: LIGHT_COLORS.neutral0
  },
  sitePageHeader: {
    colorReleaseText: LIGHT_COLORS.teal1,
    backgroundRelease: LIGHT_COLORS.teal4
  },
  foundation: {
    colorsPage: {
      borderColorExample: LIGHT_COLORS.neutral6,
      colorText: LIGHT_COLORS.neutral10
    },
    communicationStylePage: {
      fillDanger: LIGHT_COLORS.red1,
      fillSuccess: LIGHT_COLORS.teal1
    },
    gridsPage: {
      backgroundGridExample: LIGHT_COLORS.overlay1,
      backgroundGridExamplePadding: LIGHT_COLORS.overlay3,
      backgroundSpacing: LIGHT_COLORS.neutral6
    },
    fontsPage: {
      borderTableRow: LIGHT_COLORS.neutral6
    },
    backgroundBadge: LIGHT_COLORS.neutral6,
    backgroundBadgeHover: LIGHT_COLORS.neutral4
  },
  colorMain: LIGHT_COLORS.neutral12,
  colorSecondary: LIGHT_COLORS.neutral10,
  shadowsTable: {
    rightShadow: SHADOWS_LIGHT.hp.right
  }
};
