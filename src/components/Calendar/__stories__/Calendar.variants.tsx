import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Calendar from "../Calendar";
import { useVariantStore } from "../../../site/modules/variants";

const CalendarVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Button group", false);
    return () => {
      store.removeVariants();
    };
  }, []);
  const isButtonGroup = computed(() =>
    store.getValue<"boolean">("Button group")
  ).get();

  return <Calendar isRangeMode hasButtons={isButtonGroup} />;
});

export default CalendarVariants;
