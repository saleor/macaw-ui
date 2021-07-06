import { createContext, useContext } from "react";

export type UserChipMenuContextType = () => void;

export const UserChipMenuContext = createContext<
  UserChipMenuContextType | undefined
>(undefined);
UserChipMenuContext.displayName = "UserChipMenuContext";

export const useUserChipMenu = () => {
  const ctx = useContext(UserChipMenuContext);
  if (ctx === undefined) {
    throw new Error(
      "useUserChipMenu must be used within a UserChipMenuContext"
    );
  }

  return ctx;
};
