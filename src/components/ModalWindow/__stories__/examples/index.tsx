import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ModalWindowOverlayExample,
  ModalWindowFullScreenExample
} from "./ModalWindowExamples";

export const ModalWindowExamples: React.FC = () => {
  const MODAL_WINDOW_EXAMPLES = [
    {
      key: "overlay",
      overlayModalWindow: <ModalWindowOverlayExample />
    },
    {
      key: "fullscreen",
      fullscreenModalWindow: <ModalWindowFullScreenExample />
    }
  ];

  return <StorybookDocExamples items={MODAL_WINDOW_EXAMPLES} />;
};
