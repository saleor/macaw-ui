export type { ExperimentalFiltersProps } from "./Root";
export type { Row, FilterEvent } from "./types";

import { Root } from "./Root";
import { AddRowButton, ConfirmButton, Footer, ClearButton } from "./Footer";
import { Skeleton } from "./Skeleton";

export const _ExperimentalFilters = Object.assign(Root, {
  AddRowButton,
  ConfirmButton,
  ClearButton,
  Footer,
  Skeleton,
});
