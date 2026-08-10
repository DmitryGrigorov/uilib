import { ReactNode } from "react";

export const MODAL_WINDOW_TYPE = ["overlay", "fullscreen"];

export type TModalWindowType = (typeof MODAL_WINDOW_TYPE)[number];

export interface IModalWindowProps {
  title?: string;
  subTitle?: string;
  description?: string;
  isOpen: boolean;
  onClose?: () => void;
  type?: TModalWindowType;
  anchorElement?: Element | DocumentFragment;
  footerContent?: JSX.Element;
  isOutsideClickClose?: boolean;
  isHiddenHeader?: boolean;
  isHiddenCloseButton?: boolean;
  onChangeIsOpen?: (isOpen: boolean) => void;
  className?: string;
  classNameHeader?: string;
  classNameFooter?: string;
  classNameContent?: string;
  children?: ReactNode;
  width?: string;
}
