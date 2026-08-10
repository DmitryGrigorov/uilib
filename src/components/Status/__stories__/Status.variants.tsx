import React, { useEffect } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { DARK_COLORS } from "../../Pallette/Colors";
import Status from "../";
import { TCompStatus } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const StatusVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Fill", false);
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Lead Icon", false);
    store.setVariantBoolean("Trail Icon", false);
    store.setVariantColor(
      "Color",
      [
        { value: "processing", color: DARK_COLORS.blue3 },
        { value: "success", color: DARK_COLORS.teal1 },
        { value: "completed", color: DARK_COLORS.neutral5 },
        { value: "warning", color: DARK_COLORS.amber1 },
        { value: "error", color: DARK_COLORS.red1 }
      ],
      { value: "processing", color: DARK_COLORS.teal3 }
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const status = computed(() => store.getValue<"color">("Color")).get();
  const isFilled = computed(() => store.getValue<"boolean">("Fill")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const isLeadIcon = computed(() =>
    store.getValue<"boolean">("Lead Icon")
  ).get();
  const isTrailIcon = computed(() =>
    store.getValue<"boolean">("Trail Icon")
  ).get();
  if (typeof status === "undefined") {
    return null;
  }
  return (
    <Status
      isFilled={isFilled}
      status={status?.value as TCompStatus}
      trailIcon={isTrailIcon ? <IconSetting1 /> : undefined}
      leadIcon={isLeadIcon ? <IconSetting1 /> : undefined}>
      {isText && "In development"}
    </Status>
  );
});

export default StatusVariants;
