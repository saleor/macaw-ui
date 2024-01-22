import { Root as Portal } from "@radix-ui/react-portal";
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
  hasNoOptions,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  LoadingListItem,
  NoOptions,
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
    children?: ReactNode;
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
    children,
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
      <Portal asChild ref={refs.setFloating} style={floatingStyles}>
        <Box
          position="relative"
          display={getListDisplayMode({
            isOpen,
            disabled,
            loading,
            hasItemsToSelect,
            showEmptyState: hasNoOptions(children),
          })}
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
                  data-test-id="select-option"
                  key={`${id}-${item.value}-${index}`}
                  className={listItemStyle}
                  {...getItemProps({
                    item,
                    index,
                  })}
                  active={highlightedIndex === index}
                >
                  {item?.startAdornment}
                  <Text size={getListTextSize(size)}>{item.label}</Text>
                  {item?.endAdornment}
                </List.Item>
              ))}

            {isOpen && !loading && !hasItemsToSelect && children}

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
      </Portal>

      {helperText && (
        <HelperText size={size} error={error}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

const DynamicComboboxRoot = forwardRef(DynamicComboboxInner) as <
  T extends Option,
>(
  props: DynamicComboboxProps<T> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => ReturnType<typeof DynamicComboboxInner>;

export const DynamicCombobox = Object.assign(DynamicComboboxRoot, {
  NoOptions,
});
