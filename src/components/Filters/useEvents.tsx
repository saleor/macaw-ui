import _ from "lodash";
import { useEffect, useRef } from "react";
import { Row } from "./Filters";

export interface FilterEvent extends Event {
  detail?: {
    type:
      | "updateLeftOperator"
      | "updateCondition"
      | "updateRightOperator"
      | "remove"
      | "add";
    value: string | string[];
    path: string;
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
  value: string[] | string;
  options?: Array<{ value: string; label: string }>;
};

type UpdateLeftOperatorProps = {
  name: string;
  condition: {
    options: Array<{ value: string; label: string }>;
    selected: {
      value: string;
      type: string;
    };
  };
};

type UseEventsProps = {
  onChange: (event: FilterEvent["detail"], context: any) => void;
  value: Array<Row | string>;
};

const eventName = "filterChange";

export const useEvents = ({ onChange, value }: UseEventsProps) => {
  const wrapper = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleChange = (event: FilterEvent) => {
      onChange(event.detail, {
        updateRightOperator: () => {
          const path = event.detail?.path ?? "";
          return _.setWith(_.clone(value), path, event.detail?.value, _.clone);
        },
        updateCondition: (data?: UpdateConditionProps) => {
          const path = event.detail?.path ?? "";
          const type = event.detail?.value;
          return _.setWith(
            _.clone(value),
            path,
            {
              type,
              ...data,
            },
            _.clone
          );
        },
        updateLeftOperator: (data: UpdateLeftOperatorProps) => {
          const path = event.detail?.path ?? "";
          const rightValue = event.detail?.value;
          return _.setWith(
            _.clone(value),
            path,
            {
              value: rightValue,
              ...data,
            },
            _.clone
          );
        },
        addRow: () => {
          return [
            ...value,
            "AND",
            {
              name: "",
              value: "",
            },
          ];
        },

        removeRow: () => {
          const index = parseInt(event.detail?.path ?? "", 10);
          return [
            ...value.slice(0, index - 1),
            ...value.slice(index + 2, value.length),
          ];
        },
      });
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
