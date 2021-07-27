import { TextFieldProps } from "@material-ui/core/TextField";

export enum FilterType {
  Text,
  Choice,
  Range,
}

export interface FilterDetailedOptions {
  type: FilterType;
  choices?: Array<Record<"label" | "value", string>>;
  default?: string;
  multiple?: boolean;
  InputProps?: Partial<TextFieldProps>;
}
export interface FilterOptions {
  name: string;
  label: string;
}

export interface FilterData extends FilterOptions {
  active: boolean;
  range: boolean;
  sortIndex: number;
  value: string | null;
  values: string[] | null;
  options: FilterDetailedOptions;
}

export interface OnFilterChangeOpts {
  rangePart?: "min" | "max";
}

export interface FilterContextType {
  filters: FilterData[];
  register: (
    name: string,
    label: string,
    options: FilterDetailedOptions
  ) => void;
  toggle: (name: string) => void;
  toggleRange: (name: string) => void;
  unregister: (name: string) => void;
  onChange: (
    name: string,
    value: string | string[],
    opts?: OnFilterChangeOpts
  ) => void;
}

export type FilterLabels = Record<"where" | "and" | "is" | "range", string>;

export interface EventTarget {
  name: string;
  value: string;
}
