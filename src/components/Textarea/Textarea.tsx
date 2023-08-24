import {
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import { classNames } from "~/utils";

import { Box, PropsWithBox, Text } from "../..";
import { InputVariants, helperTextRecipe, inputRecipe } from "../BaseInput";

import { TextareaWrapper, useStateEvents } from "./TextareaWrapper";
import { textareaClassname, textareaWrapperClassName } from "./Textarea.css";

export type TextareaProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "color" | "width" | "height" | "size" | "type" | "children" | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
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
    useImperativeHandle(ref, () => textAreaRef.current!);

    const wrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!wrap.current) return;
      wrap.current.dataset.replicatedValue = (value || "").toString();
    }, [value]);

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
          <Box className={textareaWrapperClassName} ref={wrap}>
            <Box
              id={id}
              as="textarea"
              className={classNames(
                inputRecipe({ size, error }),
                textareaClassname
              )}
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
          </Box>
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
