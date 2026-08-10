import React, { useContext, useMemo, useState, useRef } from "react";
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
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import {
  SelectClearIndicator,
  SelectIndicators,
  SelectControl,
  SelectPlaceholder
} from "../SelectBase";
import { Avatar } from "../Avatar";
import MultiSelectDropdownIndicator from "./components/MultiSelectDropdownIndicator";
import MultiSelectMultiValue from "./components/MultiSelectMultiValue";
import MultiSelectMenu from "./components/MultiSelectMenu";
import MultiSelectOption from "./components/MultiSelectOption";
import MultiSelectContainer from "./components/MultiSelectContainer";
import MultiSelectValueContainer from "./components/MultiSelectValueContainer";
import { TMultiSelectProps, TValueOnChange, TInstanceOnChange } from "./types";

const SelectComponent = <
  TOption,
  TFieldNameValue extends TKeyObjectType<TOption>,
  TFieldNameLabel extends TKeyObjectType<TOption>
>(
  props: TMultiSelectProps<TOption, TFieldNameValue, TFieldNameLabel>
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
    className,
    errorMessage,
    isError = false,
    width,
    isRequired,
    size = "l",
    onInnerMenuOpen,
    status,
    statusText,
    fieldNames = { value: "value", label: "label" },
    onChangeReturnType = "instance",
    onFocus,
    iconLeft,
    isAutoFocus,
    onKeyDown,
    id,
    type = "basic",
    isDrawer,
    viewType,
    isReadOnly,
    ...otherProps
  } = props;

  const theme = useContext(ThemeContext) || LIGHT_THEME;
  const [isMenuOpen, setIsMenuOpen] = useState(menuIsOpen);
  const selectRef = useRef<SelectInstance<TOption, true>>(null);

  const localValue = useMemo<TOption[] | undefined>(() => {
    if (
      options &&
      typeof value !== "undefined" &&
      typeof value?.[0] !== "object"
    ) {
      return options.filter((option) =>
        (value as any).includes(
          getValueObject(option, fieldNames.value as TKeyObjectType<TOption>)
        )
      );
    }
    return value as TOption[];
  }, [options, fieldNames, value]);

  const iconLeftSelect = useMemo(() => {
    if (type === "avatar" && !localValue) {
      return (
        <Avatar size="s" as="div" icon={<IconUser />} isDisabled={isDisabled} />
      );
    }
    return iconLeft;
  }, [type, iconLeft, isDisabled, localValue]);

  const handleFocus = (event: React.FocusEvent): void => {
    onFocus?.(event);
    setIsMenuOpen(true);
  };

  const handleBlur = (): void => {
    setIsMenuOpen(false);
    selectRef.current?.blur();
  };

  // react-select limits the number of props it reads, so the remaining props are passed separately.
  const leftProps = {
    errorMessage,
    isError,
    width,
    isRequired,
    size,
    onInnerMenuOpen,
    status,
    statusText,
    iconLeft: iconLeftSelect,
    onBlur: handleBlur,
    onFocus: handleFocus,
    type,
    isDrawer,
    viewType,
    isReadOnly,
    ...otherProps,
    selectRef
  };

  const handleChange = (
    newValue: OnChangeValue<TOption, true>,
    actionMeta: ActionMeta<TOption>
  ): void => {
    if (actionMeta.action === "clear") {
      setIsMenuOpen(false);
      selectRef.current?.blur();
    }
    if (onChangeReturnType === "instance") {
      (onChange as TInstanceOnChange<TOption>)?.([...newValue], actionMeta);
    } else if (newValue) {
      (onChange as TValueOnChange<TOption, TFieldNameValue>)?.(
        newValue.map(
          (option) =>
            getValueObject(
              option,
              fieldNames.value as TKeyObjectType<TOption>
            ) as TValueObjectType<TOption, TFieldNameValue>
        ),
        actionMeta
      );
    }
  };

  return (
    <Select<TOption, true>
      ref={selectRef}
      components={{
        SelectContainer: MultiSelectContainer,
        Menu: MultiSelectMenu as any,
        IndicatorsContainer: SelectIndicators,
        DropdownIndicator: MultiSelectDropdownIndicator,
        ClearIndicator: SelectClearIndicator,
        Control: SelectControl,
        Placeholder: SelectPlaceholder,
        MultiValue: MultiSelectMultiValue,
        ValueContainer: MultiSelectValueContainer,
        Option: MultiSelectOption
      }}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: theme.zindex.tooltip })
      }}
      name={name}
      menuPlacement="auto"
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
      menuIsOpen={isMenuOpen}
      isMulti={true}
      isSearchable={false}
      options={options}
      isDisabled={isDisabled || isReadOnly}
      onChange={handleChange}
      onInputChange={onInputChange}
      isClearable={isClearable}
      className={className}
      classNamePrefix="react-select"
      placeholder={placeholder}
      autoFocus={isAutoFocus}
      onKeyDown={onKeyDown}
      id={id}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      onMenuInputFocus={() => setIsMenuOpen(true)}
      onMenuOpen={() => setIsMenuOpen(true)}
      onMenuClose={() => setIsMenuOpen(false)}
      captureMenuScroll={false}
      menuPortalTarget={document.body}
      {...(leftProps as any)}
    />
  );
};

export default SelectComponent;
