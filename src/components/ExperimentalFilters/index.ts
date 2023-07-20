export type { FilterEvent } from "./useEvents";
export type { ExperimentalFiltersProps } from "./Root";
export type { SelectedOperator } from "./RightOperator";
export type { Row } from "./Row";
export type {
  RightOperatorOption,
  LeftOperatorOption,
  ConditionOption,
} from "./EventEmitter";

import { Skeleton } from "../Skeleton/Skeleton";
import { Root } from "./Root";
import { AddRowButton, ConfirmButton, Footer, ClearButton } from "./Footer";

export const _ExperimentalFilters = Object.assign(Root, {
  AddRowButton,
  ConfirmButton,
  ClearButton,
  Footer,
  Skeleton,
});
