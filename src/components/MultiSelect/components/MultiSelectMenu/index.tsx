import React, { useEffect, useRef, MouseEvent } from "react";
import { MenuProps } from "react-select";
import Divider from "../../../Divider";
import { useGetMenuPosition } from "../../../SelectBase/useGetMenuPosition";
import {
  MenuStyle,
  MenuButtonsWrapper,
  MenuItemsWrapper,
  SearchBoxStyled
} from "./styles";

const SelectMenu = <TOption extends { isDisabled?: boolean }>(
  props: MenuProps<TOption, true>
): JSX.Element => {
  const { innerProps, selectProps } = props;
  const { onInnerMenuOpen, isError } = selectProps;
  const menuRef = useRef<HTMLDivElement>(null);
  const cssProperties = useGetMenuPosition<TOption, true>(
    menuRef,
    selectProps.selectRef,
    selectProps.size
  );

  useEffect(() => {
    onInnerMenuOpen &&
      menuRef.current &&
      onInnerMenuOpen(menuRef.current.getBoundingClientRect());
  });

  return (
    <MenuStyle
      data-element="select-menu"
      cssProperties={cssProperties}
      ref={menuRef}
      isError={isError}
      iconRight={selectProps.iconRight}
      {...innerProps}>
      <SearchBoxStyled
        onChange={(_, value) =>
          selectProps.onInputChange(value, {
            action: "input-change",
            prevInputValue: value
          })
        }
        value={selectProps.inputValue}
        viewType="line"
        placeholder="Search"
        onMouseDown={(e: MouseEvent<HTMLInputElement>) => {
          (e.target as HTMLInputElement).focus();
          e.stopPropagation();
          e.preventDefault();
          selectProps.onMenuInputFocus?.();
        }}
      />
      <MenuItemsWrapper>{props.children}</MenuItemsWrapper>
      {selectProps.buttonMenu && (
        <MenuButtonsWrapper className={selectProps.classNameButtonMenu}>
          <Divider className="select-menu__divider" />
          {selectProps.buttonMenu}
        </MenuButtonsWrapper>
      )}
    </MenuStyle>
  );
};

export default SelectMenu;
