import { forwardRef, ReactNode } from "react";

import { Sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { Box } from "../Box";
import { DataAttributes } from "../types";

import { text, TextVariants } from "./Text.css";

type TextProps = TextVariants &
  DataAttributes & {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    color?: Sprinkles["color"];
    className?: string;
  };

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      children,
      as = "span",
      variant,
      size,
      color = "textNeutralDefault",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        className={classNames(text({ variant, size }), className)}
        color={color}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";
