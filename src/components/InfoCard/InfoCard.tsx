import { IconCloseCircle } from "@dmitrygrigorov/icons";
import React, { useState } from "react";
import Label from "../Label";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  StyledInfoCard,
  MessageHolder,
  InfoCardHeader,
  CloseIconStyle,
  ButtonsStyled
} from "./styles";
import { IInfoCardProps } from "./types";

const InfoCard: React.FC<TPropsWithAttributes<IInfoCardProps>> = ({
  label,
  message,
  onCloseClick,
  size = "l",
  moreButtonText = "Show more",
  collapseButtonText = "Collapse",
  status,
  width,
  isClosableIcon,
  testId = "testIDWithoutName"
}) => {
  const [showMessage, toggleMessage] = useState(false);
  const messageToggler = (): void => {
    toggleMessage((previousValue) => !previousValue);
  };
  return (
    <StyledInfoCard
      data-testid={`${testId}_infoCard`}
      data-element="infoCard"
      size={size}
      status={status}
      showMessage={showMessage}
      $width={width}>
      <InfoCardHeader message={message!}>
        <Label status={status} size={size === "l" ? "m" : "s"} isIcon={true}>
          {label}
        </Label>
        {isClosableIcon && (
          <CloseIconStyle
            size={"xs"}
            viewType={"ghost"}
            icon={<IconCloseCircle width={16} height={16} />}
            onClick={onCloseClick}
          />
        )}
      </InfoCardHeader>
      {message && (
        <>
          {showMessage && (
            <MessageHolder
              data-element="infoCard-message"
              showMessage={showMessage}
              size={size}>
              <P2 type={"corvus"}>{message}</P2>
            </MessageHolder>
          )}
          <ButtonsStyled
            showMessage={showMessage}
            data-element="infoCard-moreButton"
            viewType="link"
            size={"xs"}
            sizeInfoCard={size}
            className="textToggler"
            onClick={messageToggler}>
            <P2 type={"cetus"}>
              {showMessage ? collapseButtonText : moreButtonText}
            </P2>
          </ButtonsStyled>
        </>
      )}
    </StyledInfoCard>
  );
};

export default InfoCard;
