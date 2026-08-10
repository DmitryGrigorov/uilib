import React from "react";
import Label from "../Label";
import P1 from "../typography/P1";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import {
  BannerStyled,
  ContentWrapper,
  ActionsWrapper,
  ButtonStyled,
  BannerContainer
} from "./styles";
import { IBannerProps } from "./types";

const Banner: React.FC<TPropsWithAttributes<IBannerProps>> = ({
  status,
  isIcon,
  message,
  title,
  secondaryButton,
  onPrimaryClick,
  type,
  primaryTitle,
  className,
  style,
  testId = "testIDWithoutName",
  ...props
}) => (
  <BannerContainer
    type={type}
    style={style}
    className={className}
    data-testid={`${testId}_banner`}
    data-element="banner">
    <BannerStyled data-element="banner-inner" {...props}>
      <ContentWrapper data-element="banner-content">
        <Label data-element="banner-label" status={status} isIcon={isIcon}>
          {title}
        </Label>
        <P1 type="phoenix" className="banner-message">
          {message}
        </P1>
      </ContentWrapper>
      <ActionsWrapper>
        {secondaryButton && (
          <ButtonStyled
            viewType="ghost"
            size="xs"
            onClick={secondaryButton.onClick}>
            {secondaryButton.title}
          </ButtonStyled>
        )}
        <ButtonStyled
          data-element="banner-close"
          viewType="primary"
          size="xs"
          onClick={onPrimaryClick}>
          {primaryTitle || "Close"}
        </ButtonStyled>
      </ActionsWrapper>
    </BannerStyled>
  </BannerContainer>
);

export default Banner;
