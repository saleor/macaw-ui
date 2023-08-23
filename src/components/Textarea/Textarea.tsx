import { FocusEvent, InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { classNames } from "~/utils";

import { Box, PropsWithBox, Text } from "../..";
import { InputVariants, helperTextRecipe, inputRecipe } from "../BaseInput";

import { TextareaWrapper, useStateEvents } from "./TextareaWrapper";

export type TextareaProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "color" | "width" | "height" | "size" | "type" | "children" | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    maxRows?: number;
    helperText?: ReactNode;
    endAdornment?: ReactNode;
  }
> &
  InputVariants;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      maxRows = 10,
      error = false,
      onChange,
      helperText,
      onBlur,
      onFocus,
      flex,
      flexBasis,
      flexGrow,
      flexShrink,
      width,
      endAdornment,
      ...props
    },
    ref
  ) => {
    const {
      handlers,
      value: inputValue,
      active,
      typed,
    } = useStateEvents(value, onChange);

    return (
      <Box
        display="flex"
        flexDirection="column"
        flex={flex}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        width={width}
      >
        <TextareaWrapper
          id={id}
          typed={typed}
          active={active}
          disabled={disabled}
          size={size}
          label={label}
          error={error}
          className={className}
          endAdornment={endAdornment}
        >
          <Box
            id={id}
            as="textarea"
            rows={maxRows}
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            value={inputValue}
            ref={ref}
            onBlur={(event: FocusEvent<HTMLTextAreaElement, Element>) => {
              handlers.onBlur();
              onBlur?.(event);
            }}
            onFocus={(event: FocusEvent<HTMLTextAreaElement, Element>) => {
              handlers.onFocus();
              onFocus?.(event);
            }}
            onChange={handlers.onChange}
            {...props}
          />
        </TextareaWrapper>
        {helperText && (
          <Box className={helperTextRecipe({ size })}>
            <Text
              variant="caption"
              size={size}
              color={error ? "textCriticalDefault" : "textNeutralSubdued"}
            >
              {helperText}
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

Textarea.displayName = "Textarea";
