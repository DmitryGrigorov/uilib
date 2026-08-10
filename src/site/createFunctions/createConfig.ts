import {
  IGroup,
  IComponentStand,
  ICreateComponentStand,
  IComponentStandTab,
  IPageConfig,
  TCreatedPage
} from "../types";

const defaultComponentStandTabs: IComponentStandTab[] = [
  {
    id: "design",
    label: "Design"
  },
  {
    id: "code",
    label: "Code"
  },
  {
    id: "docs",
    label: "Documentation"
  }
];

type TCreateConfigReturn<G extends IGroup> = {
  createComponentStand: (
    componentStandProps: IComponentStand<G["id"]>
  ) => ICreateComponentStand;
  createPage: (pageConfig: IPageConfig) => TCreatedPage;
};

export const createConfig = <G extends IGroup>(): TCreateConfigReturn<G> => {
  const createComponentStand = (
    componentStandProps: IComponentStand<G["id"]>
  ): ICreateComponentStand => ({
    componentStand: componentStandProps,
    componentStandTabs: defaultComponentStandTabs
  });
  const createPage = (pageConfig: IPageConfig): TCreatedPage => ({
    ...pageConfig
  });

  return { createComponentStand, createPage };
};
