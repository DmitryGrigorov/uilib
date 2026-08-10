import styled, { css } from "styled-components";
import { P1, P2 } from "../../../typography";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";
import { TStepsStatus } from "../../types";
import { IStepItemProps } from "./types";

type TStepItemContentProps = Pick<
  IStepItemProps,
  "status" | "isDisabled" | "isCurrent"
>;
const defineBackgroundColor = (
  theme: ITheme | any,
  status: TStepsStatus,
  state: string
): string => {
  switch (status.toLocaleLowerCase()) {
    case "completed":
      return theme.colors[`componentSecondaryTeal${state}`];
    case "error":
      return theme.colors[`componentSecondaryRed${state}`];
    case "warning":
      return theme.colors[`componentSecondaryAmber${state}`];
    case "waiting":
      return theme.colors[`componentSecondaryCyan${state}`];
    default:
      return theme.colors[`componentSecondaryNeutral${state}`];
  }
};
const defineTextColor = (theme: ITheme | any, status: TStepsStatus): string => {
  switch (status.toLocaleLowerCase()) {
    case "completed":
      return theme.colors.teal12;
    case "error":
      return theme.colors.red12;
    case "warning":
      return theme.colors.amber12;
    case "waiting":
      return theme.colors.cyan12;
    default:
      return theme.colors.textBasicPressed;
  }
};
const StepItemStyle = styled.div.attrs<TStepItemContentProps>((props) => ({
  status: (props.status.charAt(0).toUpperCase() +
    props.status.slice(1)) as unknown as TStepItemContentProps["status"]
}))<TStepItemContentProps>`
  .step-item-number {
    ${({ theme = LIGHT_THEME, status, isDisabled, isCurrent }) => {
      if (isDisabled) {
        return css`
          color: ${theme.colors.textBasicDisabled};
          background: ${theme.colors.neutral3};
          cursor: no-drop;
        `;
      }
      if (isCurrent) {
        return css`
          color: ${theme.colors.orange12};
          background: ${theme.colors.componentSecondaryOrangeDefault};
          & svg {
            color: ${theme.colors.orange12};
          }
          :hover {
            color: ${theme.colors.orange12};
            background: ${theme.colors.componentSecondaryOrangeHover};
            svg {
              color: ${theme.colors.orange12};
            }
          }
          :active {
            color: ${theme.colors.orange12};
            background: ${theme.colors.componentSecondaryOrangePressed};
            svg {
              color: ${theme.colors.orange12};
            }
          }
        `;
      }
      return css`
        color: ${defineTextColor(theme, status)};
        background: ${defineBackgroundColor(theme, status, "Default")};
        & svg {
          color: ${defineTextColor(theme, status)};
        }
        :hover {
          color: ${defineTextColor(theme, status)};
          background: ${defineBackgroundColor(theme, status, "Hover")};
          svg {
            color: ${defineTextColor(theme, status)};
          }
        }
        :active {
          color: ${defineTextColor(theme, status)};
          background: ${defineBackgroundColor(theme, status, "Pressed")};
          svg {
            color: ${defineTextColor(theme, status)};
          }
        }
      `;
    }}
  }

  ${({ theme = LIGHT_THEME, isDisabled }) => {
    if (isDisabled) {
      return css`
        .step-item-title,
        .step-item-description {
          color: ${theme.colors.textBasicDisabled};
        }
      `;
    }
    return css`
      .step-item-title {
        color: ${theme.colors.textBasicDefault};
      }
      .step-item-description {
        color: ${theme.colors.textBasicHover};
      }
      .step-item-title:hover {
        color: ${theme.colors.textBasicHover};
      }
      .step-item-title:active {
        color: ${theme.colors.textBasicPressed};
      }
    `;
  }}
`;

export const NumberStep = styled.div`
  width: 28px;
  min-width: 28px;
  height: 28px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Title = styled(P1)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Description = styled(P2)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-left: 40px;
`;

export const StepItemHorizontal = styled(StepItemStyle)<{ isChange: boolean }>`
  flex-direction: column;
  gap: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: nowrap;
  flex: 1 1 auto;
  width: 0;

  .step-item-row {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    gap: 12px;
    cursor: ${({ isChange }) => (isChange ? "pointer" : "default")};

    .step-item-title {
      flex: 0 1 auto;
      width: max-content;
      min-width: 0;
    }

    .step-item-divider {
      flex: 1 2 auto;
      min-width: 20px;
      width: max-content;
      max-width: 100%;
    }
  }
`;

export const StepItemVertical = styled(StepItemStyle)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 20px;
  flex: 1;

  .step-item-divider {
    min-height: 20px;
    height: 100%;
    flex: 1;
  }
  & > div:first-child {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 16px;
  }
  .step-item-text {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: 100%;
    min-width: 0;
    white-space: nowrap;
    gap: 6px;
    margin-bottom: 2px;
  }
  .step-item-title {
    padding-top: 2px;
  }
  .step-item-description {
    padding-left: 0;
  }
`;
