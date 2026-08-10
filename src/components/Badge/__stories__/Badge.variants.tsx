import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Badge from "../";
import { TBadgeColor, TBadgeSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const BadgeVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect(
      "ColorType",
      ["blue", "teal", "red", "amber", "extra"],
      "blue"
    );
    store.setVariantSelect("State", ["Default", "Disabled"], "Default");
    store.setVariantSelect("Size", ["m", "l"], "m");
    store.setVariantSelect(
      "Interaction",
      ["Clickable", "NotClick"],
      "NotClick"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const size = computed(() =>
    store.getValue<"select", TBadgeSize>("Size")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const colorComponent = computed(
    () => store.getValue<"select">("ColorType") as TBadgeColor
  ).get();
  const clickable = computed(() =>
    store.getValue<"select">("Interaction")
  ).get();

  return (
    <Badge
      size={size}
      isDisabled={state === "Disabled"}
      colorType={colorComponent}
      isClick={clickable === "Clickable"}>
      P2-s
    </Badge>
  );
});

export default BadgeVariants;
