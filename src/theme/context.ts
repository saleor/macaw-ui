import React from "react";

import { SaleorThemeContext } from "./types";

export const ThemeContext = React.createContext<SaleorThemeContext | undefined>(
  undefined
);
ThemeContext.displayName = "ThemeContext";
