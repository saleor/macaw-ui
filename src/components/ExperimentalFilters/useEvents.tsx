import { useEffect } from "react";
import { FilterEventEmitter } from "./EventEmitter";

export interface FilterEvent extends Event {
  detail?:
    | {
        type: "row.add";
        rowType: string;
      }
    | {
        type: "row.remove";
        path: string;
      }
    | {
        type: "leftOperator.onChange";
        path: string;
        value: { label: string; value: string; type: string };
        rowType: string;
      }
    | {
        type: "leftOperator.onFocus";
        path: string;
      }
    | {
        type: "leftOperator.onBlur";
        path: string;
      }
    | {
        type: "leftOperator.onInputValueChange";
        path: string;
        value: string;
      }
    | {
        type: "condition.onChange";
        path: string;
        value: { label: string; value: string; type: string };
      }
    | {
        type: "condition.onFocus";
        path: string;
      }
    | {
        type: "condition.onBlur";
        path: string;
      }
    | {
        type: "rightOperator.onChange";
        path: string;
        value:
          | string
          | { label: string; value: string; type: string }[]
          | { label: string; value: string; type: string };
      }
    | {
        type: "rightOperator.onFocus";
        path: string;
      }
    | {
        type: "rightOperator.onBlur";
        path: string;
      }
    | {
        type: "rightOperator.onInputValueChange";
        path: string;
        value: string;
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
