import React, { useEffect, useMemo, useState } from "react";
import { IconCalendar2 } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import InputDate from "../components/InputDate";
import { TInputSize, TStatusInput } from "../../InputBase/interfaces";
import { useVariantStore } from "../../../site/modules/variants";

const InputVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Class", ["Filled", "Line"], "Filled");
    store.setVariantSelect(
      "State",
      ["Default", "Error", "Warning", "Success", "Read only", "Disabled"],
      "Default"
    );
    store.setVariantSelect("Size", ["l", "m"], "l");
    store.setVariantBoolean("Required", false);
    store.setVariantBoolean("Icon", false);
    store.setVariantBoolean("Range mode", false);
    return () => {
      store.removeVariants();
    };
  }, []);

  const viewType = computed(() => store.getValue<"select">("Class")).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const isRangeMode = computed(() => store.getValue<"boolean">("Range mode"));
  const iconLeft = computed(() => store.getValue<"boolean">("Icon")).get();
  const isRequired = computed(() =>
    store.getValue<"boolean">("Required")
  ).get();
  const size = computed(() => store.getValue<"select">("Size")).get();

  const status = useMemo((): TStatusInput | undefined => {
    switch (state) {
      case "Error":
        return "error";
      case "Warning":
        return "warning";
      case "Success":
        return "success";
      default:
        return undefined;
    }
  }, [state]);

  const [value, setValue] = useState("");

  return (
    <InputDate
      placeholder="Select a date"
      isRequired={isRequired}
      iconLeft={iconLeft ? <IconCalendar2 /> : undefined}
      viewType={viewType === "Line" ? "line" : "round"}
      isReadOnly={state === "Read only"}
      size={size as TInputSize}
      isRangeMode={Boolean(isRangeMode)}
      mask={[/[0-3]/, /\d/, ".", /[01]/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
      value={value}
      status={status}
      isDisabled={state === "Disabled"}
      onChange={(_e, val: string) => setValue(val)}
    />
  );
});

export default InputVariants;
