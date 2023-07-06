import { useEffect } from "react";

import {
  ConditionBlurData,
  ConditionChangeData,
  ConditionFocusData,
  FilterEventEmitter,
  LeftOperatorBlurData,
  LeftOperatorChangeData,
  LeftOperatorFocusData,
  LeftOperatorInputValueChangeData,
  RightOperatorBlurData,
  RightOperatorChangeData,
  RightOperatorEndChangeData,
  RightOperatorFocusData,
  RightOperatorInputValueChangeData,
  RightOperatorStartChangeData,
  RowAddData,
  RowRemoveData,
} from "./EventEmitter";

export interface FilterEvent extends Event {
  detail?:
    | RowAddData
    | RowRemoveData
    | LeftOperatorChangeData
    | LeftOperatorFocusData
    | LeftOperatorBlurData
    | LeftOperatorInputValueChangeData
    | ConditionChangeData
    | ConditionFocusData
    | ConditionBlurData
    | RightOperatorChangeData
    | RightOperatorFocusData
    | RightOperatorBlurData
    | RightOperatorInputValueChangeData
    | RightOperatorStartChangeData
    | RightOperatorEndChangeData;
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
