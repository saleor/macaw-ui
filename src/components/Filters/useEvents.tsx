import { useEffect, useRef } from "react";

export interface FilterEvent extends Event {
  detail?: {
    type:
      | "leftOperator.onChange"
      | "leftOperator.onInputValueChange"
      | "leftOperator.onFocus"
      | "leftOperator.onBlur"
      | "condition.onChange"
      | "condition.onScrollEnd"
      | "condition.onFocus"
      | "condition.onBlur"
      | "rightOperator.onChange"
      | "rightOperator.onInputValueChange"
      | "rightOperator.onScrollEnd"
      | "rightOperator.onFocus"
      | "rightOperator.onBlur"
      | "row.remove"
      | "row.add";
    value?: string | string[];
    path?: string;
    rowType: number;
  };
}

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
