import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { useVariantStore } from "../../../site/modules/variants";
import SearchBox from "../";
import { TSearchBoxSize } from "../types";

const SearchBoxVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Class", ["Filled", "Line"], "Round");
    store.setVariantSelect("State", ["Default", "Error"], "Default");
    store.setVariantBoolean("Disabled", false);
    store.setVariantBoolean("Global search", false);
    store.setVariantSelect("Size", ["l", "m"], "l");
    return () => {
      store.removeVariants();
    };
  }, []);

  const viewType = computed(() => store.getValue<"select">("Class")).get();
  const status = computed(() => store.getValue<"select">("State")).get();
  const type = computed(() => store.getValue<"boolean">("Global search")).get();
  const size = computed(() =>
    store.getValue<"select", TSearchBoxSize>("Size")
  ).get();
  const isDisabled = computed(() =>
    store.getValue<"boolean">("Disabled")
  ).get();

  const [search, setSearch] = useState("");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      isDisabled={isDisabled}
      viewType={viewType === "Line" ? "line" : "round"}
      type={type === true ? "global" : "basic"}
      size={size}
      status={status === "Error" ? "error" : undefined}
      onChange={handleChange}
      value={search}
    />
  );
});

export default SearchBoxVariants;
