import styled, { css } from "styled-components";
import Button, { IButtonProps } from "../Button";
import type { IMobileStepsProps } from "./types";

type TMobileStepsWrapperProps = Pick<IMobileStepsProps, "width" | "type">;
type IStepButtonProps = IButtonProps;

export const MobileStepsWrapper = styled.div<TMobileStepsWrapperProps>`
  ${({ width, type }) => {
    if (type === "gallery") {
      return css`
        width: max-content;
        gap: 32px;
      `;
    }
    return css`
      width: ${width ? width : "100%"};
      min-width: 320px;
      gap: 20px;
    `;
  }}

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StepProgressStyle = styled.div<{ percent: number }>`
  width: 100%;
  height: 4px;
  border-radius: 8px;
  position: relative;
  background: ${({ theme }) => theme.colors.orange2};
  overflow: hidden;

  .step-progress-bar {
    width: 100%;
    left: 0;
    top: 0;
    transform: ${({ percent }) => `translateX(${-(100 - percent)}%)`};
    transform-origin: left;
    background: ${({ theme }) => theme.colors.orange7};
    display: inherit;
    height: 100%;
    transition: transform 0.4s linear;
  }
`;

export const StepGalleryStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
`;

export const StepButton = styled(Button)<IStepButtonProps>`
  &:disabled {
    svg {
      color: ${({ theme }) => theme.colors.textBasicDisabled};
    }
    cursor: not-allowed;
  }
  :hover:enabled {
    background-color: ${({ theme }) => theme.colors.overlay2};
    svg {
      color: ${({ theme }) => theme.colors.textBasicHover};
    }
  }
  :active:enabled {
    background: inherit;
    svg {
      color: ${({ theme }) => theme.colors.componentPrimaryOrangePressed};
    }
  }
`;

export const StepPoint = styled.span<{ isCurrent?: boolean }>`
  background: ${({ theme, isCurrent }) =>
    isCurrent
      ? theme.colors.componentPrimaryOrangeDefault
      : theme.colors.componentPrimaryNeutralDefault};
  height: 8px;
  transition: background-color 0.2s linear;
  width: 8px;
  border-radius: 50%;
`;
