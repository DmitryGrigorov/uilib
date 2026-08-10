import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { computed } from "mobx";
import Skeleton from "../";
import { useVariantStore } from "../../../site/modules/variants";

const hiddenIsNotActiveParams = ({
  isActive,
  isNotActive,
  store
}: {
  isActive: string[];
  isNotActive: string[];
  store: ReturnType<typeof useVariantStore>;
}): void => {
  isActive.forEach((param) => store.setVariantActive(param, true));
  isNotActive.forEach((param) => store.setVariantActive(param, false));
};

const SkeletonVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantSegments(
      "Type",
      ["rectangle", "circle", "text", "list", "smallText", "tab", "tag"],
      "rectangle"
    );

    store.setVariantSelect("Diameter", [30, 50, 70], 30);
    store.setVariantSelect("Height", [10, 20, 60], 10);
    store.setVariantBoolean("isHeader", false);
    store.setVariantSelect("Rows", [1, 2, 3], 1);
    store.setVariantSelect("Count", [1, 2, 3], 1);

    return () => {
      store.removeVariants();
    };
  }, []);

  const type = computed(() => store.getValue<"segments">("Type")).get();

  const diameter = computed(() => store.getValue<"select">("Diameter")).get();
  const height = computed(() => store.getValue<"select">("Height")).get();
  const isHeader = computed(() => store.getValue<"boolean">("isHeader")).get();
  const rows = computed(() => store.getValue<"select">("Rows")).get();
  const count = computed(() => store.getValue<"select">("Count")).get();

  useEffect(() => {
    switch (type) {
      case "circle":
        return hiddenIsNotActiveParams({
          isActive: ["Diameter"],
          isNotActive: ["Height", "isHeader", "Rows", "Count"],
          store
        });
      case "rectangle":
        return hiddenIsNotActiveParams({
          isActive: ["Height"],
          isNotActive: ["Diameter", "isHeader", "Rows", "Count"],
          store
        });
      case "text":
      case "smallText":
        return hiddenIsNotActiveParams({
          isActive: ["isHeader", "Rows"],
          isNotActive: ["Diameter", "Count", "Height"],
          store
        });
      case "tab":
      case "tag":
        return hiddenIsNotActiveParams({
          isActive: ["Count"],
          isNotActive: ["Diameter", "isHeader", "Rows", "Height"],
          store
        });
      case "list":
        return hiddenIsNotActiveParams({
          isActive: ["Rows"],
          isNotActive: ["Diameter", "Count", "Height", "isHeader"],
          store
        });
    }
  }, [type]);

  switch (type) {
    case "circle":
      return <Skeleton type={type} diameter={Number(diameter)} />;
    case "rectangle":
      return <Skeleton type={type} height={Number(height)} />;
    case "text":
    case "smallText":
      return <Skeleton type={type} isHeader={isHeader} rows={Number(rows)} />;
    case "tab":
    case "tag":
      return <Skeleton type={type} count={Number(count)} />;
    case "list":
      return <Skeleton type={type} rows={Number(rows)} />;
    default:
      return null;
  }
});

export default SkeletonVariants;
