export interface IUploadDragFileProps {
  isMultiple?: boolean;
  onChange?: (files: File[]) => void;
  isDisabled?: boolean;
  text?: string;
  description?: string;
  accept?: string;
  className?: string;
  icon?: JSX.Element;
  isDivider?: boolean;
  isOnlyDrag?: boolean;
  maxFileSize?: number;
  summarySizeLimit?: number;
}
