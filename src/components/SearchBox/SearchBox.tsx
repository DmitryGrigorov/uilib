import React, {
  forwardRef,
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  useState,
  useEffect,
  FocusEvent
} from "react";
import {
  IconSearchNormal1,
  IconMoreCircle,
  IconCloseCircle
} from "@dmitrygrigorov/icons";
import useDebounce from "../hooks/useDebounce";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  SearchBoxStyled,
  IconWrapper,
  InputStyled,
  InputWrapper,
  LabelStyled,
  ButtonStyled,
  IconWrapperMarginRight,
  IconWidth
} from "./styles";
import { ISearchBoxProps } from "./types";

const SearchBox = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<ISearchBoxProps>
>(
  (
    {
      placeholder = "Start searching...",
      id,
      name,
      onChange = () => {
        /* */
      },
      status,
      value = "",
      isDisabled,
      inputRef,
      wait,
      onFocus,
      onBlur,
      tabIndex,
      width,
      maxLength,
      style,
      onKeyDown,
      type = "basic",
      isStatusIcon,
      statusText,
      size = "l",
      className,
      viewType = "round",
      testId = "searchBox",
      ...props
    },
    ref
  ) => {
    const [searchText, setSearchText] = useState(value);
    const [isFocused, setFocused] = useState<boolean>(false);

    const onChangeDebounce = useDebounce(
      onChange,
      typeof wait === "number" ? wait : 500
    );

    useEffect(() => {
      if (value !== searchText) {
        setSearchText(value);
      }
    }, [value]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const search = event.target.value;
      setSearchText(search);
      !isDisabled && onChangeDebounce(event, search, { id, name });
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
      const { value: _value } = event.target;
      onBlur && onBlur(event, _value);
      setFocused(false);
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
      onFocus && onFocus(event);
      setFocused(true);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setFocused(false);
      onChange?.(event, "", { id, name });
    };

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      const search = event.currentTarget.value;
      onKeyDown?.(event, search, { id, name });
    };

    return (
      <SearchBoxStyled
        ref={ref}
        data-testid={testId}
        width={width}
        style={style}
        size={size}
        isFocused={isFocused}
        className={className}
        {...props}>
        <InputWrapper
          isDisabled={isDisabled}
          size={size}
          onFocus={handleFocus}
          status={status}
          isFocused={isFocused}
          viewType={viewType}
          isHasValue={Boolean(searchText)}>
          {!isFocused && (
            <IconWrapper>
              <IconSearchNormal1
                width={IconWidth}
                height={16}
                className="search-box__icon"
              />
            </IconWrapper>
          )}
          <InputStyled
            placeholder={placeholder}
            value={searchText}
            data-testid={`input-${testId}`}
            onChange={handleChange}
            disabled={isDisabled}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={maxLength}
            tabIndex={tabIndex}
            onKeyDown={handleKeyDown}
          />
          {isFocused && (
            <div style={{ width: `${IconWrapperMarginRight + IconWidth}px` }}>
              &nbsp;
            </div>
          )}
          {value && !isDisabled && (
            <ButtonStyled onClick={handleClear}>
              <IconCloseCircle width={16} height={16} />
            </ButtonStyled>
          )}
          {type === "global" && (
            <ButtonStyled className="search-box__icon">
              <IconMoreCircle width={16} height={16} />
            </ButtonStyled>
          )}
        </InputWrapper>
        {statusText && status && !isDisabled && (
          <LabelStyled
            status={status}
            isIcon={isStatusIcon}
            data-testid={`${testId}_status-text`}>
            {statusText}
          </LabelStyled>
        )}
      </SearchBoxStyled>
    );
  }
);

SearchBox.displayName = "SearchBox";

export default SearchBox;
