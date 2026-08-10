import React, { useEffect } from "react";
import { IconMoreCircle } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Tree } from "../index";
import { useVariantStore } from "../../../site/modules/variants";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 382px;
`;

const TreeVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Counter", true);
    store.setVariantBoolean("Icon", true);
    store.setVariantSelect(
      "State",
      ["Default", "Selected", "Disabled"],
      "Default"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const isIcon = computed(() => store.getValue<"boolean">("Icon")).get();
  const state = computed(() => store.getValue<"select">("State")).get();

  return (
    <Container>
      <Tree
        isDisabled={state === "Disabled"}
        dataSource={[
          {
            id: "0",
            title: "Heading",
            isOpened: state === "Selected",
            trailContent: isIcon ? <IconMoreCircle /> : undefined,
            elements: [
              { id: "1", title: "Subheading" },
              { id: "2", title: "Subheading" }
            ]
          }
        ]}
      />
      <Tree
        isDisabled={state === "Disabled"}
        dataSource={[
          {
            id: "0",
            title: "Heading",
            isOpened: state === "Selected",
            trailContent: isIcon ? <IconMoreCircle /> : undefined,
            elements: [{ id: "1", title: "Subheading" }]
          }
        ]}
      />
      <Tree
        isDisabled={state === "Disabled"}
        dataSource={[
          {
            id: "0",
            title: "Heading",
            isOpened: state === "Selected",
            trailContent: isIcon ? <IconMoreCircle /> : undefined,
            elements: [{ id: "1", title: "Subheading" }]
          }
        ]}
      />
    </Container>
  );
});

export default TreeVariants;
