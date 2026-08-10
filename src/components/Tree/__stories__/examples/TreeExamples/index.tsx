import React, { useState } from "react";
import {
  IconArrowRight1,
  IconFolderCloud,
  IconMoreCircle
} from "@dmitrygrigorov/icons";
import RadioButton from "../../../../RadioButton";
import { Tree, TreeSourceItem } from "../../../index";
import CheckBox from "../../../../CheckBox";

const DATA_SOURCE: TreeSourceItem[] = [
  {
    id: "111",
    title: "Heading11",
    elements: [
      {
        id: "12",
        title: "Heading112",
        leadContent: <IconArrowRight1 />
      }
    ]
  },
  {
    title: "Heading12",
    id: "11",
    elements: [
      {
        id: "121",
        title: "Heading121"
      },
      {
        id: "122",
        title: "Heading122"
      }
    ]
  },
  {
    id: "13",
    title: "Heading13",
    isDisabled: true,
    elements: [
      {
        id: "133",
        title: "Heading131",
        elements: [
          {
            id: "131",
            title: "Heading1311"
          },
          {
            id: "132",
            title: "Heading1321"
          }
        ]
      }
    ]
  }
];

const DATA_SOURCE_FOR_SIMPLE_EXAMPLE: TreeSourceItem[] = [
  {
    id: "1",
    title: "Heading-11",
    leadContent: <IconMoreCircle />,
    elements: [
      { id: "11", title: "Heading-111" },
      { id: "12", title: "Heading-112" }
    ]
  }
];

const DATA_SOURCE_FOR_DRAG_EXAMPLE: TreeSourceItem[] = [
  {
    id: "1",
    title: "Heading-1",
    leadContent: <IconMoreCircle />,
    elements: [
      {
        id: "11",
        title: "Heading-11",
        isDisabled: true,
        isOpened: true,
        elements: [{ id: "111", title: "Heading 111" }]
      },
      { id: "12", title: "Heading-12" }
    ]
  },
  {
    id: "2",
    title: "Heading-2",
    leadContent: <IconMoreCircle />,
    elements: [
      {
        id: "21",
        title: "Heading-21",
        elements: [{ id: "_211", title: "Heading 211" }]
      },
      { id: "22", title: "Heading-22" }
    ]
  }
];

export const TreeExampleWithDataSource: React.FC = () => (
  <Tree title="Root heading" dataSource={DATA_SOURCE} width="382px" />
);

export const TreeExample: React.FC = () => (
  <Tree width="382px" dataSource={DATA_SOURCE} />
);

export const TreeWithOptionalAttributes: React.FC = () => {
  const dataSource = [
    {
      id: "1",
      title: "Heading",
      leadContent: <IconMoreCircle />,
      isCounter: true,
      elements: [
        {
          id: "11",
          title: "Heading 1",
          leadContent: <CheckBox />,
          elements: [
            { id: "12", title: "Heading-1.1", isDisabled: true },
            { id: "12", title: "Heading-1.2" }
          ]
        },
        { id: "12", title: "Heading 2" }
      ]
    }
  ];
  return (
    <Tree
      dataSource={dataSource}
      title="Tree with additional attributes"></Tree>
  );
};

export const TreeWithSwitchRadioButtonCheckBox: React.FC = () => {
  const args = {
    title: "Heading-1",
    isOpened: true,
    leadContent: <IconFolderCloud />,
    dataSource: [
      {
        title: "Heading12",
        id: "2",
        elements: [
          {
            id: "21",
            title: "Heading 2.1"
          },
          {
            id: "22",
            title: "Heading 2.2 with a checkbox",
            isDisabled: true,
            leadContent: <CheckBox />
          },
          {
            id: "23",
            title: "Heading 2.3 with a radio button",
            leadContent: <RadioButton />
          }
        ]
      }
    ]
  };

  return <Tree {...args} />;
};

export const TreeWithDataSource: React.FC = () => (
  <Tree dataSource={DATA_SOURCE_FOR_SIMPLE_EXAMPLE} />
);

export const TreeWithDragAndDrop: React.FC = () => {
  const [stateTreeWithDragAndDrop, setStateTreeWithDragAndDrop] = useState(
    DATA_SOURCE_FOR_DRAG_EXAMPLE
  );
  return (
    <Tree
      isDragAllowed
      isEditAllowed
      dataSource={stateTreeWithDragAndDrop}
      onChange={(e) => {
        setStateTreeWithDragAndDrop(e);
      }}
    />
  );
};

export const TreeWithEdit: React.FC = () => (
  <Tree isEditAllowed dataSource={DATA_SOURCE_FOR_DRAG_EXAMPLE} />
);
