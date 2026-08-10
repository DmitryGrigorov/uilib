import React from "react";
import TextArea from "../../../";
import { ITextareaProps } from "../../../types";

export const TextAreaExamplePlaceholder: React.FC<
  Pick<ITextareaProps, "placeholder">
> = ({ placeholder }) => <TextArea placeholder={placeholder} />;

export const TextAreaExampleValue: React.FC<Pick<ITextareaProps, "value">> = ({
  value
}) => <TextArea value={value} />;

export const TextAreaExampleStatus: React.FC<
  Pick<ITextareaProps, "statusText" | "status">
> = ({ statusText, status }) => (
  <TextArea
    status={status}
    statusText={statusText}
    value="Text with a status"
  />
);

export const TextAreaExampleRequired: React.FC<
  Pick<ITextareaProps, "isRequired" | "placeholder">
> = ({ isRequired, placeholder }) => (
  <TextArea isRequired={isRequired} placeholder={placeholder} />
);

export const TextAreaExampleRowsCols: React.FC<
  Pick<ITextareaProps, "cols" | "rows">
> = ({ cols, rows }) => (
  <TextArea
    cols={cols}
    rows={rows}
    value="Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text."
  />
);
