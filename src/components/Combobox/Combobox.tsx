import { Root as Portal } from "@radix-ui/react-portal";
import { forwardRef, InputHTMLAttributes, ReactNode, useRef } from "react";

import { classNames } from "~/utils";

import { Box, List, PropsWithBox, Text } from "..";
import { helperTextRecipe, inputRecipe, InputVariants } from "../BaseInput";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";
import {
  ChangeHandler,
  InputValue,
  Option,
  useComboboxEvents,
} from "./useComboboxEvents";
import { ComboboxWrapper } from "./ComboboxWrapper";

export type ComboboxProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "color"
    | "width"
    | "height"
    | "size"
    | "type"
    | "children"
    | "onChange"
    | "value"
    | "nonce"
    | "type"
  > & {
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value: InputValue;
  }
> &
  InputVariants;

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      size,
      disabled = false,
      className,
      value,
      label,
      id,
      error = false,
      helperText,
      options,
      onChange,
      ...props
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      itemsToSelect,
    } = useComboboxEvents(value, options, onChange);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <Box display="flex" flexDirection="column" ref={containerRef}>
        <ComboboxWrapper
          id={id}
          typed={typed}
          active={active}
          disabled={disabled}
          size={size}
          label={label}
          error={error}
          className={className}
          getLabelProps={getLabelProps}
          getToggleButtonProps={getToggleButtonProps}
        >
          <Box
            id={id}
            as="input"
            type="text"
            className={classNames(inputRecipe({ size, error }))}
            disabled={disabled}
            {...props}
            {...getInputProps({
              id,
              ref,
            })}
          />
        </ComboboxWrapper>

        <Portal asChild container={containerRef.current}>
          <Box
            position="relative"
            display={isOpen && itemsToSelect.length > 0 ? "block" : "none"}
            className={listWrapperRecipe({ size })}
          >
            <List
              as="ul"
              className={listStyle}
              // suppress error because of rendering list in portal
              {...getMenuProps({}, { suppressRefError: true })}
            >
              {isOpen &&
                itemsToSelect?.map((item, index) => (
                  <List.Item
                    key={`${id}-${item}-${index}`}
                    className={listItemStyle}
                    {...getItemProps({
                      item,
                      index,
                    })}
                    active={highlightedIndex === index}
                  >
                    <Text size={size}>{item.label}</Text>
                  </List.Item>
                ))}
            </List>
          </Box>
        </Portal>

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

Combobox.displayName = "Combobox";
