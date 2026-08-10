import React, { useEffect } from "react";
import { IconInformation } from "@dmitrygrigorov/icons";
import { useTheme } from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import MapObject from "../";
import { TMapObjectType } from "../types";
import Cluster from "../../Cluster";
import { useVariantStore } from "../../../site/modules/variants";

const MapObjectVariants: React.FC = observer(() => {
  const store = useVariantStore();
  const theme = useTheme();

  useEffect(() => {
    store.setVariantSegments("component", ["Marker", "Cluster"], "Marker");
    store.setVariantColor(
      "Color",
      [
        {
          value: "additional",
          color: theme.colors.blue3
        },
        {
          value: "danger",
          color: theme.colors.red1
        },
        {
          value: "warning",
          color: theme.colors.amber1
        },
        {
          value: "positive",
          color: theme.colors.teal1
        }
      ],
      {
        value: "additional",
        color: theme.colors.blue3
      }
    );
    store.setVariantSelect(
      "State",
      ["Default", "Selected", "Disabled"],
      "Default"
    );
    return () => {
      store.removeVariants();
    };
  }, []);

  const component = computed(() =>
    store.getValue<"segments">("component")
  ).get();
  const state = computed(() => store.getValue<"select">("State")).get();
  const color = computed(() => store.getValue<"color">("Color")).get();

  useEffect(() => {
    if (component === "Cluster") {
      store.setVariantActive("Color", false);
    } else {
      store.setVariantActive("Color", true);
    }
  }, [component]);

  if (component === "Marker") {
    return (
      <MapObject
        icon={<IconInformation />}
        typeColor={color?.value as TMapObjectType}
        isDisabled={state === "Disabled"}
        isChecked={state === "Selected"}
      />
    );
  }
  return (
    <Cluster isDisabled={state === "Disabled"} isPressed={state === "Selected"}>
      P1-s
    </Cluster>
  );
});

export default MapObjectVariants;
