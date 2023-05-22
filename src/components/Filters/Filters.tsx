import { useEffect } from "react";
import { Box, Button, Combobox, Input, Multiselect, Select, Text } from "..";
import { useEvents } from "./useEvents";

type Operator = {
  type: "operator";
  value: string;
  label: string;
};

type Row = {
  type: "row";
  left: {
    name: string;
    value: string;
    options: Array<{ value: string; label: string }>;
  };
  condition: {
    options: Array<{ value: string; label: string }>;
    value: string;
  };
  right: Right;
};

type Right =
  | {
      type: "input";
      value: number;
    }
  | {
      type: "multiselect";
      value: string[];
      options: Array<{ value: string; label: string }>;
    }
  | {
      type: "combobox";
      value: string;
      options: Array<{ value: string; label: string }>;
    }
  | {
      type: "select";
      value: string;
      options: Array<{ value: string; label: string }>;
    };

export type Props = {
  value: Array<Row | Operator>;
  onChange: (event: {
    type: "value";
    dataType: "select" | "combobox" | "input";
    value: string | string[];
    path: string;
  }) => void;
};

function publish(
  eventName: string,
  data: {
    type: "value";
    dataType: "select" | "combobox" | "input" | "multiselect";
    value: string | string[];
    path: string;
  }
) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export const Filters = ({ value, onChange }: Props) => {
  useEffect(() => {
    document.addEventListener("filterChange", (event: any) => {
      onChange(event.detail);
    });
  }, [onChange]);

  // const {wrapper, dispatchFilterChangeEvent} = useEvents({ onChange });

  return (
    <Box
      display="grid"
      __gridTemplateColumns="repeat(2, auto)"
      __placeItems="center self-start"
      gap={3}
    >
      {value.map((item, idx) =>
        item.type === "operator" ? (
          <Operator key={idx} {...item} />
        ) : (
          <Row key={idx} {...item} index={idx} />
        )
      )}
    </Box>
  );
};

const Row = ({ left, condition, right, index }: Row & { index: number }) => {
  return (
    <Box display="grid" gap={3} __gridTemplateColumns="repeat(3, 1fr)">
      <Combobox
        value={left.value}
        options={left.options}
        onChange={(e) => {
          publish("filterChange", {
            type: "value",
            dataType: "combobox",
            value: e as string,
            path: `${index}.left.value`,
          });
        }}
      />
      <Select
        value={condition.value}
        options={condition.options}
        onChange={(e) => {
          publish("filterChange", {
            type: "value",
            dataType: "combobox",
            value: e as string,
            path: `${index}.condition.value`,
          });
        }}
      />
      <Right {...right} index={index} />
    </Box>
  );
};

const Operator = ({ label }: Operator) => {
  return <Text>{label}</Text>;
};

const Right = (props: Right & { index: number }) => {
  switch (props.type) {
    case "input":
      return (
        <Input
          value={props.value}
          onChange={(e) => {
            publish("filterChange", {
              type: "value",
              dataType: "input",
              value: e.target.value,
              path: `${props.index}.right.value`,
            });
          }}
        />
      );
    case "multiselect":
      return (
        <Multiselect
          value={props.value}
          options={props.options}
          onChange={(e) =>
            publish("filterChange", {
              type: "value",
              dataType: "multiselect",
              value: e,
              path: `${props.index}.right.value`,
            })
          }
        />
      );
    case "combobox":
      return (
        <Combobox
          value={props.value}
          options={props.options}
          onChange={(e) =>
            publish("filterChange", {
              type: "value",
              dataType: "combobox",
              value: e as string,
              path: `${props.index}.right.value`,
            })
          }
        />
      );
    case "select":
      return (
        <Select
          value={props.value}
          options={props.options}
          onChange={(e) =>
            publish("filterChange", {
              type: "value",
              dataType: "select",
              value: e as string,
              path: `${props.index}.right.value`,
            })
          }
        />
      );
    default:
      return null;
  }
};
