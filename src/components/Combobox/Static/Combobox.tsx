import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { FloatingPortal } from "@floating-ui/react";
import { Box, List, PropsWithBox, Text } from "~/components";
import { HelperText, InputVariants, inputRecipe } from "~/components/BaseInput";
import {
  NoOptions,
  Option,
  SingleChangeHandler,
  getListDisplayMode,
  getListTextSize,
  hasNoOptions,
  listItemStyle,
  listStyle,
  listWrapperRecipe,
} from "~/components/BaseSelect";
import { classNames, isString } from "~/utils";

import { useFloating } from "~/hooks/useFloating";
import { ComboboxWrapper } from "../Common";
import { useCombobox } from "../Common/useCombobox";

export type ComboboxProps<T, V> = PropsWithBox<
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
    startAdornment?: (inputValue: V | null) => ReactNode;
    endAdornment?: (inputValue: V | null) => ReactNode;
    helperText?: ReactNode;
    children?: ReactNode;
    options: T[];
    onChange?: SingleChangeHandler<V | null>;
    value: V | null;
  }
> &
  InputVariants;

const ComboboxInner = <T extends Option, V extends Option | string>(
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
    onFocus,
    onBlur,
    startAdornment,
    endAdornment,
    children,
    ...props
  }: ComboboxProps<T, V>,
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
    selectedItem: isString(value)
      ? options.find((option) => option.value === value)
      : value,
    options,
    onChange,
    onFocus,
    onBlur,
  });

  const { refs, floatingStyles } = useFloating();

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
            alignItems="center"
            textOverflow="ellipsis"
            title={isString(value) ? value : value?.label}
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
          display={getListDisplayMode({
            hasItemsToSelect,
            isOpen,
            showEmptyState: hasNoOptions(children),
          })}
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

const ComboboxRoot = forwardRef(ComboboxInner) as <
  T extends Option,
  V extends Option | string,
>(
  props: ComboboxProps<T, V> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof ComboboxInner>;

export const Combobox = Object.assign(ComboboxRoot, {
  NoOptions,
});
