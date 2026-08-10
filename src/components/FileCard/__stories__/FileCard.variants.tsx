import React, { useEffect } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import { IconTrash1 } from "@dmitrygrigorov/icons";
import FileCard from "../FileCard";
import { TFileCardStatus } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const FileCardVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSelect("Status", ["error", "success", "warning", ""], "");
    store.setVariantBoolean("Loading", false);
    store.setVariantBoolean("Editable", false);
    return () => {
      store.removeVariants();
    };
  }, []);

  const status = computed(() =>
    store.getValue<"select", TFileCardStatus>("Status")
  ).get();
  const isLoading = computed(() => store.getValue<"boolean">("Loading")).get();
  const isEditable = computed(() =>
    store.getValue<"boolean">("Editable")
  ).get();

  return (
    <FileCard
      fileName="File name"
      fileExtension="pdf"
      buttonIcon={<IconTrash1 />}
      status={status}
      isLoading={isLoading}
      isEditable={isEditable}
      statusText={status}
    />
  );
});

export default FileCardVariants;
