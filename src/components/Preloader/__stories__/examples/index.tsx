import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import Preloader from "../../";

const PreloaderExamples: React.FC = () => {
  const PRELOADER_EXAMPLES = [
    {
      key: "star",
      default: <Preloader type="star" />,
      progress: <Preloader type="star" progress={20} />,
      label: <Preloader type="star" progress={20} isShowLabel />
    },
    {
      key: "circular",
      default: <Preloader type="circular" />,
      progress: <Preloader type="circular" progress={20} />,
      label: <Preloader type="circular" progress={20} isShowLabel />
    }
  ];

  return <StorybookDocExamples items={PRELOADER_EXAMPLES} />;
};

export default PreloaderExamples;
