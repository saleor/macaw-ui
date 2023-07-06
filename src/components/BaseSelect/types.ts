export type Option = { label: string; value: string };
export type SingleChangeHandler<O> = (selectedItem: O) => void;
export type MultiChangeHandler<O> = (selectedItems: O[]) => void;
