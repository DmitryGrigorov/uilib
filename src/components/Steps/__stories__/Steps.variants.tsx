import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { useVariantStore } from "../../../site/modules/variants";
import Steps from "../Steps";
import {
  IStepsItem,
  TStepsDirection,
  TStepsSize,
  TStepsStatus
} from "../types";

const StepsVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Size", ["l", "m", "s"], "l");
    store.setVariantSelect(
      "Direction",
      ["horizontal", "vertical"],
      "horizontal"
    );
    store.setVariantSelect(
      "Status",
      ["waiting", "error", "warning", "completed", "default"],
      "default"
    );
    store.setVariantBoolean("Disabled", false);
    store.setVariantBoolean("Title", true);
    store.setVariantBoolean("Description", true);
  }, []);

  const size = computed(() => store.getValue<"select">("Size")).get();
  const status = computed(() => store.getValue<"select">("Status")).get();
  const direction = computed(() => store.getValue<"select">("Direction")).get();
  const isDisabled = computed(() =>
    store.getValue<"boolean">("Disabled")
  ).get();
  const isTitle = computed(() => store.getValue<"boolean">("Title")).get();
  const isDescription = computed(() =>
    store.getValue<"boolean">("Description")
  ).get();

  const item: IStepsItem[] = useMemo(
    () => [
      {
        key: 1,
        title: isTitle ? "Step 1" : undefined,
        description: isDescription ? "P2-l-1" : undefined,
        status: status as TStepsStatus
      },
      {
        key: 2,
        title: isTitle ? "Step 2" : undefined,
        description: isDescription ? "P2-l-2" : undefined,
        status: status as TStepsStatus
      },
      {
        key: 3,
        title: isTitle ? "Step 3" : undefined,
        description: isDescription ? "P2-l-3" : undefined,
        status: status as TStepsStatus
      },
      {
        key: 4,
        title: isTitle ? "Step 4" : undefined,
        description: isDescription ? "P2-l-4" : undefined,
        isDisabled,
        status: status as TStepsStatus
      },
      {
        key: 5,
        title: isTitle ? "Step 5" : undefined,
        description: isDescription ? "P2-l-5" : undefined,
        isDisabled,
        status: status as TStepsStatus
      }
    ],
    [isTitle, isDescription, isDisabled, status]
  );

  return (
    <Steps
      size={size as TStepsSize}
      steps={item}
      direction={direction as TStepsDirection}
      current={3}
    />
  );
});

export default StepsVariants;
