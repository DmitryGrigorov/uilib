import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import Cluster from "../../";

const ClusterExample: React.FC = () => {
  const CLUSTER_EXAMPLE = [
    {
      key: "default",
      default: <Cluster>P1-s</Cluster>,
      disabled: <Cluster isDisabled>P1-s</Cluster>,
      pressed: <Cluster isPressed>P1-s</Cluster>
    }
  ];

  return <StorybookDocExamples items={CLUSTER_EXAMPLE} />;
};

export default ClusterExample;
