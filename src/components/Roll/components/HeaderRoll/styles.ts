import styled, { css } from "styled-components";
import { BorderRadius, Padding } from "../../../Pallette/style-utils";
import { Shape } from "../../../Pallette/Shape";
import { TRollSize } from "../../types";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";
import { IHeaderRollProps } from "./types";

type THeaderRoll = Required<Pick<IHeaderRollProps, "size" | "textOverflow">> & {
  theme: ITheme;
};

export const HeaderRollStyled = styled.div<THeaderRoll>`
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  ${({ size }: { size: TRollSize }) => css`
    ${size === "l" ? Padding.allSide(4, 5) : Padding.allSide(3, 5)};
  `};

  ${({ theme }) => css`
    ${BorderRadius.roundBorder(Shape.borderRadiusMedium)};
    background: ${theme.colors.neutral1};
    .title {
      color: ${theme.colors.textBasicPressed};
    }

    .sub-title {
      color: ${theme.colors.textBasicDefault};
    }
  `};

  .text {
    text-overflow: ${({ textOverflow }) => textOverflow};
    overflow: hidden;
    white-space: nowrap;
    min-width: 32px;
  }

  button {
    margin: 0;
  }
`;

HeaderRollStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const LeadContentStyled = styled.div`
  display: flex;
  gap: 8px;
  max-width: 100%;
`;

export const TrailContent = styled.div`
  display: flex;
  gap: 8px;
`;
