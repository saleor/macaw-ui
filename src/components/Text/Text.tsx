import { forwardRef, ReactNode } from "react";

import { classNames } from "~/utils";

import { Box, PropsWithBox } from "../Box";

import { text, TextVariants } from "./Text.css";

export type TextProps = PropsWithBox<{
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  className?: string;
}> &
  TextVariants;

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      children,
      as = "span",
      variant,
      size,
      ellipsis,
      color = "textNeutralDefault",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        className={classNames(text({ variant, size, ellipsis }), className)}
        color={color}
        ref={ref}
        margin={0}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";
