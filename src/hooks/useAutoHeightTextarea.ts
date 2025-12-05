import { RefObject, useEffect } from "react";

import { TextareaValue } from "../components/Textarea/TextareaWrapper";

// Updates the height of a <textarea> when the value changes.
export const useAutoHeightTextarea = (
  textAreaRef: RefObject<HTMLTextAreaElement>,
  value: TextareaValue,
  rows: number,
  maxRows: number
) => {
  useEffect(() => {
    const element = textAreaRef.current;
    if (!element) return;

    const initialHeight = getHeight(element, rows);
    const maxRowsHeight = getHeight(element, maxRows);

    // Restart the height at 0px to ensure that the scroll height is correct.
    element.style.height = "0px";

    // Take the max of the initial height and the scroll height for case where rows is greater than one.
    const initMaxHeight = Math.max(initialHeight, element.scrollHeight);
    // Take the scroll height but limit it to the max rows height.
    const scrollHeight = Math.min(initMaxHeight, maxRowsHeight);

    element.style.height = `${scrollHeight}px`;
  }, [textAreaRef, value, rows, maxRows]);
};

function getHeight(element: HTMLTextAreaElement, rows: number) {
  return parseFloat(getComputedStyle(element).lineHeight) * rows;
}
