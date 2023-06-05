import { Root as Portal } from "@radix-ui/react-portal";
import { forwardRef, InputHTMLAttributes, ReactNode, useRef } from "react";

import { Box, List, PropsWithBox, Text } from "..";
import { helperTextRecipe, InputVariants } from "../BaseInput";
import { listItemStyle, listStyle, listWrapperRecipe } from "../BaseSelect";
import {
  ChangeHandler,
  Option,
  RenderEndAdornmentType,
  useMultiselectEvents,
} from "./useMultiselectEvents";
import { MultiselectWrapper } from "./MultiselectWrapper";

import { multiselectInputRecipe } from "./Multiselect.css";

export type MultiselectProps = PropsWithBox<
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
    value?: string[];
    renderEndAdornment?: RenderEndAdornmentType;
    inputValue?: string;
    onInputValueChange?: (value: string) => void;
    loading?: boolean;
  }
> &
  InputVariants;

export const Multiselect = forwardRef<HTMLInputElement, MultiselectProps>(
  (
    {
      size,
      disabled = false,
      className,
      label,
      id,
      error = false,
      helperText,
      options,
      onChange,
      renderEndAdornment,
      value = [],
      inputValue,
      onInputValueChange,
      onFocus,
      onBlur,
      loading,
      ...props
    },
    ref
  ) => {
    const {
      active,
      typed,
      isOpen,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      itemsToSelect,
      selectedItems,
      getSelectedItemProps,
      removeSelectedItem,
      getToggleButtonProps,
      hasItemsToSelect,
      showInput,
    } = useMultiselectEvents(
      value,
      options,
      onChange,
      disabled,
      inputValue,
      onInputValueChange,
      onFocus,
      onBlur
    );

    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <Box display="flex" flexDirection="column">
        <MultiselectWrapper
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
          renderEndAdornment={renderEndAdornment}
          hasItemsToSelect={hasItemsToSelect}
        >
          {selectedItems.map((item, idx) => (
            <Box
              key={`selected-item-${item}-${idx}`}
              paddingX={1.5}
              paddingY={0.5}
              backgroundColor="surfaceNeutralSubdued"
              borderColor="neutralHighlight"
              borderWidth={1}
              borderStyle="solid"
              borderRadius={3}
              display="flex"
              gap={1}
              alignItems="center"
              {...getSelectedItemProps({
                selectedItem: item,
                index: idx,
              })}
            >
              <Text
                variant="caption"
                size={size === "small" ? "small" : "medium"}
              >
                {item.label}
              </Text>
              {!disabled && (
                <Text
                  cursor="pointer"
                  variant="caption"
                  size="small"
                  marginBottom="px"
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    removeSelectedItem(item);
                  }}
                >
                  &#10005;
                </Text>
              )}
            </Box>
          ))}

          <Box
            id={id}
            as="input"
            className={multiselectInputRecipe({ size, error })}
            placeholder="Add item"
            disabled={disabled}
            width={0}
            __flex={1}
            minWidth={7}
            visibility={showInput ? "visible" : "hidden"}
            {...getInputProps({
              id,
              ref,
              value: inputValue,
            })}
            {...props}
          />
        </MultiselectWrapper>

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
                itemsToSelect?.map((item, index) => (
                  <List.Item
                    key={`to-select-${id}-${item}-${index}`}
                    className={listItemStyle}
                    active={highlightedIndex === index}
                    {...getItemProps({
                      item,
                      index,
                    })}
                  >
                    <Text size={size}>{item.label}</Text>
                  </List.Item>
                ))}
              {loading && (
                <List.Item className={listItemStyle}>
                  <Text size={size}>Loading...</Text>
                </List.Item>
              )}
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

Multiselect.displayName = "Multiselect";
