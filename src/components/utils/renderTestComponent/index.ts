import path from "path";
import fs from "fs";
import { ReactElement } from "react";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { fonts } from "./fonts";

export const renderTestComponent = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  const resetCssData = fs.readFileSync(
    path.resolve(__dirname, "../../../styles/reset.css"),
    "utf-8"
  );
  const view = render(ui, options);
  const styleResetElement = document.createElement("style");
  styleResetElement.innerHTML = resetCssData + fonts;
  document.body.appendChild(styleResetElement);
  document.body.appendChild(view.container);
  return view;
};
