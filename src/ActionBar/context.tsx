import React from "react";

export interface ActionBarContextType {
  anchor: React.RefObject<HTMLDivElement>;
}

export const ActionBarContext = React.createContext<
  ActionBarContextType | undefined
>(undefined);
ActionBarContext.displayName = "ActionBarContext";

export const useActionBar = () => {
  const ctx = React.useContext(ActionBarContext);
  if (ctx === undefined) {
    throw new Error("useActionBar must be used within a ActionBarContext");
  }

  return ctx;
};

export const ActionBarProvider: React.FC = ({ children }) => {
  const anchor = React.useRef<HTMLDivElement | null>(null);

  return (
    <ActionBarContext.Provider value={{ anchor }}>
      {children}
    </ActionBarContext.Provider>
  );
};
