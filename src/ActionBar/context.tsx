import React from "react";

export interface ActionBarContextType {
  anchor: React.RefObject<HTMLDivElement>;
  updateRef: (el: HTMLDivElement) => void;
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

  // Force re-render after ref is updated
  const [, updateState] = React.useState(0);
  const updateRef = React.useCallback((node) => {
    anchor.current = node;
    updateState((i) => i + 1);
  }, []);

  return (
    <ActionBarContext.Provider value={{ anchor, updateRef }}>
      {children}
    </ActionBarContext.Provider>
  );
};
