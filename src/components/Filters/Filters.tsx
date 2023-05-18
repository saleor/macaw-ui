import { Box, Combobox, Input, Multiselect, Select, Text } from "..";

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
};

export const Filters = ({ value }: Props) => {
  return (
    <Box>
      {value.map((item, idx) =>
        item.type === "operator" ? (
          <Operator key={idx} {...item} />
        ) : (
          <Row key={idx} {...item} />
        )
      )}
    </Box>
  );
};

const Row = ({ left, condition, right }: Row) => {
  return (
    <Box display="flex" gap={3}>
      <Combobox value={left.value} options={left.options} />
      <Select value={condition.value} options={condition.options} />
      {/* <Input value={right.value} /> */}
      <Right {...right} />
    </Box>
  );
};

const Operator = ({ label }: Operator) => {
  return <Text>{label}</Text>;
};

const Right = (props: Right) => {
  switch (props.type) {
    case "input":
      return <Input value={props.value} />;
    case "multiselect":
      return <Multiselect value={props.value} options={props.options} />;
    case "combobox":
      return <Combobox value={props.value} options={props.options} />;
    case "select":
      return <Select value={props.value} options={props.options} />;
    default:
      return null;
  }
};
