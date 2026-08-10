import React, { useContext, useMemo, useRef, useState } from "react";
import { IconUser } from "@dmitrygrigorov/icons";
import Select, {
  OnChangeValue,
  ActionMeta,
  SelectInstance
} from "react-select";
import { ThemeContext } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import getValueObject from "../utils/getValueObject";
import {
  TValueObjectType,
  TKeyObjectType
} from "../utils/types/typesDeepObject";
import { Avatar } from "../Avatar";

import {
  SelectContainer,
  SelectClearIndicator,
  SelectSingleValue,
  SelectIndicators,
  SelectControl,
  SelectPlaceholder
} from "../SelectBase";
import SelectDropdownIndicator from "./components/SelectDropdownIndicator";
import SelectMenu from "./components/SelectMenu";
import SelectOption from "./components/SelectOption";
import SelectValueContainer from "./components/SelectValueContainer";
import { TSelectProps, TInstanceOnChange, TValueOnChange } from "./types";

const SelectComponent = <
  TOption,
  TFieldNameValue extends TKeyObjectType<TOption>,
  TFieldNameLabel extends TKeyObjectType<TOption>
>(
  props: TSelectProps<TOption, TFieldNameValue, TFieldNameLabel>
): JSX.Element => {
  const {
    placeholder = "",
    isDisabled,
    options,
    menuIsOpen,
    onChange,
    defaultValue,
    isClearable = true,
    name,
    value,
    onInputChange,
    isSearchable,
    className,
    errorMessage,
    isError = false,
    width,
    isRequired,
    size = "l",
    onInnerMenuOpen,
    status,
    statusText,
    iconLeft,
    fieldNames = { value: "value", label: "label" },
    onChangeReturnType = "instance",
    onBlur,
    onFocus,
    type = "basic",
    isDrawer,
    viewType,
    isReadOnly,
    ...otherProps
  } = props;

  const theme = useContext(ThemeContext) || LIGHT_THEME;
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
  const selectRef = useRef<SelectInstance<TOption, false>>(null);

  const localValue = useMemo<TOption | undefined>(() => {
    if (options && typeof value !== "object") {
      return options.find(
        (option) =>
          getValueObject(
            option,
            fieldNames.value as TKeyObjectType<TOption>
          ) === value
      );
    }
    return value as TOption;
  }, [options, fieldNames, value, isReadOnly]);

  const iconLeftSelect = useMemo(() => {
    if (type === "avatar") {
      return (
        <Avatar
          size="s"
          as="div"
          icon={<IconUser />}
          image={avatarUrl}
          isDisabled={isDisabled}
        />
      );
    }
    return iconLeft;
  }, [type, iconLeft, avatarUrl, isDisabled]);

  // react-select limits the number of props it accepts, so left props work around it.
  const leftProps = {
    errorMessage,
    isError,
    width,
    isRequired,
    size,
    onInnerMenuOpen,
    status,
    statusText,
    onFocus,
    onBlur,
    iconLeft: iconLeftSelect,
    type,
    isDrawer,
    viewType,
    isReadOnly,
    ...otherProps,
    selectRef
  };

  const handleChange = (
    newValue: OnChangeValue<TOption, false>,
    actionMeta: ActionMeta<TOption>
  ): void => {
    if (onChangeReturnType === "instance") {
      (onChange as TInstanceOnChange<TOption>)?.(newValue, actionMeta);
    } else if (onChangeReturnType === "value") {
      (onChange as TValueOnChange<TOption, TFieldNameValue>)?.(
        getValueObject(
          newValue,
          fieldNames.value as TKeyObjectType<TOption>,
          null
        ) as TValueObjectType<TOption, TFieldNameValue>,
        actionMeta
      );
    }
    if (type === "avatar") {
      setAvatarUrl(
        (newValue as OnChangeValue<TOption, false> & { url?: string })?.url
      );
    }
  };

  // react-select has internal TypeScript issues that prevent full typing here.
  return (
    <Select<TOption, false>
      ref={selectRef}
      components={{
        SelectContainer,
        Menu: SelectMenu as any,
        IndicatorsContainer: SelectIndicators,
        DropdownIndicator: SelectDropdownIndicator,
        ClearIndicator: SelectClearIndicator,
        Control: SelectControl,
        Placeholder: SelectPlaceholder,
        ValueContainer: SelectValueContainer,
        SingleValue: SelectSingleValue,
        Option: SelectOption
      }}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: theme.zindex.tooltip })
      }}
      name={name}
      maxMenuHeight={328}
      value={localValue}
      defaultValue={defaultValue}
      getOptionValue={(option) =>
        getValueObject(
          option,
          fieldNames.value as TKeyObjectType<TOption>
        ) as string
      }
      getOptionLabel={(option) =>
        getValueObject(
          option,
          fieldNames.label as TKeyObjectType<TOption>
        ) as string
      }
      menuIsOpen={menuIsOpen}
      menuPlacement="auto"
      isMulti={false}
      isSearchable={isSearchable}
      options={options}
      isDisabled={isDisabled || isReadOnly}
      placeholder={placeholder}
      onChange={handleChange}
      onInputChange={onInputChange}
      isClearable={isReadOnly ? false : isClearable}
      className={className}
      classNamePrefix="react-select"
      menuPortalTarget={document.body}
      captureMenuScroll={false}
      {...(leftProps as any)}
    />
  );
};

export default SelectComponent;
