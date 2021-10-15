import type { ThemeOptions } from "@material-ui/core/styles";

const createShadow = (pv: number, pb: number, ps: number) =>
  `0 ${pv}px ${pb}px ${ps}px rgba(0, 0, 0, 0.15)`;

export const shadows: ThemeOptions["shadows"] = [
  "none",
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
  createShadow(24, 20, -20),
];
