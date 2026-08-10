import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import ColorPicker from "../";
import { useVariantStore } from "../../../site/modules/variants";

const LAST_COLORS = [
  "#C7514C",
  "#5BB9FF",
  "#FDAC42",
  "#3772FF",
  "#D3EBDE",
  "#E0A258",
  "#D92A31",
  "#378760"
];

const CalendarVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Palette", true);
    store.setVariantBoolean("Input", true);
    return () => {
      store.removeVariants();
    };
  }, []);
  const isPalette = computed(() => store.getValue<"boolean">("Palette")).get();
  const isInput = computed(() => store.getValue<"boolean">("Input")).get();

  return (
    <ColorPicker
      lastColors={isPalette ? LAST_COLORS : undefined}
      isInput={isInput || false}
      color=""
    />
  );
});

export default CalendarVariants;
