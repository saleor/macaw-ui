export class FilterEventEmitter extends EventTarget {
  type = "filterChange";

  addRow() {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "row.add",
          rowType: "1",
        },
      })
    );
  }

  removeRow(index: number) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "row.remove",
          path: `${index}`,
        },
      })
    );
  }

  changeLeftOperator(
    index: number,
    value: { label: string; value: string },
    rowType: string
  ) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
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
      new CustomEvent(this.type, {
        detail: {
          type: "leftOperator.onFocus",
          path: `${index}`,
        },
      })
    );
  }
  blurLeftOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "leftOperator.onBlur",
          path: `${index}`,
        },
      })
    );
  }
  inputChangeLeftOperator(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "leftOperator.onInputValueChange",
          path: `${index}`,
          value,
        },
      })
    );
  }

  changeCondition(index: number, value: { label: string; value: string }) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
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
      new CustomEvent(this.type, {
        detail: {
          type: "condition.onFocus",
          path: `${index}.condition.selected`,
        },
      })
    );
  }
  blurCondition(index: number) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "condition.onBlur",
          path: `${index}.condition.selected`,
        },
      })
    );
  }

  changeRightOperator(
    index: number,
    value:
      | string
      | { label: string; value: string }[]
      | { label: string; value: string }
  ) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
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
      new CustomEvent(this.type, {
        detail: {
          type: "rightOperator.onFocus",
          path: `${index}.condition.selected.value`,
        },
      })
    );
  }

  blurRightOperator(index: number) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
        detail: {
          type: "rightOperator.onBlur",
          path: `${index}.condition.selected.value`,
        },
      })
    );
  }

  inputChangeRightOperator(index: number, value: string) {
    this.dispatchEvent(
      new CustomEvent(this.type, {
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
      new CustomEvent(this.type, {
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
      new CustomEvent(this.type, {
        detail: {
          type: "rightOperatorEnd.onChange",
          path: `${index}.condition.selected.value.end`,
          value,
        },
      })
    );
  }
}
