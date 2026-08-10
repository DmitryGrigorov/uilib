import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../";
import ModalWindow, { IModalWindowProps } from "../../../";
import { P1 } from "../../../../typography";

const StyledContent = styled(P1).attrs({
  type: "cygnus"
})`
  width: 300px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.neutral13};
  border: 1px solid ${({ theme }) => theme.colors.neutral13};
  border-radius: 10px;
  margin: 10px 0;
`;

const FooterContent: React.FC<{
  handleClose: () => void;
}> = ({ handleClose }) => (
  <>
    <Button>Confirm</Button>
    <Button viewType="secondary" onClick={handleClose}>
      Cancel
    </Button>
  </>
);

const MainContent: React.FC<{ countElements?: number }> = ({
  countElements
}) => (
  <>
    {[...Array(countElements || 50)]
      .map((_, i) => i + 1)
      .map((num, _) => (
        <StyledContent key={`style-text-${num}`}>some text</StyledContent>
      ))}
  </>
);

export const ModalWindowTemplate: React.FC<
  Partial<IModalWindowProps> & { textOpenButton?: string }
> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <Button style={{ margin: "20px 0" }} onClick={handleOpen}>
        {props.textOpenButton || "Open modal window"}
      </Button>
      <ModalWindow
        isOpen={isOpen}
        onClose={handleClose}
        title="Some title from ModalWindow"
        subTitle="Some subtitle from ModalWindow"
        description="Some description from ModalWindow"
        footerContent={<FooterContent handleClose={handleClose} />}
        {...props}>
        {props.children}
      </ModalWindow>
    </>
  );
};

export const ModalWindowOverlayExample: React.FC = () => (
  <ModalWindowTemplate textOpenButton="Open overlay type modal window">
    <MainContent countElements={30} />
  </ModalWindowTemplate>
);

export const ModalWindowFullScreenExample: React.FC = () => (
  <ModalWindowTemplate
    type="fullscreen"
    textOpenButton="Open full screen type modal window">
    <MainContent countElements={30} />
  </ModalWindowTemplate>
);

export const BasicModalWindowExample: React.FC = () => (
  <ModalWindowTemplate
    title=""
    subTitle=""
    description=""
    footerContent={undefined}
    textOpenButton="Open basic modal window">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);

export const BasicModalWindowWidthFooter: React.FC = () => (
  <ModalWindowTemplate textOpenButton="Open basic modal window with footer">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);

export const BasicModalWindowWidthHeader: React.FC = () => (
  <ModalWindowTemplate
    footerContent={undefined}
    textOpenButton="Open basic modal window with header">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);

export const BasicModalWindowWidthHiddenHeader: React.FC = () => (
  <ModalWindowTemplate
    isHiddenHeader
    textOpenButton="Open basic modal window with hidden header">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);

export const BasicModalWindowWidthHiddenCloseButton: React.FC = () => (
  <ModalWindowTemplate
    isHiddenCloseButton
    textOpenButton="Open basic modal window with hidden close button">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);

export const ModalWindowOutsideClickCloseExample: React.FC = () => (
  <ModalWindowTemplate
    textOpenButton="Open overlay type modal window with outside click close"
    isOutsideClickClose>
    <MainContent countElements={30} />
  </ModalWindowTemplate>
);

export const BasicModalWindowWidth: React.FC = () => (
  <ModalWindowTemplate
    width="500px"
    footerContent={undefined}
    textOpenButton="Open basic modal window with header">
    <StyledContent>basic modal window</StyledContent>
  </ModalWindowTemplate>
);
