import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";

interface IUploadDragFilesStyledProps {
  $isDisabled?: boolean;
  $isDragActive: boolean;
}

const uploadDragFilesDragAndHover = css`
  color: ${({ theme }) => theme.colors.orange9};
  border: 2px dashed ${({ theme }) => theme.colors.orange8};
  .upload-drag-file__description {
    color: ${({ theme }) => theme.colors.neutral10};
  }
  svg {
    color: ${({ theme }) => theme.colors.orange9};
  }
`;

export const UploadDragFilesStyled = styled.div<IUploadDragFilesStyledProps>`
  max-width: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 24px 24px 24px;
  border-radius: 24px;
  border: 2px dashed ${({ theme }) => theme.colors.neutral4};
  color: ${({ theme }) => theme.colors.neutral10};

  &:hover {
    ${({ $isDisabled }) => !$isDisabled && uploadDragFilesDragAndHover};
  }

  ${({ $isDragActive }) => $isDragActive && uploadDragFilesDragAndHover};

  ${({ $isDisabled, theme }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      border: none;
      color: ${theme.colors.neutral5};
      background: ${theme.colors.neutral3};
      .upload-drag-file__description {
        color: ${theme.colors.neutral5};
      }
      svg {
        color: ${theme.colors.neutral5};
      }
      &:hover {
        border: none;
      }
    `}
`;

UploadDragFilesStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const UploadDragFileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 11px;
`;

export const UploadDragFileInputStyled = styled.input`
  display: none;
`;
