import { Option } from "..";

export type DisabledScope = "left" | "right" | "condition";

export type RightOperatorOption = Option & {
  slug: string;
};

export type LeftOperatorOption = Option & {
  type: string;
};

export type ConditionOption<T extends string> = Option & {
  type: T;
};

export type Error = {
  row: number;
  leftText?: string;
  conditionText?: string;
  rightText?: string;
};

type ConditionOptionTypes = ConditionOption<
  | "text"
  | "number"
  | "multiselect"
  | "combobox"
  | "select"
  | "number.range"
  | "date"
  | "datetime"
  | "date.range"
  | "datetime.range"
>;

export type Row = {
  value: { label: string; value: string; type: string } | null;
  loading?: boolean;
  constraint?: {
    dependsOn: string[];
    disabled?: DisabledScope[];
    removable?: boolean;
  };
  condition: {
    loading?: boolean;
    options: Array<ConditionOptionTypes>;
    selected: SelectedOperator;
  };
};

export type SelectedOperator =
  | InputOperator
  | MultiselectOperator
  | ComboboxOperator
  | SelectOperator
  | NumberRangeOperator
  | DateOperator
  | DateTimeOperator
  | DateRangeOperator
  | DateTimeRangeOperator;

export type InputOperator = {
  value: string;
  conditionValue: ConditionOption<"text" | "number"> | null;
};

export type MultiselectOperator = {
  value: RightOperatorOption[];
  conditionValue: ConditionOption<"multiselect"> | null;
  options: Array<RightOperatorOption>;
  loading?: boolean;
};

export type ComboboxOperator = {
  value: RightOperatorOption;
  conditionValue: ConditionOption<"combobox"> | null;
  options: Array<RightOperatorOption>;
  loading?: boolean;
};

export type SelectOperator = {
  value: RightOperatorOption;
  conditionValue: ConditionOption<"select"> | null;
  options: Array<RightOperatorOption>;
};

export type NumberRangeOperator = {
  value: [string, string];
  conditionValue: ConditionOption<"number.range"> | null;
};

export type DateOperator = {
  value: string;
  conditionValue: ConditionOption<"date"> | null;
};

export type DateTimeOperator = {
  value: string;
  conditionValue: ConditionOption<"datetime"> | null;
};

export type DateRangeOperator = {
  value: [string, string];
  conditionValue: ConditionOption<"date.range"> | null;
};

export type DateTimeRangeOperator = {
  value: [string, string];
  conditionValue: ConditionOption<"datetime.range"> | null;
};

export interface FilterEvent extends Event {
  detail?:
    | RowAddData
    | RowRemoveData
    | LeftOperatorChangeData
    | LeftOperatorFocusData
    | LeftOperatorBlurData
    | LeftOperatorInputValueChangeData
    | ConditionChangeData
    | ConditionFocusData
    | ConditionBlurData
    | RightOperatorChangeData
    | RightOperatorFocusData
    | RightOperatorBlurData
    | RightOperatorInputValueChangeData;
}

export type RowAddData = {
  type: "row.add";
  rowType: string;
};

export type RowRemoveData = {
  type: "row.remove";
  path: `${number}`;
  index: number;
};

export type LeftOperatorChangeData = {
  type: "leftOperator.onChange";
  path: `${number}`;
  index: number;
  value: LeftOperatorOption;
  rowType: string;
};

export type LeftOperatorFocusData = {
  type: "leftOperator.onFocus";
  path: `${number}`;
  index: number;
};

export type LeftOperatorBlurData = {
  type: "leftOperator.onBlur";
  path: `${number}`;
  index: number;
};

export type LeftOperatorInputValueChangeData = {
  type: "leftOperator.onInputValueChange";
  path: `${number}`;
  index: number;
  value: string;
};

export type ConditionChangeData = {
  type: "condition.onChange";
  path: `${number}.condition.selected`;
  index: number;
  value: ConditionOptionTypes;
};

export type ConditionFocusData = {
  type: "condition.onFocus";
  path: `${number}.condition.selected`;
  index: number;
};

export type ConditionBlurData = {
  type: "condition.onBlur";
  path: `${number}.condition.selected`;
  index: number;
};

export type RightOperatorChangeData = {
  type: "rightOperator.onChange";
  path: `${number}.condition.selected.value`;
  index: number;
  value:
    | string
    | RightOperatorOption[]
    | RightOperatorOption
    | [string, string];
};

export type RightOperatorFocusData = {
  type: "rightOperator.onFocus";
  path: `${number}.condition.selected.value`;
  index: number;
};

export type RightOperatorBlurData = {
  type: "rightOperator.onBlur";
  path: `${number}.condition.selected.value`;
  index: number;
};

export type RightOperatorInputValueChangeData = {
  type: "rightOperator.onInputValueChange";
  path: `${number}.condition.selected.value`;
  index: number;
  value: string;
};
