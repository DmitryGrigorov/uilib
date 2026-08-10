import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import CheckBox from "../";
import { useVariantStore } from "../../../site/modules/variants";

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const CheckBoxVariants: React.FC = observer(() => {
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
    <CheckBoxWrapper>
      <CheckBox
        label={isText ? "Select me" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      <CheckBox
        label={isText ? "Select me" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
      <CheckBox
        label={isText ? "Select me" : undefined}
        isDisabled={isDisabled}
        isChecked={isChecked}
      />
    </CheckBoxWrapper>
  );
});

export default CheckBoxVariants;
