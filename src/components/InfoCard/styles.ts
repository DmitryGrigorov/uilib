import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import Button from "../Button";
import { IInfoCardProps, TInfoCardSize } from "./types";

type TStyledInfoCardProps = Pick<
  IInfoCardProps,
  "showMessage" | "size" | "status"
> & { $width?: string };

export const StyledInfoCard = styled.div<TStyledInfoCardProps>`
  .textToggler {
    ${({ showMessage }) => {
      if (showMessage) {
        return css`
          padding: 0;
          span {
            margin: 0;
          }
        `;
      } else {
        return null;
      }
    }}
  }
  padding: 4px 16px;
  ${({ status, theme }) => {
    switch (status) {
      case "error":
        return css`
          background-color: ${theme.colors.backgroundSecondaryRed};
        `;
      case "success":
        return css`
          background-color: ${theme.colors.backgroundSecondaryTeal};
        `;
      case "warning":
        return css`
          background-color: ${theme.colors.backgroundSecondaryAmber};
        `;
      default:
        return css`
          background-color: ${theme.colors.backgroundSecondaryCyan};
        `;
    }
  }};
  position: relative;
  border-radius: 16px;
  width: ${({ $width = "100%" }) => css`
    ${$width}
  `};
`;

export const MessageHolder = styled.div<
  Pick<IInfoCardProps, "showMessage" | "size">
>`
  padding: 4px;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  ${({ showMessage, size }) =>
    showMessage &&
    css`
      margin-top: ${size === "m" ? "8px" : "16px"};
    `}
`;

export const ButtonsStyled = styled(Button)<{
  showMessage?: boolean;
  sizeInfoCard?: TInfoCardSize;
}>`
  padding: 0 4px;
  ${({ showMessage, sizeInfoCard }) => {
    switch (sizeInfoCard) {
      case "l":
      default:
        if (showMessage) {
          return css`
            margin: 4px 0 12px 4px;
          `;
        } else {
          return css`
            margin-top: 8px;
            margin-bottom: 12px;
          `;
        }
      case "m":
        if (showMessage) {
          return css`
            margin: 0 0 12px 4px;
          `;
        } else {
          return css`
            margin-bottom: 12px;
          `;
        }
    }
  }}
`;

export const CloseIconStyle = styled(Button)`
  padding: 0;
`;

export const InfoCardHeader = styled.div<{ message: string }>`
  display: flex;
  padding: 0 4px 0 2px;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  ${({ message }) =>
    !message &&
    css`
      margin-bottom: 12px;
    `}
`;

StyledInfoCard.defaultProps = {
  theme: LIGHT_THEME
};

MessageHolder.defaultProps = {
  theme: LIGHT_THEME
};
