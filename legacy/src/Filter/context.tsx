import { createContext, useContext } from "react";

import { FilterContextType } from "./types";

export const FilterContext = createContext<FilterContextType | null>(null);
export const useFilters = (): FilterContextType => {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("useFilters must be used within a FilterContext");
  }

  return ctx!;
};
