import React from "react";

export interface SavebarContextType {
  anchor: React.RefObject<HTMLDivElement>;
  docked: boolean;
  setDocked: (docked: boolean) => void;
}

export const SavebarContext = React.createContext<
  SavebarContextType | undefined
>(undefined);
SavebarContext.displayName = "SavebarContext";

export const useSavebar = () => {
  const ctx = React.useContext(SavebarContext);
  if (ctx === undefined) {
    throw new Error("useSavebar must be used within a SavebarContext");
  }

  return ctx;
};

export const SavebarProvider: React.FC = ({ children }) => {
  const [docked, setDocked] = React.useState(true);
  const anchor = React.useRef<HTMLDivElement | null>(null);

  return (
    <SavebarContext.Provider value={{ anchor, docked, setDocked }}>
      {children}
    </SavebarContext.Provider>
  );
};
