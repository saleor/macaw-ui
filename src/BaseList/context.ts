import { createContext, useContext, useMemo } from "react";

import { ListGridTemplate, useGridTemplateStyles } from "./styles";

export const ListContext = createContext<"body" | "head" | "foot">("body");
export const ListGridContext = createContext<ListGridTemplate>(["1fr"]);

export const useListContext = () => useContext(ListContext);
export const useListGridContext = () => useContext(ListGridContext);

export function useGridStyles() {
  const gridTemplate = useListGridContext();
  const props = useMemo(() => ({ width: gridTemplate }), [gridTemplate]);

  return useGridTemplateStyles(props);
}
