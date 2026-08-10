import React from "react";

export const FILE_CARD_STATUSES = ["error", "warning", "success"] as const;

export type TFileCardStatus = (typeof FILE_CARD_STATUSES)[number];

export interface IFileCardProps {
  fileName: string;
  fileExtension?: string;
  isLoading?: boolean;
  status?: TFileCardStatus;
  statusText?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
  onButtonClick?: React.EventHandler<React.MouseEvent>;
  buttonIcon?: JSX.Element;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  isEditable?: boolean;
  onChangeFileName?: (fileName: string) => void;
  timeoutSuccess?: number;
}
