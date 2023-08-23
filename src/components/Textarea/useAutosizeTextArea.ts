import { useEffect } from "react";
import { TextareaValue } from "./TextareaWrapper";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: TextareaValue,
  useAutoHeight: boolean
) => {
  useEffect(() => {
    if (textAreaRef && useAutoHeight) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, useAutoHeight, value]);
};

export default useAutosizeTextArea;
