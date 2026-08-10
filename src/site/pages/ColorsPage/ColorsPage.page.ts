import { lazy } from "react";
import { createPage } from "../../siteConfig";

const ColorPage = lazy(() => import("./ColorsPage"));

export default createPage({
  routePage: "/colors",
  title: "Colors",
  group: "Foundation",
  order: 2,
  mainPage: false,
  page: ColorPage
});
