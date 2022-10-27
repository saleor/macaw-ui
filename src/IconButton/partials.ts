import type { SaleorThemeColors } from "..";

// Extracting it to separate file to avoid circular imports
export function getSecondaryButtonStyles(colors: SaleorThemeColors) {
  return {
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
      color: colors.main[1],
    },
    "&:disabled": {
      color: colors.main[5],
      borderColor: "transparent",
    },
    background: "transparent",
    borderRadius: 4,
    color: colors.main[3],
    border: `1px solid ${colors.main[6]}`,
    padding: 8,
    transition: "200ms",
  };
}
