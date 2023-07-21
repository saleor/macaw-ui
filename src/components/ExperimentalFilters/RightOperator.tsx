import { Box, DynamicCombobox, Input, DynamicMultiselect, Select } from "..";

import { FilterEventEmitter } from "./EventEmitter";
import { SelectedOperator } from "./types";
import {
  isCombobox,
  isDate,
  isDateRange,
  isDateTime,
  isDateTimeRange,
  isMultiselect,
  isNumberInput,
  isNumberRange,
  isSelect,
  isTextInput,
} from "./operators";

type RightOperatorProps = {
  index: number;
  selected: SelectedOperator;
  emitter: FilterEventEmitter;
  error: boolean;
  helperText: string;
  disabled: boolean;
};

export const RightOperator = ({
  index,
  selected,
  emitter,
  error,
  disabled,
  helperText,
}: RightOperatorProps) => {
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
        error={error}
        helperText={helperText}
        disabled={disabled}
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
        error={error}
        helperText={helperText}
        disabled={disabled}
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
        error={error}
        helperText={helperText}
        disabled={disabled}
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
        error={error}
        helperText={helperText}
        disabled={disabled}
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
        error={error}
        helperText={helperText}
        disabled={disabled}
      />
    );
  }

  // TODO: extract to own component after acceptance
  if (isNumberRange(selected)) {
    const [start, end] = selected.value;
    return (
      <Box display="flex" gap={0.5} alignItems="center" flexWrap="wrap">
        <Input
          value={start}
          type="number"
          onChange={(e) => {
            emitter.changeRightOperator(index, [e.target.value, end]);
          }}
          error={!!error}
          helperText={error}
          disabled={disabled}
        />
        <Input
          value={end}
          type="number"
          onChange={(e) => {
            emitter.changeRightOperator(index, [start, e.target.value]);
          }}
          error={error}
          helperText={helperText}
          disabled={disabled}
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
        error={error}
        helperText={helperText}
        disabled={disabled}
      />
    );
  }

  if (isDateTime(selected)) {
    return (
      <Input
        type="datetime-local"
        value={selected.value}
        onChange={(e) => {
          emitter.changeRightOperator(index, e.target.value);
        }}
        error={error}
        helperText={helperText}
        disabled={disabled}
      />
    );
  }

  if (isDateRange(selected)) {
    const [start, end] = selected.value;
    return (
      <Box display="flex" gap={0.5} alignItems="center" flexWrap="wrap">
        <Input
          value={start}
          type="date"
          onChange={(e) => {
            emitter.changeRightOperator(index, [e.target.value, end]);
          }}
          error={!!error}
          helperText={error}
          disabled={disabled}
          width="100%"
        />
        <Input
          value={end}
          type="date"
          onChange={(e) => {
            emitter.changeRightOperator(index, [start, e.target.value]);
          }}
          error={error}
          helperText={helperText}
          disabled={disabled}
          width="100%"
        />
      </Box>
    );
  }

  if (isDateTimeRange(selected)) {
    const [start, end] = selected.value;
    return (
      <Box display="flex" gap={0.5} alignItems="center" flexWrap="wrap">
        <Input
          value={start}
          type="datetime-local"
          onChange={(e) => {
            emitter.changeRightOperator(index, [e.target.value, end]);
          }}
          error={!!error}
          helperText={error}
          disabled={disabled}
          width="100%"
        />
        <Input
          value={end}
          type="datetime-local"
          onChange={(e) => {
            emitter.changeRightOperator(index, [start, e.target.value]);
          }}
          error={error}
          helperText={helperText}
          disabled={disabled}
          width="100%"
        />
      </Box>
    );
  }

  return <Input disabled />;
};
