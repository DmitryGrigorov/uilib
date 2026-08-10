import React, { useEffect, useState } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { useVariantStore } from "../../../site/modules/variants";
import Slider from "../";
import { TSliderValue } from "../types";

const SliderVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Type", ["Horizontal", "Vertical"], "Horizontal");
    store.setVariantSelect("State", ["Default", "Disabled"], "Default");
    store.setVariantSelect("Size", ["m", "s"], "m");
    store.setVariantBoolean("Range mode", false);
    return () => {
      store.removeVariants();
    };
  }, []);

  const size = computed(() => store.getValue<"select">("Size")).get();
  const direction = computed(() => store.getValue<"select">("Type")).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const isRange = computed(() => store.getValue<"boolean">("Range mode")).get();

  const [value, setValue] = useState<TSliderValue<typeof isRange>>(
    isRange ? [20, 70] : 20
  );

  useEffect(() => {
    setValue(isRange ? [20, 70] : 20);
  }, [isRange]);

  return (
    <Slider
      isRange={isRange}
      leadText={`Value ${JSON.stringify(value)}`}
      value={value}
      direction={direction === "Vertical" ? "vertical" : "horizontal"}
      isDisabled={state === "Disabled"}
      onChange={(_, val) => setValue(val)}
      size={size}
    />
  );
});

export default SliderVariants;
