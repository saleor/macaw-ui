import { ReactNode } from "react";

export type Option = {
  label: string;
  value: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};
export type SingleChangeHandler<T> = (selectedItem: T) => void;
export type MultiChangeHandler<T> = (selectedItems: T[]) => void;
