import { useEffect, useRef, useState } from "react";
export * from "./css";

const obtainVarName = (varNotation: string) => {
  if (!varNotation.includes("var(")) {
    return varNotation;
  }

  const matches = varNotation.match(/\(([^)]+)\)/);

  if (matches && matches?.length > 1) {
    return matches[1];
  }

  return varNotation;
};

export const useVarValues = () => {
  const [ready, setReady] = useState(false);
  const comptutedStyles = useRef<CSSStyleDeclaration>();

  useEffect(() => {
    if (ready) return;

    comptutedStyles.current = window.getComputedStyle(document.body);
    setReady(true);
  }, [ready]);

  const getVarValue = (varName: string) => {
    if (!comptutedStyles.current) return "";

    return comptutedStyles.current.getPropertyValue(obtainVarName(varName));
  };

  return {
    getVarValue,
  };
};
