import styled, { css, RuleSet } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import {
  defineResponsibleHeight,
  defineResponsibleWidth
} from "../utils/defineResponsibleSize";
import {
  IRectangleSkeletonProps,
  ICircleSkeletonProps,
  ITextSkeletonProps,
  IRowGroupSkeletonProps,
  IListSkeletonProps
} from "./types";

const getBorderRadius = (height: string | number): number => {
  const parseHeight =
    typeof height === "string" ? parseInt(height, 10) : height;
  if (parseHeight < 16) {
    return 4;
  } else if (parseHeight < 40) {
    return 8;
  }
  return 16;
};

const getBaseSkeletonStyles = ({
  theme
}: {
  theme: ITheme;
}): RuleSet<object> => css`
  @keyframes gradientAnimation {
    0% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  background: ${theme.colors.neutral3};
  display: block;
  overflow: hidden;
  position: relative;
  color: transparent;
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: gradientAnimation 3s linear infinite;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.neutral1},
      transparent
    );
    transform: translateX(-100%);
  }
`;

export const RectangleSkeleton = styled.span<
  Omit<IRectangleSkeletonProps, "type">
>`
  ${({ theme }) => getBaseSkeletonStyles({ theme: theme as ITheme })};
  ${({ height }) => defineResponsibleHeight(height)};
  ${({ width }) =>
    width
      ? defineResponsibleWidth(width)
      : css`
          width: 100%;
        `}
  border-radius: ${({ height }) => getBorderRadius(height)}px;
  min-height: 2px;
`;

export const CircleSkeleton = styled.span<Omit<ICircleSkeletonProps, "type">>`
  ${({ theme }) => getBaseSkeletonStyles({ theme: theme as ITheme })};
  ${({ diameter }) => css`
    ${defineResponsibleHeight(diameter)}
    ${defineResponsibleWidth(diameter)}
  `}
  border-radius: 50%;
`;

export const TextSkeletonWrapper = styled.div<
  Pick<ITextSkeletonProps, "type" | "width">
>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ type }) => (type === "text" ? 16 : 8)}px;
  ${({ width }) =>
    width
      ? defineResponsibleWidth(width)
      : css`
          width: 100%;
        `}
  ${RectangleSkeleton} {
    display: flex;
    flex: 1 1 auto;
  }
`;

export const RowSkeletonWrapper = styled.div<
  Pick<IRowGroupSkeletonProps, "type" | "width">
>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ type }) => (type === "tag" ? 16 : 8)}px;
  height: ${({ type }) => (type === "tab" ? 40 : 32)}px;
  ${({ width }) =>
    width
      ? defineResponsibleWidth(width)
      : css`
          width: 100%;
        `}
  ${RectangleSkeleton} {
    display: flex;
    flex: 1 1 auto;
  }
`;

export const ListSkeletonWrapper = styled.div<
  Pick<IListSkeletonProps, "type" | "width">
>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  ${({ width }) =>
    width
      ? defineResponsibleWidth(width)
      : css`
          width: 100%;
        `}
  .list-skeleton-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
  ${RectangleSkeleton} {
    display: flex;
    flex: 1 1 auto;
  }
`;

CircleSkeleton.defaultProps = {
  theme: LIGHT_THEME
};

RectangleSkeleton.defaultProps = {
  theme: LIGHT_THEME
};
