export interface INavigationItem {
  label: string;
  href: string;
  external?: boolean;
  newTab?: boolean;
  ariaLabel?: string;
}

export interface IComponentSearchItem {
  id: string;
  title: string;
  group: string;
  href: string;
  searchText: string;
}
