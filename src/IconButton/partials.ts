import type { SaleorThemeColors } from "..";

// Extracting it to separate file to avoid circular imports
export function getSecondaryButtonStyles(
  colors: SaleorThemeColors,
  isDarkMode: boolean
) {
  return {
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
      color: colors.main[1],
    },
    "&:disabled": {
      color: colors.main[5],
      borderColor: "transparent",

      ...(isDarkMode && {
        color: colors.main[2],
      }),
    },
    background: "transparent",
    borderRadius: 4,
    color: colors.main[3],
    border: `1px solid ${colors.main[6]}`,
    padding: 8,
    transition: "200ms",

    ...(isDarkMode && {
      border: `1px solid ${colors.main[4]}`,
      color: colors.main[2],
    }),
  };
}

export function getGhostButtonStyles(
  colors: SaleorThemeColors,
  isDarkMode: boolean
) {
  return {
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
      color: colors.main[1],
      background: colors.main[5],
    },

    "&$active": {
      color: colors.main[1],
      background: colors.main[4],
    },

    "&:disabled": {
      color: colors.main[3],

      ...(isDarkMode && {
        color: colors.main[3],
      }),
    },
    background: "transparent",
    borderRadius: 4,
    color: colors.main[5],
    padding: 8,
    transition: "200ms",

    ...(isDarkMode && {
      color: colors.main[2],
    }),
  };
}
