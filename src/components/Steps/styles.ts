import styled, { css } from "styled-components";
import {
  StepItemHorizontal,
  StepItemVertical
} from "./components/StepItem/styles";
import { IStepsProps } from "./";

export const StepWrapper = styled.div<
  Pick<IStepsProps, "direction" | "width" | "height">
>`
  display: flex;
  gap: 16px;
  flex: 1;

  ${({ direction, width, height }) =>
    direction === "horizontal"
      ? css`
          flex-direction: row;
          width: ${width ? width : "100%"};
        `
      : css`
          flex-direction: column;
          height: ${height ? height : "100%"};
        `};

  ${StepItemHorizontal}:last-child {
    flex: 0.75 3 auto;
    min-width: 0;
    max-width: max-content;
  }

  ${StepItemVertical}:last-child {
    flex: 0;
  }
`;
