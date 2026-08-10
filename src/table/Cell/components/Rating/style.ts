import styled, { css, DefaultTheme } from "styled-components";
import { IconRating } from "@dmitrygrigorov/icons";
import { LIGHT_THEME, Padding } from "@dmitrygrigorov/components";
import { IRatingProps, TRatingSize, TRatingViewType } from "./types";

interface IStarStyled {
  hover: number | null;
  rating: number;
  currentRating: number;
  viewType?: TRatingViewType;
  sizeRating?: TRatingSize;
}

interface IRatingColorSet extends Partial<IRatingProps> {
  theme: DefaultTheme;
}

const getHovered = ({ theme, viewType }: IRatingColorSet): string => {
  if (viewType === "blue") {
    return theme.colors.componentPrimaryOrangeDefault;
  }
  if (viewType === "teal") {
    return theme.colors.componentPrimaryTealDefault;
  }
  if (viewType === "red") {
    return theme.colors.componentPrimaryRedDefault;
  }
  if (viewType === "amber") {
    return theme.colors.componentPrimaryAmberDefault;
  }
  return theme.colors.componentPrimaryOrangeDefault;
};

const getUnHovered = ({ theme, viewType }: IRatingColorSet): string => {
  if (viewType === "blue") {
    return theme.colors.orange2;
  }
  if (viewType === "teal") {
    return theme.colors.teal2;
  }
  if (viewType === "red") {
    return theme.colors.red2;
  }
  if (viewType === "amber") {
    return theme.colors.amber2;
  }
  return theme.colors.orange2;
};

const paddingDefine = {
  l: css`
    ${Padding.allSide(1)}
  `,
  m: css`
    ${Padding.allSide(0.5)}
  `
};

const RatingSizeStyles = {
  l: css`
    height: 24px;
    width: 24px;
  `,
  m: css`
    height: 16px;
    width: 16px;
  `
};

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  input[type="radio"] {
    display: none;
  }
`;

export const Stars = styled.input`
  display: flex;
  flex-direction: row;
`;

export const StarIcon = styled(IconRating)<IStarStyled>`
  svg {
    ${({ sizeRating = "l" }) => RatingSizeStyles[sizeRating]}
    color: ${({ currentRating, rating, hover }) =>
      currentRating <= (hover || rating) ? getHovered : getUnHovered};
  }
  ${({ sizeRating = "l" }) => paddingDefine[sizeRating]}
  cursor: pointer;
`;

StarIcon.defaultProps = {
  theme: LIGHT_THEME
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
