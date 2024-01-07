import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants } from "~/components/BaseInput";
import {
  getListDisplayMode,
  getListTextSize,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  LoadingListItem,
  MultiChangeHandler,
  noItemsStyle,
  Option,
} from "~/components/BaseSelect";

import { useFloating } from "~/hooks/useFloating";
import { useInfinityScroll } from "~/hooks/useInfinityScroll";
import {
  multiselectInputRecipe,
  MultiselectWrapper,
  RenderEndAdornmentType,
  useMultiselect,
} from "../Common";

export type DynamicMultiselectProps<T> = PropsWithBox<
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
    helperText?: ReactNode;
    options: T[];
    onChange?: MultiChangeHandler<T>;
    value: T[];
    renderEndAdornment?: RenderEndAdornmentType;
    onInputValueChange?: (value: string) => void;
    loading?: boolean;
    locale?: {
      loadingText?: string;
      placeholderText?: string;
      noItems?: string;
    };
    onScrollEnd?: () => void;
  }
> &
  InputVariants;

const DynamicMultiselectInner = <T extends Option>(
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
    onInputValueChange,
    loading,
    onFocus,
    onBlur,
    locale,
    onScrollEnd,
    ...props
  }: DynamicMultiselectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
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
    inputValue,
    removeSelectedItem,
    getToggleButtonProps,
    hasItemsToSelect,
    showInput,
  } = useMultiselect<T, T>({
    selectedValues: value,
    showEmptyState: !!locale?.noItems,
    onInputValueChange,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

  const scrollRef = useInfinityScroll(onScrollEnd);

  return (
    <Box display="flex" flexDirection="column">
      <MultiselectWrapper
        ref={refs.setReference}
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
            key={`selected-option-${item.value}-${idx}`}
            data-test-id={`selected-option-${item.value}-${idx}`}
            paddingX={1.5}
            paddingY="px"
            backgroundColor="default1"
            borderColor="default1"
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
            <Text variant="caption" size="small">
              {item.label}
            </Text>
            {!disabled && (
              <Text
                cursor="pointer"
                variant="caption"
                size="small"
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
          placeholder={locale?.placeholderText || "Add item"}
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

      <Portal asChild ref={refs.setFloating} style={floatingStyles}>
        <Box
          position="relative"
          display={getListDisplayMode({
            isOpen,
            loading,
            hasItemsToSelect,
            showEmptyState: !!locale?.noItems,
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
                  key={`to-select-${id}-${item.value}-${index}`}
                  className={listItemStyle}
                  active={highlightedIndex === index}
                  {...getItemProps({
                    item,
                    index,
                  })}
                >
                  <Text size={getListTextSize(size)}>{item.label}</Text>
                </List.Item>
              ))}

            {isOpen && !loading && !hasItemsToSelect && (
              <Box className={noItemsStyle}>
                <Text size="small">{locale?.noItems}</Text>
              </Box>
            )}

            {loading && (
              <LoadingListItem size={size}>
                {locale?.loadingText || "Loading"}
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

export const DynamicMultiselect = forwardRef(DynamicMultiselectInner) as <
  T extends Option,
>(
  props: DynamicMultiselectProps<T> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => ReturnType<typeof DynamicMultiselectInner>;
