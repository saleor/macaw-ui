export type Option = { label: string; value: string };
export type SingleChangeHandler = (selectedItem: Option) => void;
export type MultiChangeHandler = (selectedItems: Option[]) => void;
