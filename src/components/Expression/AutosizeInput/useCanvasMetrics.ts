import { MutableRefObject, useEffect, useRef } from "react";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const initialMetrics = {
  paddingLeft: 0,
  paddingRight: 0,
};

export const useCanvasMetrics = (
  elementRef: MutableRefObject<HTMLElement | undefined>
) => {
  const metrics = useRef(initialMetrics);

  useEffect(() => {
    if (!context || !elementRef || !elementRef.current) return;

    const computedStyle = window.getComputedStyle(elementRef.current, null);
    const fontStyle = computedStyle.getPropertyValue("font-style");
    const fontVariant = computedStyle.getPropertyValue("font-variant");
    const fontWeight = computedStyle.getPropertyValue("font-weight");
    const fontSize = computedStyle.getPropertyValue("font-size");
    const fontFamily = computedStyle.getPropertyValue("font-family");
    metrics.current.paddingLeft = parseInt(
      computedStyle.getPropertyValue("padding-left"),
      10
    );
    metrics.current.paddingRight = parseInt(
      computedStyle.getPropertyValue("padding-right"),
      10
    );

    context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`;
  }, [elementRef, context]);

  const measure = (text: string) => {
    if (!context) return 0;

    return context.measureText(text).width;
  };

  return {
    measure,
    metrics: metrics.current,
  };
};
