import React, { useEffect } from "react";
import { IconUser } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import AvatarImg from "../../../assets/avatar.svg";
import { Avatar } from "../";
import { TAvatarSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const AvatarVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Class", ["Icon", "Text", "Image"], "Icon");
    store.setVariantSelect("State", ["Default", "Disabled"], "Default");
    store.setVariantSelect("Size", ["xl", "l", "m", "s", "xs"], "xl");
    store.setVariantBoolean("Dot", true);
    return () => {
      store.removeVariants();
    };
  }, []);
  const classComponent = computed(() =>
    store.getValue<"select">("Class")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const size = computed(() =>
    store.getValue<"select", TAvatarSize>("Size")
  ).get();
  const isStatusOnline = computed(() => store.getValue<"boolean">("Dot")).get();

  return (
    <Avatar
      icon={classComponent === "Icon" ? <IconUser /> : undefined}
      text={classComponent === "Text" ? "A" : undefined}
      image={classComponent === "Image" ? AvatarImg : undefined}
      size={size}
      status={isStatusOnline ? "online" : undefined}
      isDisabled={state === "Disabled"}
    />
  );
});

export default AvatarVariants;
