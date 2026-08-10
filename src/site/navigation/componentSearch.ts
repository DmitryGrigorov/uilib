// This module is generated before the documentation app is started or built.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as generatedComponents from "../build/components";
import { ICreateComponentStand } from "../types";
import { IComponentSearchItem } from "./types";

const normalize = (value: string): string => value.trim().toLocaleLowerCase();

export const COMPONENT_SEARCH_ITEMS: ReadonlyArray<IComponentSearchItem> =
  Object.values<ICreateComponentStand>(generatedComponents)
    .map(({ componentStand }) => {
      const { group, id, title } = componentStand;

      return {
        id,
        title,
        group,
        href: `/components/${id}`,
        searchText: normalize(`${id} ${title} ${group}`)
      };
    })
    .sort((first, second) => first.id.localeCompare(second.id));

export const searchComponents = (
  query: string,
  limit = 7
): ReadonlyArray<IComponentSearchItem> => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  return COMPONENT_SEARCH_ITEMS.filter(({ searchText }) =>
    searchText.includes(normalizedQuery)
  ).slice(0, limit);
};
