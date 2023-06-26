/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Box,
  Button,
  Combobox,
  Input,
  Multiselect,
  RemoveIcon,
  Select,
  Text,
} from "..";
import { FilterEventEmitter } from "./EventEmitter";

import { FilterEvent, useEventEmitter } from "./useEvents";

export type Row = {
  value: { label: string; value: string; type: string } | null;
  loading?: boolean;
  condition?: {
    loading?: boolean;
    options: Array<{ value: string; label: string; type: string }>;
    selected: Right;
  };
};

type Right = {
  value:
    | string
    | { label: string; value: string }[]
    | null
    | { start: string; end: string };
  options?: Array<{ value: string; label: string }>;
  conditionValue: { label: string; value: string; type: string };
  loading?: boolean;
};

export type Props = {
  value: Array<Row | string>;
  leftOptions: Array<{ value: string; label: string; type: string }>;
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
}: Props) => {
  const { emitter } = useEventEmitter({
    onChange,
  });

  return (
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
      <Button onClick={() => emitter.addRow()} variant="secondary">
        Add row
      </Button>
    </Box>
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
      __gridTemplateColumns="repeat(4, 1fr)"
      placeItems="center"
    >
      <Combobox
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
      {item.condition?.selected && (
        <Select
          value={item.condition?.selected.conditionValue}
          options={item.condition?.options ?? []}
          loading={item.condition?.loading}
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
      )}

      <Right item={item} index={index} emitter={emitter} />

      <Button
        variant="tertiary"
        icon={<RemoveIcon />}
        onClick={() => emitter.removeRow(index)}
      />
    </Box>
  );
};

const Right = ({
  index,
  item,
  emitter,
}: {
  index: number;
  item: Row;
  emitter: FilterEventEmitter;
}) => {
  if (!item.condition) {
    return null;
  }

  switch (item.condition.selected.conditionValue.type) {
    case "text":
      return (
        <Input
          value={item.condition?.selected.value as string}
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
    case "number":
      return (
        <Input
          type="number"
          value={item.condition?.selected.value as any}
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
    case "multiselect":
      return (
        <Multiselect
          value={item.condition?.selected.value as any}
          options={item.condition?.selected.options ?? []}
          loading={item.condition?.selected.loading}
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
    case "combobox":
      return (
        <Combobox
          value={item.condition?.selected.value as any}
          options={item.condition?.selected.options ?? []}
          loading={item.condition?.selected.loading}
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
    case "select":
      return (
        <Select
          value={item.condition?.selected.value as any}
          options={item.condition?.selected.options ?? []}
          loading={item.condition?.selected.loading}
          onChange={(value) => emitter.changeRightOperator(index, value)}
          onFocus={() => {
            emitter.focusRightOperator(index);
          }}
          onBlur={() => {
            emitter.blurRightOperator(index);
          }}
        />
      );
    case "number.range":
      return (
        <Box display="flex" gap={2}>
          <Input
            // @ts-ignore
            value={item.condition?.selected.value.start}
            type="number"
            onChange={(e) => {
              emitter.changeRightOperatorStart(index, e.target.value);
            }}
          />
          <Input
            // @ts-ignore
            value={item.condition?.selected.value.end}
            type="number"
            onChange={(e) => {
              emitter.changeRightOperatorEnd(index, e.target.value);
            }}
          />
        </Box>
      );
    default:
      return null;
  }
};
