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

import { FilterEvent, useEvents } from "./useEvents";

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
  conditionValue: { label: string; value: string };
  loading?: boolean;
};

export type Props = {
  value: Array<Row | string>;
  leftOptions: Array<{ value: string; label: string; type: string }>;
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
          dispatchFilterChangeEvent({ type: "row.add", rowType: "1" })
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
  leftOptions: Props["leftOptions"];
}) => {
  return (
    <Box display="grid" gap={1} __gridTemplateColumns="repeat(4, 1fr)">
      <Combobox
        value={item.value}
        options={leftOptions}
        loading={item.loading}
        onChange={(value) => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onChange",
            value: value,
            path: `${index}`,
            rowType:
              leftOptions.find((option) => option.value === value.value)
                ?.type ?? "any",
          });
        }}
        onInputValueChange={(value) => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onInputValueChange",
            value: value.toString(),
            path: `${index}`,
          });
        }}
        onFocus={() => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onFocus",
            path: `${index}`,
          });
        }}
        onBlur={() => {
          dispatchFilterChangeEvent({
            type: "leftOperator.onBlur",
            path: `${index}`,
          });
        }}
      />
      {item.condition?.selected && (
        <Select
          value={item.condition?.selected.conditionValue}
          options={item.condition?.options ?? []}
          loading={item.condition?.loading}
          onChange={(value) => {
            dispatchFilterChangeEvent({
              type: "condition.onChange",
              value: value,
              path: `${index}.condition.selected`,
            });
          }}
          onScrollEnd={() => {
            dispatchFilterChangeEvent({
              type: "condition.onScrollEnd",
              path: `${index}.condition.selected`,
            });
          }}
          onFocus={() => {
            dispatchFilterChangeEvent({
              type: "condition.onFocus",
              path: `${index}.condition.selected`,
            });
          }}
          onBlur={() => {
            dispatchFilterChangeEvent({
              type: "condition.onBlur",
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
          dispatchFilterChangeEvent({
            type: "row.remove",
            path: `${index}`,
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
    (option) =>
      option.value === props.item.condition?.selected.conditionValue.value
  );

  if (!selectedOption) {
    return null;
  }

  if (!props.item.condition) {
    return null;
  }

  switch (selectedOption.type) {
    case "text":
      return (
        <Input
          value={props.item.condition?.selected.value as string}
          onChange={(e) => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "number":
      return (
        <Input
          type="number"
          value={props.item.condition?.selected.value as any}
          onChange={(e) => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value: e.target.value,
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "multiselect":
      return (
        <Multiselect
          value={props.item.condition?.selected.value as any}
          options={props.item.condition?.selected.options ?? []}
          loading={props.item.condition?.selected.loading}
          onChange={(e) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value: e,
              path: `${props.index}.condition.selected.value`,
            })
          }
          onInputValueChange={(value) => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onInputValueChange",
              value: value.toString(),
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "combobox":
      return (
        <Combobox
          value={props.item.condition?.selected.value as any}
          options={props.item.condition?.selected.options ?? []}
          loading={props.item.condition?.selected.loading}
          onChange={(value) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value,
              path: `${props.index}.condition.selected.value`,
            })
          }
          onInputValueChange={(value) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onInputValueChange",
              value: value.toString(),
              path: `${props.index}.condition.selected.value`,
            })
          }
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "select":
      return (
        <Select
          value={props.item.condition?.selected.value as any}
          options={props.item.condition?.selected.options ?? []}
          loading={props.item.condition?.selected.loading}
          onChange={(value) =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onChange",
              value,
              path: `${props.index}.condition.selected.value`,
            })
          }
          onScrollEnd={() =>
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onScrollEnd",
              path: `${props.index}.condition.selected.value`,
            })
          }
          onFocus={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onFocus",
              path: `${props.index}.condition.selected.value`,
            });
          }}
          onBlur={() => {
            props.dispatchFilterChangeEvent({
              type: "rightOperator.onBlur",
              path: `${props.index}.condition.selected.value`,
            });
          }}
        />
      );
    case "number.range":
      return (
        <Box display="flex" gap={2}>
          <Input
            // @ts-ignore
            value={props.item.condition?.selected.value.start}
            type="number"
            onChange={(e) => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onChange",
                value: e.target.value,
                path: `${props.index}.condition.selected.value.start`,
              });
            }}
            onFocus={() => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onFocus",
                path: `${props.index}.condition.selected.value.start`,
              });
            }}
            onBlur={() => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onBlur",
                path: `${props.index}.condition.selected.value.start`,
              });
            }}
          />
          <Input
            // @ts-ignore
            value={props.item.condition?.selected.value.end}
            type="number"
            onChange={(e) => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onChange",
                value: e.target.value,
                path: `${props.index}.condition.selected.value.end`,
              });
            }}
            onFocus={() => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onFocus",
                path: `${props.index}.condition.selected.value.end`,
              });
            }}
            onBlur={() => {
              props.dispatchFilterChangeEvent({
                type: "rightOperator.onBlur",
                path: `${props.index}.condition.selected.value.end`,
              });
            }}
          />
        </Box>
      );
    default:
      return null;
  }
};
