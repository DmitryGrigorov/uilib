import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import deepmerge from "../utils/deepmerge";
import DeepPartial from "../utils/deepPartial";

const createTheme = (
  options: DeepPartial<ITheme>,
  defaultTheme?: ITheme
): ITheme => deepmerge(defaultTheme || LIGHT_THEME, options);

export default createTheme;
