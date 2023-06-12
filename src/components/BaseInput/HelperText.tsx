import { ReactNode } from "react";
import { Box, Text } from "..";
import { helperTextRecipe } from "./BaseInput.css";

type HelperTextProps = {
  size?: "small" | "medium" | "large";
  error?: boolean;
  children: ReactNode;
};

export const HelperText = ({ size, error, children }: HelperTextProps) => {
  return (
    <Box marginTop={3} className={helperTextRecipe({ size })}>
      <Text
        variant="caption"
        size={size}
        color={error ? "textCriticalDefault" : "textNeutralSubdued"}
      >
        {children}
      </Text>
    </Box>
  );
};
