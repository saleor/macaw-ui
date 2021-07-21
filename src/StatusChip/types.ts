export type StatusChipSize = "md" | "lg";
export interface StatusChipProps {
  children?: null;
  label: string;
  size?: StatusChipSize;
  variant: "success" | "warning" | "neutral" | "error";
}
