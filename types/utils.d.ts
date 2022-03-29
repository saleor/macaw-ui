export type UserInteraction = "default" | "hover" | "active";
export interface SyntheticChangeEvent {
  target: {
    name: string;
    value: string;
  };
}
