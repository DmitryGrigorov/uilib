import React, { useState } from "react";
import styled from "styled-components";
import { IconTrash1 } from "@dmitrygrigorov/icons";
import FileCard from "../../";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const FileCardIcons: React.FC = () => (
  <Wrapper>
    <FileCard fileName="Image" fileExtension="png" />
    <FileCard fileName="Unknown document" fileExtension="ddd" />
  </Wrapper>
);

export const FileCardFileNames: React.FC = () => (
  <Wrapper>
    <FileCard fileName="Image" fileExtension="png" />
    <FileCard
      style={{ maxWidth: "271px" }}
      fileName="Your file name is too long to fit here"
      fileExtension="ddd"
    />
  </Wrapper>
);

export const FileCardLoading: React.FC = () => (
  <FileCard fileName="Image" fileExtension="png" isLoading />
);

export const FileCardStatuses: React.FC = () => (
  <Wrapper>
    <FileCard
      fileName="File name"
      fileExtension="png"
      status="error"
      statusText="Upload interrupted"
    />
    <FileCard
      fileName="File name"
      fileExtension="png"
      status="success"
      statusText="Uploaded"
      timeoutSuccess={1000000}
    />
    <FileCard
      fileName="File name"
      fileExtension="png"
      status="warning"
      statusText="Low resolution"
    />
  </Wrapper>
);

export const FileCardRemove: React.FC = () => (
  <FileCard
    fileName="File name"
    fileExtension="doc"
    buttonIcon={<IconTrash1 />}
    onButtonClick={() => alert("You deleted the file")}
  />
);

export const FileCardClick: React.FC = () => (
  <FileCard
    fileName="File name"
    fileExtension="doc"
    onClick={() => alert("You clicked the file")}
  />
);

export const FileCardEdit: React.FC = () => {
  const [fileName, setFileName] = useState("File name");

  const handleChangeFileName = (name: string): void => {
    setFileName(name);
  };

  return (
    <FileCard
      fileName={fileName}
      fileExtension="doc"
      isEditable
      onChangeFileName={handleChangeFileName}
    />
  );
};

export const FileCardAppearance: React.FC = () => {
  const FILE_CARD_EXAMPLES = [
    {
      key: "one",
      loading: <FileCard fileName="File name" fileExtension="png" isLoading />,
      default: <FileCard fileName="File name" fileExtension="png" />
    },
    {
      key: "two",
      success: (
        <FileCard
          fileName="File name"
          fileExtension="png"
          status="success"
          statusText="Success"
          timeoutSuccess={1000000}
        />
      ),
      error: (
        <FileCard
          fileName="File name"
          fileExtension="png"
          status="error"
          statusText="Error"
        />
      )
    },
    {
      key: "three",
      warning: (
        <FileCard
          fileName="File name"
          fileExtension="png"
          status="warning"
          statusText="Warning"
        />
      )
    }
  ];

  return <StorybookDocExamples items={FILE_CARD_EXAMPLES} />;
};
