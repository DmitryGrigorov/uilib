import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../themes/types";
import Switch from "../../../components/Switch";
import { List } from "../../../components/List";
import { SegmentedControl } from "../../../components/SegmentedControl";
import Tabs from "../../../components/Tabs";
import {
  VariantStoreInit,
  IVariant,
  TVariantType,
  TOptionColor,
  useVariantStore
} from "../../modules/variants";
import {
  VariantsFieldStyled,
  VariantsFieldTitleStyled,
  VariantColorStyled,
  VariantsColorsStyled
} from "./styles";

const VariantFieldBoolean: React.FC<IVariant<"boolean">> = observer(
  ({ type, name, isActive, value, title }) => {
    const handleChange = (_: React.MouseEvent, isChecked: boolean): void => {
      VariantStoreInit.setVariantValue({
        type,
        name,
        value: isChecked,
        isActive,
        title
      });
    };

    return (
      <List.ListItem
        isSelected={value}
        trailContent={<Switch isChecked={value} onChange={handleChange} />}>
        {title || name}
      </List.ListItem>
    );
  }
);

const VariantFieldColor: React.FC<IVariant<"color">> = observer(
  ({ type, name, isActive, options }) => {
    const store = useVariantStore();
    const handleChangeColor = (option: TOptionColor): void => {
      store.setVariantValue({
        type,
        name,
        isActive,
        value: option,
        options
      });
    };

    return (
      <VariantsColorsStyled>
        {(options as TOptionColor[])?.map((option) => (
          <VariantColorStyled
            key={option.value}
            color={option.color}
            onClick={() => handleChangeColor(option)}
          />
        ))}
      </VariantsColorsStyled>
    );
  }
);

const VariantFieldSelect: React.FC<IVariant<"select">> = observer(
  ({ type, name, isActive, options, value }) => {
    const store = useVariantStore();
    const handleChange = (
      _: React.MouseEvent<Element, MouseEvent>,
      option: string | number
    ): void => {
      store.setVariantValue({
        type,
        name,
        isActive,
        value: option,
        options
      });
    };

    return (
      <Tabs
        value={value}
        items={
          options?.map((option) => ({ label: option, value: option })) || []
        }
        onChange={handleChange}
      />
    );
  }
);

const VariantFieldSegmentedControl: React.FC<IVariant<"segments">> = observer(
  ({ type, name, isActive, options, value }) => {
    const store = useVariantStore();
    const handleChange = (option: string | number): void => {
      store.setVariantValue({
        type,
        name,
        isActive,
        value: option,
        options
      });
    };

    return (
      <SegmentedControl
        size="m"
        options={
          options?.map((option) => ({ value: option, label: option })) || []
        }
        onChange={handleChange}
        value={value}
      />
    );
  }
);

const map = {
  boolean: VariantFieldBoolean,
  color: VariantFieldColor,
  select: VariantFieldSelect,
  segments: VariantFieldSegmentedControl
} as Record<TVariantType, React.FC<IVariant>>;

const VariantsField: React.FC<{ name: string; className?: string }> = observer(
  ({ name, className }) => {
    const { variants } = useVariantStore();
    const theme = useTheme() as IThemeSite;

    const Component = useMemo(() => {
      if (variants) {
        return map[variants[name].type];
      }
      return null;
    }, [name]);

    if (variants && variants[name].isActive) {
      return (
        <VariantsFieldStyled className={className}>
          {variants[name].type !== "boolean" &&
            variants[name].type !== "segments" && (
              <VariantsFieldTitleStyled
                type="cygnus"
                color={theme.colorSecondary}
                forwardedAs="p">
                {variants[name].title || name}
              </VariantsFieldTitleStyled>
            )}
          {Component && <Component {...variants[name]} />}
        </VariantsFieldStyled>
      );
    }

    return null;
  }
);

export default VariantsField;
