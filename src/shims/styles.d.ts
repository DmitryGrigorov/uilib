import "styled-components";
import { ITheme } from "../components/Pallette/themes";

declare module "styled-components" {
  // Must be an `interface` (not a `type` alias) so it declaration-merges with
  // styled-components' own ambient `DefaultTheme` interface; a type alias here
  // would shadow rather than extend it.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ITheme {}
}

declare module "*.css" {
  const css: any;
  export default css;
}

declare module "*.less" {
  const content: any;
  export default content;
}
