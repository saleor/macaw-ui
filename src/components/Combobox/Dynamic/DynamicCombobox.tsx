import { FloatingPortal } from "@floating-ui/react";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { classNames } from "~/utils";

import { useFloating } from "~/hooks/useFloating";
import { useInfinityScroll } from "~/hooks/useInfinityScroll";
import { Box, List, PropsWithBox, Text } from "../..";
import { HelperText, inputRecipe, InputVariants } from "../../BaseInput";
import {
  getListDisplayMode,
  getListTextSize,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  LoadingListItem,
  Option,
  SingleChangeHandler,
} from "../../BaseSelect";

import { ComboboxWrapper, useCombobox } from "../Common";

export type DynamicComboboxProps<T> = PropsWithBox<
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
  > & {
    label?: ReactNode;
    error?: boolean;
    startAdornment?: (inputValue: T | null) => ReactNode;
    endAdornment?: (inputValue: T | null) => ReactNode;
    helperText?: ReactNode;
    options: T[];
    onChange?: SingleChangeHandler<T | null>;
    value: T | null;
    onInputValueChange?: (value: string) => void;
    loading?: boolean;
    locale?: {
      loadingText?: string;
    };
    onScrollEnd?: () => void;
  }
> &
  InputVariants;

const DynamicComboboxInner = <T extends Option>(
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
    locale,
    startAdornment,
    endAdornment,
    onScrollEnd,
    ...props
  }: DynamicComboboxProps<T>,
  ref: ForwardedRef<HTMLInputElement>
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
    rowVirtualizer,
    listRef,
  } = useCombobox({
    selectedItem: value,
    options,
    onChange,
    onInputValueChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  const scrollRef = useInfinityScroll(onScrollEnd);

  return (
    <Box display="flex" flexDirection="column">
      <ComboboxWrapper
        id={id}
        ref={refs.setReference}
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
        <Box display="flex">
          {startAdornment && typed && <Box>{startAdornment(value)}</Box>}

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

          {endAdornment && typed && <Box>{endAdornment(value)}</Box>}
        </Box>
      </ComboboxWrapper>
      <FloatingPortal>
        <Box
          position="relative"
          display={getListDisplayMode({ isOpen, hasItemsToSelect, loading })}
          className={listWrapperRecipe({ size })}
          ref={refs.setFloating}
          style={floatingStyles}
        >
          <List
            as="ul"
            className={listStyle}
            // suppress error because of rendering list in portal
            {...getMenuProps({ ref: listRef }, { suppressRefError: true })}
          >
            {isOpen && (
              <Box
                key="total-size"
                role="presentation"
                width="100%"
                position="relative"
                __height={`${rowVirtualizer.getTotalSize()}px`}
              >
                {rowVirtualizer.getVirtualItems().map((virtualItem) => (
                  <List.Item
                    data-test-id="select-option"
                    data-index={virtualItem.index}
                    key={`${id}-${itemsToSelect[virtualItem.index].value}-${
                      virtualItem.index
                    }`}
                    className={listItemStyle}
                    active={highlightedIndex === virtualItem.index}
                    __transform={`translateY(${virtualItem.start}px)`}
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    {...getItemProps({
                      item: itemsToSelect[virtualItem.index],
                      index: virtualItem.index,
                      ref: rowVirtualizer.measureElement,
                    })}
                  >
                    {itemsToSelect[virtualItem.index]?.startAdornment}
                    <Text size={getListTextSize(size)}>
                      {itemsToSelect[virtualItem.index].label}
                    </Text>
                    {itemsToSelect[virtualItem.index]?.endAdornment}
                  </List.Item>
                ))}
              </Box>
            )}
            {loading && (
              <LoadingListItem size={size}>
                {locale?.loadingText ?? "Loading"}
              </LoadingListItem>
            )}
            <div
              ref={(ref) => {
                scrollRef.current = ref;
              }}
            />
          </List>
        </Box>
      </FloatingPortal>

      {helperText && (
        <HelperText size={size} error={error}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

export const DynamicCombobox = forwardRef(DynamicComboboxInner) as <
  T extends Option,
>(
  props: DynamicComboboxProps<T> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => ReturnType<typeof DynamicComboboxInner>;
