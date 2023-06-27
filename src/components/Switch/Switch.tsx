import { Root } from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

import { classNames } from "~/utils";

import { Box, PropsWithBox } from "../Box";
import { DataAttributes } from "../types";
import { switchParent } from "./Switch.css";

export type SwitchRootProps = PropsWithBox<
  {
    children: ReactNode;
    className?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  } & DataAttributes
>;

export const SwitchRoot = forwardRef<HTMLDivElement, SwitchRootProps>(
  ({ children, className, defaultValue, onValueChange, ...rest }, ref) => (
    <Root asChild defaultValue={defaultValue} onValueChange={onValueChange}>
      <Box
        className={classNames(switchParent(), className)}
        ref={ref}
        {...rest}
        data-macaw-ui-component="Switch"
      >
        {children}
      </Box>
    </Root>
  )
);

SwitchRoot.displayName = "Switch";
