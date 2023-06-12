import { UseComboboxPropGetters } from "downshift7";
import { ReactNode } from "react";

export type MultiselectOption = { label: string; value: string };

export type ChangeHandler = (selectedItems: MultiselectOption[]) => void;
export type RenderEndAdornmentType = (
  ...props: ReturnType<
    UseComboboxPropGetters<MultiselectOption>["getToggleButtonProps"]
  >
) => ReactNode;
