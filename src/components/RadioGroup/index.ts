import { RadioGroupRoot } from "./Group";
import { RadioGroupItem as Item } from "./Item";

export type { RadioGroupRootProps } from "./Group";
export type { RadioGroupItemProps } from "./Item";

export const RadioGroup = Object.assign(RadioGroupRoot, { Item });
