import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../../../components/Button";
import H from "../../../components/typography/H";
import P2 from "../../../components/typography/P2";
import { DARK_COLORS } from "../../../components/Pallette/Colors";
import { ActionsAccess, Body, ErrorPageMain, Footer } from "./styles";

interface IErrorPageProps {
  error: any;
  errorInfo: React.ErrorInfo | null;
}

const ErrorPage = ({
  error,
  errorInfo
}: IErrorPageProps): JSX.Element | null => {
  const customErrorEvent = new CustomEvent("customerror", {
    detail: {
      error,
      errorInfo
    }
  });
  document.dispatchEvent(customErrorEvent);

  return (
    <ErrorPageMain>
      <Body className="body">
        <div className="text-container">
          <div className="header-text-container">
            <H
              type="cancer"
              fontFamily="Neue Machina"
              as="div"
              color={DARK_COLORS.neutral12}>
              The system
            </H>
            <H
              type="cancer"
              fontFamily="Neue Machina"
              as="div"
              color={DARK_COLORS.neutral7}>
              is temporarily ^-^
            </H>
            <H
              type="cancer"
              fontFamily="Neue Machina"
              as="div"
              color={DARK_COLORS.neutral12}>
              unavailable
            </H>
          </div>
          <div className="error-code-container">
            <H
              type="libra"
              className="text-of-error"
              as="span"
              color={DARK_COLORS.neutral12}>
              Error:
            </H>{" "}
            <H
              color={DARK_COLORS.neutral12}
              type="libra"
              fontFamily="Neue Machina"
              className="error-code"
              as="span">
              {error && error.toString()}
            </H>
          </div>
          <P2
            type="corvus"
            className="solving-problem-text"
            color={DARK_COLORS.neutral10}>
            We are already working on a solution.
          </P2>
          <H
            type="capricornus"
            className="error-description-header"
            as="div"
            color={DARK_COLORS.neutral12}>
            More information about this error
          </H>
          <P2
            type="corvus"
            className="error-description"
            color={DARK_COLORS.neutral10}>
            {errorInfo?.componentStack ?? "...empty ComponentStack"}
          </P2>
        </div>
      </Body>
      <Footer className="footer">
        <ActionsAccess className="actions-access">
          <P2 type="corvus" size={16} color={DARK_COLORS.neutral12}>
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
};

export default ErrorPage;
