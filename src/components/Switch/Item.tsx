import * as Switch from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

import { DataAttributes } from "../types";
import { switchChild } from "./Switch.css";

export type SwitchItemProps = {
  value: string;
  id: string;
  children: ReactNode;
  disabled?: boolean;
} & DataAttributes;

export const SwitchItem = ({
  value,
  id,
  disabled = false,
  children,
  ...rest
}: SwitchItemProps) => (
  <Switch.Item
    value={value}
    id={id}
    disabled={disabled}
    className={switchChild()}
    {...rest}
  >
    {children}
  </Switch.Item>
);

SwitchItem.displayName = "Switch.Item";
