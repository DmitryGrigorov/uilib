import React from "react";
import { createRoot } from "react-dom/client";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import Banner from "./Banner";
import { IBannerProps, TTypeBanner } from "./types";
export const bannerShow = (
  property: IBannerProps,
  theme?: ITheme,
  idContainer?: string
): (() => void) => {
  const container = getContainerBanner(property.type, idContainer);

  const handlePrimaryClick = (): void => {
    property.onPrimaryClick?.();
    bannerClose();
  };
  const root = createRoot(container);
  root.render(
    <ThemeProvider theme={theme || LIGHT_THEME}>
      <Banner onPrimaryClick={handlePrimaryClick} {...property} />
    </ThemeProvider>
  );

  const bannerClose = (): void => {
    root.unmount();
    container.remove();
  };

  return bannerClose;
};

export const getContainerBanner = (
  type: TTypeBanner,
  idContainer?: string
): HTMLDivElement => {
  const container = document.createElement("div");
  if (idContainer) {
    const root = document.getElementById(idContainer);
    if (type === "shifting") {
      root?.prepend(container);
    } else {
      root?.appendChild(container);
    }
  } else if (type === "shifting") {
    document.body?.prepend(container);
  } else {
    document.body.appendChild(container);
  }

  return container;
};
