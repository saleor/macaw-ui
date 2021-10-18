/* eslint-disable @typescript-eslint/unified-signatures */
import type { Theme, ThemeOptions } from "@material-ui/core/styles";

export type AlertPalette = Record<
  "success" | "error" | "warning" | "info",
  string
>;
export type AlertColors = Record<"paper" | "icon", AlertPalette>;
interface ExtraPalette {
  alert: AlertColors;
  textHighlighted: {
    active: string;
    inactive: string;
  };
}
type ExtraPaletteOptions = Partial<ExtraPalette>;

export type SaleorPalette = Theme["palette"] & ExtraPalette;

export type SaleorPaletteOptions = ThemeOptions["palette"] &
  ExtraPaletteOptions;

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

export type ThemeType = "light" | "dark";

export type SaleorThemeColors = Record<
  "primary" | "secondary" | "error" | "paperBorder" | "autofill" | "success",
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
  font: Record<
    "default" | "gray" | "button" | "textButton" | "textDisabled",
    string
  >;
} & {
  gray: Record<"default" | "disabled", string>;
} & {
  input: Record<
    | "default"
    | "border"
    | "disabled"
    | "disabledBackground"
    | "disabledText"
    | "error"
    | "text"
    | "textHover",
    string
  >;
} & {
  alert: AlertColors;
} & {
  theme: ThemeType;
};

export type Themes = Record<ThemeType, SaleorThemeColors>;
