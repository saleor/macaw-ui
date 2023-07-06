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
};

export type LeftOperatorChangeData = {
  type: "leftOperator.onChange";
  path: `${number}`;
  value: LeftOperatorOption;
  rowType: string;
};

export type LeftOperatorFocusData = {
  type: "leftOperator.onFocus";
  path: `${number}`;
};

export type LeftOperatorBlurData = {
  type: "leftOperator.onBlur";
  path: `${number}`;
};

export type LeftOperatorInputValueChangeData = {
  type: "leftOperator.onInputValueChange";
  path: `${number}`;
  value: string;
};

export type ConditionChangeData = {
  type: "condition.onChange";
  path: `${number}.condition.selected`;
  value: ConditionOption<string>;
};

export type ConditionFocusData = {
  type: "condition.onFocus";
  path: `${number}.condition.selected`;
};

export type ConditionBlurData = {
  type: "condition.onBlur";
  path: `${number}.condition.selected`;
};

export type RightOperatorChangeData = {
  type: "rightOperator.onChange";
  path: `${number}.condition.selected.value`;
  value: string | RightOperatorOption[] | RightOperatorOption;
};

export type RightOperatorFocusData = {
  type: "rightOperator.onFocus";
  path: `${number}.condition.selected.value`;
};

export type RightOperatorBlurData = {
  type: "rightOperator.onBlur";
  path: `${number}.condition.selected.value`;
};

export type RightOperatorInputValueChangeData = {
  type: "rightOperator.onInputValueChange";
  path: `${number}.condition.selected.value`;
  value: string;
};

export type RightOperatorStartChangeData = {
  type: "rightOperatorStart.onChange";
  path: `${number}.condition.selected.value.start`;
  value: string;
};

export type RightOperatorEndChangeData = {
  type: "rightOperatorEnd.onChange";
  path: `${number}.condition.selected.value.end`;
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
        },
      })
    );
  }

  changeCondition(
    index: number,
    value: ConditionOption<
      "text" | "number" | "multiselect" | "combobox" | "select" | "number.range"
    >
  ) {
    this.dispatchEvent(
      new CustomEvent<ConditionChangeData>(this.type, {
        detail: {
          type: "condition.onChange",
          path: `${index}.condition.selected`,
          value,
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
        },
      })
    );
  }

  changeRightOperator(
    index: number,
    value: string | RightOperatorOption[] | RightOperatorOption
  ) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorChangeData>(this.type, {
        detail: {
          type: "rightOperator.onChange",
          path: `${index}.condition.selected.value`,
          value,
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
          value,
        },
      })
    );
  }

  changeRightOperatorStart(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorStartChangeData>(this.type, {
        detail: {
          type: "rightOperatorStart.onChange",
          path: `${index}.condition.selected.value.start`,
          value,
        },
      })
    );
  }

  changeRightOperatorEnd(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent<RightOperatorEndChangeData>(this.type, {
        detail: {
          type: "rightOperatorEnd.onChange",
          path: `${index}.condition.selected.value.end`,
          value,
        },
      })
    );
  }
}
