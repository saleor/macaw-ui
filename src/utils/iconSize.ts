export const iconSizeMap = {
  small: 16,
  medium: 20,
  large: 24,
} as const;

export type IconSize = keyof typeof iconSizeMap;
