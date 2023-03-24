import {
  Root as RadixToggle,
  ToggleProps as RadixToggleProps,
} from "@radix-ui/react-toggle";
import { forwardRef } from "react";
import { Box } from "../Box";
import { toggle } from "./Toggle.css";

export type ToggleProps = RadixToggleProps & {
  error?: boolean;
};

export type CheckedState = boolean | "indeterminate";

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      disabled = false,
      error = false,
      pressed,
      onPressedChange,
      children,
      ...props
    }: ToggleProps,
    ref
  ) => {
    return (
      <Box
        as="label"
        display="flex"
        alignItems="center"
        gap={4}
        cursor={disabled ? "not-allowed" : "pointer"}
      >
        <RadixToggle
          ref={ref}
          className={toggle({ error })}
          pressed={pressed}
          onPressedChange={onPressedChange}
          disabled={disabled}
          {...props}
        />
        {children}
      </Box>
    );
  }
);

Toggle.displayName = "Toggle";
