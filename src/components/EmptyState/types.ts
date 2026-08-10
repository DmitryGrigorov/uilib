export interface TEmptyStateProps {
  icon?: JSX.Element;
  width?: string;
  header?: string;
  text?: string;
  /**
   * @deprecated use 'onButtonClick' instead
   */
  isButton?: boolean;
  onButtonClick?: () => void;
  buttonText?: string;
  buttonIcon?: JSX.Element;
  className?: string;
}
