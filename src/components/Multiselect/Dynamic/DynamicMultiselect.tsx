import { Root as Portal } from "@radix-ui/react-portal";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
} from "react";

import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants } from "~/components/BaseInput";
import {
  getListDisplayMode,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
  LoadingListItem,
  MultiChangeHandler,
  Option,
} from "~/components/BaseSelect";

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
      inputText?: string;
    };
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
    locale = {
      loadingText: "Loading",
      inputText: "Add item",
    },
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
    onInputValueChange,
    options,
    onChange,
    onFocus,
    onBlur,
  });

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
            key={`selected-item-${item.value}-${idx}`}
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
          placeholder={locale.inputText}
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
                  key={`to-select-${id}-${item.value}-${index}`}
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
};

export const DynamicMultiselect = forwardRef(DynamicMultiselectInner) as <
  T extends Option,
>(
  props: DynamicMultiselectProps<T> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  }
) => ReturnType<typeof DynamicMultiselectInner>;
