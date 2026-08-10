import React, { useEffect, useMemo, useState } from "react";
import { IconShop } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import MultiSelect from "../";
import { TInputSize, TStatusInput } from "../../InputBase/interfaces";
import { useVariantStore } from "../../../site/modules/variants";

const optionsData = [
  { label: "Bread", value: "Bread" },
  { label: "Milk", value: "Milk" },
  { label: "Salmon", value: "Salmon" },
  { label: "Smoked meats", value: "Smoked", isDisabled: true },
  { label: "Berlin doughnuts", value: "Berlin" },
  { label: "Parmesan", value: "Parmesan" },
  { label: "Coffee", value: "Coffee" }
];

const SelectVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Class", ["Filled", "Line"], "Filled");
    store.setVariantSelect(
      "State",
      ["Default", "Error", "Warning", "Success", "Read only", "Disabled"],
      "Default"
    );
    store.setVariantBoolean("Drawer", false);
    store.setVariantSelect("Size", ["l", "m"], "l");
    store.setVariantSelect("Type", ["Basic", "Avatar"], "Basic");
    store.setVariantBoolean("Required", false);
    store.setVariantBoolean("Icon", false);
    return () => {
      store.removeVariants();
    };
  }, []);
  const type = computed(() => store.getValue<"select">("Type")).get();
  const viewType = computed(() => store.getValue<"select">("Class")).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const iconLeft = computed(() => store.getValue<"boolean">("Icon")).get();
  const isDrawer = computed(() => store.getValue<"boolean">("Drawer")).get();
  const isRequired = computed(() =>
    store.getValue<"boolean">("Required")
  ).get();

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

  const size = computed(() => store.getValue<"select">("Size")).get();

  const [value, setValue] = useState<typeof optionsData>([]);

  return (
    <MultiSelect
      iconLeft={iconLeft ? <IconShop /> : undefined}
      isDisabled={state === "Disabled"}
      placeholder="Product list"
      options={optionsData}
      isDrawer={isDrawer}
      isReadOnly={state === "Read only"}
      isRequired={isRequired}
      viewType={viewType === "Line" ? "line" : "round"}
      status={status}
      size={size as TInputSize}
      onChange={(val) => setValue(val)}
      value={value}
      type={type === "Avatar" ? "avatar" : "basic"}
    />
  );
});

export default SelectVariants;
