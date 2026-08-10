import React, { useEffect, useMemo } from "react";
import { IconMap1 } from "@dmitrygrigorov/icons";
import { useTheme } from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import Button from "../";
import { TButtonSize } from "../types";
import { useVariantStore } from "../../../site/modules/variants";

const ButtonVariants: React.FC = observer(() => {
  const store = useVariantStore();
  const theme = useTheme();

  useEffect(() => {
    store.setVariantColor(
      "Color",
      [
        {
          value: "",
          color: theme.colors.blue1
        },
        {
          value: "red",
          color: theme.colors.red1
        },
        {
          value: "yellow",
          color: theme.colors.amber1
        },
        {
          value: "green",
          color: theme.colors.teal1
        }
      ],
      {
        value: "",
        color: theme.colors.blue1
      }
    );
    store.setVariantSelect(
      "Class",
      ["Primary", "Secondary", "Link", "Ghost"],
      "Primary"
    );
    store.setVariantSelect("State", ["Default", "Disabled"], "Default");
    store.setVariantSelect("Size", ["l", "m", "s", "xs"], "l");
    store.setVariantBoolean("Text", true);
    store.setVariantBoolean("Icon", true);
    return () => {
      store.removeVariants();
    };
  }, []);

  const color = computed(() => store.getValue<"color">("Color")).get();
  const isIcon = computed(() => store.getValue<"boolean">("Icon")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();
  const size = computed(() =>
    store.getValue<"select", TButtonSize>("Size")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const classComponent = computed(() =>
    store.getValue<"select">("Class")
  ).get();

  const viewType = useMemo(() => {
    switch (classComponent) {
      case "Secondary":
        return "secondary";
      case "Link":
        return "link";
      case "Ghost":
        return "ghost";
      case "Primary":
      default:
        return "primary";
    }
  }, [classComponent]);

  const ButtonAny = Button as React.FC<Record<string, unknown>>;

  return (
    <ButtonAny
      color={color?.value}
      viewType={viewType}
      icon={isIcon ? <IconMap1 /> : undefined}
      size={size}
      isDisabled={state === "Disabled"}>
      {isText ? "Open the geoportal" : undefined}
    </ButtonAny>
  );
});

export default ButtonVariants;
