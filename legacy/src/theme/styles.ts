import {
  makeStyles as muiMakeStyles,
  useTheme as useMuiTheme,
} from "@material-ui/core/styles";
import type {
  ClassNameMap,
  Styles,
  WithStylesOptions,
} from "@material-ui/styles/withStyles";
import { useContext } from "react";

import { ThemeContext } from "./context";
import { SaleorTheme } from "./createSaleorTheme/types";
import type { SaleorThemeContext } from "./types";

export function makeStyles<
  Props extends Record<string, any> = {},
  ClassKey extends string = string
>(
  styles: Styles<SaleorTheme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<SaleorTheme>, "withTheme">
): keyof Props extends never
  ? (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  return muiMakeStyles(styles, options);
}

export function useTheme(): SaleorTheme & SaleorThemeContext {
  const saleorTheme = useMuiTheme<SaleorTheme>();
  const themeInfo = useContext(ThemeContext);

  if (themeInfo === undefined || saleorTheme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return {
    ...saleorTheme,
    ...themeInfo,
  };
}
