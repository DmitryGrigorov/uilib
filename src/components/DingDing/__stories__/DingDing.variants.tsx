import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { DingDing } from "../";
import { TColorNotificationCountDingDing, TSizeDingDing } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const DingDingVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("ColorType", ["blue", "red"], "red");
    store.setVariantSelect("Size", ["s", "m", "l"], "m");
    store.setVariantSelect(
      "State",
      ["Default", "Disabled", "Selected"],
      "Default"
    );
    store.setVariantBoolean("Notification", false);
    return () => {
      store.removeVariants();
    };
  }, []);
  const size = computed(() =>
    store.getValue<"select">("Size")
  ).get() as TSizeDingDing;
  const colorComponent = computed(
    () =>
      store.getValue<"select">("ColorType") as TColorNotificationCountDingDing
  ).get();
  const isNotification = computed(() =>
    store.getValue<"boolean">("Notification")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();

  return (
    <DingDing
      size={size}
      isDisabled={state === "Disabled"}
      isSelected={state === "Selected"}
      colorNotificationCount={colorComponent}
      notificationCount={isNotification ? 1 : 0}
    />
  );
});

export default DingDingVariants;
