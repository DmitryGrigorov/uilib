import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Preloader from "../";
import { useVariantStore } from "../../../site/modules/variants";

const PreloaderVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Only progress", true);
    store.setVariantBoolean("Text + Progress", false);
    store.setVariantSelect("Class", ["Star", "Circular"], "Star");
    return () => {
      store.removeVariants();
    };
  }, []);
  const isProgress = computed(() =>
    store.getValue<"boolean">("Only Progress")
  ).get();
  const isText = computed(() =>
    store.getValue<"boolean">("Text + Progress")
  ).get();
  const classComponent = computed(() =>
    store.getValue<"select">("Class")
  ).get();

  const typePreloader = useMemo(() => {
    if (classComponent === "Star") {
      return "star";
    }
    return "circular";
  }, [classComponent]);

  return (
    <Preloader
      type={typePreloader}
      progress={isProgress || isText ? 50 : undefined}
      isShowLabel={isText}
    />
  );
});

export default PreloaderVariants;
