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
  type: number;
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
      <Button
        onClick={() =>
          dispatchFilterChangeEvent({ type: "row.add", rowType: 1 })
        }
      >
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
            type: "leftOperator.onChange",
            value: e as string,
            path: `${index}`,
            rowType: item.type,
          });
        }}
        onInputValueChange={(value) => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onInputValueChange",
            value: value.toString(),
            path: `${index}`,
            rowType: item.type,
          });
        }}
        onFocus={() => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onFocus",
            path: `${index}`,
            rowType: item.type,
          });
        }}
        onBlur={() => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onBlur",
            path: `${index}`,
            rowType: item.type,
          });
        }}
      />
      {item.condition?.selected && (
        <Select
          value={item.condition?.selected.conditionValue ?? ""}
          options={item.condition?.options ?? []}
          onChange={(value) => {
            dispatchFilterChangeEvent({
              type: "condition.onChange",
              value: value as string,
              path: `${index}.condition.selected`,
              rowType: item.type,
            });
          }}
          onScrollEnd={() => {
            dispatchFilterChangeEvent({
              type: "condition.onScrollEnd",
              path: `${index}.condition.selected`,
              rowType: item.type,
            });
          }}
          onFocus={() => {
            dispatchFilterChangeEvent({
              type: "condition.onFocus",
              path: `${index}.condition.selected`,
              rowType: item.type,
            });
          }}
          onBlur={() => {
            dispatchFilterChangeEvent({
              type: "condition.onBlur",
              path: `${index}.condition.selected`,
              rowType: item.type,
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
          dispatchFilterChangeEvent({
            type: "row.remove",
            path: `${index}`,
            rowType: item.type,
          })
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
              type: "rightOperator.onChange",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
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
              type: "rightOperator.onChange",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
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
              type: "rightOperator.onChange",
              value: e,
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            })
          }
          onInputValueChange={(value) => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onInputValueChange",
              value: value.toString(),
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
        />
      );
    case "combobox":
      return (
        <Combobox
          value={props.item.condition?.selected.value as string}
          options={props.item.condition?.selected.options ?? []}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value: e as string,
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            })
          }
          onInputValueChange={(value) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onInputValueChange",
              value: value.toString(),
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            })
          }
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
        />
      );
    case "select":
      return (
        <Select
          value={props.item.condition?.selected.value as string}
          options={props.item.condition?.selected.options ?? []}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value: e as string,
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            })
          }
          onScrollEnd={() =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onScrollEnd",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            })
          }
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
              rowType: props.item.type,
            });
          }}
        />
      );
    default:
      return null;
  }
};
