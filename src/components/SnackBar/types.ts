export type TSnackBarStatus = "info" | "success" | "error" | "warning";

export interface ISnackBarContext {
  openSnackBar: (params: TSnackBarParams) => string | number;
  closeSnackBar: (key: string | number) => void;
}

export interface ISnackBarAction {
  text: string;
  onClick?: () => void;
}

export interface ISnackBarParamsBase {
  id?: string | number;
  message: string;
  duration?: number;
  timeoutId?: NodeJS.Timeout;
  count?: number;
  leadIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isClosable?: boolean;
}

export interface ISnackBarParamsWithAction extends ISnackBarParamsBase {
  action?: ISnackBarAction;
  status?: never;
}

export interface ISnackBarParamsWithStatus extends ISnackBarParamsBase {
  status?: TSnackBarStatus;
  action?: never;
}

export interface ISnackBarParamsWithoutStatusAction extends ISnackBarParamsBase {
  status?: never;
  action?: never;
}

export type TSnackBarParams =
  | ISnackBarParamsWithAction
  | ISnackBarParamsWithStatus
  | ISnackBarParamsWithoutStatusAction;

export interface ISnackBarInstanceProps {
  container?: HTMLElement;
}

export interface ISnackBarInstanceRef {
  open: (params: TSnackBarParams) => void;
}

export interface ISnackBarInstanceState {
  params: TSnackBarParams[];
}
