import Grow from "@material-ui/core/Grow";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import {
  useCombobox,
  UseComboboxGetItemPropsOptions,
  useMultipleSelection,
} from "downshift";
import React from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
import { IconButton } from "../IconButton";
import { PlusIcon } from "../icons";
import { Pill } from "../Pill";
import useStyles from "./styles";

function mergeRefs<T>(...refs: React.Ref<T>[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else {
        // ref.current is typed as readonly
        (ref as any).current = node;
      }
    }
  };
}

export interface MultipleValueAutocompleteProps
  extends Omit<StandardTextFieldProps, "onChange"> {
  children: (data: {
    getItemProps: (opts: UseComboboxGetItemPropsOptions<Choice>) => any;
    highlightedIndex: number;
    inputValue: string;
    selectedItems: string[];
  }) => React.ReactNode | React.ReactNodeArray;
  className?: string;
  styles?: React.CSSProperties;
  choices: Choice[];
  label?: string;
  popperPlacement?: PopperPlacementType;
  initialValue?: Choice[];
  onChange?: (event: SyntheticChangeEvent<string[]>) => void;
  onInputChange?: (value: string) => void;
}

export const MultipleValueAutocomplete: React.FC<MultipleValueAutocompleteProps> =
  ({
    choices,
    children,
    name,
    InputProps,
    initialValue = [],
    popperPlacement = "bottom-start",
    onChange,
    onInputChange,
    ...rest
  }) => {
    const anchor = React.useRef<HTMLDivElement>();
    const input = React.useRef<HTMLInputElement>();

    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems,
    } = useMultipleSelection({
      initialSelectedItems: initialValue,
      onSelectedItemsChange: ({ selectedItems }) => {
        if (onChange) {
          onChange({
            target: {
              name: name ?? "",
              value: selectedItems!.map((choice) => choice.value),
            },
          });
        }
      },
    });
    const {
      closeMenu,
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps: baseGetItemProps,
      openMenu,
      inputValue,
      setInputValue,
      selectItem,
    } = useCombobox({
      defaultHighlightedIndex: 0,
      items: choices.filter(
        (choice) =>
          !selectedItems.find(
            (selectedChoice) => selectedChoice.value === choice.value
          )
      ),
      onInputValueChange: ({ inputValue }) => {
        if (onInputChange) {
          onInputChange(inputValue ?? "");
        }
      },
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          closeMenu();
          addSelectedItem(selectedItem);
          setInputValue("");
        }
      },
      stateReducer: (_, actionAndChanges) => {
        const { changes, type } = actionAndChanges;
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true,
            };
        }
        return changes;
      },
      selectedItem: null,
      itemToString: () => "",
    });
    const classes = useStyles();
    // Downshift doesn't like portals like popper
    // https://github.com/downshift-js/downshift/issues/287
    const getItemProps = React.useCallback(
      (options: UseComboboxGetItemPropsOptions<Choice>) => {
        const baseProps = baseGetItemProps(options);

        return {
          ...baseProps,
          onClick: () => selectItem(options.item),
        };
      },
      [baseGetItemProps]
    );

    const labelProps = getLabelProps();
    const { ref: comboboxDownshiftRef, ...comboboxProps } = getComboboxProps();
    const { ref: downshiftRef, ...inputProps } = getInputProps({
      ...getDropdownProps({ preventKeyAction: isOpen }),
      onFocus: () => {
        if (!isOpen) {
          input.current?.select();
          openMenu();
        }
      },
    });
    const menuProps = getMenuProps();

    return (
      <>
        <TextField
          {...rest}
          {...comboboxProps}
          name={name}
          InputLabelProps={labelProps}
          ref={mergeRefs(comboboxDownshiftRef, anchor)}
          InputProps={{
            ...InputProps,
            ...inputProps,
            classes: {
              root: classes.inputContainer,
              input: classes.input,
            },
            startAdornment: selectedItems.map((item, index) => (
              <Pill
                key={`selected-item-${index}`}
                {...getSelectedItemProps({ selectedItem: item, index })}
                label={item.label}
                onClick={() => removeSelectedItem(item)}
              />
            )),
            endAdornment: (
              <IconButton
                {...getToggleButtonProps()}
                aria-label="toggle menu"
                className={classes.icon}
                hoverOutline={false}
                type="button"
                variant="secondary"
              >
                <PlusIcon />
              </IconButton>
            ),
          }}
          inputProps={{ ref: mergeRefs(downshiftRef, input) }}
        />
        <div {...menuProps}>
          <Popper
            className={classes.popper}
            open={isOpen}
            anchorEl={anchor.current}
            transition
            placement={popperPlacement}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "left top" : "left bottom",
                }}
              >
                <Paper
                  elevation={8}
                  style={{ width: anchor.current?.clientWidth }}
                >
                  <Menu disablePadding>
                    {children({
                      highlightedIndex,
                      getItemProps,
                      inputValue,
                      selectedItems: selectedItems.map(
                        (choice) => choice.value
                      ),
                    })}
                  </Menu>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </>
    );
  };
