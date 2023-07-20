import { DynamicCombobox, Box, Select, Button, RemoveIcon } from "..";

import { FilterEventEmitter } from "./EventEmitter";
import { ExperimentalFiltersProps } from "./Root";
import { RightOperator } from "./RightOperator";
import { InternalConstrain } from "./constrains";
import { Row } from "./types";

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
