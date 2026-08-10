import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as pages from "../build/pages";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as componentsPages from "../build/components";
import { ICreateComponentStand, TCreatedPage } from "../types";

const ComponentPage = lazy(() => import("../pages/ComponentPage"));
const ComponentsPage = lazy(() => import("../pages/ComponentsPage"));

const PageLoadingFallback = (): JSX.Element => (
  <span aria-live="polite" role="status">
    Loading page…
  </span>
);

const pagesRoutes = Object.values<TCreatedPage>(pages).map((page) => ({
  path: page.routePage,
  element: <page.page />
}));

export const componentsRoutes = Object.values<ICreateComponentStand>(
  componentsPages
).map((componentPage) => ({
  path: `/components/${componentPage.componentStand.id}`,
  element: (
    <ComponentPage
      componentStand={componentPage.componentStand}
      componentStandTabs={componentPage.componentStandTabs}
    />
  )
}));

const Router: React.FC = () => {
  const routeElement = useRoutes([
    ...pagesRoutes,
    {
      path: "/components",
      element: <ComponentsPage />
    },
    ...componentsRoutes,
    {
      path: "*",
      element: <Navigate to="/" replace />
    }
  ]);

  return <Suspense fallback={<PageLoadingFallback />}>{routeElement}</Suspense>;
};

export default Router;
