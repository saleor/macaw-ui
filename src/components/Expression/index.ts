import { Root } from "./Root";
import { OperandDropdown, OperantDropdownItem } from "./OperandDropdown";
import { AutocompleteItem, OperandAutocomplete } from "./OperandAutocomplete";
import { Condition, ConditionItem } from "./Condition";
import { OperandText } from "./OperandText";
import { OperandNumber } from "./OperandNumber";
import { OperandRange } from "./OperandRange";

export const Expression = Object.assign(Root, {
  OperandDropdown,
  OperantDropdownItem,
  OperandAutocomplete,
  AutocompleteItem,
  Condition,
  ConditionItem,
  OperandText,
  OperandNumber,
  OperandRange,
});
