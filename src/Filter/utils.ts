import uniqBy from "lodash/uniqBy";

import { FilterData, FilterDetailedOptions } from "./types";

export function getAvailableFilters(filterData: FilterData[]) {
  return filterData.filter((filter) => !filter.active);
}
export function getActiveFilters(filterData: FilterData[]) {
  return filterData.filter((filter) => filter.active);
}

export function validate(filterData: FilterData[]) {
  if (uniqBy(filterData, "name").length !== filterData.length) {
    throw new Error("Filter names should be unique");
  }
}

export function register(
  filterData: FilterData[],
  name: string,
  label: string,
  options: FilterDetailedOptions
): FilterData[] {
  return [
    ...filterData,
    {
      active: false,
      label,
      name,
      sortIndex: filterData.length,
      options,
      value: null,
    },
  ];
}

export function change(
  filterData: FilterData[],
  name: string,
  value: string
): FilterData[] {
  return filterData.map((filter) =>
    filter.name === name
      ? {
          ...filter,
          value,
        }
      : filter
  );
}

export function toggle(filterData: FilterData[], name: string): FilterData[] {
  const selectedFilter = filterData.find((filter) => filter.name === name)!;
  const sortIndex = selectedFilter.active
    ? selectedFilter.sortIndex
    : getActiveFilters(filterData).length;

  return filterData.map((filter) =>
    filter.name === name
      ? {
          ...filter,
          active: !filter.active,
          sortIndex,
        }
      : filter.active && filter.sortIndex > sortIndex
      ? {
          ...filter,
          sortIndex: filter.sortIndex - 1,
        }
      : filter
  );
}
