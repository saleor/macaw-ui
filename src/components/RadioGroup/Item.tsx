import * as RadioGroup from "@radix-ui/react-radio-group";
import { forwardRef, ReactNode } from "react";

import { Box, PropsWithBox } from "../Box";
import { DataAttributes } from "../types";
import { indicator, item } from "./Item.css";

export type RadioGroupItemProps = PropsWithBox<
  {
    value: string;
    id: string;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    error?: boolean;
  } & DataAttributes
>;

export const RadioGroupItem = forwardRef<HTMLDivElement, RadioGroupItemProps>(
  ({ value, id, disabled, children, className, error, ...rest }, ref) => (
    <Box
      display="flex"
      alignItems="center"
      gap={1.5}
      position="relative"
      {...rest}
      className={className}
      ref={ref}
      data-macaw-ui-component="RadioGroup.Item"
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
      <Box
        as="label"
        htmlFor={id}
        cursor={disabled ? "not-allowed" : "pointer"}
      >
        {children}
      </Box>
    </Box>
  )
);

RadioGroupItem.displayName = "RadioGroup.Item";
