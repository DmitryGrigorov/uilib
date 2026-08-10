import React, { useEffect, useMemo, useState } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import InputColor from "../";
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
    return () => {
      store.removeVariants();
    };
  }, []);

  const viewType = computed(() => store.getValue<"select">("Class")).get();
  const state = computed(() => store.getValue<"select">("State")).get();
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
    <InputColor
      width="100%"
      placeholder="Color code"
      isRequired={isRequired}
      viewType={viewType === "Line" ? "line" : "round"}
      isReadOnly={state === "Read only"}
      size={size as TInputSize}
      color={value}
      status={status}
      isDisabled={state === "Disabled"}
      onChange={(val: string) => setValue(val)}
    />
  );
});

export default InputVariants;
