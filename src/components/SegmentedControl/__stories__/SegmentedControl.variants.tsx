import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { SegmentedControl } from "../";
import { TSegmentedControlSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const SegmentedControlVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Size", ["l", "m", "s", "xs"], "l");
    store.setVariantSelect("Type", ["Text", "Icon"], "Text");
    store.setVariantBoolean("Disabled", false);
    return () => {
      store.removeVariants();
    };
  }, []);
  const size = computed(() => store.getValue<"select">("Size")).get();
  const type = computed(() => store.getValue<"select">("Type")).get();
  const isDisabled = computed(() =>
    store.getValue<"boolean">("Disabled")
  ).get();

  return (
    <SegmentedControl
      options={[
        {
          label: type === "Icon" ? <IconSetting1 /> : "1",
          value: "1",
          isDisabled
        },
        {
          label: type === "Icon" ? <IconSetting1 /> : "2",
          value: "2",
          isDisabled
        },
        {
          label: type === "Icon" ? <IconSetting1 /> : "3",
          value: "3",
          isDisabled
        },
        {
          label: type === "Icon" ? <IconSetting1 /> : "4",
          value: "4",
          isDisabled
        }
      ]}
      size={size as TSegmentedControlSize}
    />
  );
});

export default SegmentedControlVariants;
