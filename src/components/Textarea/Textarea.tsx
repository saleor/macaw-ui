import {
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

import { classNames } from "~/utils";

import { Box, PropsWithBox, Text } from "../..";
import { InputVariants, helperTextRecipe, inputRecipe } from "../BaseInput";

import { TextareaWrapper, useStateEvents } from "./TextareaWrapper";
import useAutosizeTextArea from "./useAutosizeTextArea";

export type TextareaProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "color" | "width" | "height" | "size" | "type" | "children" | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    endAdornment?: ReactNode;
    autoHeight?: boolean;
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
      rows = 10,
      autoHeight = true,
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
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, value, autoHeight);
    useImperativeHandle(ref, () => textAreaRef.current!);

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
            className={classNames(inputRecipe({ size, error }))}
            style={{
              resize: "none",
            }}
            disabled={disabled}
            value={inputValue}
            ref={textAreaRef}
            onBlur={(event: FocusEvent<HTMLTextAreaElement, Element>) => {
              handlers.onBlur();
              onBlur?.(event);
            }}
            onFocus={(event: FocusEvent<HTMLTextAreaElement, Element>) => {
              handlers.onFocus();
              onFocus?.(event);
            }}
            onChange={handlers.onChange}
            rows={rows}
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
