import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { DARK_COLORS } from "../../Pallette/Colors";
import Label, { TLabelStatus, TLabelSize } from "../";
import { useVariantStore } from "../../../site/modules/variants";

const StatusVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Lead Icon", false);
    store.setVariantBoolean("Required", false);
    store.setVariantBoolean("Disabled", false);
    store.setVariantColor(
      "Color",
      [
        { value: "focused", color: DARK_COLORS.blue3 },
        { value: "info", color: DARK_COLORS.blue5 },
        { value: "error", color: DARK_COLORS.red1 },
        { value: "warning", color: DARK_COLORS.amber1 },
        { value: "success", color: DARK_COLORS.teal1 },
        { value: "filled", color: DARK_COLORS.neutral5 }
      ],
      { value: "focused", color: DARK_COLORS.blue3 }
    );
    store.setVariantSelect("Size", ["m", "s"], "m");
    return () => {
      store.removeVariants();
    };
  }, []);
  const status = computed(() => store.getValue<"color">("Color")).get();
  const size = computed(() => store.getValue<"select">("Size")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const isIcon = computed(() => store.getValue<"boolean">("Lead Icon")).get();
  const isRequired = computed(() =>
    store.getValue<"boolean">("Required")
  ).get();
  const isDisabled = computed(() =>
    store.getValue<"boolean">("Disabled")
  ).get();

  const text = useMemo(() => {
    if (status) {
      switch (status.value) {
        case "focused":
          return "Focused label";
        case "info":
          return "Info label";
        case "error":
          return "Error label";
        case "warning":
          return "Warning label";
        case "success":
          return "Success label";
        case "filled":
          return "Filled label";
      }
    }
    return "Label";
  }, [status]);

  return (
    <Label
      size={size as TLabelSize}
      status={status?.value as TLabelStatus}
      isIcon={isIcon}
      isDisabled={isDisabled}
      isRequired={isRequired}>
      {isText ? text : undefined}
    </Label>
  );
});

export default StatusVariants;
