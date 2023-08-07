import { type ReactNode } from "react";
import { Box, BoxProps } from "~/components";
import { roundedActionBoxRecipe } from "./RoundedActionBox.css";

export const RoundedBox = ({
  children,
  disabled = false,
  error = false,
  ...boxProps
}: BoxProps & {
  disabled?: boolean;
  error?: boolean;
}) => {
  return (
    <Box
      {...boxProps}
      display="flex"
      flexDirection="column"
      rowGap={0}
      borderWidth={1}
      borderStyle="solid"
      borderRadius={5}
      className={roundedActionBoxRecipe({ disabled, error })}
    >
      {children}
    </Box>
  );
};

export const RoundedBoxWithFooter = ({
  children,
  footer,
  error = false,
  disabled = false,
  ...boxProps
}: BoxProps & {
  footer: ReactNode;
  error?: boolean;
  disabled?: boolean;
}) => {
  return (
    <RoundedBox {...boxProps} error={error} disabled={disabled}>
      <Box paddingX={6} paddingTop={4} display="flex">
        {children}
      </Box>
      <Box
        paddingX={6}
        paddingY={4}
        display="flex"
        justifyContent="flex-end"
        borderColor="neutralPlain"
        borderTopWidth={1}
        borderTopStyle="solid"
      >
        {footer}
      </Box>
    </RoundedBox>
  );
};

export const RoundedActionBox = ({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
}) => {
  return (
    <RoundedBox disabled={disabled}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        rowGap={6}
        textAlign="center"
        __minHeight={312}
      >
        {children}
      </Box>
    </RoundedBox>
  );
};
