import React, { forwardRef, useEffect } from "react";
import { IconCloseCircle } from "@dmitrygrigorov/icons";
import Button from "../../../Button";
import P2 from "../../../typography/P2";
import { TSnackBarParams, ISnackBarContext } from "../../types";
import {
  CloseIconWrapper,
  LeadIconWrapper,
  SnackBarCounterStyled,
  SnackBarStyled
} from "./styles";

export type TSnackBarProps = TSnackBarParams & {
  closeSnackBar?: ISnackBarContext["closeSnackBar"];
  id: string | number;
  testId?: string;
};

const SnackBar = forwardRef<HTMLDivElement, TSnackBarProps>(
  (
    {
      message,
      action,
      closeSnackBar,
      timeoutId,
      id,
      count,
      status,
      closeIcon = <IconCloseCircle />,
      leadIcon,
      isClosable = false,
      testId
    },
    ref
  ) => {
    useEffect(
      () => () => {
        timeoutId && clearTimeout(timeoutId);
      },
      []
    );

    const onCloseSnackBar = (): void => {
      closeSnackBar?.(id);
    };

    const renderLeadIcon = (): JSX.Element | null => {
      if (leadIcon) {
        return <LeadIconWrapper status={status}>{leadIcon}</LeadIconWrapper>;
      }
      return null;
    };

    const renderCloseIcon = (): JSX.Element | null => {
      if (isClosable) {
        return (
          <CloseIconWrapper
            onClick={onCloseSnackBar}
            status={status}
            action={action}>
            {closeIcon}
          </CloseIconWrapper>
        );
      }
      return null;
    };

    return (
      <SnackBarStyled
        ref={ref}
        status={status}
        className="snack-bar"
        data-testid={testId}>
        {renderLeadIcon()}
        <P2 type="corvus" className="snack-bar__text">
          {message}
        </P2>
        {action && (
          <Button
            viewType="link"
            size="s"
            onClick={action.onClick || onCloseSnackBar}
            className="action-button">
            {action.text}
          </Button>
        )}
        {count && (
          <SnackBarCounterStyled status={status}>
            {count.toString()}
          </SnackBarCounterStyled>
        )}
        {renderCloseIcon()}
      </SnackBarStyled>
    );
  }
);

SnackBar.displayName = "SnackBar";

export default SnackBar;
