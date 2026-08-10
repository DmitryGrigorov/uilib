import React from "react";
import { IconMoreCircle } from "@dmitrygrigorov/icons";
import { Accordion } from "../../../index";
import CheckBox from "../../../../CheckBox";
import InputNumber from "../../../../InputNumber";
import { List } from "../../../../List";
import Button from "../../../../Button";
import RadioButton from "../../../../RadioButton";
import Tag from "../../../../Tag";

const DATA_SOURCE = [
  {
    id: "item1",
    contentItem: (
      <List>
        <List.ListItem>Item</List.ListItem>
        <List.ListItem>Item 2</List.ListItem>
        <List.ListItem>Item 3</List.ListItem>
      </List>
    )
  },
  {
    id: "item2",
    contentItem: (
      <div>
        <p>Accordion content</p>
      </div>
    )
  },
  {
    id: "item3",
    contentItem: (
      <div>
        <CheckBox label={"Checkbox 1"} />
        <CheckBox label={"Checkbox 2"} />
        <CheckBox label={"Checkbox 3"} />
      </div>
    )
  },
  {
    id: "item4",
    isDisabled: true,
    contentItem: (
      <div>
        <InputNumber />
      </div>
    )
  }
];

const DATA_SOURCE_FOR_SIMPLE_EXAMPLE: React.ReactNode = (
  <List>
    <List.ListItem>Item</List.ListItem>
    <List.ListItem>Item 2</List.ListItem>
    <List.ListItem>Item 3</List.ListItem>
    <List.ListItem>Item 4</List.ListItem>
    <List.ListItem>Item 5</List.ListItem>
    <List.ListItem>Item 6</List.ListItem>
    <List.ListItem>Item 7</List.ListItem>
  </List>
);

const DATA_SOURCE_FOR_OPTIONAL_ATTRIBUTES: React.ReactNode = (
  <div>
    <RadioButton label={"Radio 1"} />
    <RadioButton label={"Radio 2"} />
    <RadioButton label={"Radio 3"} isChecked />
    <Button>Button</Button>
  </div>
);

export const AccordionExample: React.FC = () => (
  <div>
    {DATA_SOURCE.map((item) => (
      <Accordion
        key={item.id}
        title={`Accordion ${item.id}`}
        isDisabled={item.isDisabled}>
        {item.contentItem}
      </Accordion>
    ))}
  </div>
);

export const AccordionWithDataSource: React.FC = () => (
  <div style={{ maxHeight: "200px" }}>
    <Accordion title="Accordion with a long heading">
      {DATA_SOURCE_FOR_SIMPLE_EXAMPLE}
    </Accordion>
  </div>
);

export const AccordionOptionalAttributes: React.FC = () => (
  <Accordion
    isOpened
    title="Accordion"
    leadIcon={<IconMoreCircle />}
    trailContent={<Tag title="18">18</Tag>}>
    {DATA_SOURCE_FOR_OPTIONAL_ATTRIBUTES}
  </Accordion>
);
