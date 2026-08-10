import React, {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { IconClose } from "@dmitrygrigorov/icons";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Button, H, P2 } from "../";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { FADE_IN_VARIANTS } from "../Pallette/motion";
import { IModalWindowProps } from "./types";
import {
  ModalWrapper,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalContentWrapper,
  BodyOverflowHidden
} from "./styles";

const ModalWindow = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithChildren<IModalWindowProps>>
>(
  (
    {
      isOpen,
      type = "overlay",
      title,
      subTitle,
      description,
      onClose,
      anchorElement = document.body,
      footerContent,
      children,
      isOutsideClickClose,
      onChangeIsOpen,
      isHiddenHeader,
      isHiddenCloseButton,
      className,
      classNameContent,
      classNameFooter,
      classNameHeader,
      width,
      ...otherProps
    },
    ref
  ) => {
    const [isScroll, setIsScroll] = useState(false);

    const modalWindowRef = useRef<HTMLDivElement>(null);
    const isInitialMount = useRef(true);

    const checkIsScroll = (): void => {
      if (type === "fullscreen" && modalWindowRef.current) {
        const modal = modalWindowRef.current;
        const isVerticalScroll = modal.scrollHeight > modal.clientHeight;
        setIsScroll(isVerticalScroll);
      }
    };

    useOnClickOutside([modalWindowRef], () => {
      if (type === "overlay" && isOutsideClickClose) {
        onClose?.();
      }
    });

    const resizeObserverMainContent = useCallback(
      (node: HTMLElement | null) => {
        if (!node) {
          return;
        }

        const resizeObserver = new ResizeObserver((_) => checkIsScroll());
        resizeObserver.observe(node);
      },
      []
    );

    useEffect(() => {
      if (!isInitialMount.current) {
        onChangeIsOpen?.(isOpen);
      } else {
        isInitialMount.current = false;
      }
    }, [isOpen]);

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <ModalWrapper
            key="modal-window"
            $isScroll={isScroll}
            ref={ref}
            $isOpen={isOpen}
            $type={type}
            className={className}
            $isHiddenHeader={isHiddenHeader}
            variants={FADE_IN_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            {...(otherProps as object)}>
            <BodyOverflowHidden />
            {type === "fullscreen" && !isHiddenCloseButton && (
              <Button
                className="modal-window-button-close"
                size="l"
                viewType="icon"
                onClick={onClose}>
                <IconClose />
              </Button>
            )}
            <Modal width={width} ref={modalWindowRef}>
              <ModalContentWrapper>
                {!isHiddenHeader && (
                  <ModalHeader className={classNameHeader}>
                    {title && (
                      <H className="modal-window-title" type="cancer" size={32}>
                        {title}
                      </H>
                    )}
                    {subTitle && (
                      <H
                        className="modal-window-sub-title"
                        type="libra"
                        size={20}>
                        {subTitle}
                      </H>
                    )}
                    {description && (
                      <P2
                        className="modal-window-description"
                        type="corvus"
                        size={16}>
                        {description}
                      </P2>
                    )}
                    {type === "overlay" && !isHiddenCloseButton && (
                      <Button
                        className="modal-window-button-close"
                        size="l"
                        viewType="icon"
                        onClick={onClose}>
                        <IconClose />
                      </Button>
                    )}
                  </ModalHeader>
                )}
                {children && (
                  <ModalContent
                    className={classNameContent}
                    ref={resizeObserverMainContent}>
                    {children}
                  </ModalContent>
                )}
                {type === "overlay" && footerContent && (
                  <ModalFooter className={classNameFooter}>
                    {footerContent}
                  </ModalFooter>
                )}
              </ModalContentWrapper>
            </Modal>
            {type === "fullscreen" && footerContent && (
              <ModalFooter className={classNameFooter}>
                {footerContent}
              </ModalFooter>
            )}
          </ModalWrapper>
        )}
      </AnimatePresence>,
      anchorElement
    );
  }
);

ModalWindow.displayName = "ModalWindow";

export default ModalWindow;
