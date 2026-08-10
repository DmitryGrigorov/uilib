import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { List } from "../../../";
import { TListSize } from "../../../types";

const DATA_SOURCE = [
  {
    label: "Item"
  },
  {
    label: "Item2"
  },
  {
    label: "Item3"
  }
];

export const ListExampleBasic: React.FC<{ size?: TListSize }> = ({ size }) => (
  <List
    size={size}
    width={400}
    dataSource={DATA_SOURCE}
    header={{ content: "Basic type" }}
  />
);

export const ListExampleBasicWithItemTrailIcon: React.FC<{
  size?: TListSize;
}> = ({ size }) => (
  <List
    size={size}
    width={400}
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />
    }))}
    header={{ content: "Basic type with a trailing icon" }}
  />
);

export const ListExampleBasicPressed: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List
    size={size}
    width={400}
    dataSource={DATA_SOURCE.map((item, index) => ({
      ...item,
      isSelected: index === 1,
      trailIcon: <IconSetting1 />
    }))}
    header={{
      content: "Basic type with a selected item"
    }}
    isSelected
  />
);

export const ListExampleArrow: React.FC<{ size?: TListSize }> = ({ size }) => (
  <List
    size={size}
    width={400}
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />
    }))}
    header={{
      content: "Arrow type",
      leadIcon: <IconSetting1 />
    }}
    viewType="arrow"
  />
);

export const ListExampleCollapse: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List
    size={size}
    width={400}
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />
    }))}
    header={{
      content: "Collapsible type",
      leadIcon: <IconSetting1 />
    }}
    viewType="collapse"
  />
);

export const ListExampleBasicCheckBox: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List.ListCheckBoxes
    size={size}
    width={400}
    isShowSelectAll
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />,
      label: item.label,
      value: item.label
    }))}
    header={{
      content: "Basic type with checkboxes"
    }}
    viewType={"arrow"}
    defaultValue={["Item"]}
  />
);

export const ListExampleBasicRadio: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List.ListRadioButtons
    size={size}
    width={400}
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />,
      label: item.label,
      value: item.label
    }))}
    header={{
      content: "Basic type with radio buttons"
    }}
    defaultValue={"Item"}
  />
);

export const ListExampleBasicSwitch: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List.ListSwitch
    size={size}
    width={400}
    isShowSelectAll
    dataSource={DATA_SOURCE.map((item) => ({
      ...item,
      value: item.label,
      leadIcon: <IconSetting1 />
    }))}
    header={{
      content: "Basic type with switches"
    }}
    defaultValue={["Item"]}
  />
);

export const ListExampleBasicAvatar: React.FC<{ size?: TListSize }> = ({
  size
}) => (
  <List
    size={size}
    width={400}
    header={{
      content: "Basic type with avatars",
      avatar: {
        status: "online",
        text: "LA"
      },
      trailIcon: <IconSetting1 />
    }}>
    {DATA_SOURCE.map((item, index) => (
      <List.ListItemAvatar
        size={size}
        status="offline"
        trailIcon={<IconSetting1 />}
        text={`I${index + 1}`}
        key={item.label}>
        {item.label}
      </List.ListItemAvatar>
    ))}
  </List>
);
