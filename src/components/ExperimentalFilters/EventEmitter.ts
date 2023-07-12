import { Option } from "..";

export type RightOperatorOption = Option & {
  slug: string;
};

export type LeftOperatorOption = Option & {
  type: string;
};

export type ConditionOption<T extends string> = Option & {
  type: T;
};

export type RowAddData = {
  type: "row.add";
  rowType: string;
};

export type RowRemoveData = {
  type: "row.remove";
  path: `${number}`;
  index: number;
};

export type LeftOperatorChangeData = {
  type: "leftOperator.onChange";
  path: `${number}`;
  index: number;
  value: LeftOperatorOption;
  rowType: string;
};

export type LeftOperatorFocusData = {
  type: "leftOperator.onFocus";
  path: `${number}`;
  index: number;
};

export type LeftOperatorBlurData = {
  type: "leftOperator.onBlur";
  path: `${number}`;
  index: number;
};

export type LeftOperatorInputValueChangeData = {
  type: "leftOperator.onInputValueChange";
  path: `${number}`;
  index: number;
  value: string;
};

export type ConditionChangeData = {
  type: "condition.onChange";
  path: `${number}.condition.selected`;
  index: number;
  value: ConditionOption<
    | "text"
    | "number"
    | "multiselect"
    | "combobox"
    | "select"
    | "number.range"
    | "date"
  >;
};

export type ConditionFocusData = {
  type: "condition.onFocus";
  path: `${number}.condition.selected`;
  index: number;
};

export type ConditionBlurData = {
  type: "condition.onBlur";
  path: `${number}.condition.selected`;
  index: number;
};

export type RightOperatorChangeData = {
  type: "rightOperator.onChange";
  path: `${number}.condition.selected.value`;
  index: number;
  value:
    | string
    | RightOperatorOption[]
    | RightOperatorOption
    | [string, string];
};

export type RightOperatorFocusData = {
  type: "rightOperator.onFocus";
  path: `${number}.condition.selected.value`;
  index: number;
};

export type RightOperatorBlurData = {
  type: "rightOperator.onBlur";
  path: `${number}.condition.selected.value`;
  index: number;
};

export type RightOperatorInputValueChangeData = {
  type: "rightOperator.onInputValueChange";
  path: `${number}.condition.selected.value`;
  index: number;
  value: string;
};

export class FilterEventEmitter extends EventTarget {
  type = "filterChange";

  addRow() {
    this.dispatchEvent(
      new CustomEvent<RowAddData>(this.type, {
        detail: {
          type: "row.add",
          rowType: "1",
        },
      })
    );
  }

  removeRow(index: number) {
    this.dispatchEvent(
      new CustomEvent<RowRemoveData>(this.type, {
        detail: {
          type: "row.remove",
          path: `${index}`,
          index,
        },
      })
    );
  }

  changeLeftOperator(
    index: number,
    value: LeftOperatorOption,
    rowType: string
  ) {
    this.dispatchEvent(
      new CustomEvent<LeftOperatorChangeData>(this.type, {
        detail: {
          type: "leftOperator.onChange",
          path: `${index}`,
          value,
          rowType,
          index,
        },
      })
    );
  }
  focusLeftOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent<LeftOperatorFocusData>(this.type, {
        detail: {
          type: "leftOperator.onFocus",
          path: `${index}`,
          index,
        },
      })
    );
  }
  blurLeftOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent<LeftOperatorBlurData>(this.type, {
        detail: {
          type: "leftOperator.onBlur",
          path: `${index}`,
          index,
        },
      })
    );
  }
  inputChangeLeftOperator(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent<LeftOperatorInputValueChangeData>(this.type, {
        detail: {
          type: "leftOperator.onInputValueChange",
          path: `${index}`,
          value,
          index,
        },
      })
    );
  }

  changeCondition(index: number, value: ConditionChangeData["value"]) {
    this.dispatchEvent(
      new CustomEvent<ConditionChangeData>(this.type, {
        detail: {
          type: "condition.onChange",
          path: `${index}.condition.selected`,
          value,
          index,
        },
      })
    );
  }
  focusCondition(index: number) {
    this.dispatchEvent(
      new CustomEvent<ConditionFocusData>(this.type, {
        detail: {
          type: "condition.onFocus",
          path: `${index}.condition.selected`,
          index,
        },
      })
    );
  }
  blurCondition(index: number) {
    this.dispatchEvent(
      new CustomEvent<ConditionBlurData>(this.type, {
        detail: {
          type: "condition.onBlur",
          path: `${index}.condition.selected`,
          index,
        },
      })
    );
  }

  changeRightOperator(
    index: number,
    value:
      | string
      | RightOperatorOption[]
      | RightOperatorOption
      | [string, string]
  ) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorChangeData>(this.type, {
        detail: {
          type: "rightOperator.onChange",
          path: `${index}.condition.selected.value`,
          value,
          index,
        },
      })
    );
  }

  focusRightOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorFocusData>(this.type, {
        detail: {
          type: "rightOperator.onFocus",
          path: `${index}.condition.selected.value`,
          index,
        },
      })
    );
  }

  blurRightOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorBlurData>(this.type, {
        detail: {
          type: "rightOperator.onBlur",
          path: `${index}.condition.selected.value`,
          index,
        },
      })
    );
  }

  inputChangeRightOperator(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorInputValueChangeData>(this.type, {
        detail: {
          type: "rightOperator.onInputValueChange",
          path: `${index}.condition.selected.value`,
          index,
          value,
        },
      })
    );
  }
}
