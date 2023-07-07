import { DynamicCombobox, Box, Select, Button, RemoveIcon } from "..";

import { ConditionOption, FilterEventEmitter } from "./EventEmitter";
import { ExperimentalFiltersProps } from "./Root";
import { RightOperator, SelectedOperator } from "./RightOperator";

type RowProps = {
  item: Row;
  index: number;
  leftOptions: ExperimentalFiltersProps["leftOptions"];
  emitter: FilterEventEmitter;
};

export type Row = {
  value: { label: string; value: string; type: string } | null;
  loading?: boolean;
  condition: {
    loading?: boolean;
    options: Array<
      ConditionOption<
        | "text"
        | "number"
        | "multiselect"
        | "combobox"
        | "select"
        | "number.range"
        | "date"
      >
    >;
    selected: SelectedOperator;
  };
};

export const Row = ({ item, index, leftOptions, emitter }: RowProps) => {
  return (
    <Box
      display="grid"
      gap={1}
      __gridTemplateColumns="200px 200px 200px auto"
      placeItems="center"
    >
      <DynamicCombobox
        value={item.value}
        options={leftOptions}
        loading={item.loading}
        onChange={(value) => {
          emitter.changeLeftOperator(
            index,
            value,
            leftOptions.find((option) => option.value === value.value)?.type ??
              "any"
          );
        }}
        onInputValueChange={(value) => {
          emitter.inputChangeLeftOperator(index, value);
        }}
        onFocus={() => {
          emitter.focusLeftOperator(index);
        }}
        onBlur={() => {
          emitter.blurLeftOperator(index);
        }}
      />
      <Select
        value={item.condition.selected.conditionValue}
        options={item.condition.options}
        disabled={item.condition.loading || !item.condition.options.length}
        onChange={(value) => {
          emitter.changeCondition(index, value);
        }}
        onFocus={() => {
          emitter.focusCondition(index);
        }}
        onBlur={() => {
          emitter.blurCondition(index);
        }}
      />

      {item.condition?.selected && (
        <RightOperator
          selected={item.condition?.selected}
          index={index}
          emitter={emitter}
        />
      )}

      <Button
        variant="tertiary"
        icon={<RemoveIcon />}
        onClick={() => emitter.removeRow(index)}
      />
    </Box>
  );
};
