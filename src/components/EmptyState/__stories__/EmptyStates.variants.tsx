import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { IconDirectboxDefault } from "@dmitrygrigorov/icons";
import EmptyState from "../EmptyState";
import { useVariantStore } from "../../../site/modules/variants";

const EmptyStateVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Button", true);
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Header", true);
    store.setVariantBoolean("Icon", true);
    return () => {
      store.removeVariants();
    };
  }, []);

  const text = computed(() => store.getValue<"boolean">("Text")).get();
  const header = computed(() => store.getValue<"boolean">("Header")).get();
  const isButton = computed(() => store.getValue<"boolean">("Button")).get();
  const icon = computed(() => store.getValue<"boolean">("Icon")).get();

  return (
    <EmptyState
      isButton={isButton}
      text={text ? "Content text" : ""}
      header={header ? "Heading" : ""}
      icon={icon ? <IconDirectboxDefault /> : undefined}
    />
  );
});

export default EmptyStateVariants;
