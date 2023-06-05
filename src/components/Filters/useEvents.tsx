import { useEffect, useRef } from "react";
import { Row } from "./Filters";

export interface FilterEvent extends Event {
  detail?: {
    type:
      | "update.leftOperator"
      | "update.condition"
      | "update.rightOperator"
      | "remove"
      | "add";
    value?: string | string[];
    path?: string;
    rowType: number;
  };
}

export type Context = {
  updateRightOperator: () => Array<Row | string>;
  updateCondition: (data?: UpdateConditionProps) => Array<Row | string>;
  updateLeftOperator: (data: UpdateLeftOperatorProps) => Array<Row | string>;
  addRow: () => Array<Row | string>;
  removeRow: () => Array<Row | string>;
};

type UpdateConditionProps = {
  options?: Array<{ value: string; label: string }>;
  value: string | string[];
};

type UpdateLeftOperatorProps = {
  condition: {
    options: Array<{ value: string; label: string; type: string }>;
    selected: {
      value: string;
      conditionValue: string;
    };
  };
};

type UseEventsProps = {
  onChange: (event: FilterEvent["detail"]) => void;
};

const eventName = "filterChange";

export const useEvents = ({ onChange }: UseEventsProps) => {
  const wrapper = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleChange = (event: FilterEvent) => {
      onChange(event.detail);
    };

    const element = wrapper?.current;

    element?.addEventListener(eventName, handleChange);
    return () => {
      element?.removeEventListener(eventName, handleChange);
    };
  }, [onChange]);

  const dispatchFilterChangeEvent = ({ ...data }: FilterEvent["detail"]) => {
    const event = new CustomEvent(eventName, { detail: data });
    wrapper?.current?.dispatchEvent(event);
  };

  return {
    dispatchFilterChangeEvent,
    wrapper,
  };
};
