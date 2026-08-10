import React, { useEffect } from "react";
import { IconUser } from "@dmitrygrigorov/icons";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Tag from "../";
import { TTagSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  button:not(:last-child) {
    margin-right: 16px;
  }

  button {
    margin-bottom: 16px;
  }
`;

const TagVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Lead Icon", false);
    store.setVariantSelect("Class", ["Base", "Avatar"], "Base");
    store.setVariantSelect(
      "State",
      ["Default", "Selected", "Disabled", "Read-only"],
      "Default"
    );
    store.setVariantSelect("Size", ["m", "s", "xs"], "m");
    return () => {
      store.removeVariants();
    };
  }, []);
  const size = computed(() => store.getValue<"select", TTagSize>("Size")).get();
  const isLeadIcon = computed(() =>
    store.getValue<"boolean">("Lead Icon")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const classComponent = computed(() =>
    store.getValue<"select">("Class")
  ).get();

  return (
    <TagsWrapper>
      <Tag
        avatarProps={
          classComponent === "Avatar" ? { icon: <IconUser /> } : undefined
        }
        isClosable
        size={size}
        isDisabled={state === "Disabled" || state === "Read-only"}
        isShowDefaultLeadIcons={isLeadIcon}
        isPressed={state === "Selected"}>
        Protons
      </Tag>
      <Tag
        avatarProps={
          classComponent === "Avatar" ? { icon: <IconUser /> } : undefined
        }
        isClosable
        size={size}
        isDisabled={state === "Disabled" || state === "Read-only"}
        isShowDefaultLeadIcons={isLeadIcon}
        isPressed={state === "Selected"}>
        Neutrons
      </Tag>
      <Tag
        avatarProps={
          classComponent === "Avatar" ? { icon: <IconUser /> } : undefined
        }
        isClosable
        size={size}
        isDisabled={state === "Disabled" || state === "Read-only"}
        isShowDefaultLeadIcons={isLeadIcon}
        isPressed={state === "Selected"}>
        Electrons
      </Tag>
    </TagsWrapper>
  );
});

export default TagVariants;
