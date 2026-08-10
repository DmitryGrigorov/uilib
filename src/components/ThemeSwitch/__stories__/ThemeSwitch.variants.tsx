import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { useVariantStore } from "../../../site/modules/variants";
import ThemeSwitch from "..";
import { TThemeSwitchSize } from "../types";

const SwitchVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Theme", ["light", "dark"], "light");
    store.setVariantSelect("Size", ["l", "xl"], "l");
    return () => {
      store.removeVariants();
    };
  }, []);
  const theme = computed(() => store.getValue<"select">("Theme")).get();
  const size = computed(() => store.getValue<"select">("Size")).get();

  return (
    <ThemeSwitch
      themeSelected={theme as string}
      size={size as TThemeSwitchSize | undefined}
    />
  );
});

export default SwitchVariants;
