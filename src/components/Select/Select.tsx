import { Root as Portal } from "@radix-ui/react-portal";
import { InputHTMLAttributes, ReactNode, forwardRef, useRef } from "react";

import { useIntersectionObserver } from "~/utils";

import { Box, List, PropsWithBox, Text } from "..";
import { HelperText, InputVariants } from "../BaseInput";
import {
  LoadingListItem,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  Option,
  getListDisplayMode,
} from "../BaseSelect";

import { ChangeHandler, useSelect } from "./useSelect";
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
    value: Option | null;
    onScrollEnd?: () => void;
    loading?: boolean;
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
      onScrollEnd,
      loading,
      locale = {
        loadingText: "Loading",
      },
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
            display={getListDisplayMode({ isOpen, hasItemsToSelect, loading })}
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
              {loading && (
                <LoadingListItem size={size}>
                  {locale.loadingText}
                </LoadingListItem>
              )}
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
