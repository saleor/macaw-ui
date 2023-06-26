import { Root as Portal } from "@radix-ui/react-portal";
import { forwardRef, InputHTMLAttributes, ReactNode, useRef } from "react";

import { classNames } from "~/utils";

import { Box, List, PropsWithBox, Text } from "..";
import { HelperText, inputRecipe, InputVariants } from "../BaseInput";
import {
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  LoadingListItem,
  Option,
  getListDisplayMode,
} from "../BaseSelect";

import { ChangeHandler, useCombobox } from "./useCombobox";
import { ComboboxWrapper } from "./ComboboxWrapper";

export type DynamicComboboxProps = PropsWithBox<
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
    value: Option | null;
    onInputValueChange?: (value: string) => void;
    loading?: boolean;
    locale?: {
      loadingText?: string;
    };
  }
> &
  InputVariants;

export const DynamicCombobox = forwardRef<
  HTMLInputElement,
  DynamicComboboxProps
>(
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
      onInputValueChange,
      onFocus,
      onBlur,
      loading,
      locale = {
        loadingText: "Loading",
      },
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
      hasItemsToSelect,
    } = useCombobox({
      selectedItem: value,
      options,
      onChange,
      onInputValueChange,
      onFocus,
      onBlur,
    });

    const containerRef = useRef<HTMLLabelElement>(null);

    return (
      <Box display="flex" flexDirection="column">
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

DynamicCombobox.displayName = "DynamicCombobox";
