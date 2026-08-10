import { TreeSourceItem } from "../../../../components/Tree";
import { groupBy, TGroupByReturn } from "../../../utils/groupBy";
import { sortPages } from "../../../utils/sortPages";
import { IComponentStand, IPageConfig } from "../../../types";

export const getSourceTreePagesList = (
  pagesList: IPageConfig[],
  search: string
): Array<TreeSourceItem> => {
  const filteredPagesList = pagesList.filter((value) =>
    value.title.toLowerCase().includes(search)
  );
  const sortedPagesList = sortPages<IPageConfig>(filteredPagesList);

  const transformGroupPagesToTreeSource = (
    value: TGroupByReturn<IPageConfig>
  ): TreeSourceItem[] =>
    value.map((v) => {
      if ("groupValue" in v) {
        return {
          id: v.title,
          title: v.title,
          elements: transformGroupPagesToTreeSource(v.groupValue)
        };
      }
      return {
        id: v.routePage,
        title: v.title
      };
    });

  const groupsPages = groupBy<IPageConfig>(sortedPagesList, "group").map(
    (groups) => {
      if ("groupValue" in groups) {
        return {
          id: groups.title,
          title: groups.title,
          elements: transformGroupPagesToTreeSource(groups.groupValue)
        };
      }
      return {
        id: groups.routePage,
        title: groups.title
      };
    }
  );
  return sortPages(groupsPages);
};

export const getSourceTreeComponentList = (
  componentsList: IComponentStand[],
  search: string
): Array<TreeSourceItem> => {
  const filteredComponentList = componentsList.filter(
    (value) =>
      value.title.toLowerCase().includes(search.toLowerCase()) ||
      value.id.toLowerCase().includes(search.toLowerCase())
  );
  const sortedComponentsList = sortPages<IComponentStand>(
    filteredComponentList
  );

  const transformGroupComponentsToTreeSource = (
    value: TGroupByReturn<IComponentStand>
  ): TreeSourceItem[] =>
    value.map((v) => {
      if ("groupValue" in v) {
        return {
          id: v.title,
          title: v.title,
          isArrow: Boolean(search),
          elements: transformGroupComponentsToTreeSource(v.groupValue)
        };
      }
      return {
        id: v.id,
        title: `${v.title} / ${v.id}`
      };
    });

  return groupBy<IComponentStand>(sortedComponentsList, "group").map(
    (group) => {
      if ("groupValue" in group) {
        return {
          id: group.title,
          title: group.title,
          isArrow: Boolean(search),
          elements: transformGroupComponentsToTreeSource(
            groupBy<IComponentStand>(
              group.groupValue as IComponentStand[],
              "subGroup"
            )
          )
        };
      }
      return {
        title: group.title,
        id: group.title
      };
    }
  );
};
