import { Root as Portal } from "@radix-ui/react-portal";
import { InputHTMLAttributes, ReactNode, forwardRef, useRef } from "react";

import { Box, List, PropsWithBox, Text } from "..";
import { HelperText, InputVariants } from "../BaseInput";
import {
  Option,
  SingleChangeHandler,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "../BaseSelect";

import { SelectWrapper } from "./SelectWrapper";
import { useSelect } from "./useSelect";

export type SelectProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLElement>,
    | "color"
    | "width"
    | "height"
    | "size"
    | "type"
    | "children"
    | "onChange"
    | "value"
    | "nonce"
  > & {
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    options: Option[];
    onChange?: SingleChangeHandler;
    value: Option | null;
    locale?: {
      loadingText?: string;
    };
  }
> &
  InputVariants;

const getBoxHeight = (size: SelectProps["size"]) => {
  switch (size) {
    case "small":
      return 4;
    case "medium":
      return 5;
    case "large":
      return 6;
  }
};

export const Select = forwardRef<HTMLElement, SelectProps>(
  (
    {
      size = "medium",
      disabled = false,
      className,
      value,
      label,
      id,
      error = false,
      helperText,
      options,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getItemProps,
      getLabelProps,
      getToggleButtonProps,
      selectedItem,
      getMenuProps,
      highlightedIndex,
      hasItemsToSelect,
    } = useSelect({
      value,
      options,
      onChange,
      onFocus,
      onBlur,
    });

    const containerRef = useRef<HTMLLabelElement>(null);

    return (
      <Box display="flex" flexDirection="column">
        <SelectWrapper
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
          <Box height={getBoxHeight(size)} {...props} ref={ref}>
            <Text size={size} variant="body">
              {selectedItem?.label}
            </Text>
          </Box>
        </SelectWrapper>
        <Box ref={containerRef} />

        <Portal asChild container={containerRef.current}>
          <Box
            position="relative"
            display={isOpen && hasItemsToSelect ? "block" : "none"}
            className={listWrapperRecipe({ size })}
          >
            <List
              as="ul"
              className={listStyle}
              // suppress error because of rendering list in portal
              {...getMenuProps({}, { suppressRefError: true })}
            >
              {isOpen &&
                options?.map((item, index) => (
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
          <HelperText size={size} error={error}>
            {helperText}
          </HelperText>
        )}
      </Box>
    );
  }
);

Select.displayName = "Select";
