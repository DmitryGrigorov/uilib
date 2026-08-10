import ProgressBar from "../../../";

export const ProgressBarExampleDefaultInfoLinear: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant="info"
    label="Info label"
    type={"Linear"}
  />
);

export const ProgressBarExampleDefaultInfoLinearSizeM: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    size="m"
    variant="info"
    label="Info label"
    type={"Linear"}
  />
);

export const ProgressBarExampleInfoLinearWidthText: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    size="m"
    variant="info"
    label="Info label"
    type={"Linear"}
    isText
  />
);

export const ProgressBarExampleDefaultSuccessLinear: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant={"success"}
    label="Success label"
    type={"Linear"}
  />
);

export const ProgressBarExampleDefaultSuccessLinearSizeM: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    size="m"
    variant={"success"}
    label="Success label"
    type={"Linear"}
  />
);

export const ProgressBarExampleDefaultWarningLinear: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant={"warning"}
    label="Warning label"
    type={"Linear"}
  />
);

export const ProgressBarExampleDefaultWarningLinearSizeM: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant={"warning"}
    label="Warning label"
    type={"Linear"}
    size="m"
  />
);

export const ProgressBarExampleDefaultErrorLinear: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant={"error"}
    label="Error label"
    type={"Linear"}
  />
);

export const ProgressBarExampleDefaultErrorLinearSizeM: React.FC = () => (
  <ProgressBar
    style={{ width: "400px" }}
    progress={20}
    variant={"error"}
    label="Error label"
    type={"Linear"}
    size="m"
  />
);
