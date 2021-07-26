export enum FilterType {
  Text,
  Choice,
}

export interface FilterDetailedOptions {
  type: FilterType;
  choices?: Array<Record<"label" | "value", string>>;
}
export interface FilterOptions {
  name: string;
  label: string;
}

export interface FilterData extends FilterOptions {
  active: boolean;
  sortIndex: number;
  value: string | null;
  options: FilterDetailedOptions;
}

export interface FilterContextType {
  filters: FilterData[];
  register: (
    name: string,
    label: string,
    options: FilterDetailedOptions
  ) => void;
  toggle: (name: string) => void;
  unregister: (name: string) => void;
  onChange: (name: string, value: string) => void;
}

export type FilterLabels = Record<"where" | "and", string>;
