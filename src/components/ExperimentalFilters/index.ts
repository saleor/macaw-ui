export type { ExperimentalFiltersProps } from "./Root";
export type {
  Row,
  FilterEvent,
  SelectedOperator,
  RightOperatorOption,
  LeftOperatorOption,
  ConditionOption,
  Error,
} from "./types";

import { Root } from "./Root";
import { AddRowButton, ConfirmButton, Footer, ClearButton } from "./Footer";

export const _ExperimentalFilters = Object.assign(Root, {
  AddRowButton,
  ConfirmButton,
  ClearButton,
  Footer,
});
