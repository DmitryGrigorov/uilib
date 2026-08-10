import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../../../Pallette/themes";
import { TInputSize, TViewTypeInput } from "../../../InputBase/interfaces";

interface IValueContainerProps {
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isMulti: boolean;
  isFocused: boolean;
  isHasValue: boolean;
  size?: TInputSize;
  viewType?: TViewTypeInput;
}
export const ValueContainerStyle = styled.div<IValueContainerProps>`
  -webkit-overflow-scrolling: touch;
  align-items: ${({ size }) => (size === "l" ? "center" : "end")};
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  row-gap: 4px;
  position: relative;

  margin-right: 16px;

  div:not(:last-child) {
    margin-right: 4px;
  }

  input {
    ${({ isFocused, isHasValue }) =>
      isFocused || isHasValue
        ? css`
            min-width: 2px;
          `
        : css`
            min-width: 0 !important;
            width: 0 !important;
          `}
  }

  .text-readonly {
    color: ${({ theme }) => theme.colors.textBasicDisabled};
  }

  margin-top: ${({
    isFocused,
    isHasValue,
    isMulti,
    isReadOnly,
    size,
    viewType
  }) => {
    if ((isFocused || isHasValue || isReadOnly) && isMulti) {
      if (size === "m" && viewType === "line") {
        return "13px";
      } else if (size === "l" && viewType === "line") {
        return "7px";
      } else if (size === "m" && viewType === "round") {
        return "14px";
      } else {
        return "8px";
      }
    }
    return "0";
  }};
`;

ValueContainerStyle.defaultProps = {
  theme: LIGHT_THEME
};
