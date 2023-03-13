import * as Switch from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

import { DataAttributes } from "../types";
import { switchChild } from "./Switch.css";

type SwitchItemProps = {
  value: string;
  id: string;
  children: ReactNode;
} & DataAttributes;

export const SwitchItem = ({
  value,
  id,
  children,
  ...rest
}: SwitchItemProps) => (
  <Switch.Item value={value} id={id} className={switchChild()} {...rest}>
    {children}
  </Switch.Item>
);

SwitchItem.displayName = "Switch.Item";
