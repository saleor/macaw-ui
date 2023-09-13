import { useEffect, useRef } from "react";
import { TextareaValue } from "../components/Textarea/TextareaWrapper";

const MAX_HEIGHT = 450;

// Updates the height of a <textarea> when the value changes.
export const useAutoHeightTextarea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: TextareaValue,
  useAutoHeight: boolean
) => {
  const mounted = useRef<boolean>(false);
  const intialHeight = useRef<number>(0);

  useEffect(() => {
    if (!mounted.current && textAreaRef) {
      intialHeight.current = textAreaRef.offsetHeight;
      mounted.current = true;
    }
  }, [textAreaRef]);

  useEffect(() => {
    if (textAreaRef && useAutoHeight) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      if (scrollHeight < MAX_HEIGHT) {
        textAreaRef.style.height = `${scrollHeight}px`;
      } else {
        textAreaRef.style.height = `${MAX_HEIGHT}px`;
      }

      // To support mutlitple rows we need to check if the scrollHeight is greater than the initial height
      // because only then we can extends the height of the textarea
      if (scrollHeight > intialHeight.current) {
        // Reach the max height limit
        if (scrollHeight >= MAX_HEIGHT) {
          textAreaRef.style.height = `${MAX_HEIGHT}px`;
        } else {
          textAreaRef.style.height = `${scrollHeight}px`;
        }
      } else {
        textAreaRef.style.height = `${intialHeight.current}px`;
      }
    }
  }, [textAreaRef, useAutoHeight, value]);
};
