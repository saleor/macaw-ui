import React from "react";

export interface Progress {
  isActive: boolean;
  setActiveState: (isOpened: boolean) => void;
}
export interface SideMenu {
  isExpanded: boolean;
  setExpansionState: (state: boolean) => void;
}

export interface IAppLayoutContext {
  action: React.RefObject<HTMLDivElement>;
  header: React.RefObject<HTMLDivElement>;
  menu: SideMenu;
  progress: Progress;
}

export const AppLayoutContext = React.createContext<IAppLayoutContext>(
  undefined
);

export interface AppLayoutContextProviderProps {
  menu: SideMenu;
}
export const AppLayoutContextProvider: React.FC<
  AppLayoutContextProviderProps
> = ({ children, menu }) => {
  const [isProgressActive, setProgressState] = React.useState(false);
  const actionAnchor = React.useRef<HTMLDivElement>();
  const headerAnchor = React.useRef<HTMLDivElement>();

  const value: IAppLayoutContext = {
    action: actionAnchor,
    header: headerAnchor,
    menu,
    progress: {
      isActive: isProgressActive,
      setActiveState: setProgressState
    }
  };

  return (
    <AppLayoutContext.Provider value={value}>
      {children}
    </AppLayoutContext.Provider>
  );
};

export default AppLayoutContext;
