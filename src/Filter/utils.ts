import { FilterData } from "./Filter";

export function getAvailableFilters(filterData: Record<string, FilterData>) {
  return Object.entries(filterData).filter(([_key, value]) => !value.active);
}
