import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useTextWidth(
  font: string
): [number, Dispatch<SetStateAction<string>>] {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = font;
    const { width: newWidth } = context.measureText(text);
    canvas.remove();

    setWidth(newWidth + 8);
  }, [text, font]);

  return [width, setText];
}
