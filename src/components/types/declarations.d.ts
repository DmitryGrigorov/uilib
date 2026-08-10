declare module "text-mask-addons" {
  export function createAutoCorrectedDatePipe(
    format: string,
    options?: { minYear?: number; maxYear?: number }
  ): any;
}

declare module "*.svg";

import { GroupBase } from "react-select";
import { ISelectBaseCommonProps } from "../../components/SelectBase/types";

declare module "react-select/dist/declarations/src/Select" {
  // eslint-disable-next-line
  export interface Props<
    Option,
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>
  > extends ISelectBaseCommonProps<Option, IsMulti> {}
}
