import { useEffect } from "react";
import { FilterEventEmitter } from "./EventEmitter";

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
    value?:
      | string
      | { value: string; label: string }[]
      | { label: string; value: string };
    path?: string;
    rowType?: string;
  };
}

type UseEventsProps = {
  onChange: (event: FilterEvent["detail"]) => void;
};

const emitter = new FilterEventEmitter();

export const useEventEmitter = ({ onChange }: UseEventsProps) => {
  useEffect(() => {
    const handleChange = (event: FilterEvent) => {
      onChange(event.detail);
    };

    emitter.addEventListener(emitter.type, handleChange);

    return () => {
      emitter.removeEventListener(emitter.type, handleChange);
    };
  }, [onChange]);

  return {
    emitter,
  };
};
