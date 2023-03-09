import { MutableRefObject } from "react";

const paddings = (styles: CSSStyleDeclaration) => {
  const paddingLeft = parseInt(styles.getPropertyValue("padding-left"), 10);
  const paddingRight = parseInt(styles.getPropertyValue("padding-right"), 10);

  return paddingLeft + paddingRight;
};

export const useTextMetrics = (
  elementRef: MutableRefObject<HTMLElement | undefined>
) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const measureText = (
    text: string,
    { includePaddings } = { includePaddings: true }
  ) => {
    if (!context || !elementRef || !elementRef.current) return 0;

    const computedStyle = window.getComputedStyle(elementRef.current, null);
    const fontStyle = computedStyle.getPropertyValue("font-style");
    const fontVariant = computedStyle.getPropertyValue("font-variant");
    const fontWeight = computedStyle.getPropertyValue("font-weight");
    const fontSize = computedStyle.getPropertyValue("font-size");
    const fontFamily = computedStyle.getPropertyValue("font-family");
    context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`;

    const rawLegth = context.measureText(text).width;

    if (includePaddings) {
      return rawLegth + paddings(computedStyle);
    }

    return rawLegth;
  };

  return { measureText };
};
