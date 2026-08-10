import React, { useEffect, useMemo, useState } from "react";
import {
  IconSort2,
  IconSearchNormal1,
  IconSetting1
} from "@dmitrygrigorov/icons";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Roll from "../";
import { TRollSize } from "../types";
import Button from "../../Button";
import { useVariantStore } from "../../../site/modules/variants";
import Footer from "./examples/Footer";
import MainContent from "./examples/MainContent";
import RollContent from "./examples/RollContent";

const RollStyled = styled(Roll)`
  width: 382px;
  height: 100%;
`;

const RollVariants: React.FC = observer(() => {
  const store = useVariantStore();
  const [isOpenRoll, setIsOpenRoll] = useState(true);

  useEffect(() => {
    store.setVariantSegments(
      "component",
      ["Header", "Subheader", "Footer"],
      "Header"
    );
    store.setVariantSelect("Trail content items", ["1", "2", "3"], "2");
    store.setVariantSelect("Size", ["l", "m"], "l");
    store.setVariantBoolean("longTextHeader", false, true, "Long Text");
    store.setVariantBoolean("Secondary Text", false);
    store.setVariantBoolean("Label", true, false);
    store.setVariantSelect(
      "Class",
      ["accept/decline", "arrow", "search results"],
      "accept/decline"
    );
    store.setVariantBoolean("longTextFooter", false, false, "Long Text");
    return () => {
      store.removeVariants();
    };
  }, []);
  const component = computed(() =>
    store.getValue<"segments">("component")
  ).get();

  useEffect(() => {
    if (component === "Header") {
      store.setVariantActive("Trail content items", true);
      store.setVariantActive("Size", true);
      store.setVariantActive("longTextHeader", true);
      store.setVariantActive("Secondary Text", true);
      store.setVariantActive("Label", false);
      store.setVariantActive("Class", false);
      store.setVariantActive("longTextFooter", false);
    } else if (component === "Subheader") {
      store.setVariantActive("Trail content items", false);
      store.setVariantActive("Size", false);
      store.setVariantActive("longTextHeader", false);
      store.setVariantActive("Secondary Text", false);
      store.setVariantActive("Label", true);
      store.setVariantActive("Class", false);
      store.setVariantActive("longTextFooter", false);
    } else if (component === "Footer") {
      store.setVariantActive("Trail content items", false);
      store.setVariantActive("Size", false);
      store.setVariantActive("longTextHeader", false);
      store.setVariantActive("Secondary Text", false);
      store.setVariantActive("Label", false);
      store.setVariantActive("Class", true);
      store.setVariantActive("longTextFooter", true);
    }
  }, [component]);
  const isLongTextHeader = computed(() =>
    store.getValue<"boolean">("longTextHeader")
  ).get();
  const isSecondaryText = computed(() =>
    store.getValue<"boolean">("Secondary Text")
  ).get();
  const isLabel = computed(() => store.getValue<"boolean">("Label")).get();
  const trailContentItems = computed(() =>
    store.getValue<"select">("Trail content items")
  ).get();
  const size = computed(() =>
    store.getValue<"select", TRollSize>("Size")
  ).get();
  const isLongTextFooter = computed(() =>
    store.getValue<"boolean">("longTextFooter")
  ).get();

  const handleOpenRoll = (): void => {
    setIsOpenRoll((prevState) => !prevState);
  };

  const TrailContentHeader = useMemo(() => {
    if (trailContentItems === "1") {
      return (
        <Button
          viewType="secondary"
          icon={<IconSort2 />}
          size="s"
          onClick={handleOpenRoll}
        />
      );
    } else if (trailContentItems === "2") {
      return (
        <>
          <Button viewType="secondary" icon={<IconSearchNormal1 />} size="s" />
          <Button
            viewType="secondary"
            icon={<IconSort2 />}
            size="s"
            onClick={handleOpenRoll}
          />
        </>
      );
    }
    return (
      <>
        <Button viewType="secondary" icon={<IconSearchNormal1 />} size="s" />
        <Button viewType="secondary" icon={<IconSetting1 />} size="s" />
        <Button
          viewType="secondary"
          icon={<IconSort2 />}
          size="s"
          onClick={handleOpenRoll}
        />
      </>
    );
  }, [trailContentItems]);

  return (
    <RollStyled
      size={size}
      titleHeader={
        isLongTextHeader
          ? "Long text, very long text, very long text"
          : "Your messages"
      }
      titleSubHeader="Sorting options"
      subTitleHeader={isSecondaryText ? "12" : undefined}
      labelSubHeader={isLabel ? "Info label" : undefined}
      isIconStatusSubHeader
      isOpenRoll={isOpenRoll}
      trailContentHeader={TrailContentHeader}
      footer={<Footer isLong={isLongTextFooter} />}
      mainContent={<MainContent />}
      rollContent={<RollContent />}
    />
  );
});

export default RollVariants;
