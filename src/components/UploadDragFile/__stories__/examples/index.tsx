import React, { useState } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { P2 } from "../../../typography";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import UploadDragFile from "../../";

export const UploadDragFileDefault: React.FC = () => <UploadDragFile />;

export const UploadDragFileCustomText: React.FC = () => (
  <UploadDragFile text="Upload multiple files" />
);

export const UploadDragFileDescription: React.FC = () => (
  <UploadDragFile description="JPG and PNG formats" accept=".png,.jpg" />
);

export const UploadDragFileNotDivider: React.FC = () => (
  <UploadDragFile description="PDF format" accept=".pdf" isDivider={false} />
);

export const UploadDragFileOnlyDrag: React.FC = () => (
  <UploadDragFile description="Any format" isOnlyDrag />
);

export const UploadDragFileCustomIcon: React.FC = () => (
  <UploadDragFile description="Any format" icon={<IconSetting1 />} />
);

export const UploadDragFileAcceptDocs: React.FC = () => (
  <UploadDragFile description="DOC and DOCX formats" accept=".doc, .docx" />
);

export const UploadDragFileDisabled: React.FC = () => (
  <UploadDragFile isDisabled />
);

export const UploadDragFileOnChange: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (_files: File[]): void => {
    setFiles(_files);
  };
  return (
    <>
      <UploadDragFile onChange={handleChange} />
      <P2 type="corvus">{files.map((file) => file.name)}</P2>
    </>
  );
};

export const UploadDragFileExamples: React.FC = () => {
  const UploadDragFiles = [
    {
      key: "drags",
      default: <UploadDragFileDefault />,
      disabled: <UploadDragFileDisabled />
    }
  ];
  return <StorybookDocExamples items={UploadDragFiles} />;
};
