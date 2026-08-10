import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import RadioButton from "../";
import { useVariantStore } from "../../../site/modules/variants";

const RadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const RadioButtonVariants: React.FC = observer(() => {
  const store = useVariantStore();
  useEffect(() => {
    store.setVariantSelect(
      "State",
      ["default", "selected", "disabled", "disabled selected"],
      "default"
    );
    store.setVariantBoolean("Text", true);
    return () => {
      store.removeVariants();
    };
  }, []);
  const state = computed(() => store.getValue<"select">("State")).get();
  const isText = computed(() => store.getValue<"boolean">("Text")).get();

  const isDisabled = useMemo(
    () => state === "disabled" || state === "disabled selected",
    [state]
  );

  const isChecked = useMemo(
    () => state === "selected" || state === "disabled selected",
    [state]
  );

  return (
    <RadioButtonsWrapper>
      <RadioButton
        label={isText ? "First option" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      <RadioButton
        label={isText ? "Second option" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      <RadioButton
        label={isText ? "Third option" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
    </RadioButtonsWrapper>
  );
});

export default RadioButtonVariants;
