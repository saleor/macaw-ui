import type { SaleorThemeColors } from "..";

// Extracting it to separate file to avoid circular imports
export function getSecondaryButtonStyles(colors: SaleorThemeColors) {
  return {
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
      color: colors.active[1],
    },
    "&:disabled": {
      color: colors.disabled,
    },
    background: "transparent",
    borderRadius: 4,
    color: colors.main[3],
    padding: 8,
    transition: "200ms",
  };
}
