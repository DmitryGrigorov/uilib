import React, { forwardRef } from "react";
import { IconArrowLeft } from "@dmitrygrigorov/icons";
import H from "../typography/H";
import Button from "../Button";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IPageHeaderProps } from "./types";
import { PageHeaderStyled } from "./styles";

const PageHeader = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IPageHeaderProps>
>(
  (
    {
      className,
      trailIcon,
      isLeadIcon,
      leadIcon = <IconArrowLeft />,
      width,
      style,
      onClickTrail,
      text,
      onClickLead,
      testId = "testIDWithoutName",
      trailContent,
      ...props
    },
    ref
  ) => (
    <PageHeaderStyled
      className={className}
      ref={ref}
      style={style}
      width={width}
      data-testid={`${testId}_pageHeader`}
      data-element="pageHeader"
      {...props}>
      {isLeadIcon && (
        <button
          data-element="pageHeader-leadIcon"
          className="page-header_button"
          onClick={onClickLead}>
          {leadIcon}
        </button>
      )}
      <H className="page-header_text" type="libra">
        {text}
      </H>
      {trailIcon && (
        <Button
          data-element="pageHeader-trailIcon"
          className="page-header_trail-button"
          onClick={onClickTrail}
          viewType="ghost"
          size="s">
          {trailIcon}
        </Button>
      )}
      {trailContent}
    </PageHeaderStyled>
  )
);

PageHeader.displayName = "PageHeader";

export default PageHeader;
