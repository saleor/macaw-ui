import { useEffect, useRef } from "react";

export interface FilterEvent extends Event {
  detail?: {
    type: "value";
    dataType: "select" | "combobox" | "input" | "multiselect";
    value: string | string[];
    path: string;
  };
}

type UseEventsProps = {
  onChange: (event: FilterEvent["detail"]) => void;
};

const eventName = "filterChange";

export const useEvents = ({ onChange }: UseEventsProps) => {
  const wrapper = useRef<HTMLElement>();

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
