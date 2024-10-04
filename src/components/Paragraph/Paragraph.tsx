import { forwardRef } from "react";
import { TextProps, Text } from "../Text";

export const Paragraph = forwardRef<HTMLSpanElement, TextProps>(
  ({ ...rest }, ref) => {
    return <Text ref={ref} display="block" as="p" {...rest} />;
  }
);

Paragraph.displayName = "Paragraph";
