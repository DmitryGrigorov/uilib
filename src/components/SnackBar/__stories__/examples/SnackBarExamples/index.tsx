import React from "react";
import Button from "../../../../Button";
import { SnackBarProvider, useSnackBar } from "../../..";

const SnackBarWithoutAction: React.FC = () => {
  const [openSnackBar] = useSnackBar();

  const onOpenSnackBar = (): void => {
    openSnackBar({
      message: "This is a message"
    });
  };

  return (
    <Button viewType="primary" onClick={onOpenSnackBar}>
      SnackBar without an action
    </Button>
  );
};

export const SnackBarExampleWithoutAction: React.FC = () => (
  <SnackBarProvider>
    <SnackBarWithoutAction />
  </SnackBarProvider>
);

const SnackBarWithAction: React.FC = () => {
  const [openSnackBar, closeSnackBar] = useSnackBar();

  const onOpenSnackBar = (): void => {
    const key = openSnackBar({
      message: "This is a message",
      action: {
        text: "close",
        onClick: () => onCloseSnackBar(key)
      }
    });
  };

  const onCloseSnackBar = (key: string | number): void => {
    closeSnackBar(key);
  };

  return (
    <Button
      viewType="primary"
      onClick={onOpenSnackBar}
      style={{ marginTop: "20px" }}>
      SnackBar with an action
    </Button>
  );
};

export const SnackBarExampleWithAction: React.FC = () => (
  <SnackBarProvider>
    <SnackBarWithAction />
  </SnackBarProvider>
);

const AlertSnackBar: React.FC = () => {
  const [openSnackBar] = useSnackBar();

  const onOpenSnackBar = (): void => {
    openSnackBar({
      message: "Information",
      status: "info",
      isClosable: true
    });
  };

  return (
    <Button viewType="primary" onClick={onOpenSnackBar}>
      Alert SnackBar
    </Button>
  );
};

export const AlertSnackBarExample: React.FC = () => (
  <SnackBarProvider>
    <AlertSnackBar />
  </SnackBarProvider>
);
