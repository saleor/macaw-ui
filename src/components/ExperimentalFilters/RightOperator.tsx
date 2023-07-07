import { Box, DynamicCombobox, Input, DynamicMultiselect, Select } from "..";

import {
  ConditionOption,
  FilterEventEmitter,
  RightOperatorOption,
} from "./EventEmitter";

type RightOperatorProps = {
  index: number;
  selected: SelectedOperator;
  emitter: FilterEventEmitter;
};

export type SelectedOperator =
  | InputOperator
  | MultiselectOperator
  | ComboboxOperator
  | SelectOperator
  | NumberRangeOperator
  | DateOperator;

type InputOperator = {
  value: string;
  conditionValue: ConditionOption<"text" | "number"> | null;
};

type MultiselectOperator = {
  value: RightOperatorOption[];
  conditionValue: ConditionOption<"multiselect"> | null;
  options: Array<RightOperatorOption>;
  loading?: boolean;
};

type ComboboxOperator = {
  value: RightOperatorOption;
  conditionValue: ConditionOption<"combobox"> | null;
  options: Array<RightOperatorOption>;
  loading?: boolean;
};

type SelectOperator = {
  value: RightOperatorOption;
  conditionValue: ConditionOption<"select"> | null;
  options: Array<RightOperatorOption>;
};

type NumberRangeOperator = {
  value: { start: string; end: string };
  conditionValue: ConditionOption<"number.range"> | null;
};

type DateOperator = {
  value: string;
  conditionValue: ConditionOption<"date"> | null;
};

const isTextInput = (value: SelectedOperator): value is InputOperator =>
  value.conditionValue?.type === "text";

const isNumberInput = (value: SelectedOperator): value is InputOperator =>
  value.conditionValue?.type === "number";

const isMultiselect = (value: SelectedOperator): value is MultiselectOperator =>
  value.conditionValue?.type === "multiselect";

const isCombobox = (value: SelectedOperator): value is ComboboxOperator =>
  value.conditionValue?.type === "combobox";

const isSelect = (value: SelectedOperator): value is SelectOperator =>
  value.conditionValue?.type === "select";

const isNumberRange = (value: SelectedOperator): value is NumberRangeOperator =>
  value.conditionValue?.type === "number.range";

const isDate = (value: SelectedOperator): value is DateOperator =>
  value.conditionValue?.type === "date";

export const RightOperator = ({
  index,
  selected,
  emitter,
}: RightOperatorProps) => {
  if (selected.conditionValue === null) {
    return null;
  }

  if (isTextInput(selected)) {
    return (
      <Input
        value={selected.value}
        onChange={(e) => {
          emitter.changeRightOperator(index, e.target.value);
        }}
        onFocus={() => {
          emitter.focusRightOperator(index);
        }}
        onBlur={() => {
          emitter.blurRightOperator(index);
        }}
      />
    );
  }

  if (isNumberInput(selected)) {
    return (
      <Input
        type="number"
        value={selected.value}
        onChange={(e) => {
          emitter.changeRightOperator(index, e.target.value);
        }}
        onFocus={() => {
          emitter.focusRightOperator(index);
        }}
        onBlur={() => {
          emitter.blurRightOperator(index);
        }}
      />
    );
  }

  if (isMultiselect(selected)) {
    return (
      <DynamicMultiselect
        value={selected.value}
        options={selected.options ?? []}
        loading={selected.loading}
        onChange={(value) => emitter.changeRightOperator(index, value)}
        onInputValueChange={(value) => {
          emitter.inputChangeRightOperator(index, value);
        }}
        onFocus={() => {
          emitter.focusRightOperator(index);
        }}
        onBlur={() => {
          emitter.blurRightOperator(index);
        }}
      />
    );
  }

  if (isCombobox(selected)) {
    return (
      <DynamicCombobox
        value={selected.value}
        options={selected.options ?? []}
        loading={selected.loading}
        onChange={(value) => emitter.changeRightOperator(index, value)}
        onInputValueChange={(value) =>
          emitter.inputChangeRightOperator(index, value)
        }
        onFocus={() => {
          emitter.focusRightOperator(index);
        }}
        onBlur={() => {
          emitter.blurRightOperator(index);
        }}
      />
    );
  }

  if (isSelect(selected)) {
    return (
      <Select
        value={selected.value}
        options={selected.options ?? []}
        onChange={(value) => emitter.changeRightOperator(index, value)}
        onFocus={() => {
          emitter.focusRightOperator(index);
        }}
        onBlur={() => {
          emitter.blurRightOperator(index);
        }}
      />
    );
  }

  if (isNumberRange(selected)) {
    return (
      <Box display="flex" gap={2} alignItems="center">
        <Input
          value={selected.value.start}
          type="number"
          onChange={(e) => {
            emitter.changeRightOperatorStart(index, e.target.value);
          }}
        />
        <Box>-</Box>
        <Input
          value={selected.value.end}
          type="number"
          onChange={(e) => {
            emitter.changeRightOperatorEnd(index, e.target.value);
          }}
        />
      </Box>
    );
  }

  if (isDate(selected)) {
    return (
      <Input
        type="date"
        value={selected.value}
        onChange={(e) => {
          emitter.changeRightOperator(index, e.target.value);
        }}
      />
    );
  }

  return null;
};
