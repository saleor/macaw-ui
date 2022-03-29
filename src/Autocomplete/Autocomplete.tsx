import Grow from "@material-ui/core/Grow";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import { useCombobox, UseComboboxGetItemPropsOptions } from "downshift";
import React from "react";

import { SyntheticChangeEvent } from "../../types/utils";
import { ChevronIcon } from "../icons";
import useStyles from "./styles";

export type AutocompleteChoice = Record<"label" | "value", string>;

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

export interface AutocompleteProps extends StandardTextFieldProps {
  children: (data: {
    getItemProps: (
      opts: UseComboboxGetItemPropsOptions<AutocompleteChoice>
    ) => any;
    highlightedIndex: number;
    inputValue: string;
  }) => React.ReactNode | React.ReactNodeArray;
  className?: string;
  styles?: React.CSSProperties;
  choices: AutocompleteChoice[];
  label?: string;
  popperPlacement?: PopperPlacementType;
  onChange?: (event: SyntheticChangeEvent) => void;
  onInputChange?: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  choices,
  children,
  name,
  InputProps,
  popperPlacement = "bottom-start",
  onChange,
  onInputChange,
  ...rest
}) => {
  const anchor = React.useRef<HTMLDivElement>();
  const input = React.useRef<HTMLInputElement>();
  const {
    closeMenu,
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    inputValue,
    setInputValue,
  } = useCombobox({
    items: choices,
    onInputValueChange: ({ inputValue }) => {
      if (onInputChange) {
        onInputChange(inputValue ?? "");
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      closeMenu();
      if (onChange) {
        onChange({
          target: {
            name: name ?? "",
            value: selectedItem?.value ?? "",
          },
        });
      }
    },
    itemToString: (choice) => choice?.label ?? "",
    onIsOpenChange: ({ selectedItem, inputValue, isOpen }) => {
      if (!isOpen && selectedItem && selectedItem?.label !== inputValue) {
        setInputValue(selectedItem!.label);
      }
    },
  });
  const classes = useStyles();

  const labelProps = getLabelProps();
  const { ref: comboboxDownshiftRef, ...comboboxProps } = getComboboxProps();
  const { ref: downshiftRef, ...inputProps } = getInputProps({
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
          endAdornment: (
            <ChevronIcon
              {...getToggleButtonProps()}
              type="button"
              aria-label="toggle menu"
            />
          ),
        }}
        inputProps={{ ref: mergeRefs(downshiftRef, input) }}
      />
      <div {...menuProps}>
        <Popper
          className={classes.popper}
          open={isOpen}
          anchorEl={input.current}
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
