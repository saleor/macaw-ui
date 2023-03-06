import { Box } from "../Box";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  input as inputStyles,
  dropdownContent as dropdownContentStyles,
  dropdownItem as dropdownItemStyles,
  autocompleteContainer,
  autocompleteInput,
  autocompleteContent
} from "./Expression.css";
import React, { useEffect, useRef, useState } from "react";
import { classNames } from "~/utils";


export const AutocompleteItem = ({ children }) => {
  return (
    <Box className={dropdownItemStyles}>{children}</Box>
  )
}

export const OperandAutocomplete = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [pos, setPos] = useState("");
  const [width, setWidth] = useState("");
  const inputRef = useRef();

  const calc = (text) => {
    // const font = window.getComputedStyle(document.body, null).getPropertyValue("font-family")

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "400 13px Inter var, sans-serif";
    const metrics = context.measureText(text);
    return metrics.width;
  }

  const handleChange = (evt) => {  
    setValue(evt.target.value)
    setWidth(`${calc(evt.target.value)}px`)
    const newPos = calc(evt.target.value.slice(0, evt.target.selectionStart))

    // console.log(window.getComputedStyle(evt.target, null).getPropertyValue("font-weight"))
    setPos(`${newPos}px`)
  } 

  const handleKeyDown = (evt) => {
    setOpen(true)
  }


  return (
    <Box className={autocompleteContainer}>
      <Box
        as="input"
        type="text"
        className={inputStyles()}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        __width={width}
      />
      {open && (
        <Box className={classNames(dropdownContentStyles, autocompleteContent)} __left={pos}>
          {children}
        </Box>
      )}
    </Box>

  );
};