import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { computed } from "mobx";
import Banner from "../Banner";
import { useVariantStore } from "../../../site/modules/variants";

const BannerVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Second action", true);
    return () => {
      store.removeVariants();
    };
  }, []);

  const secondarySwitch = computed(() =>
    store.getValue<"boolean">("Second action")
  ).get();

  return (
    <Banner
      status="info"
      title="Weak internet connection"
      message="Your internet signal is weak, which may cause Aurora to behave unpredictably."
      type="overlay"
      isIcon
      secondaryButton={
        secondarySwitch
          ? {
              title: "Secondary action"
            }
          : undefined
      }
      primaryTitle="Primary action"
      style={{
        position: "relative"
      }}
    />
  );
});

export default BannerVariants;
