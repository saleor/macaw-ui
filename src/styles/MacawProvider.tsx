import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";

import { AppLayoutContextProvider } from "../AppLayout/AppLayoutContext";
import Baseline from "./Baseline";
import createMuiTheme, { MacawTheme } from "./createTheme";

interface MacawThemeProviderProps {
  theme: MacawTheme;
}
const MacawThemeProvider: React.FC<MacawThemeProviderProps> = ({
  children,
  theme
}) => {
  const [isMenuExpanded, setMenuExpansionState] = React.useState(true);

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Baseline />
      <AppLayoutContextProvider
        menu={{
          isExpanded: isMenuExpanded,
          setExpansionState: setMenuExpansionState
        }}
      >
        {children}
      </AppLayoutContextProvider>
    </MuiThemeProvider>
  );
};

MacawThemeProvider.displayName = "MacawThemeProvider";
export default MacawThemeProvider;
