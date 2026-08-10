import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import ProgressBar from "../";
import { TProgressBarSize, TProgressBarVariant } from "../types";
import { useVariantStore } from "../../../site/modules/variants";
import { DARK_COLORS } from "../../Pallette/Colors";

const ProgressBarVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Size", ["s", "m"], "s");
    store.setVariantBoolean("Label", true);
    store.setVariantBoolean("Text", true);
    store.setVariantColor("Color", [
      { value: "info", color: DARK_COLORS.blue3 },
      { value: "success", color: DARK_COLORS.teal1 },
      { value: "warning", color: DARK_COLORS.amber1 },
      { value: "error", color: DARK_COLORS.red1 }
    ]);
    return () => {
      store.removeVariants();
    };
  }, []);
  const isLabel = computed(() => store.getValue<"boolean">("Label")).get();
  const variant = computed(() => store.getValue<"color">("Color")).get();
  const size = computed(() => store.getValue<"select">("Size")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();

  const label = useMemo(() => {
    if (isLabel) {
      switch (variant?.value) {
        case "info":
          return "Focused label";
        case "success":
          return "Success label";
        case "warning":
          return "Warning label";
        case "error":
          return "Error label";
        default:
          return "Focused label";
      }
    }
    return undefined;
  }, [isLabel, variant]);

  return (
    <ProgressBar
      variant={(variant?.value as TProgressBarVariant) || "info"}
      progress={40}
      label={label}
      size={size as TProgressBarSize}
      isText={isText}
    />
  );
});

export default ProgressBarVariants;
