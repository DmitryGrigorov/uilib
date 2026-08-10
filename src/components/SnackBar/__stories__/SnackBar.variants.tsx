import React, { useEffect } from "react";
import styled from "styled-components";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import SnackBar from "../components/SnackBar";
import { useVariantStore } from "../../../site/modules/variants";
import { TSnackBarStatus } from "../types";

const SnackBarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .snack-bar {
    position: relative;
    width: 100%;
  }

  .snack-bar:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const SnackBarVariants: React.FC = observer(() => {
  const store = useVariantStore();

  useEffect(() => {
    store.setVariantBoolean("Button", true);
    store.setVariantBoolean("Counter", true);
    store.setVariantBoolean("LeadIcon", false);
    store.setVariantBoolean("CloseIcon", false);
    store.setVariantSelect(
      "Status",
      ["default", "info", "success", "error", "warning"],
      "default"
    );
    return () => {
      store.removeVariants();
    };
  }, []);
  const isButton = computed(() => store.getValue<"boolean">("Button")).get();
  const isCounter = computed(() => store.getValue<"boolean">("Counter")).get();
  const isLeadIcon = computed(() =>
    store.getValue<"boolean">("LeadIcon")
  ).get();
  const isCloseIcon = computed(() =>
    store.getValue<"boolean">("CloseIcon")
  ).get();
  const status = computed(
    () => store.getValue<"select">("Status") as TSnackBarStatus & "default"
  ).get();

  return (
    <SnackBarsWrapper>
      <SnackBar
        leadIcon={isLeadIcon ? <IconSetting1 /> : undefined}
        status={status === "default" ? undefined : status}
        action={
          isButton && status === "default"
            ? {
                text: "Open"
              }
            : undefined
        }
        id="1"
        message="Report generated"
        count={isCounter ? 2 : undefined}
        isClosable={isCloseIcon}
      />
      <SnackBar
        leadIcon={isLeadIcon ? <IconSetting1 /> : undefined}
        status={status === "default" ? undefined : status}
        action={
          isButton && status === "default"
            ? {
                text: "Download"
              }
            : undefined
        }
        id="1"
        message="Data received"
        count={isCounter ? 2 : undefined}
        isClosable={isCloseIcon}
      />
      <SnackBar
        leadIcon={isLeadIcon ? <IconSetting1 /> : undefined}
        status={status === "default" ? undefined : status}
        action={
          isButton && status === "default"
            ? {
                text: "Forward"
              }
            : undefined
        }
        id="1"
        message="Email sent"
        count={isCounter ? 2 : undefined}
        isClosable={isCloseIcon}
      />
    </SnackBarsWrapper>
  );
});

export default SnackBarVariants;
