export type TAccordionHeaderProps = {
  title: string | number;
  isOpened?: boolean;
  isDisabled?: boolean;

  leadIcon?: JSX.Element;
  trailContent?: JSX.Element;

  onHeaderClick: () => void;
};

export interface IAccordionProps extends Omit<
  TAccordionHeaderProps,
  "onHeaderClick"
> {
  className?: string;
  width?: string | number;
  onToggle?: (isOpen: boolean) => void;
  children?: React.ReactNode;
}
