export interface IMobileTable {
  isContent?: boolean;
  description?: string;
  isRefreshable?: boolean;
  headerContent?: JSX.Element;
  additionalButton?: JSX.Element;
  onUpdate?: () => void;
  onClickAdditionalButton?: () => void;
  isSearch?: boolean;
}
