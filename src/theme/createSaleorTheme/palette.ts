import { SaleorPaletteOptions, SaleorThemeColors } from "./types";

export const createPalette = (
  colors: SaleorThemeColors
): SaleorPaletteOptions => ({
  action: {
    active: colors.checkbox.default,
  },
  alert: colors.alert,
  background: colors.background,
  divider: colors.divider,
  error: {
    main: colors.errorAction[1],
  },
  primary: {
    contrastText: "#ffffff",
    dark: colors.main[4],
    main: colors.active[1],
  },
  secondary: {
    contrastText: "#ffffff",
    main: colors.background.paper,
  },
  success: {
    main: colors.success.mid,
  },
  text: {
    disabled: colors.main[4],
    hint: colors.main[3],
    primary: colors.main[1],
    secondary: colors.main[3],
  },
  textHighlighted: {
    active: colors.active[1],
    inactive: colors.highlightInactive.default,
  },
  type: colors.theme,
  saleor: colors,
});
