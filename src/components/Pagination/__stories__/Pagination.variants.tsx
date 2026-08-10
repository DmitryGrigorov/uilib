import React, { useEffect, useMemo } from "react";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Pagination from "../";
import { useVariantStore } from "../../../site/modules/variants";

const PaginationVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantBoolean("Minimized", false);
    store.setVariantBoolean("Switchers", true);
    store.setVariantBoolean("Configuration", true);
    store.setVariantBoolean("goToPage in configuration", true);
    store.setVariantSelect("State", ["Default", "Disabled"], "Default");
    return () => {
      store.removeVariants();
    };
  }, []);
  const isShowSwitchers = computed(() =>
    store.getValue<"boolean">("Switchers")
  ).get();
  const isMinimized = computed(() =>
    store.getValue<"boolean">("Minimized")
  ).get();
  const isShowConf = computed(() =>
    store.getValue<"boolean">("Configuration")
  ).get();
  const isShowGoToPage = computed(() =>
    store.getValue<"boolean">("goToPage in configuration")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const isDisabled = useMemo(() => state === "Disabled", [state]);
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={100}
      isDisabled={isDisabled}
      isShowSwitchers={isShowSwitchers}
      isMinimized={isMinimized}
      isShowConfig={isShowConf}
      isShowGoToPage={isShowGoToPage}
    />
  );
});

export default PaginationVariants;
