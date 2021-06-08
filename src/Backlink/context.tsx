import React from "react";

export type BacklinkContextType = React.RefObject<HTMLDivElement>;

export const BacklinkContext = React.createContext<
  BacklinkContextType | undefined
>(undefined);
BacklinkContext.displayName = "BacklinkContext";

export const useBacklink = () => {
  const ctx = React.useContext(BacklinkContext);
  if (ctx === undefined) {
    throw new Error("useBacklink must be used within a BacklinkContext");
  }

  return ctx;
};

export const BacklinkProvider: React.FC = ({ children }) => {
  const anchor = React.useRef<HTMLDivElement | null>(null);

  return (
    <BacklinkContext.Provider value={anchor}>
      {children}
    </BacklinkContext.Provider>
  );
};
