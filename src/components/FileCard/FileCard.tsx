import React, {
  forwardRef,
  useMemo,
  useState,
  useEffect,
  MouseEventHandler,
  FocusEventHandler
} from "react";
import { IconCloseForbidden } from "@dmitrygrigorov/icons";
import Preloader from "../Preloader";
import Label from "../Label";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IFileCardProps, TFileCardStatus } from "./types";
import {
  FileCardIconWrapper,
  FileCardStyles,
  FileCardContentStyles,
  FileNameTextStyled,
  FileNameInputStyled,
  FileCardButtonStyled
} from "./styles";
import { mapExtensionToIcon } from "./helpers/mapExtensionToIcon";

const FileCard = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IFileCardProps>
>(
  (
    {
      fileName,
      fileExtension,
      status,
      statusText,
      onClick,
      onButtonClick,
      buttonIcon,
      isLoading,
      className,
      as = "div",
      isEditable,
      onChangeFileName,
      timeoutSuccess = 3600,
      ...props
    },
    ref
  ) => {
    const [_status, setStatus] = useState<TFileCardStatus | undefined>(status);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
      setStatus(status);
      if (status === "success") {
        setTimeout(() => {
          setStatus(undefined);
        }, timeoutSuccess);
      }
    }, [status]);

    const Icon = useMemo(() => {
      if (!fileExtension) {
        return IconCloseForbidden;
      }
      return (
        mapExtensionToIcon[fileExtension.toLowerCase()] || IconCloseForbidden
      );
    }, [fileExtension]);

    const handleDoubleClickFileName: MouseEventHandler<HTMLParagraphElement> = (
      event
    ) => {
      event.stopPropagation();
      if (isEditable) {
        setIsEdit(true);
      }
    };

    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      onButtonClick?.(event);
    };

    const handleBlurInput: FocusEventHandler<HTMLInputElement> = (event) => {
      setIsEdit(false);
      onChangeFileName?.(event.target.value);
    };
    return (
      <FileCardStyles ref={ref} className={className} as={as} {...props}>
        <FileCardContentStyles onClick={onClick}>
          <FileCardIconWrapper status={_status}>
            {isLoading ? (
              <Preloader className="file-card__loader" />
            ) : (
              <Icon
                width={32}
                height={32}
                className="file-card__icon-extension"
              />
            )}
          </FileCardIconWrapper>
          {isEdit ? (
            <FileNameInputStyled
              defaultValue={fileName}
              onBlur={handleBlurInput}
              autoFocus
            />
          ) : (
            <FileNameTextStyled
              forwardedAs="p"
              type="corvus"
              onDoubleClick={handleDoubleClickFileName}>
              {fileName}
            </FileNameTextStyled>
          )}
          {buttonIcon && (
            <FileCardButtonStyled onClick={handleButtonClick}>
              {buttonIcon}
            </FileCardButtonStyled>
          )}
        </FileCardContentStyles>
        {statusText && _status && <Label status={_status}>{statusText}</Label>}
      </FileCardStyles>
    );
  }
);

FileCard.displayName = "FileCard";

export default FileCard;
