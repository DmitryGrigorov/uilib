import "styled-components";
import { IThemeSite } from "./themes/types";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IThemeSite {}
}

export {};
