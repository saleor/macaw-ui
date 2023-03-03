import * as RadioGroup from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

import { Sprinkles } from "~/theme";

import { Box } from "../Box";
import { DataAttributes } from "../types";
import { indicator, item } from "./Item.css";

type RadioGroupItemProps = {
  value: string;
  id: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  error?: boolean;
} & Sprinkles &
  DataAttributes;

export const RadioGroupItem = ({
  value,
  id,
  disabled,
  children,
  className,
  error,
  ...rest
}: RadioGroupItemProps) => (
  <Box
    display="flex"
    alignItems="center"
    gap={4}
    {...rest}
    className={className}
  >
    <RadioGroup.Item
      className={item({ error, disabled })}
      value={value}
      id={id}
      disabled={disabled}
    >
      <RadioGroup.Indicator className={indicator({ disabled })} asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          fill="currentColor"
        >
          <circle cx="3" cy="3" r="3" fill="currentColor" />
        </svg>
      </RadioGroup.Indicator>
    </RadioGroup.Item>
    <Box as="label" htmlFor={id} cursor={disabled ? "not-allowed" : "pointer"}>
      {children}
    </Box>
  </Box>
);
