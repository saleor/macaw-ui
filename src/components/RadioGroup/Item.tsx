import * as RadioGroup from "@radix-ui/react-radio-group";
import { ReactNode } from "react";
import { Sprinkles, vars } from "~/theme";

import { Box } from "../Box";
import { indicator, item } from "./RadioGroup.css";

type RadioGroupItemProps = {
  value: string;
  id: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  error?: boolean;
} & Sprinkles;

export const RadioGroupItem = ({
  value,
  id,
  disabled,
  children,
  className,
  ...rest
}: RadioGroupItemProps) => (
  <Box
    display="flex"
    alignItems="center"
    gap={4}
    {...rest}
    className={className}
  >
    <RadioGroup.Item className={item} value={value} id={id} disabled={disabled}>
      <RadioGroup.Indicator className={indicator} asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          fill="currentColor"
          color={
            disabled
              ? vars.colors.foreground.iconNeutralSubdued
              : vars.colors.background.surfaceNeutralPlain
          }
        >
          <circle cx="3" cy="3" r="3" fill="currentColor" />
        </svg>
      </RadioGroup.Indicator>
    </RadioGroup.Item>
    <Box as="label" htmlFor={id} pointerEvents={disabled ? "none" : "auto"}>
      {children}
    </Box>
  </Box>
);
