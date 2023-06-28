import { ReactNode } from "react";
import {
  Box,
  Button,
  Input,
  DynamicCombobox,
  DynamicMultiselect,
  RemoveIcon,
  Select,
  Text,
} from "..";
import { FilterEventEmitter } from "./EventEmitter";
import { FilterContext, useFilterContext } from "./context";

import { FilterEvent, useEventEmitter } from "./useEvents";

export type Row = {
  value: { label: string; value: string; type: string } | null;
  loading?: boolean;
  condition: {
    loading?: boolean;
    options: Array<{
      value: string;
      label: string;
      type:
        | "text"
        | "number"
        | "multiselect"
        | "combobox"
        | "select"
        | "number.range";
    }>;
    selected: Right;
  };
};

type Right =
  | RightInput
  | RightMultiselect
  | RightCombobox
  | RightSelect
  | RightNumberRange;

type RightInput = {
  value: string;
  conditionValue: {
    label: string;
    value: string;
    type: "text" | "number";
  } | null;
};

type RightMultiselect = {
  value: { label: string; value: string }[];
  conditionValue: { label: string; value: string; type: "multiselect" } | null;
  options: Array<{ value: string; label: string }>;
  loading?: boolean;
};

type RightCombobox = {
  value: { label: string; value: string };
  conditionValue: { label: string; value: string; type: "combobox" } | null;
  options: Array<{ value: string; label: string }>;
  loading?: boolean;
};

type RightSelect = {
  value: { label: string; value: string };
  conditionValue: { label: string; value: string; type: "select" } | null;
  options: Array<{ value: string; label: string }>;
};

type RightNumberRange = {
  value: { start: string; end: string };
  conditionValue: { label: string; value: string; type: "number.range" } | null;
};

export type Props = {
  value: Array<Row | string>;
  leftOptions: Array<{ value: string; label: string; type: string }>;
  children?: ReactNode;
  onChange: (event: FilterEvent["detail"]) => void;
};

const locale: Record<string, string> = {
  WHERE: "Where",
  AND: "And",
  OR: "Or",
};

export const _ExperimentalFilters = ({
  value,
  onChange,
  leftOptions,
  children,
}: Props) => {
  const { emitter } = useEventEmitter({
    onChange,
  });

  return (
    <FilterContext.Provider value={{ emitter }}>
      <Box>
        <Box
          display="grid"
          __gridTemplateColumns="repeat(2, auto)"
          __placeItems="center self-start"
          gap={1}
        >
          <Text>{locale.WHERE}</Text>
          {value.map((item, idx) =>
            typeof item === "string" ? (
              <Text key={idx}>{locale[item]}</Text>
            ) : (
              <Row
                key={idx}
                item={item}
                index={idx}
                leftOptions={leftOptions}
                emitter={emitter}
              />
            )
          )}
        </Box>
        {children}
      </Box>
    </FilterContext.Provider>
  );
};

export interface FooterProps {
  children: ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <Box display="flex" justifyContent="space-between" paddingY={4}>
      {children}
    </Box>
  );
};

export interface AddRowButtonProps {
  children: ReactNode;
}

export const AddRowButton = ({ children }: AddRowButtonProps) => {
  const context = useFilterContext();

  return (
    <Button onClick={() => context.emitter.addRow()} variant="secondary">
      {children}
    </Button>
  );
};

export interface ConfirmButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const ConfirmButton = ({ children, onClick }: ConfirmButtonProps) => {
  return (
    <Button onClick={onClick} variant="primary">
      {children}
    </Button>
  );
};

const Row = ({
  item,
  index,
  leftOptions,
  emitter,
}: {
  item: Row;
  index: number;
  leftOptions: Props["leftOptions"];
  emitter: FilterEventEmitter;
}) => {
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
        <Right
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

const isTextInput = (value: Right): value is RightInput =>
  value.conditionValue?.type === "text";

const isNumberInput = (value: Right): value is RightInput =>
  value.conditionValue?.type === "number";

const isMultiselect = (value: Right): value is RightMultiselect =>
  value.conditionValue?.type === "multiselect";

const isCombobox = (value: Right): value is RightCombobox =>
  value.conditionValue?.type === "combobox";

const isSelect = (value: Right): value is RightSelect =>
  value.conditionValue?.type === "select";

const isNumberRange = (value: Right): value is RightNumberRange =>
  value.conditionValue?.type === "number.range";

const Right = ({
  index,
  selected,
  emitter,
}: {
  index: number;
  selected: Right;
  emitter: FilterEventEmitter;
}) => {
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
      <Box display="flex" gap={2}>
        <Input
          value={selected.value.start}
          type="number"
          onChange={(e) => {
            emitter.changeRightOperatorStart(index, e.target.value);
          }}
        />
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
  return null;
};
