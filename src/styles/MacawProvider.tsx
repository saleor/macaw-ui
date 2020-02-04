import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";
import Helmet from "react-helmet";

import { AppLayoutContextProvider } from "../AppLayout/AppLayoutContext";
import Baseline from "./Baseline";
import createMuiTheme, { MacawTheme } from "./createTheme";

interface MacawThemeProviderProps {
  meta?: boolean;
  theme: MacawTheme;
}
const MacawThemeProvider: React.FC<MacawThemeProviderProps> = ({
  children,
  meta,
  theme
}) => {
  const [isMenuExpanded, setMenuExpansionState] = React.useState(true);

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      {meta && (
        <Helmet>
          <meta name="theme-color" content={theme.background.default} />
        </Helmet>
      )}
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
MacawThemeProvider.defaultProps = {
  meta: true
};
export default MacawThemeProvider;
