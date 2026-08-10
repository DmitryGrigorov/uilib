import styled from "styled-components";
import { BorderRadius } from "../../../Pallette/style-utils";
import { Shape } from "../../../Pallette/Shape";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";
import { ISubHeaderRollProps } from "./types";

type TSubHeader = Required<Pick<ISubHeaderRollProps, "textOverflow">> & {
  theme: ITheme;
};

export const SubHeaderRollStyled = styled.div<TSubHeader>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background: ${({ theme }) => theme.colors.neutral1};
  ${BorderRadius.roundBorder(Shape.borderRadiusMedium)};

  .title {
    text-overflow: ${({ textOverflow }) => textOverflow};
    overflow: hidden;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  .subtitle {
    padding-left: 0;
  }
`;

SubHeaderRollStyled.defaultProps = {
  theme: LIGHT_THEME
};
