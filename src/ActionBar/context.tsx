import React from "react";

// Imitate object returned from useRef
type AnchorFunction = {
  (el: HTMLDivElement): void;
  current: HTMLDivElement | null;
};

export interface ActionBarContextType {
  anchor: AnchorFunction;
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
  const [anchorState, setAnchor] = React.useState<HTMLDivElement | null>(null);

  const anchor = React.useMemo(() => {
    const fn = setAnchor as AnchorFunction;
    fn.current = anchorState;
    return fn;
  }, [anchorState]);

  return (
    <ActionBarContext.Provider value={{ anchor }}>
      {children}
    </ActionBarContext.Provider>
  );
};
