import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import P1 from "../typography/P1";
import { Shape } from "../Pallette/Shape";
import { ILabelProps } from "./types";
import { getComputedLabelColor } from "./helpers";

interface ILabel extends ILabelProps {
  theme: ITheme;
}

type TLabelComponentProps = Pick<
  ILabel,
  "status" | "as" | "isDisabled" | "size" | "theme" | "isIcon" | "isRequired"
>;

export const LabelStyled = styled(P1)<TLabelComponentProps>`
  color: ${({ status, theme, isDisabled }) =>
    getComputedLabelColor(status, theme, isDisabled)};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: ${Shape.borderRadiusSmall};
  padding: ${({ isIcon }) => (isIcon ? "0 4px 0 2px" : "0 4px")};
  height: 16px;
  ${({ size }) => {
    if (size === "s") {
      return css`
        font-size: 12px;
      `;
    } else {
      return css`
        font-size: 14px;
      `;
    }
  }}

  & > .required-container {
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.colors.textBasicDisabled
        : theme.colors.textColoredRed};
  }

  .label-icon {
    color: unset;
  }
  span {
    color: unset;
  }
`;

LabelStyled.defaultProps = {
  theme: LIGHT_THEME
};
