import { Root } from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { Box } from "../Box";
import { DataAttributes } from "../types";
import { switchParent } from "./Switch.css";

type SwitchItemProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
} & Sprinkles &
  DataAttributes;

export const SwitchRoot = forwardRef<HTMLDivElement, SwitchItemProps>(
  ({ children, className, defaultValue, onValueChange, ...rest }, ref) => (
    <Root asChild defaultValue={defaultValue} onValueChange={onValueChange}>
      <Box
        {...rest}
        className={classNames(switchParent(), className)}
        ref={ref}
      >
        {children}
      </Box>
    </Root>
  )
);

SwitchRoot.displayName = "Switch";
