export type {
  Row,
  Props,
  FooterProps,
  AddRowButtonProps,
  ConfirmButtonProps,
} from "./ExperimentalFilters";
export type { FilterEvent } from "./useEvents";
import {
  _ExperimentalFilters as Root,
  AddRowButton,
  ConfirmButton,
  Footer,
} from "./ExperimentalFilters";

export const _ExperimentalFilters = Object.assign(Root, {
  AddRowButton,
  ConfirmButton,
  Footer,
});
