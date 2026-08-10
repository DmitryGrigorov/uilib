import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import PopoverContent from "../components/PopoverContent";
import { useVariantStore } from "../../../site/modules/variants";
import { TDirection } from "../../helpers/getPosition/types";
const PopoverContentStyled = styled(PopoverContent)`
  top: auto;
  left: auto;
  opacity: 1;
`;

const PopoverVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Trail", true);
    store.setVariantBoolean("Shadow", true);
    store.setVariantSelect(
      "Appears",
      ["Top-right", "Top-left", "Center", "Bottom-right", "Bottom-left"],
      "Top-right"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const appears = computed(() => store.getValue<"select">("Appears")).get();

  const direction = useMemo((): TDirection => {
    switch (appears) {
      case "Top-left":
        return "topLeft";
      case "Center":
        return "left";
      case "Bottom-right":
        return "bottomRight";
      case "Bottom-left":
        return "bottomLeft";
      case "Top-right":
      default:
        return "topRight";
    }
  }, [appears]);

  return (
    <PopoverContentStyled
      direction={direction}
      title="H-s"
      description="P2-s"
      primaryButtonContent="P1-s"
      secondaryButtonContent="P1-s"
      anchorSizeAndPosition={{
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0
      }}
    />
  );
});

export default PopoverVariants;
