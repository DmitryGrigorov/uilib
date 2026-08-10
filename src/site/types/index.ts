import React from "react";

export interface IGroup {
  id: string;
  title: string;
}

export interface IComponentStandTab {
  id: string;
  label: string;
}

export interface IComponentStand<G extends string = string> {
  id: string;
  title: string;
  subTitle?: string | string[];
  group: G;
  subGroup?: string;
  status?: "release";
  docs?: React.FC;
  description?: string | string[];
  playground?: React.FC;
  order?: number;
}

export interface ICreateComponentStand {
  componentStand: IComponentStand;
  componentStandTabs: IComponentStandTab[];
}

export interface IPageConfig<G extends string = string> {
  group?: G;
  routePage: string;
  title: string;
  page: React.FC;
  order?: number;
  mainPage?: boolean;
}

export type TCreatedPage = IPageConfig;

export interface IRouterItem {
  name: string;
  path: string;
  isNewLoad?: boolean;
}
