import styled, { css } from "styled-components";
import CheckBox from "../CheckBox";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { P1 } from "../typography";
import Label from "../Label";
import { ICheckBoxGroupProps, TStatusCheckBoxGroup } from "./types";

export const CheckBoxStyled = styled(CheckBox)``;

interface TextProps extends Pick<ICheckBoxGroupProps, "status"> {
  theme: ITheme;
}

export const getStatusColor = (
  theme: ITheme,
  status: TStatusCheckBoxGroup
): string => {
  switch (status) {
    case "error":
      return theme.colors.textColoredRed;
    case "warning":
      return theme.colors.textColoredAmber;
    case "success":
      return theme.colors.textColoredTeal;
  }
};

export const CheckBoxGroupContainerStyled = styled.div`
  display: inline-flex;

  &.checkBoxgroup-container--column {
    flex-direction: column;
  }
`;

CheckBoxGroupContainerStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const DividerCheckBoxGroupStyled = styled.div<
  Pick<ICheckBoxGroupProps, "status">
>`
  margin-right: 12px;
  display: flex;
  align-items: center;
  height: auto;
  flex-direction: column;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    width: 2px;
    ${({ theme, status }) => {
      switch (status) {
        case "error":
          return css`
            background-color: ${theme.colors.componentPrimaryRedDefault};
          `;
        case "success":
          return css`
            background-color: ${theme.colors.componentPrimaryTealDefault};
          `;
        case "warning":
          return css`
            background-color: ${theme.colors.componentPrimaryAmberDefault};
          `;
      }
      return null;
    }};
  }

  &::after {
    border-radius: 0 0 4px 4px;
  }
  &::before {
    border-radius: 4px 4px 0 0;
  }
`;

DividerCheckBoxGroupStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const CheckBoxGroupStyled = styled.div<
  Pick<ICheckBoxGroupProps, "direction">
>`
  display: flex;

  ${({ direction }) => {
    if (direction === "column") {
      return css`
        flex-direction: column;

        ${CheckBoxStyled}:not(:last-child) {
          margin-bottom: 12px;
        }
      `;
    }
    return css`
      flex-direction: row;
      ${CheckBoxStyled}:not(:last-child) {
        margin-right: 12px;
      }
    `;
  }}
`;

CheckBoxGroupStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const TextHeaderStyle = styled(P1)<TextProps>`
  color: ${({ theme }) => theme.colors.textBasicPressed};
  margin-bottom: 12px;
  padding: 4px;
`;

TextHeaderStyle.defaultProps = {
  theme: LIGHT_THEME
};

export const TextStatusStyled = styled(Label)<TextProps>`
  display: inline-flex;
  margin-top: 12px;
  max-height: max-content;
  overflow: hidden;

  ${({ theme, status }) =>
    status &&
    css`
      color: ${getStatusColor(theme, status)};
    `}
`;

TextStatusStyled.defaultProps = {
  theme: LIGHT_THEME
};
