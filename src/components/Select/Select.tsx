import { Root as Portal } from "@radix-ui/react-portal";
import { InputHTMLAttributes, ReactNode, forwardRef, useRef } from "react";

import { useIntersectionObserver } from "~/utils";

import { Box, List, PropsWithBox, Text } from "..";
import { InputVariants, helperTextRecipe } from "../BaseInput";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";
import { ChangeHandler, Option, useSelectEvents } from "./useSelectEvents";
import { SelectWrapper } from "./SelectWrapper";

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
    onChange?: ChangeHandler;
    value: string | number;
    onScrollEnd?: () => void;
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
      onScrollEnd,
      ...props
    },
    ref
  ) => {
    const listRef = useRef<HTMLUListElement>(null);
    const lastListItemRef = useIntersectionObserver({
      callback: onScrollEnd,
      options: {
        threshold: 1,
        root: listRef.current,
        rootMargin: "0%",
      },
    });

    const {
      active,
      typed,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useSelectEvents(value, options, onChange, onFocus, onBlur);

    const containerRef = useRef<HTMLDivElement>(null);

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
            display={isOpen ? "block" : "none"}
            className={listWrapperRecipe({ size })}
          >
            <List
              as="ul"
              className={listStyle}
              // suppress error because of rendering list in portal
              {...getMenuProps(
                {
                  ref: listRef,
                },
                { suppressRefError: true }
              )}
            >
              {isOpen &&
                options?.map((item, index) => (
                  <List.Item
                    key={`${id}-${item}-${index}`}
                    className={listItemStyle}
                    {...getItemProps({
                      item,
                      index,
                      ref:
                        options.length === index + 1 ? lastListItemRef : null,
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
          <Box marginTop={3} className={helperTextRecipe({ size })}>
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

Select.displayName = "Select";
