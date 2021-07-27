import { uniqBy } from "lodash";

import {
  FilterData,
  FilterDetailedOptions,
  FilterType,
  OnFilterChangeOpts,
} from "./types";

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

function getDefaultValue(filter: FilterData) {
  const { options } = filter;

  return {
    value:
      options.multiple || options.type === FilterType.Range
        ? null
        : options.type === FilterType.Choice
        ? options.default ?? options.choices![0].value
        : "",
    values:
      filter.range && options.type === FilterType.Range
        ? ["", ""]
        : options.multiple
        ? []
        : null,
  };
}

export function register(
  filterData: FilterData[],
  name: string,
  label: string,
  options: FilterDetailedOptions
): FilterData[] {
  const filter: FilterData = {
    active: false,
    label,
    name,
    range: false,
    sortIndex: filterData.length,
    options,
    value: null,
    values: null,
  };

  return [
    ...filterData,
    {
      ...filter,
      ...getDefaultValue(filter),
    },
  ];
}

export function change(
  filterData: FilterData[],
  name: string,
  value: string | string[],
  opts: OnFilterChangeOpts = {}
): FilterData[] {
  const filterToUpdate = filterData.find((filter) => filter.name === name)!;

  let update: Partial<FilterData>;

  if (filterToUpdate!.options.multiple) {
    update = {
      values: value as string[],
    };
  } else if (
    filterToUpdate!.options.type === FilterType.Range &&
    opts.rangePart
  ) {
    update = {
      values:
        opts.rangePart === "min"
          ? [value as string, filterToUpdate.values![1]]
          : [filterToUpdate.values![0], value as string],
    };
  } else {
    update = { value: value as string };
  }

  return filterData.map((filter) =>
    filter.name === name
      ? {
          ...filter,
          ...update,
        }
      : filter
  );
}

export function toggle(filterData: FilterData[], name: string): FilterData[] {
  const selectedFilter = filterData.find((filter) => filter.name === name)!;
  const sortIndex = selectedFilter.active
    ? selectedFilter.sortIndex
    : getActiveFilters(filterData).length;
  const value = selectedFilter.active ? getDefaultValue(selectedFilter) : {};

  return filterData.map((filter) =>
    filter.name === name
      ? {
          ...filter,
          active: !filter.active,
          sortIndex,
          ...value,
        }
      : filter.active && filter.sortIndex > sortIndex
      ? {
          ...filter,
          sortIndex: filter.sortIndex - 1,
        }
      : filter
  );
}

export function toggleRange(
  filterData: FilterData[],
  name: string
): FilterData[] {
  return filterData.map((filter) =>
    filter.name === name
      ? {
          ...filter,
          range: !filter.range,
          ...getDefaultValue({
            ...filter,
            range: !filter.range,
          }),
        }
      : filter
  );
}
