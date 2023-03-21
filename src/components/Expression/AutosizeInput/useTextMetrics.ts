import { MutableRefObject, useEffect, useRef } from "react";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const FONT_PARAMETERS = [
  "font-style",
  "font-variant",
  "font-weight",
  "font-size",
  "font-family",
];

const paddings = (styles?: CSSStyleDeclaration) => {
  if (!styles) return 0;

  const paddingLeft = parseInt(styles.getPropertyValue("padding-left"), 10);
  const paddingRight = parseInt(styles.getPropertyValue("padding-right"), 10);

  return paddingLeft + paddingRight;
};

const obtainFontString = (styles: CSSStyleDeclaration) => {
  return FONT_PARAMETERS.reduce(
    (fontString, cssKey) => `${fontString} ${styles.getPropertyValue(cssKey)}`,
    ""
  );
};

const calculateLength = (text: string) => {
  if (!context) return 0;

  return context.measureText(text).width;
};

export const useTextMetrics = (
  elementRef: MutableRefObject<HTMLElement | undefined>
) => {
  const styles = useRef<CSSStyleDeclaration | undefined>(undefined);

  useEffect(() => {
    if (!context || !elementRef || !elementRef.current) return;

    styles.current = window.getComputedStyle(elementRef.current, null);
    context.font = obtainFontString(styles.current);
  }, [elementRef, context]);

  const measureText = (text: string) => {
    return calculateLength(text);
  };

  const measureTextWithPaddings = (text: string) => {
    return calculateLength(text) + paddings(styles.current);
  };

  return { measureText, measureTextWithPaddings };
};
