import {
  DynamicCombobox,
  Input,
  DynamicMultiselect,
  Select,
  RangeInput,
} from "..";

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
import { RangeInputWrapper } from "./RangeInputWrapper";

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

  if (isNumberRange(selected)) {
    console.log(error, helperText);
    return (
      <RangeInputWrapper>
        <RangeInput
          value={selected.value}
          onChange={(value) => {
            emitter.changeRightOperator(index, value);
          }}
          type="number"
          error={!!error}
          helperText={helperText}
          disabled={disabled}
          width="100%"
        />
      </RangeInputWrapper>
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
    return (
      <RangeInputWrapper>
        <RangeInput
          value={selected.value}
          onChange={(value) => {
            emitter.changeRightOperator(index, value);
          }}
          type="date"
          error={!!error}
          helperText={helperText}
          disabled={disabled}
          width="100%"
        />
      </RangeInputWrapper>
    );
  }

  if (isDateTimeRange(selected)) {
    return (
      <RangeInputWrapper>
        <RangeInput
          value={selected.value}
          onChange={(value) => {
            emitter.changeRightOperator(index, value);
          }}
          type="datetime-local"
          error={!!error}
          helperText={helperText}
          disabled={disabled}
          width="100%"
        />
      </RangeInputWrapper>
    );
  }

  return <Input disabled value={selected.value} />;
};
