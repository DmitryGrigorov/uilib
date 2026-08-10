import styled, { createGlobalStyle, css, RuleSet } from "styled-components";
import { motion } from "motion/react";
import { MEDIA } from "../Pallette/style-utils/index";
import { ITheme } from "../Pallette/themes";
import { IModalWindowProps } from "./types";

type TModalWrapperProps = Pick<IModalWindowProps, "width"> & {
  $isOpen?: boolean;
  $type?: IModalWindowProps["type"];
  $isHiddenHeader?: boolean;
  $isScroll?: boolean;
};

type TFullScreenProps = Pick<
  TModalWrapperProps,
  "$isHiddenHeader" | "$isScroll"
> & {
  theme: ITheme;
};

const getFullScreenStyles = ({
  $isHiddenHeader,
  theme,
  $isScroll
}: TFullScreenProps): RuleSet<object> => css`
  ${MEDIA.mobile`
    padding: 80px 0 208px 0;
    ${Modal} {
      padding: 0 24px;
    }
    ${ModalContent} {
      width: 327px;
    }
    ${ModalFooter} {
      max-width: calc(100% - 24px * 2);      
    }
  `}
  background-color: ${theme.colors.backgroundPrimaryMain};
  padding: 80px 0 208px 0;
  .modal-window-button-close {
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: ${theme.zindex.modal};
  }
  ${Modal} {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 40px;
    justify-content: center;
    align-items: center;
    overflow: auto;
    ${Modal}:not(${ModalHeader}:empty) {
      padding: 0 24px 8px 24px;
    }
  }
  ${ModalHeader}:empty ~ ${ModalContent} {
    margin-top: 22px;
  }
  ${
    $isHiddenHeader &&
    css`
      ${ModalContent} {
        margin-top: 22px;
      }
    `
  }
  ${
    $isScroll &&
    css`
      ${Modal} {
        margin-left: 12px;
      }
    `
  }
  ${ModalFooter} {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 538px;
  }
  ${ModalContent} {
    min-width: 538px;
  }
  ${ModalHeader} {
    padding-right: 0;
  }
  ${ModalContentWrapper} {
    max-width: 100%;
  }
`;

const getOverlayStyles = ({ theme }: { theme: ITheme }): RuleSet<object> => css`
  background-color: ${theme.colors.overlay2};
  ${Modal} {
    max-width: calc(100% - 40px * 2);
    max-height: calc(100% - 124px * 2);
    border-radius: 24px;
    background-color: ${theme.colors.backgroundPrimaryMain};
  }
  ${ModalContent} {
    overflow: auto;
  }
  ${ModalHeader} {
    min-height: 24px;
    flex: 0 0 auto;
  }
  ${MEDIA.mobile`
    ${ModalContent} {
      width: 327px;
    }
    ${ModalFooter} {
      width: 327px;
    }
  `}
`;

export const BodyOverflowHidden = createGlobalStyle`
 body {
   overflow: hidden;
 }
`;

export const ModalWrapper = styled(motion.div)<TModalWrapperProps>`
  ${({ $type, theme, $isHiddenHeader, $isScroll }) =>
    $type === "fullscreen"
      ? getFullScreenStyles({
          theme: theme as ITheme,
          $isScroll,
          $isHiddenHeader
        })
      : getOverlayStyles({ theme: theme as ITheme })}

  .modal-window-sub-title {
    color: ${({ theme }) => theme.colors.textColoredOrange};
  }
  .modal-window-title {
    color: ${({ theme }) => theme.colors.textBasicPressed};
  }
  .modal-window-description {
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zindex.modal};
`;

export const Modal = styled.div<Pick<TModalWrapperProps, "width">>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: ${({ width }) => width && width};
  min-width: 382px;
  max-height: 100%;
  padding: 40px;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  max-height: calc(100vh - (124px * 2 + 40px * 2));
`;

export const ModalHeader = styled.header`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: start;
  padding-right: 64px;
  position: relative;

  :empty {
    display: none;
  }

  .modal-window-button-close {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ModalContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  flex: 1 1 auto;
`;

export const ModalFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  flex-direction: column;
`;
