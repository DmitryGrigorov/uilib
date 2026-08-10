import React, { useEffect } from "react";
import { IconSlash1, IconTickCircle } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Switch from "../";
import { useVariantStore } from "../../../site/modules/variants";

const SwitchVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Text", false);
    store.setVariantBoolean("Icon", false);
    store.setVariantBoolean("Indeterminate", false);
    store.setVariantSelect(
      "State",
      ["Default", "Selected", "Disabled"],
      "Default"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const isIndeterminate = computed(() =>
    store.getValue<"boolean">("Indeterminate")
  ).get();
  const isIcon = computed(() => store.getValue<"boolean">("Icon")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const state = computed(() => store.getValue<"select">("State")).get();

  return (
    <Switch
      isIndeterminate={isIndeterminate}
      isChecked={state === "Selected"}
      isDisabled={state === "Disabled"}
      hasTextOrIcon={isText || isIcon}
      iconAfter={isIcon ? <IconSlash1 /> : undefined}
      iconBefore={isIcon ? <IconTickCircle /> : undefined}
    />
  );
});

export default SwitchVariants;
