export type UserInteraction = "default" | "hover" | "active";
export interface SyntheticChangeEvent<T = string> {
  target: {
    name: string;
    value: T;
  };
}
