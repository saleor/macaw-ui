import { DynamicCombobox, Box, Select, Button, RemoveIcon } from "..";

import { ConditionOption, FilterEventEmitter } from "./EventEmitter";
import { ExperimentalFiltersProps } from "./Root";
import { RightOperator, SelectedOperator } from "./RightOperator";
import { InternalConstrain } from "./constrains";

type DisabledScope = "left" | "right" | "condition";

export type Row = {
  value: { label: string; value: string; type: string } | null;
  loading?: boolean;
  constraint?: {
    dependsOn: string;
    disabled?: DisabledScope[];
    removable?: boolean;
  };
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

type RowProps = {
  item: Row;
  index: number;
  leftOptions: ExperimentalFiltersProps["leftOptions"];
  emitter: FilterEventEmitter;
  error?: ExperimentalFiltersProps["error"];
  constrain: InternalConstrain;
};

export const RowComponent = ({
  item,
  index,
  leftOptions,
  emitter,
  error,
  constrain,
}: RowProps) => {
  return (
    <Box
      display="grid"
      gap={0.5}
      __gridTemplateColumns={
        constrain.showRemoveButton
          ? "200px 120px 200px auto"
          : "200px 120px 1fr"
      }
      placeItems="center"
      alignItems="start"
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
        error={!!error?.leftText}
        helperText={error?.leftText}
        disabled={constrain?.disableLeftOperator}
      />
      <Select
        value={item.condition.selected.conditionValue}
        options={item.condition.options}
        disabled={constrain?.disableCondition}
        onChange={(value) => {
          emitter.changeCondition(index, value);
        }}
        onFocus={() => {
          emitter.focusCondition(index);
        }}
        onBlur={() => {
          emitter.blurCondition(index);
        }}
        error={!!error?.conditionText}
        helperText={error?.conditionText}
      />

      {item.condition?.selected && (
        <RightOperator
          selected={item.condition?.selected}
          index={index}
          emitter={emitter}
          error={error?.rightText}
          disabled={constrain?.disableRightOperator}
        />
      )}

      {constrain.showRemoveButton && (
        <Button
          variant="tertiary"
          icon={<RemoveIcon />}
          onClick={() => emitter.removeRow(index)}
        />
      )}
    </Box>
  );
};
