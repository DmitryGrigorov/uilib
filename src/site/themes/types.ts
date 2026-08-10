import { ITheme } from "../../components/Pallette/themes";

// All own (non-ITheme) properties are optional: this interface is merged
// into styled-components' global `DefaultTheme` (see ../shims.d.ts) so that
// site code can read `theme.colorMain` etc. without a cast, but the library
// components under src/components only ever supply plain `ITheme`-shaped
// theme objects (LIGHT_THEME/DARK_THEME) - making these required would break
// every library styled() interpolation that assigns an `ITheme` as `theme`.
export interface IThemeSite extends ITheme {
  background?: string;
  header?: {
    logo: string;
    logoColor: string;
    fill: string;
  };
  mainPage?: {
    color: string;
    background: string;
  };
  sideBar?: {
    background: string;
  };
  sitePageHeader?: {
    colorReleaseText: string;
    backgroundRelease: string;
  };
  foundation?: {
    colorsPage: {
      borderColorExample: string;
      colorText: string;
    };
    gridsPage: {
      backgroundGridExample: string;
      backgroundGridExamplePadding: string;
      backgroundSpacing: string;
    };
    communicationStylePage: {
      fillDanger: string;
      fillSuccess: string;
    };
    fontsPage: {
      borderTableRow: string;
    };
    backgroundBadge: string;
    backgroundBadgeHover: string;
  };
  colorMain?: string;
  colorSecondary?: string;
  backgroundSecondary?: string;
  backgroundTag?: string;
  shadowsTable?: {
    rightShadow: any;
  };
}
