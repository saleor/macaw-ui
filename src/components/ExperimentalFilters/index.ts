export type { FilterEvent } from "./useEvents";
export type { ExperimentalFiltersProps } from "./Root";
export type { SelectedOperator } from "./RightOperator";
export type { Row } from "./Row";
export type {
  RightOperatorOption,
  LeftOperatorOption,
  ConditionOption,
} from "./EventEmitter";

import { Root } from "./Root";
import { AddRowButton, ConfirmButton, Footer } from "./Footer";
import { Skeleton } from "./Skeleton";

export const _ExperimentalFilters = Object.assign(Root, {
  AddRowButton,
  ConfirmButton,
  Footer,
  Skeleton,
});
