import { useEffect } from "react";

import { FilterEvent } from "./types";
import { FilterEventEmitter } from "./EventEmitter";

type UseEventsProps = {
  onChange?: (event: FilterEvent["detail"]) => void;
};

const emitter = new FilterEventEmitter();

export const useEventEmitter = ({ onChange }: UseEventsProps) => {
  useEffect(() => {
    const handleChange = (event: FilterEvent) => {
      onChange?.(event.detail);
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
