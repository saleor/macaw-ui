/* eslint-disable @typescript-eslint/unified-signatures */
import type { Theme } from "@material-ui/core/styles";
import type { ThemeOptions } from "@material-ui/core/styles";
import type {
  Palette,
  PaletteOptions,
} from "@material-ui/core/styles/createPalette";

export type ThemeType = "light" | "dark";

export type SaleorThemeColors = Record<
  "paperBorder" | "autofill" | "success" | "disabled",
  string
> & {
  highlightInactive: Record<"default", string>;
} & {
  background: Record<"default" | "paper", string>;
} & {
  checkbox: Record<"default", string>;
} & {
  divider: string;
} & {
  gray: Record<"default" | "disabled", string>;
} & {
  alert: AlertColors;
  theme: ThemeType;
  fail: Record<"dark" | "mid" | "light", string>;
  main: Record<1 | 2 | 3 | 4 | 5, string>;
  active: Record<1 | 2 | 3 | 4 | 5, string>;
  errorAction: Record<1 | 2 | 3 | 4 | 5, string>;
};

export type AlertPalette = Record<
  "success" | "error" | "warning" | "info",
  string
>;
export type AlertColors = Record<"paper" | "icon", AlertPalette>;
interface ExtraPalette {
  alert: AlertColors;
  saleor: SaleorThemeColors;
  textHighlighted: {
    active: string;
    inactive: string;
  };
}
type ExtraPaletteOptions = Partial<ExtraPalette>;

export interface SaleorPalette extends Palette, ExtraPalette {}

export interface SaleorPaletteOptions
  extends PaletteOptions,
    ExtraPaletteOptions {}

export interface SaleorSpacing {
  (): string;
  (value: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}

export interface SaleorTheme extends Omit<Theme, "spacing"> {
  palette: SaleorPalette;
  spacing: SaleorSpacing;
}

export interface SaleorThemeOptions extends ThemeOptions {
  palette: SaleorPaletteOptions;
}

export type Themes = Record<ThemeType, SaleorThemeColors>;
