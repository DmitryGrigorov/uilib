import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import H from "../typography/H";
import P2 from "../typography/P2";
import { LIGHT_COLORS } from "../Pallette/Colors";
import Button from "../Button";
import { Body, ActionsAccess, Footer, ErrorPageMain } from "./style";

const CriticalError = (): JSX.Element => (
  <ErrorPageMain>
    <Body className="body">
      <div className="text-container">
        <div className="header-text-container">
          <H type="cancer" fontFamily="Neue Machina" as="div">
            System
          </H>
          <H
            type="cancer"
            fontFamily="Neue Machina"
            color={LIGHT_COLORS.neutral12}
            as="div">
            temporarily ^-^
          </H>
          <H type="cancer" fontFamily="Neue Machina" as="div">
            unavailable
          </H>
        </div>
        <div className="error-code-container">
          <H type="libra" className="text-of-error" as="span">
            Error:
          </H>{" "}
          <H
            type="libra"
            fontFamily="Neue Machina"
            className="error-code"
            color={LIGHT_COLORS.orange2}
            as="span">
            503
          </H>
        </div>
        <div className="solving-problem-text">
          We are already working on a solution.
        </div>
        <H
          type="capricornus"
          className="error-description-header"
          color={LIGHT_COLORS.neutral10}
          as="div">
          More about this error
        </H>
        <div className="error-description">
          503 is a server status code indicating that the server is not ready to
          handle this request.\nThis is often caused by scheduled maintenance or
          excessive load.\nThe system should return to normal shortly. Please
          try reloading the page again in a few minutes.
        </div>
      </div>
    </Body>
    <Footer className="footer">
      <ActionsAccess className="actions-access">
        <P2 type="corvus" size={16} color={LIGHT_COLORS.neutral7}>
          You can:
        </P2>
        <Button
          width="100%"
          icon={<IconSetting1 />}
          id="button-reload"
          onClick={() => location.reload()}>
          Reload the page
        </Button>
      </ActionsAccess>
    </Footer>
  </ErrorPageMain>
);
CriticalError.displayName = "CriticalError";

export default CriticalError;
