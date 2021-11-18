import { createContext, useContext } from "react";

export type ListActionContextType = (hover: boolean) => void;

export const ListActionContext = createContext<
  ListActionContextType | undefined
>(undefined);
ListActionContext.displayName = "ListActionContext";

export const useListAction = () => {
  const ctx = useContext(ListActionContext);
  if (ctx === undefined) {
    throw new Error("useListAction must be used within a ListActionContext");
  }

  return ctx;
};

export interface UseTableActionHover {
  hover: boolean;
  props: Record<"onMouseLeave" | "onMouseEnter", () => void>;
}
