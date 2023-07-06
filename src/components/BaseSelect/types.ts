export type Option = { label: string; value: string };
export type SingleChangeHandler<T> = (selectedItem: T) => void;
export type MultiChangeHandler<T> = (selectedItems: T[]) => void;
