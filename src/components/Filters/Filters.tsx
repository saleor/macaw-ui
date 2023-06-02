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

import { FilterEvent, useEvents } from "./useEvents";

export type Row = {
  value: string;
  condition?: {
    options: Array<{ value: string; label: string; type: string }>;
    selected: Right;
  };
};

type Right = {
  value: string | string[];
  options?: Array<{ value: string; label: string }>;
  conditionValue: string;
};

export type Props = {
  value: Array<Row | string>;
  leftOptions: Array<{ value: string; label: string }>;
  onChange: (event: FilterEvent["detail"]) => void;
};

export const _ExperimentalFilters = ({
  value,
  onChange,
  leftOptions,
}: Props) => {
  const { wrapper, dispatchFilterChangeEvent } = useEvents({
    onChange,
  });

  return (
    <Box
      display="grid"
      __gridTemplateColumns="repeat(2, auto)"
      __placeItems="center self-start"
      gap={1}
      ref={wrapper}
    >
      <Text>WHERE</Text>
      {value.map((item, idx) =>
        typeof item === "string" ? (
          <Text key={idx}>{item}</Text>
        ) : (
          <Row
            key={idx}
            item={item}
            index={idx}
            dispatchFilterChangeEvent={dispatchFilterChangeEvent}
            leftOptions={leftOptions}
          />
        )
      )}
      <Button onClick={() => dispatchFilterChangeEvent({ type: "add" })}>
        Add row
      </Button>
    </Box>
  );
};

const Row = ({
  item,
  index,
  dispatchFilterChangeEvent,
  leftOptions,
}: {
  item: Row;
  index: number;
  dispatchFilterChangeEvent: (data: FilterEvent["detail"]) => void;
  leftOptions: Array<{ value: string; label: string }>;
}) => {
  return (
    <Box display="grid" gap={1} __gridTemplateColumns="repeat(4, 1fr)">
      <Combobox
        value={item.value}
        options={leftOptions}
        onChange={(e) => {
          dispatchFilterChangeEvent({
            type: "update.leftOperator",
            value: e as string,
            path: `${index}`,
          });
        }}
      />
      {item.condition?.selected && (
        <Select
          value={item.condition?.selected.conditionValue ?? ""}
          options={item.condition?.options ?? []}
          onChange={(value) => {
            dispatchFilterChangeEvent({
              type: "update.condition",
              value: value as string,
              path: `${index}.condition.selected`,
            });
          }}
        />
      )}

      <Right
        item={item}
        index={index}
        dispatchFilterChangeEvent={dispatchFilterChangeEvent}
      />

      <Button
        variant="secondary"
        icon={<RemoveIcon />}
        onClick={() =>
          dispatchFilterChangeEvent({ type: "remove", path: `${index}` })
        }
      />
    </Box>
  );
};

const Right = (props: {
  index: number;
  item: Row;
  dispatchFilterChangeEvent: (data: FilterEvent["detail"]) => void;
}) => {
  const selectedOption = props.item.condition?.options?.find(
    (option) => option.value === props.item.condition?.selected.conditionValue
  );

  if (!selectedOption) {
    return null;
  }

  switch (selectedOption.type) {
    case "input.text":
      return (
        <Input
          value={props.item.condition?.selected.value}
          onChange={(e) => {
            props.dispatchFilterChangeEvent({
              type: "update.rightOperator",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "input.number":
      return (
        <Input
          type="number"
          value={props.item.condition?.selected.value}
          onChange={(e) => {
            props.dispatchFilterChangeEvent({
              type: "update.rightOperator",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "multiselect":
      return (
        <Multiselect
          value={props.item.condition?.selected.value as string[]}
          options={props.item.condition?.selected.options ?? []}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "update.rightOperator",
              value: e,
              path: `${props.index}.condition.selected.value`,
            })
          }
        />
      );
    case "combobox":
      return (
        <Combobox
          value={props.item.condition?.selected.value as string}
          options={props.item.condition?.selected.options ?? []}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "update.rightOperator",
              value: e as string,
              path: `${props.index}.condition.selected.value`,
            })
          }
        />
      );
    case "select":
      return (
        <Select
          value={props.item.condition?.selected.value as string}
          options={props.item.condition?.selected.options ?? []}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "update.rightOperator",
              value: e as string,
              path: `${props.index}.condition.selected.value`,
            })
          }
        />
      );
    default:
      return null;
  }
};
