import React from "react";
import Banner from "../../../Banner";

export const BannerExampleSingleActionLight: React.FC = () => (
  <Banner
    status="info"
    title="Weak internet connection"
    message="Your internet signal is weak, which may cause Aurora to behave unpredictably."
    type="overlay"
    isIcon
    style={{ position: "relative", margin: 0, width: "980px" }}
    primaryTitle="Primary action"
  />
);

export const BannerExampleMultiActionLight: React.FC = () => (
  <Banner
    status="info"
    title="Weak internet connection"
    message="Your internet signal is weak, which may cause Aurora to behave unpredictably."
    type="overlay"
    isIcon
    secondaryButton={{
      title: "Secondary action"
    }}
    style={{ position: "relative", margin: 0 }}
    primaryTitle="Primary action"
  />
);
