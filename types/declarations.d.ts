import { GroupBase } from "react-select";
import type { TestingLibraryMatchers } from "testing-library__jest-dom/matchers";
import type { MatchImageSnapshotOptions } from "jest-image-snapshot";
import { ISelectBaseCommonProps } from "@dmitrygrigorov/components/SelectBase/types";

declare const __DEV__: boolean;
declare const __localeId__: string;
declare const __localeData__: any;

declare module "*.json";
declare module "*.svg";
declare module "*.png";
declare module "*.gif";
declare module "antd";
declare module "@dmitrygrigorov/icons";
declare module "@dmitrygrigorov/components";
declare module "*.mjs";

declare module "react-select/dist/declarations/src/Select" {
  // eslint-disable-next-line
  export interface Props<
    Option,
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>
  > extends ISelectBaseCommonProps<Option, IsMulti> {}
}

declare module "expect" {
  interface Matchers<R>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {
    toMatchImageSnapshot(options?: MatchImageSnapshotOptions): R;
  }
}

// jest-styled-components only augments the legacy `namespace jest {}` shape
// (see node_modules/jest-styled-components/typings/index.d.ts), same gap as
// jest-dom's default export - see jest.setup.ts's use of the /jest-globals
// subpath. jest-styled-components has no equivalent subpath, so the
// `@jest/expect` augmentation is done here instead, reusing the `Value`/
// `Options` types it already declares globally under `namespace jest`.
declare module "@jest/expect" {
  interface Matchers<R extends void | Promise<void>> {
    toHaveStyleRule(property: string, value?: jest.Value, options?: jest.Options): R;
  }
}
