import { InputHTMLAttributes, ReactNode, useState } from "react";
import { useSelect, useMultipleSelection } from "downshift7";

import { classNames } from "~/utils";
import { Box, PropsWithBox } from "../Box";
import { InputVariants, labelRecipe, spanRecipe } from "../BaseInput";

export type Option = { label: string; value: string };
export type ChangeHandler = (selectedItem: Option | null | undefined) => void;

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
  > & {
    label?: ReactNode;
    error?: boolean;
    type?: "text" | "number";
    helperText?: ReactNode;
    options: Option[];
    onChange?: ChangeHandler;
    value?: string;
  }
> &
  InputVariants;

const getOptionsFilter = (selectedItems: Option[]) => (item: Option) =>
  selectedItems.indexOf(item) < 0;

export const Multiselect = ({
  size,
  error,
  className,
  disabled,
  value,
  options,
  onChange,
}: MultiselectProps) => {
  const [active, setActive] = useState(false);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<Option>();

  const items = options.filter(getOptionsFilter(selectedItems));

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    selectedItem: null,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    items,
    itemToString: (item) => item?.label ?? "",
    stateReducer: (_, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
        default:
          return changes;
      }
    },
    onStateChange: ({ type, selectedItem: newSelectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            addSelectedItem(newSelectedItem);
          }
          break;
        default:
          break;
      }
    },
  });

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box
        as="label"
        className={classNames(className)}
        // alignItems="center"
        justifyContent="space-between"
        disabled={disabled}
        flexWrap="wrap"
        flexDirection="column"
        gap={6}
        {...getLabelProps({ onFocus, onBlur })}
      >
        <Box
          as="span"
          className={classNames(
            spanRecipe({ typed: active, size, disabled, error })
          )}
        >
          Label
        </Box>
        <Box>
          {selectedItems.map((selectedItem, index) => (
            <span
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {selectedItem.label}
              <span onClick={() => removeSelectedItem(selectedItem)}>
                &#10005;
              </span>
            </span>
          ))}
          <span
            {...getToggleButtonProps(
              getDropdownProps({ preventKeyAction: isOpen })
            )}
          >
            {selectedItem ?? "+ Add objects"}
          </span>
        </Box>

        <Box position="relative">
          <ul {...getMenuProps()} style={{ position: "absolute" }}>
            {isOpen &&
              items.map((item, index) => (
                <li
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: "#bde4ff" }
                      : {}
                  }
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};
