import Grow from "@material-ui/core/Grow";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { useCombobox } from "downshift";
import React from "react";

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

export interface AutocompleteProps {
  children: ({}) => React.ReactNode | React.ReactNodeArray;
  choices: AutocompleteChoice[];
  label?: string;
  onInputChange: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  choices,
  children,
  label,
  onInputChange,
}) => {
  const anchor = React.useRef();
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
  } = useCombobox({
    items: choices,
    onInputValueChange: ({ inputValue }) => onInputChange(inputValue ?? ""),
    onSelectedItemChange: () => {
      closeMenu();
    },
    itemToString: (choice) => choice?.label ?? "",
  });

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
    <div>
      <label {...labelProps}>{label}</label>
      <div {...comboboxProps} ref={mergeRefs(comboboxDownshiftRef, anchor)}>
        <input {...inputProps} ref={mergeRefs(downshiftRef, input)} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <div {...menuProps}>
        <Popper
          //   className={classes.popover}
          open={isOpen}
          anchorEl={input.current}
          transition
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "left top" : "left bottom",
              }}
            >
              <Paper elevation={8}>
                <Menu disablePadding>
                  {children({
                    highlightedIndex,
                    getItemProps,
                  })}
                </Menu>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
