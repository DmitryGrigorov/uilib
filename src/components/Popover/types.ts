import {
  IComponentSizeAndPosition,
  TDirection
} from "../helpers/getPosition/types";

export interface IPopoverProps extends IPopoverSharedProps {
  children: JSX.Element;
  onVisibleChange?: (isVisible: boolean) => void;
  defaultIsVisible?: boolean;
  isShow?: boolean;
}

export interface IPopoverSharedProps {
  title?: string;
  description?: string;
  isPrimaryButton?: boolean;
  isSecondaryButton?: boolean;
  primaryButtonContent?: string | JSX.Element;
  secondaryButtonContent?: string | JSX.Element;
  direction?: TDirection;
  className?: string | undefined;
  onPrimaryButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onSecondaryButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface IPopoverContentProps extends IPopoverSharedProps {
  handleClose?: () => void;
  anchorSizeAndPosition: IComponentSizeAndPosition;
}
