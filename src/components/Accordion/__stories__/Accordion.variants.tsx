import React, { useEffect } from "react";
import { IconMoreCircle } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Accordion } from "../index";
import { useVariantStore } from "../../../site/modules/variants";
import Tag from "../../Tag";
import { List } from "../../List";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AccordionVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Icon", true);
    store.setVariantBoolean("Trail", true);
    store.setVariantSelect(
      "State",
      ["Default", "Opened", "Disabled"],
      "Default"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const isIcon = computed(() => store.getValue<"boolean">("Icon")).get();
  const isTrailContent = computed(() =>
    store.getValue<"boolean">("Trail")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();

  return (
    <Container>
      <Accordion
        isOpened={state === "Opened"}
        isDisabled={state === "Disabled"}
        title={"Heading"}
        leadIcon={isIcon ? <IconMoreCircle /> : undefined}
        trailContent={isTrailContent ? <Tag title="4">4</Tag> : undefined}>
        {
          <List>
            <List.ListItem>Item 1</List.ListItem>
            <List.ListItem>Item 2</List.ListItem>
            <List.ListItem>Item 3</List.ListItem>
            <List.ListItem>Item 4</List.ListItem>
          </List>
        }
      </Accordion>
    </Container>
  );
});

export default AccordionVariants;
