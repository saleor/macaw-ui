import { Root as Portal } from "@radix-ui/react-portal";
import {
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useRef,
} from "react";

import { useIntersectionObserver } from "~/utils";

import { Box, List, PropsWithBox, Text } from "..";
import { InputVariants, helperTextRecipe } from "../BaseInput";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";
import { ChangeHandler, Option, useSelectEvents } from "./useSelectEvents";
import { SelectWrapper } from "./SelectWrapper";

export type SelectProps = PropsWithBox<
  Omit<
    InputHTMLAttributes<HTMLSelectElement>,
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
    onInfiniteScroll?: () => void;
    loading?: boolean;
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
      onInfiniteScroll,
      loading,
      ...props
    },
    ref
  ) => {
    const listRef = useRef<HTMLUListElement>(null);
    const lastListItemRef = useIntersectionObserver({
      callback: onInfiniteScroll,
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
      handlers,
    } = useSelectEvents(value, options, onChange);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <Box display="flex" flexDirection="column" ref={containerRef}>
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
          loading={loading}
        >
          <Box
            height={getBoxHeight(size)}
            onBlur={(event: FocusEvent<HTMLSelectElement, Element>) => {
              handlers.onBlur();
              onBlur?.(event);
            }}
            onFocus={(event: FocusEvent<HTMLSelectElement, Element>) => {
              handlers.onFocus();
              onFocus?.(event);
            }}
            {...props}
            ref={ref}
          >
            <Text size={size} variant="body">
              {selectedItem?.label}
            </Text>
          </Box>
        </SelectWrapper>

        <Portal asChild container={containerRef.current}>
          <Box
            position="relative"
            display={isOpen ? "block" : "none"}
            className={listWrapperRecipe({ size })}
          >
            <List
              as="ul"
              className={listStyle}
              {...getMenuProps(
                {
                  ref: listRef,
                },
                // suppress error because of rendering list in portal
                { suppressRefError: true }
              )}
            >
              {isOpen &&
                options?.map((item, index) => {
                  return (
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
                  );
                })}
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
