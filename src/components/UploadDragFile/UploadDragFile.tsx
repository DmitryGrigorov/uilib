import React, {
  ChangeEvent,
  useRef,
  DragEvent,
  useState,
  forwardRef
} from "react";
import { IconCloudImport } from "@dmitrygrigorov/icons";
import Divider from "../Divider";
import Button from "../Button";
import { H, P2 } from "../typography";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  UploadDragFilesStyled,
  UploadDragFileTextWrapper,
  UploadDragFileInputStyled
} from "./styles";
import { IUploadDragFileProps } from "./types";

const UploadDragFile = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IUploadDragFileProps, "div">
>(
  (
    {
      isMultiple,
      onChange,
      isDisabled,
      text = "Drag a document into this area",
      description,
      accept,
      className,
      icon,
      isDivider = true,
      isOnlyDrag,
      maxFileSize,
      summarySizeLimit,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragActive, setIsDragActive] = useState(false);

    const filterFilesMaxSize = (files: File[]): File[] => {
      if (maxFileSize) {
        return files.filter((file) => file.size <= maxFileSize);
      }
      return files;
    };

    const checkSummarySizeLimit = (files: File[]): File[] => {
      if (summarySizeLimit) {
        const sizeFiles = files.reduce<number>((sizes, file) => {
          sizes += file.size;
          return sizes;
        }, 0);
        if (sizeFiles > summarySizeLimit) {
          return [];
        }
      }
      return files;
    };

    const isAcceptedFile = (file: File): boolean => {
      const acceptArray = accept?.split(",").map((a) => a.trim()) || [];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      const mimeType = file.type.toLowerCase();
      return acceptArray.some((acceptItem) => {
        if (acceptItem.endsWith("/*")) {
          const baseType = acceptItem.split("/")[0];
          return mimeType.startsWith(`${baseType}/`);
        } else if (acceptItem.startsWith(".")) {
          return fileExtension === acceptItem.slice(1);
        }
        return mimeType === acceptItem;
      });
    };

    const handleClick = (): void => {
      inputRef.current?.click();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.files && event.target.files[0]) {
        onChange?.(
          checkSummarySizeLimit(
            filterFilesMaxSize(Array.from(event.target.files))
          )
        );

        event.target.value = "";
      }
    };

    const handleDrag = (event: DragEvent<HTMLDivElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      if (event.type === "dragenter" || event.type === "dragover") {
        setIsDragActive(true);
      } else if (event.type === "dragleave") {
        setIsDragActive(false);
      }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
      if (!isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
          onChange?.(
            checkSummarySizeLimit(
              filterFilesMaxSize(
                Array.from(event.dataTransfer.files).filter(isAcceptedFile)
              )
            )
          );
        }
      }
    };

    return (
      <UploadDragFilesStyled
        {...props}
        $isDisabled={isDisabled}
        $isDragActive={isDragActive}
        className={className}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        ref={ref}>
        <UploadDragFileInputStyled
          ref={inputRef}
          type="file"
          multiple={isMultiple}
          onChange={handleChange}
          disabled={isDisabled}
          accept={accept}
        />
        {icon ? icon : <IconCloudImport width={40} height={40} />}
        <UploadDragFileTextWrapper>
          <H type="capricornus">{text}</H>
          {description && (
            <P2 type="corvus" className="upload-drag-file__description">
              {description}
            </P2>
          )}
        </UploadDragFileTextWrapper>
        {isDivider && !isOnlyDrag && (
          <Divider status={isDisabled ? "disabled" : "default"}>or</Divider>
        )}
        {!isOnlyDrag && (
          <Button viewType="link" onClick={handleClick} isDisabled={isDisabled}>
            Choose a file
          </Button>
        )}
      </UploadDragFilesStyled>
    );
  }
);

UploadDragFile.displayName = "UploadDragFile";

export default UploadDragFile;
