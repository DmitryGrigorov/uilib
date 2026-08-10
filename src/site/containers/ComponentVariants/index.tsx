import React from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "styled-components";
import { useVariantStore } from "../../modules/variants";
import VariantsField from "../VariantsField";
import { IThemeSite } from "../../themes/types";
import {
  ComponentVariantsTitleStyled,
  ComponentVariantsTitleBooleanStyled,
  ComponentVariantsBoolean,
  ComponentVariantsWrapper,
  ComponentVariantsStyled
} from "./styles";

const ComponentVariants: React.FC<{ className?: string; id: string }> =
  observer(({ className, id }) => {
    const store = useVariantStore();
    const theme = useTheme() as IThemeSite;

    return (
      <ComponentVariantsStyled className={className} id={id}>
        <ComponentVariantsTitleStyled
          type="libra"
          color={theme.colorMain}
          forwardedAs="p">
          Properties
        </ComponentVariantsTitleStyled>
        <ComponentVariantsWrapper>
          {store.variantsNamesNotBoolean.map((name) => (
            <VariantsField name={name} key={name} />
          ))}
          {store.variantsBooleanIsActive.length ? (
            <ComponentVariantsBoolean>
              <ComponentVariantsTitleBooleanStyled
                type="cygnus"
                forwardedAs="p"
                color={theme.colorSecondary}>
                Boolean
              </ComponentVariantsTitleBooleanStyled>
              {store.variantsNamesBoolean.map((name) => (
                <VariantsField
                  name={name}
                  key={name}
                  className="variants-field__boolean"
                />
              ))}
            </ComponentVariantsBoolean>
          ) : null}
        </ComponentVariantsWrapper>
      </ComponentVariantsStyled>
    );
  });

export default ComponentVariants;
