import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import UploadDragFile from "../";
import { useVariantStore } from "../../../site/modules/variants";

const UploadDragFileVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Disabled", true);
    return () => {
      store.removeVariants();
    };
  }, []);
  const isDisabled = computed(() =>
    store.getValue<"boolean">("Disabled")
  ).get();

  return <UploadDragFile isDisabled={isDisabled} />;
});

export default UploadDragFileVariants;
