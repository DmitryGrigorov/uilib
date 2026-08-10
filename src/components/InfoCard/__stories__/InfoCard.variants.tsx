import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { DARK_COLORS } from "../../Pallette/Colors";
import InfoCard from "../";
import { IInfoCardProps, TInfoCardSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const InfoCardVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Collapsed", true);
    store.setVariantSelect("Size", ["l", "m"], "l");
    store.setVariantColor(
      "Color",
      [
        { value: "info", color: DARK_COLORS.blue3 },
        { value: "warning", color: DARK_COLORS.amber1 },
        { value: "error", color: DARK_COLORS.red1 },
        { value: "success", color: DARK_COLORS.teal1 }
      ],
      { value: "info", color: DARK_COLORS.blue3 }
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const status = computed(() => store.getValue<"color">("Color")).get();
  const size = computed(() => store.getValue<"select">("Size")).get();
  const isClosableIcon = computed(() =>
    store.getValue<"boolean">("Collapsed")
  ).get();

  const label = useMemo(() => {
    if (status) {
      switch (status.value) {
        case "info":
        default:
          return "Info label";
        case "error":
          return "Error label";
        case "warning":
          return "Warning label";
        case "success":
          return "Success label";
      }
    }
    return "Label";
  }, [status]);

  return (
    <InfoCard
      status={(status?.value as IInfoCardProps["status"]) || "info"}
      label={label}
      isClosableIcon={isClosableIcon}
      message="Detailed message text"
      size={size as TInfoCardSize}
    />
  );
});

export default InfoCardVariants;
